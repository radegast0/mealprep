import React, { useEffect, useState } from 'react'
import { graphcms } from '../graphql/query'
import { gql } from 'graphql-request'
import { Route, useParams, useNavigate } from "react-router-dom";

const Form = (props) => {
    const navigate = useNavigate()
    const [data,setData]= useState({})
    const [title, setTitle] = useState('')
    const [calories, setCalories] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [mealNumber, setMealNumber] = useState('')
    
    let { id } = useParams();
    console.log(id)
    useEffect(()=>{
        graphcms.request(gql`
        query Meals {
            meals(where:{mealNumber:"${id}"}){
              title
              calories
              ingredient
              id
              mealNumber
              
          }
        }
        
        `
        ).then((response)=>{
            if(response.meals.at(0)){
                setData(response.meals[0])
                setTitle(response.meals[0].title)
                setCalories(response.meals[0].calories)
                setIngredients(response.meals[0].ingredient)
                setMealNumber(response.meals[0].mealNumber)
            }
        })
    },[])



    
    function handleTitle (e){
        setTitle (e.target.value)
    }
    function handleCalories (e){
        setCalories (e.target.value)
    }
    function handleIngredients (e){
        setIngredients (e.target.value)
    }
    function handleMealNumber (e){
        setMealNumber (e.target.value)
    }
    

    function handleSubmit () {
        
    
        if (data?.id == null){
            graphcms.request(gql`
                mutation createOneRelation {
                    createMeal(
                    data: {
                        title: "${title}"
                        calories: ${calories}
                        ingredient: "${ingredients}"
                        mealNumber: "${mealNumber}"
                        
                    }
                    ) {
                    id
                    title
                    calories
                    ingredient
                    mealNumber
                    }
                }
            ` ).then((res) => alert("Changes Saved."))
        }
        else{
            graphcms.request(gql`
                mutation createOneRelation {
                    updateMeal(
                    where: { id: "${data.id}" }
                    data: {
                        title: "${title}"
                        calories: ${calories}
                        ingredient: "${ingredients}"
                        mealNumber: "${id}"
                    }
                    ) {
                    id
                    title
                    calories
                    ingredient
                    mealNumber
                    }
                }
            ` ).then((res) => alert("Changes Saved."))
        }
        
        

        return
    }
    return (
    <div>
        <div className='w-10/12 mx-auto'>
            <div className='py-12 text-start'>
                <div className='flex flex-col gap-3 relative'>
                    <div><input value={title || ''} name="title" onChange={handleTitle} className='bg-gray-500 text-white py-2 px-4 w-64 rounded-sm'  type="text" placeholder='Meal Name' /></div>
                    <div><input value={calories || ''} name="calories" onChange={handleCalories} className='bg-gray-500 text-white py-2 px-4 w-64 rounded-sm'  type="number" placeholder='Calories' /></div>
                    <div><input value={ingredients || ''} name="ingredients" onChange={handleIngredients} className='bg-gray-500 text-white py-2 px-4 w-64 rounded-sm'  type="text" placeholder='Ingredients' /></div>
                    <div><input value={mealNumber || ''} name="mealNumber" onChange={handleMealNumber} className='bg-gray-500 text-white py-2 px-4 w-64 rounded-sm mb-2'  type="number" placeholder='Enter Meal Number' /></div>
                </div>
                <button onClick={() => navigate(-1)}><button onClick={handleSubmit} className='p-2 w-64 bg-gray-200' >Submit</button></button>
            </div>
        </div>
    </div>
  )
}

export default Form

