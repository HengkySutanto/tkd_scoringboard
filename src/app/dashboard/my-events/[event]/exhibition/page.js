import Link from "next/link"

export default function Exhibition({params}) {
  const { event } = params
  console.log("34tfgv", event)
  return (
    <div>
      <h1>Exhibition</h1>
      <div className="main-menu grid grid-cols-6 gap-5">
        <Link href={`/dashboard/my-events/${event}/exhibition/charts`} className="text-center border border-gray-500 rounded-lg">Show Charts</Link>
        <Link href={`/dashboard/my-events/${event}/exhibition/add-new`} className="text-center border border-gray-500 rounded-lg">Add New Data</Link>
        <div className="text-center border border-gray-500 rounded-lg">
          <label htmlFor="upload-data">Upload Data</label>
          <input type="file" name="upload-data" id="upload-data" accept=".xls, .xlsx, .xlsm" hidden />
        </div>
        <div className="text-center border border-gray-500 rounded-lg">Generate Charts</div>
      </div>
    </div>
  )
}
