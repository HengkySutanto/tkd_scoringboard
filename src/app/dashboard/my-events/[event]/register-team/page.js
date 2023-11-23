import Button from "@/components/general/Button"
import Link from "next/link"

export default function RegisterTeam({ params }) {
    const { event } = params
  return (
    <div>
      <h1>Register Team</h1>
      <div className="py-5 flex flex-col items-start gap-3">
        <input type="text" placeholder='Team Name' />
        <input type="text" placeholder='PIC' />
        <input type="text" placeholder='Contact number' />
        
        <Link href={`/dashboard/my-events/${event}`}>
            <Button text="Submit" />
        </Link>
      </div>
    </div>
  )
}
