"use client"

import Link from 'next/link'
import React from 'react'

const UserNotFound = () => {
  return (
    <div>
      Not Signed In. To sign in, click <span>
        <Link href="/login">Here</Link>
      </span>
    </div>
  )
}

export default UserNotFound
