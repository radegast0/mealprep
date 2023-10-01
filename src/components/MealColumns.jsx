import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_USER } from '../graphql/query';

const MealColumns = () => {
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
    <Link to="/Form">
      <div className="relative overflow-hidden bg-gray-500/70 rounded-sm p-2">
        <div className="text-white">
          {data.categories.map((category) => (
            <div key={category.id}>
              <h2 className="mb-2">Name: {category.name}</h2>
              <h2 className="mb-2">Email: {category.email}</h2>
              <p className="mb-2">Created At: {category.createdAt}</p>
              {/* Iterate through meals and render images */}
              {category.meals.map((meal) => (
                <div key={meal.title}>
                  <h2 className="text-xl font-semibold">Meal: {meal.title}</h2>
                  <p className="mb-2">Ingredients: {meal.ingredient}</p>
                  <p className="mb-2">Calories: {meal.calories}</p>

                  {/* Render other meal data as needed */}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="h-52 flex items-center justify-center">
          <div className="flex flex-col justify-center absolute w-full h-full left-0 top-0 group">
            <div className="h-full bg-transparent group-hover:bg-[var(--primary-light)] transition-all duration-500 flex items-center px-12 overflow-hidden">
              <div className="">
                <div className="flex flex-row mt-auto justify-between w-full overflow-hidden group">
                  <div className="flex flex-col invisible group-hover:visible">
                    <span className="translate-y-full transition-all duration-300 group-hover:translate-y-0 text-white text-lg">
                      Meal 1
                    </span>
                    <p className="translate-y-full transition-all duration-300 group-hover:translate-y-0 text-white my-6">
                      Edit your meal 1
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
                            stroke="#fe067b"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
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
  );
};

export default MealColumns;
