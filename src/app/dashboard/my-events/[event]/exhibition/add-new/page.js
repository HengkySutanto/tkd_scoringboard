import Button from "@/components/general/Button";
import Link from "next/link";

export default function AddNewExhibitionData() {
  return (
    <div>
      <h1>Add New Exhibition Data</h1>
      <div className="py-5 flex flex-col items-start gap-3">
        <input type="text" placeholder='Team Name' />
        <input type="text" placeholder='Atlet Name' />
        <input type="text" placeholder='Category' />
        <input type="text" placeholder='Class' />
        <input type="date" placeholder='Date of birth' />
        <input type="text" placeholder='Weight' />
        <input type="text" placeholder='Height' />
        <input type="text" placeholder='Belt' />
        <Link href={`/dashboard`}>
            <Button text="Submit" />
        </Link>
      </div>
    </div>
  )
}
