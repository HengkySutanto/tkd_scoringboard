"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import moment from 'moment'

export default function Home() {
  const [onGoingEvent, setOngoingEvent] = useState([])
  const [comingSoonEvent, setComingSoonEvent] = useState([])
  const events = [
    {
      id: '12',
      name: 'Event 1',
      date: {start: '2023-11-20', end: '2023-11-22'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',

    },
    {
      id: '123',
      name: 'Event 2',
      date: {start: '2023-11-27', end: '2023-11-30'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124',
      name: 'Event 3',
      date: {start: '2023-11-27', end: '2023-11-30'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '1241',
      name: 'Event 4',
      date: {start: '2023-11-27', end: '2023-11-30'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124d',
      name: 'Event 5',
      date: {start: '2023-11-27', end: '2023-11-30'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124v',
      name: 'Event 6',
      date: {start: '2023-11-27', end: '2023-11-30'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124y',
      name: 'Event 7',
      date: {start: '2023-11-30', end: '2023-12-1'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
  ]
  useEffect(() => {
    if (events) {
      const tempEvents = events.filter(i => moment(i.date.start).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD'))
      const on_going = []
      const comingSoon = []
  
      tempEvents.forEach((event) => {
        const startDate = moment(event.date.start).format('YYYY-MM-DD')
        const endDate = moment(event.date.end).format('YYYY-MM-DD')
        const today = moment().format('YYYY-MM-DD')
        if (startDate <= today && today <= endDate) {
          on_going.push(event)
        }
        if (startDate > today) {
          comingSoon.push(event)
        }
      })
      
      setOngoingEvent(on_going)
      setComingSoonEvent(comingSoon)
     }
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold">Home Page</h1>
      {!onGoingEvent.length ? null : (
        <>
          <h3 className="mt-12">On Going Events:</h3>
          <hr />
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-5">
            {onGoingEvent?.map((event) =>
              <Link key={event.id} href={`/events/${encodeURIComponent(event.name)}`} className="">{event.name}</Link>
              )}
          </div>
        </>
      )}
      
      {!comingSoonEvent.length ? null : (
        <>
          <h3 className="mt-12">Coming Events:</h3>
          <hr />
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-5">
            {comingSoonEvent?.map((event) =>
              <Link key={event.id} href={`/events/${encodeURIComponent(event.name)}`} className="">{event.name}</Link>
              )}
          </div>
        </>
      )}
    </div>
  )
}
