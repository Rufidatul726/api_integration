"use client"

import React from 'react'

const Welcome = ({ username }: { username: string }) => {
  return (
    <div>
      welcome {username}
    </div>
  )
}

export default Welcome
