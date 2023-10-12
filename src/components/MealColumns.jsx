import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { QUERY_MEALS } from '../graphql/query';
// import { graphcms } from '../graphql/query';


const MealColumns = (props) => {
//   const mealNumber = props.mealNumber;
//   const [meals, setMeals] = useState([]);




// useEffect(() => {
//   graphcms.request(QUERY_MEALS).then((result)=>{
  
//     setMeals(result.meals)
//     // console.log(result)

//   })
// },[])
  return (
      <div className="relative overflow-hidden bg-gray-500/70 rounded-sm p-2">
        <div className="text-white absolute top-6 left-6">
          <h1 className='text-3xl'>{props.data.title}</h1>
          <h1 className='text-2xl'>{props.data.calories} kcal</h1>
          <h1 className='text-xl'>{props.data.ingredient}</h1>   
        </div>
        <div className="h-52 flex items-center justify-center">
          <div className="flex flex-col justify-center absolute w-full h-full left-0 top-0 group">
            <div className="h-full bg-transparent group-hover:bg-[var(--primary-light)] transition-all duration-500 flex items-center px-12 overflow-hidden">
              <div className="">
                <div className="flex flex-row mt-auto justify-between w-full overflow-hidden group">
                  <div className="flex flex-col invisible group-hover:visible">
                    <span className="translate-y-full transition-all duration-300 group-hover:translate-y-0 text-white text-lg">
                    </span>
                    <p className="translate-y-full transition-all duration-300 group-hover:translate-y-0 text-white my-6">
                      Edit your meal
                    </p>
                    <span className="translate-y-full transition-all duration-300 group-hover:translate-y-0">
                      <svg
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
  );
};

export default MealColumns;
