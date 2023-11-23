import Link from "next/link"

export default function MyEventDashboard({ params }) {
  const { event } = params
  return (
    <div>
      <h1>{decodeURIComponent(event)}</h1>
      <div className="main-menu grid grid-cols-6 gap-5">
        <Link href={`/dashboard/my-events/${event}/register-team`} className="text-center border border-gray-500 rounded-lg">Register Team</Link>
        <Link href={`/dashboard/my-events/${event}/teams`} className="text-center border border-gray-500 rounded-lg">Teams</Link>
        <Link href={`/dashboard/my-events/${event}/exhibition`} className="text-center border border-gray-500 rounded-lg">Exhibition Charts</Link>
        <Link href={`/dashboard/my-events/${event}/pro`} className="text-center border border-gray-500 rounded-lg">Pro Charts</Link>
        <Link href={`/dashboard/my-events/${event}/courts`} className="text-center border border-gray-500 rounded-lg">Courts</Link>
      </div>
    </div>
  )
}
