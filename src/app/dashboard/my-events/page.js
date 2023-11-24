import Link from 'next/link'

export default function MyEvents() {
  const events = [
    {
      id: '12',
      name: 'Event 1',
    },
    {
      id: '123',
      name: 'Event 2',
    },
    {
      id: '124',
      name: 'Event 3',
    },
  ]
  return (
    <div>
      <h1>Existing Events</h1>
      <div className="flex flex-col items-start">
        {events.map((event) =>
          <Link key={event.id} href={`/dashboard/my-events/${encodeURIComponent(event.name)}`}>{event.name}</Link>
        )}
      </div>
    </div>
  )
}
