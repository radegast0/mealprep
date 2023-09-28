import React from 'react'

const MealColumns = () => {
  return (
    <div className='flex flex-col gap-4 bg-gray-100 rounded-3xl px-4 py-12'>
      <div>
        <h1 className='text-center text-blue-800 font-medium text-xl'>Monday</h1>
      </div>
      <div className='border rounded-xl p-2 hover:scale-105 lg:hover:scale-110 text-blue-700 duration-200'>
        <h1 className='text-sm' >Meal 1</h1>
      </div>
      <div className='border rounded-xl p-2 hover:scale-105 lg:hover:scale-110 text-blue-600 duration-200'>
        <h1 className='text-sm' >Meal 2</h1>
      </div>
      <div className='border rounded-xl p-2 hover:scale-105 lg:hover:scale-110 text-blue-500 duration-200'>
        <h1 className='text-sm' >Meal 3</h1>
      </div>
      <div className='border rounded-xl p-2 hover:scale-105 lg:hover:scale-110 text-blue-400 duration-200'>
        <h1 className='text-sm' >Meal 4</h1>
      </div>
      
    </div>
  )
}

export default MealColumns