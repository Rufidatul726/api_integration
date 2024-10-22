import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-modify-playback-state"
].join(",")

const params = {
  scope: scopes
}

const query = new URLSearchParams(params).toString()

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + query

async function refreshAccessToken(token: any) {
  const params = new URLSearchParams()
  params.append("grant_type", "refresh_token")
  if(typeof token.refreshToken === 'string'){
    params.append("refresh_token", token.refreshToken)
  }

  const headerBuffer = Buffer.from(process.env.AUTH_SPOTIFY_ID + ':' + process.env.AUTH_SPOTIFY_SECRET)
  
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (headerBuffer.toString('base64'))
    },
    body: params
  })

  const data = await res.json() as any

  const accessToken = data.access_token
  const refreshToken = data.refresh_token ?? token.refreshToken
  const accessTokenExpires = Date.now() + data.expires_in * 1000

  return ({
    accessToken,
    refreshToken,
    accessTokenExpires
  })
}
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.JWT_SECRET ?? '',
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID ?? '',
      clientSecret: process.env.AUTH_SPOTIFY_SECRET ?? '',
      authorization: LOGIN_URL
    })
  ],
  callbacks: {
    jwt({ token, account, profile }) {
      if (account) { 
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpires = (account.expires_at as number) * 1000
        token.id = profile?.id;  
        token.name = profile?.display_name as string
        token.email = profile?.email;
        return token
      }

      if(Date.now() < (token.accessTokenExpires as number) ){
        return token
      }

      return refreshAccessToken(token)
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.name = token.name;
      session.user.email = token.email as string
      session.sessionToken = token.accessToken as string
      return session
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
})