"use client"
import React, { useState } from 'react'
import Sidebar from './navbar/sidebar'
import { Session } from 'next-auth'

const Homepage = ({session}: {session: Session}) => {
    const [view, setView] = useState("search")
    const [globalPlaylistID, setGlobalPlaylistID]=useState('')
    const [globalArtistID, setGlobalArtistID]= useState('')
    return (
    <div className="flex w-full h-screen overflow-hidden bg-black text-white">
        <Sidebar 
            accessToken={(session as any).sessionToken}
            view={view}
            setView={setView}
            globalPlaylistID={globalPlaylistID}
            setGlobalPlaylistID={setGlobalPlaylistID}
            globalArtistID={globalArtistID}
            setGlobalArtistID={setGlobalArtistID}
        />
        <div>main</div>
    </div>
  )
}

export default Homepage
