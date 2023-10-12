import React from 'react'
import { Link } from 'react-router-dom'
import PlanMeal from './PlanMeal'

const Footer = () => {
  return (
    <footer className=''>
      <div className=''>
          <div className='w-full h-full flex-col'>
              <div className='w-full py-12 bg-[var(--primary-light)]'>
                  <div className='w-10/12 mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-32'>
                      <h1 className=' text-white lg:text-lg text-sm' >Want to get<Link to="planmeal" className='font-bold text-xl'> more information?</Link> Let us assist you.</h1>
                      <input className='px-12 py-3 bg-[var(--primary-dark)] text-white ' type="email" defaultValue={"Email"} name="" id="" />
                      <button className='px-16 py-3 bg-[var(--primary-dark)] text-white '>Send me information</button>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer