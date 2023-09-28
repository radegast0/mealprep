import React from 'react'
import Cards from './Cards'
import MealColumns from './MealColumns'


const PlanMeal = () => {
  return (
    <div 
      className="bg-cover bg-fixed relative h-screen"
      style={{
      backgroundPosition: 'bottom',
      backgroundImage: `url("https://images.unsplash.com/photo-1591189863345-9db058f9f8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80")`,
      }}>
      <div className='relative w-10/12 mx-auto'>
          <h1 className='text-center py-20 text-5xl text-[var(--primary-light)]'>Start Planning Your Meals</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-7 gap-2'>
              <MealColumns></MealColumns>
              <MealColumns></MealColumns>
              <MealColumns></MealColumns>
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