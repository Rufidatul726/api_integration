"use client"
import { Playlist } from '@/app/types/playlist'
import React, { useEffect, useState } from 'react'

const GetPlaylist = ({accessToken}: {accessToken : string}) => {
    const [playlist, setPlaylist]= useState<Playlist[]>([]);
    
    useEffect(() => {
      async function fetchPlaylists() {
        if (accessToken) {
          try {
            const response = await fetch("https://api.spotify.com/v1/me/playlists", {
              headers: {
                Authorization: `Bearer ${accessToken}` // Fix the typo here
              }
            });
    
            const data = await response.json();
            setPlaylist(data.items);
          } catch (error) {
            console.error("Error fetching playlists:", error);
          }
        }
      }
    
      fetchPlaylists();
    }, [accessToken]); 
    
  return (
    <div className='flex flex-col items-center w-full'>
      <div>Access Token: {accessToken}</div>
      <div className="div">
        {playlist.map((playlist) => <div key={playlist?.id}>
          {playlist.name}
        </div> )}
      </div>
    </div>
  )
}

export default GetPlaylist
