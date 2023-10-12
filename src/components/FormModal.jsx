import React, { useState } from 'react'
import { graphcms } from '../graphql/query'
import { gql } from 'graphql-request'

const FormModal = (props) => {

    const closeModal = () => {
        props.closer()
    }

    const [title, setTitle] = useState("")
    const [calories, setCalories] = useState("")
    const [ingredient, setIngredient] = useState("")

    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleCalories(e) {
        setCalories(e.target.value);
    }
    function handleIngredients(e) {
        setIngredient(e.target.value);
    }

    useState(() => {
        if(props?.modal?.data?.id){
            setTitle(props?.modal?.data?.title)
            setCalories(props?.modal?.data?.calories)
            setIngredient(props?.modal?.data?.ingredient)
        }
    }, [props.modal])



    function handleSubmit() {
        if (!props?.modal?.data?.id) {
          graphcms
            .request(
              gql`
                    mutation createOneRelation {
                        createMeal(
                        data: {
                            title: "${title}"
                            calories: ${calories}
                            ingredient: "${ingredient}"
                            day: { connect: {id: "${props.modal?.dateId}"} }
                            
                        }
                        ) {
                        id
                        title
                        calories
                        ingredient
                        }
                    }
                `
            )
            .then((res) => {
              let id = res?.createMeal?.id;
              if (id != null) {
                graphcms.request(gql`
                  mutation publishMeal {
                    publishMeal(where: {id : "${id}"}) {
                      id
                      mealNumber
                    }
                  }
                `).then(props.closer())
              }
            });
        } else {
          graphcms
            .request(
              gql`
                    mutation createOneRelation {
                        updateMeal(
                        where: { id: "${props?.modal?.data.id}" }
                        data: {
                            title: "${title}"
                            calories: ${calories}
                            ingredient: "${ingredient}"
                        }
                        ) {
                        id
                        title
                        calories
                        ingredient
                        mealNumber
                        }
                    }
                `
            )
            .then((res) => {
                let id = props?.modal?.data.id
                if (id != null) {
                  graphcms.request(gql`
                    mutation publishMeal {
                      publishMeal(where: {id : "${id}"}) {
                        id
                      }
                    }
                  `).then(props.closer())
                }
              });
        }
    
        return;
      }
  return (
    <div>
        {
            props.modal.active && <div className={props?.modal?.active ? "" : "hidden"}>
                <div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 w-screen h-screen bg-slate-700/50 flex justify-center items-center">
                    <div className="relative w-full max-w-3xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-8">
                            <button onClick={closeModal}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span  className="sr-only">Close Form</span>
                            </button>
                            <div className="p-6 text-center">
                                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Save a meal for {props?.modal?.date?.format("DD MMMM YYYY")}</h3>
                                <div className='grid grid-cols-2 gap-4 mb-4'>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                                            Meal
                                        </label>
                                        <input value={title} onChange={handleTitle} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Meal" />
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                                            Calories
                                        </label>
                                        <input value={calories} onChange={handleCalories} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="number" placeholder="Colories" />
                                    </div>
                                    <div className=" col-span-2">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                                            ingredients
                                        </label>
                                        <input value={ingredient} onChange={handleIngredients} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="İngredients" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <button onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 w-full">No, cancel</button>
                                    <button onClick={handleSubmit} type="button" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5  text-center mr-2 w-full">
                                        <span className='text-center w-full'>save</span>
                                    </button>
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

export default FormModal