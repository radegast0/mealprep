import React, { useEffect, useState } from 'react';
import { graphcms } from '../graphql/query';
import { gql } from 'graphql-request';

const Calories = () => {
  const [data, setData] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    graphcms
      .request(gql`
        query Meals {
          meals {
            title
            calories
            ingredient
            id
            mealNumber
          }
        }
      `)
      .then((response) => {
        setData(response.meals);
        const caloriesSum = response.meals.reduce((sum, meal) => sum + meal.calories, 0);
        setTotalCalories(caloriesSum);
      });
  }, []);

  return (
    <div>
      <div className='w-10/12 mx-auto text-3xl'>
        <h1>Your total calories today: {totalCalories}</h1>
      </div>
    </div>
  );
};

export default Calories;
