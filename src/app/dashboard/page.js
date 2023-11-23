import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="main-menu grid grid-cols-6 gap-5">
        <Link href={`/dashboard/create-event`} className="text-center border border-gray-500 rounded-lg">Create Event</Link>
        <Link href={`/dashboard/my-events`} className="text-center border border-gray-500 rounded-lg">Existing Events</Link>
      </div>
    </>
  )
}
