import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='absolute top-0 w-full h-10 text-white bg-black'>
      <div className="container mx-auto h-full flex justify-between items-center">
        <div className="logo">Logo</div>
        <div className="nav space-x-3">
            <Link href={`/`} className="home">Home</Link>
            <Link href={`/about`} className="about">About</Link>
        </div>
      </div>
    </div>
  )
}
