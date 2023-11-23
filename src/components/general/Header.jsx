import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='absolute top-0 w-full h-10 text-white bg-black'>
      <div className="container mx-auto h-full flex justify-between items-center">
        <Link href={`/`} className="logo">Logo</Link>
        <div className="nav space-x-3">
            <Link href={`/`} className="home">Home</Link>
            <Link href={`/login`} className="login">Login</Link>
            <Link href={`/dashboard`} className="dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
