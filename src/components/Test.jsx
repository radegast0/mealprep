import React, { useEffect, useState } from 'react';
import { QUERY_USER } from '../graphql/query';

const Test = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const apiUrl = process.env.REACT_APP_API; 

    
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization
      },
      body: JSON.stringify({ query: QUERY_USER }),

    })
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error: Unable to fetch data</p>;
  }

  return (
    <div>
        <div>
            <div className=''>
                <div className=''>
                    <div>
                      {data.categories.map((category) => (
                        <div key={category.id}>
                          <h2>Name: {category.name}</h2>
                          <h2>Email: {category.email}</h2>
                          <p>Created At: {category.createdAt}</p>
                          {/* Iterate through meals and render images */}
                          {category.meals.map((meal) => (
                            <div key={meal.title}>
                              <h2>Meal: {meal.title}</h2>
                              <h1>Ingredients: {meal.ingredient}</h1>
                              <h1>Calories: {meal.calories}</h1>
                              <img className='h-52 lg:h-80' src={meal.photos.url} alt="" />
                              {/* Render other meal data as needed */}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <input 
                className='bg-black/70 text-white p-2'
                type="text"
                placeholder='Meal Name'
                // value={meal.title} 
                // onChange={handleMealNameChange}
                />
        </div>
        <div>
            <input 
                className='bg-black/70 text-white p-2'
                type="number"
                placeholder='Calories'
                // value={meal.calories} 
                // onChange={handleCaloriesChange}
                />
        </div>
        <div>
            <input 
                className='bg-black/70 text-white p-2'
                type="file"
                accept="image/*"
                placeholder='image'
                // value={meal.calories} 
                // onChange={handleCaloriesChange}
                />
        </div>
        <div>
            <button className='bg-black/70 text-white p-2'>Submit</button>
        </div>
    </div>
  );
};

export default Test;