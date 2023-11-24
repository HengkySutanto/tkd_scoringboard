import React from 'react'

export default function Event({ params }) {
  const { event_slug } = params
  const eventDetails = {
    id: '001',
    title: 'Event title',
    description: 'Merupakan tournament grade A yang didukung oleh Kemenpora',
    date: {start: '01-01-2000', end: '01-01-2000'},
    vanue: 'GOR Tanjung Duren',
    organizer: 'Abc',
    contact: '0818089364848',
    pic: 'Person PIC',
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">{eventDetails.title}</h1>
      <div className="text-lg font-semibold">{eventDetails.description}</div>
      <div className="py-5 space-y-3">
        <div className="md:w-1/2">
            <div className="flex items-center gap-2">
              <div className="w-28 md:w-36 flex-shrink-0">Tanggal Event</div>
              <div className="w-full">: {eventDetails.date.start} - {eventDetails.date.end}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-28 md:w-36 flex-shrink-0">Vanue</div>
              <div className="w-full">: {eventDetails.vanue}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-28 md:w-36 flex-shrink-0">Penyelenggara</div>
              <div className="w-full">: {eventDetails.organizer}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-28 md:w-36 flex-shrink-0">PIC</div>
              <div className="w-full">: {eventDetails.pic}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-28 md:w-36 flex-shrink-0">Contact</div>
              <div className="w-full">: {eventDetails.contact}</div>
            </div>
        </div>
      </div>
    </div>
  )
}
