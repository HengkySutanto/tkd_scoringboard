import Button from '@/components/general/Button'
import Link from 'next/link'
import React from 'react'

export default function CreateEvent() {
  return (
    <div>
      <h1>Create Event</h1>
      <div className="py-5 flex flex-col items-start gap-3">
        <input type="text" placeholder='Event name' />
        <input type="text" placeholder='Vanue' />
        <input type="date" placeholder='Date' />
        <input type="text" placeholder='Join code prefix' />
        <Link href={`/dashboard`}>
            <Button text="Submit" />
        </Link>
      </div>
    </div>
  )
}
