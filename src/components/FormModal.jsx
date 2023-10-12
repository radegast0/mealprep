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
                                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"><path d="M9 10.9942C9.55229 10.9942 10 10.5465 10 9.9942C10 9.44192 9.55229 8.9942 9 8.9942C8.44771 8.9942 8 9.44192 8 9.9942C8 10.5465 8.44771 10.9942 9 10.9942ZM14 12.9923C14 13.5446 13.5523 13.9923 13 13.9923C12.4477 13.9923 12 13.5446 12 12.9923C12 12.44 12.4477 11.9923 13 11.9923C13.5523 11.9923 14 12.44 14 12.9923ZM9 16.9896C9.55229 16.9896 10 16.5418 10 15.9896C10 15.4373 9.55229 14.9896 9 14.9896C8.44771 14.9896 8 15.4373 8 15.9896C8 16.5418 8.44771 16.9896 9 16.9896ZM4.99929 4.66447C4.99961 3.16803 6.23051 1.85977 7.82016 2.01672C13.1464 2.5426 17.8822 5.07459 21.2618 8.84408C22.3314 10.0371 21.9991 11.8079 20.7832 12.6893C19.2007 13.8365 16.8438 15.5456 15.5005 16.5219C15.4977 16.9593 15.4981 17.2434 15.4988 17.6135L15.4988 17.6146C15.4991 17.7941 15.4994 17.9941 15.4994 18.2415C15.4994 19.1879 14.7365 19.9923 13.7494 19.9923C13.6444 19.9923 13.542 19.9832 13.4427 19.9658C13.2386 20.7924 12.5107 21.4932 11.4994 21.4932C10.7989 21.4932 10.2374 21.1576 9.89033 20.6782C9.45871 20.9893 9.00328 21.318 8.56497 21.6345C7.07655 22.7092 4.99571 21.6459 4.99609 19.8093L4.99929 4.66447ZM7.67278 3.50946C7.06431 3.44938 6.49944 3.95241 6.49929 4.66478L6.49918 5.18544C11.7528 5.40585 16.41 7.93346 19.4835 11.7788L19.9028 11.4749C20.4808 11.0558 20.5545 10.3022 20.145 9.8454C17.0066 6.34496 12.6124 3.99717 7.67278 3.50946ZM6.49609 19.8096C6.49596 20.4218 7.19002 20.7771 7.68688 20.4184C8.41023 19.8961 9.18075 19.3402 9.81432 18.8844C10.0427 18.72 10.3439 18.6974 10.5944 18.8257C10.8448 18.954 11.0023 19.2118 11.0023 19.4932C11.0023 19.7634 11.2108 19.9932 11.4994 19.9932C11.7913 19.9932 12.0007 19.7598 12.0007 19.4932V18.2415C12.0007 17.8273 12.3365 17.4915 12.7507 17.4915C13.1649 17.4915 13.5007 17.8273 13.5007 18.2415C13.5007 18.3823 13.6123 18.4923 13.7494 18.4923C13.8873 18.4923 13.9994 18.3805 13.9994 18.2415C13.9994 17.9978 13.9991 17.7994 13.9988 17.6203C13.998 17.1507 13.9974 16.8121 14.0035 16.1311C14.0057 15.8935 14.1202 15.671 14.3123 15.5313C15.2145 14.875 16.8076 13.7191 18.2677 12.6604C15.4668 9.18704 11.2521 6.90484 6.49886 6.68689L6.49609 19.8096Z" fill="currentColor"></path></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Meal for {props?.modal?.date?.format("DD MMMM YYYY")}</h3>
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
                                    <button onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 w-full">Cancel</button>
                                    <button onClick={handleSubmit} type="button" className="text-white bg-primary-dark hover:bg-primary-light focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5  text-center mr-2 w-full">
                                        <span className='text-center w-full'>Save</span>
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