import React, { useEffect, useState } from 'react'
import MealColumns from './MealColumns'
import { graphcms, QUERY_MEALS, QUERY_USERS } from '../graphql/query'
import Days from './Days'
import Notiflix from 'notiflix'
import FormModal from './FormModal'
const PlanMeal = () => {


// const [user , setUser] = useState([]);
// let userName = "";
// useEffect(() => {
//   graphcms.request(QUERY_USERS).then((result) => {
//     setUser(result.user);
//   });
// }, []);



const [meals, setMeals] = useState([]);
const [date, setDate] = useState({});
const [loading, setLoading] = useState(false);
const [data, setData] = useState({});
const [active, setActive] = useState(false);
const [modalActive, setModalActive] = useState(false);


const [modal, setModal] = useState({
  active: false,
  toggle: function(tg = true, data = {}, date = {}, dateId = {}){

    setModalActive(tg)
    setModal({
      ...modal,
      data: data,
      date: date,
      dateId: dateId,
      active: true
    })
  }
});


function  createDate(date){
  return new Promise((resolve, reject) => {
    graphcms.request(`
      mutation {
        createDay(
          data: {
            date: "${date.format("YYYY-MM-DD")}"
          }
        ) {
          id
          date
          meals {
            id
            title
            calories
            ingredient
          }
        }
      }
    `).then(r => {
      graphcms.request(`
        mutation {
          publishDay(where: {id : "${r?.createDay?.id}"}) {
            id
          }
        }
      `).then(() => {
        resolve(r.createDay)
      })
    })
  })
}

function loadDateData(){
  setLoading(true)
  if(date){
    graphcms.request(`
      query{
        days(where:{date:"${date?.format("YYYY-MM-DD")}"}){
          id
          date
          meals {
            id
            title
            calories
            ingredient
          }
        }
      }
    `).then(async (r) => {
      console.log(r)
      if(r.days?.length <= 0){
        let result = await createDate(date)
        setData(result)
      }
      else{
        setData(r.days[0])
      }

      setActive(true)
      setLoading(false)
    })
  }
}

function closeModalAndRefresh(date){
  setModalActive(false)
  setTimeout(() => {
    loadDateData()
  }, 500);
}

let mealNumber = 1;
// useEffect(() => {
//   graphcms.request(QUERY_MEALS ).then((result)=>{
  
//     setMeals(result.meals)
//     console.log(result.meals)
//   })
// },[])

useEffect(() => {
  
},[date])

useEffect(() => {
  if(!loading){
    Notiflix.Loading.remove()
  }
  else{
    Notiflix.Loading.pulse()
  }
},[loading])

  function toggleModal(){
    modal.toggle()
  }
  return (
    <div 
      className="bg-cover relative bg-fixed h-full"
      style={{
      backgroundPosition: 'top',
      backgroundImage: `url("https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
      }}>

      {modalActive && <FormModal closer={closeModalAndRefresh} modal={modal}/>}
      <Days handleRefresh={closeModalAndRefresh} dayData={data} date={date} setDate={setDate} loadDateData={loadDateData} setActive={setActive}/>

      {active &&
        <div className='relative w-10/12 mx-auto  py-10 h-full'>
        {/* <h1 className='text-center pt-20 text-5xl text-extrabold text-[--primary-light)]'>Start Planning Your Meals</h1>
        <h1 className='text-center pb-20 pt-10 text-5xl text-extrabold text-[var(--primary-light)]'> Welcome $EMAIL </h1> */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
            {data?.meals.map((meal)=><div key={meal.id} onClick={() => modal.toggle(true, meal, date, data.id)}><MealColumns  data={meal} ></MealColumns></div>)} 
            
            <div className='relative justify-center text-center items-center mx-auto'  >
              <svg className="w-32 h-32 absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
              </svg>
              <div onClick={() => modal.toggle(true, {}, date, data.id)} className="relative h-full lg:w-96 w-80 mx-auto  overflow-hidden bg-gray-500/70 rounded-sm p-2">
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
            </div>
        </div>
    </div>
      }
    </div>
  )
}

export default PlanMeal