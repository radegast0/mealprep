import React from 'react'
import { Link } from 'react-router-dom'
import PlanMeal from './PlanMeal'

const Footer = () => {
  return (
    <div className='w-full h-full flex-col'>
        <div className='w-full py-12 bg-[var(--primary-light)]'>
            <div className='w-10/12 mx-auto flex flex-row items-center gap-32'>
                <h1 className=' text-white lg:text-lg text-sm' >Want to get<Link to="planmeal" className='font-bold text-xl'> more information?</Link> Let us assist you.</h1>
                <input className='px-12 py-3 bg-[var(--primary-dark)] text-white hidden lg:flex' type="email" defaultValue={"Email"} name="" id="" />
                <button className='px-20 py-3 bg-[var(--primary-dark)] text-white hidden lg:flex'>Send me information</button>
            </div>
        </div>
        <div className='w-full bg-gray-200'>
            <div className='pb-12'>
                <div className='w-10/12 mx-auto py-12  border-b-2 border-gray-400'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 items-stretch'>
                        <div className=''>
                            <div className='flex flex-col gap-12'>
                                <Link to="/"><h2>Lorem Ipsum</h2></Link>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                            </div>
                        </div>
                        <div>
                            <div className='lg:flex flex-col place-items-center gap-12 hidden'>
                                <Link to="/"><h2>Lorem Ipsum</h2></Link>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                            </div>
                        </div>
                        <div>
                            <div className='lg:flex flex-col place-items-center gap-12 hidden'>
                                <Link to="/"><h2>Lorem Ipsum</h2></Link>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col place-items-end gap-12'>
                                <Link to="/"><h2>Lorem Ipsum</h2></Link>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <h1>Lorem ipsum dolor sit amet</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer