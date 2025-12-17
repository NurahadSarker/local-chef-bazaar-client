// import React from 'react';
// import { useLoaderData } from 'react-router';

// const Ingredients = () => {
//     const meals = useLoaderData()
//     // console.log(meals?.ingredients.details)
//     return (
//         <div>
//             <h1 className='text-[20px] font-semibold'>Ingredients</h1>
//             <ul className='list-disc ml-5'>
//                 {
//                     meals.map(meal=>(
//                         <li>{meal?.ingredients?.details}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     );
// };

// export default Ingredients;


import React from 'react';
import { useLoaderData } from 'react-router';

const Ingredients = () => {
    const meal = useLoaderData("meal-detail"); // array of objects

    // if (!meals) return <p>Loading...</p>; // safety check

    return (
        <div>
            <h1 className='text-[20px] font-semibold'>Ingredients</h1>
                <ul key={meal._id} className='list-disc ml-5 mb-3'>
                    <li>{meal?.ingredients?.details}</li>
                </ul>
        </div>
    );
};

export default Ingredients;
