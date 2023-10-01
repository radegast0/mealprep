import React, { useState } from 'react'
import { graphcms } from '../graphql/query'
import { gql } from 'graphql-request'

const Form = () => {
    const [title, setTitle] = useState('')
    const [calories, setCalories] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [mealNumber, setMealNumber] = useState('')
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
        if (title === "" || title==null){
            alert("Please enter meal name")
            return;
        }
        if (calories === "" || calories==null){
            alert("Please enter calories")
            return;
        }
        if (ingredients === "" || ingredients==null){
            alert("Please enter ingredients")
            return;
        }
        
        
        



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
          
        
        ` ).then((res) => console.log(res))
    }
  
    return (
    <div>
        <div className='w-10/12 mx-auto'>
            <div className='py-12 text-start'>
                <div className='flex flex-col gap-3 relative'>
                    <div><input className='bg-gray-500 text-white py-2 px-4 w-64 rounded-sm' onChange={handleTitle} type="text" placeholder='Meal Name' /></div>
                    <div><input className='bg-gray-500 text-white py-2 px-4 w-64 rounded-sm' onChange={handleCalories} type="number" placeholder='Calories' /></div>
                    <div><input className='bg-gray-500 text-white py-2 px-4 w-64 rounded-sm' onChange={handleIngredients} type="text" placeholder='Ingredients' /></div>
                    <div><select className='py-2 px-4 bg-gray-200 w-64 mb-3' onChange={handleMealNumber} name="" id=""><option value="meal_1">Meal 1</option><option value="meal_2">Meal 2</option><option value="meal_3">Meal 3</option><option value="meal_4">Meal 4</option></select></div>
                </div>
                <button onClick={handleSubmit} className='p-2 w-64 bg-gray-200' >Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Form

