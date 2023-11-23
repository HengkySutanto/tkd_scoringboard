import React from 'react'

export default function Team({ params }) {
  const { team } = params
  const teamDetails = [
    {
      id: '001',
      name: 'Athlete 1',
      team: 'Team 1',
      category: 'Senior',
      class: 'U-58',
      height: 170,
      weight: 58,
    },
  ]
  return (
    <div>
      <h1>{decodeURIComponent(team)}</h1>
      <div className="main-menu grid grid-cols-6 gap-5">
        <div className="text-center border border-gray-500 rounded-lg">
          <label htmlFor="upload-data">Upload Data</label>
          <input type="file" name="upload-data" id="upload-data" accept=".xls, .xlsx, .xlsm" hidden />
        </div>
      </div>
      <hr />

    </div>
  )
}
