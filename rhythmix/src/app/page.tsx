import { auth } from "@/app/auth"
import UserNotFound from "./components/notFound/user-not-found";
import { SignOut } from "./components/auth/signout-button";
import Homepage from "./components/Homepage";

export default async function Home() {
  const session = await auth();
  console.log(session)
  if (!session?.user) return (
    <UserNotFound/>
  )

  return (
    <> 
      <div>
        <SignOut/>
        <Homepage session ={session}/>
        <div className="sticky z-20 bottom-0 h-24 w-full bg-red-300">Player</div>
      </div>
    </>
  );
}
