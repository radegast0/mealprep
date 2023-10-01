import React from 'react'
import MealColumns from './MealColumns'


const PlanMeal = () => {
  return (
    <div 
      className="bg-cover bg-fixed relative h-screen"
      style={{
      backgroundPosition: 'top',
      backgroundImage: `url("https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
      }}>
      <div className='relative w-10/12 mx-auto'>
          <h1 className='text-center py-20 text-5xl text-extrabold text-[var(--primary-light)]'>Start Planning Your Meals</h1>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
              <MealColumns></MealColumns>
              <MealColumns></MealColumns>
              <MealColumns></MealColumns>
              <MealColumns></MealColumns>
          </div>
      </div>
    </div>
  )
}

export default PlanMeal