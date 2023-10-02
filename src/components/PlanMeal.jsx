import React, { useEffect, useState } from 'react'
import MealColumns from './MealColumns'
import { graphcms, QUERY_MEALS } from '../graphql/query'
import { Link } from 'react-router-dom'

const PlanMeal = () => {

const [meals, setMeals] = useState([]);
let mealNumber = 1;
useEffect(() => {
  graphcms.request(QUERY_MEALS).then((result)=>{
  
    setMeals(result.meals)
    // console.log(result)

  })
},[])


  return (
    <div 
      className="bg-cover bg-fixed relative h-screen"
      style={{
      backgroundPosition: 'top',
      backgroundImage: `url("https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
      }}>
      <div className='relative w-10/12 mx-auto '>
          <h1 className='text-center py-20 text-5xl text-extrabold text-[var(--primary-light)]'>Start Planning Your Meals</h1>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
              {meals.map(meal=><MealColumns data={meal} mealNumber = {mealNumber++} ></MealColumns>)} 
              
              <Link className='relative justify-center text-center items-center mx-auto' to={"/Form"}><svg className="w-32 h-32 absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
              </svg>
                <div className="relative h-full w-96 overflow-hidden bg-gray-500/70 rounded-sm p-2">
                  <div className="h-52 flex items-center justify-center">
                   <div className="flex flex-col justify-center absolute w-full h-full left-0 top-0 group">
                      <div className="h-full bg-transparent group-hover:bg-[var(--primary-light)] transition-all duration-500 flex items-center px-12 overflow-hidden">
                        <div className="">
                          <div className="flex flex-row mt-auto justify-between w-full overflow-hidden group">
                            <div className="flex flex-col invisible group-hover:visible">
                             <p className="translate-y-full transition-all duration-300 group-hover:translate-y-0 text-white my-6">
                               Add new meal
                             </p>
                             <span className="translate-y-full transition-all duration-300 group-hover:translate-y-0">
                                <svg className='text-white'
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="51.501"
                                 height="27.75"
                                 viewBox="0 0 51.501 27.75"
                               >
                                  <g
                                   id="Icon_feather-arrow-up"
                                   data-name="Icon feather-arrow-up"
                                    transform="translate(48.672 35.422) rotate(180)"
                                  >
                                   <path
                                      id="Path_65"
                                      data-name="Path 65"
                                      d="M0,0,22.922,22.922,45.844,0"
                                     transform="translate(0 10.5)"
                                     fill="none"
                                     stroke="#FFFFFF"
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                      strokeWidth="4"
                                   />
                                  </g>
                               </svg>
                              </span>
                            </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                </div>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default PlanMeal