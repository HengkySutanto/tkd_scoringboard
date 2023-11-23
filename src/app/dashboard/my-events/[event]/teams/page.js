import Link from 'next/link'
import React from 'react'

export default function Teams({ params }) {
  const { event } = params
  const teams = [
    {
      id: '12',
      name: 'Team A',
      pic: 'manager A',
      contact: '081808133555'
    },
    {
      id: '123',
      name: 'Team B',
      pic: 'manager B',
      contact: '081808133555'
    },
    {
      id: '124',
      name: 'Team C',
      pic: 'manager C',
      contact: '081808133555'
    },
    {
      id: '125',
      name: 'Team D',
      pic: 'manager D',
      contact: '081808133555'
    },
  ]
  return (
    <div>
      <h1>Teams</h1>
      <div className="flex flex-col items-start gap-3 mt-5">
        {teams.map((team) =>
          <Link href={`/dashboard/my-events/${event}/teams/${team.name}`}>{team.name}</Link>
        )}
      </div>
    </div>
  )
}
