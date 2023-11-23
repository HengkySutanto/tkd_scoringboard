import Button from '@/components/general/Button'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <>
			<Link href={`/dashboard`}>
				<Button text="Login" />
			</Link>
      <div className='py-3'></div>
			<Link href={`/register`}>
				<Button text="Register" />
			</Link>
    </>
  )
}
