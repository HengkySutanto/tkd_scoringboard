import React from 'react'

export default function Courts() {
  const courts = [
    {
      id: '001',
      court_number: '1',
      match_number: 10,
      round: 1,
      current_score: {red: 5, blue: 20},
    },
    {
      id: '002',
      court_number: '2',
      match_number: 8,
      round: 2,
      current_score: {red: 3, blue: 0},
    },
    {
      id: '003',
      court_number: '3',
      match_number: 100,
      round: 1,
      current_score: {red: 30, blue: 15},
    },
    {
      id: '004',
      court_number: '3',
      match_number: 100,
      round: 1,
      current_score: {red: 30, blue: 15},
    },
    {
      id: '005',
      court_number: '3',
      match_number: 100,
      round: 1,
      current_score: {red: 30, blue: 15},
    },
  ]
  return (
    <div>
      <h1>Courts</h1>
      <div className={`grid ${courts.length >= 3 ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-cols-2'} gap-5`}>
        {courts?.map((court) => (
          <div key={court.id} className={`bg-gray-900 w-full aspect-video rounded-xl p-3 flex justify-center items-center text-white relative`}>
            <div className="absolute left-2 top-2 text-sm lg:text-xl font-semibold">Match {court.match_number}</div>
            <div className="absolute left-[50%] top-2 text-center font-bold transform -translate-x-[50%]">
              <u>Round</u>
              <div className="text-3xl lg:text-5xl">
                {court.round}
              </div>
            </div>
            <div className={`absolute left-[50%] top-[50%] text-[7rem] sm:text-[5.5rem] ${courts.length >= 3 ? 'lg:text-[8rem]' : 'lg:text-[8rem] xl:text-[12rem]'} font-bold transform -translate-x-[50%] -translate-y-[40%] flex justify-center items-center gap-5`}>
              <div className='w-2/5 flex-shrink-0 text-center text-blue-500'>
                {court.current_score.red} 
              </div>
              :
              <div className='w-2/5 flex-shrink-0 text-center text-red-600'>
                {court.current_score.blue} 
              </div>
            </div>
            <div className="absolute left-[50%] bottom-2 md:text-xl xl:text-2xl text-center transform -translate-x-[50%]">
              Court <span className='font-bold'>{court.court_number}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
