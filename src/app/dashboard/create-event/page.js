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
        <div className="flex items-center gap-2">
          <div className="start-date text-sm">Start Date</div>
          <input type="date" placeholder='Start Date' />
        </div>
        <div className="flex items-center gap-2">
          <div className="start-date text-sm">End Date</div>
          <input type="date" placeholder='End Date' className='' />
        </div>
        <input type="text" placeholder='Organizer' />
        <input type="text" placeholder='PIC' />
        <input type="text" placeholder='Contact' />
        <div className="join-code">
          Join Code: {`xxxxxxx`} <br />
          Join Password: {`xxxxxxxx`}
        </div>
        <Link href={`/dashboard`}>
            <Button text="Submit" />
        </Link>
      </div>
    </div>
  )
}
