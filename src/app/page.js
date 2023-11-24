import Link from "next/link"

export default function Home() {
  const events = [
    {
      id: '12',
      name: 'Event 1',
      date: {start: '31-11-2023', end: '02-12-2023'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',

    },
    {
      id: '123',
      name: 'Event 2',
      date: {start: '31-11-2023', end: '02-12-2023'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124',
      name: 'Event 3',
      date: {start: '31-11-2023', end: '02-12-2023'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '1241',
      name: 'Event 4',
      date: {start: '31-11-2023', end: '02-12-2023'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124d',
      name: 'Event 5',
      date: {start: '31-11-2023', end: '02-12-2023'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124v',
      name: 'Event 6',
      date: {start: '31-11-2023', end: '02-12-2023'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
    {
      id: '124y',
      name: 'Event 7',
      date: {start: '31-11-2023', end: '02-12-2023'},
      vanue: 'GOR Tanjung ',
      image: '',
      link: '',
    },
  ]
  return (
    <div>
      <h1>Home Page</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-5">
        {events.map((event) =>
          <Link key={event.id} href={`/events/${encodeURIComponent(event.name)}`} className="">{event.name}</Link>
        )}
      </div>
    </div>
  )
}
