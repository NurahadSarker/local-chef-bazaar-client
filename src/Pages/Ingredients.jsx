import React from 'react';
import { useLoaderData } from 'react-router';

const Ingredients = () => {
    const meals = useLoaderData()
    console.log(meals?.ingredients)
    return (
        <div>
            <h1 className='text-[20px] font-semibold'>Ingredients</h1>
            <ul className='list-disc ml-5'>
                <li>Basmati Rice</li>
                <li>Chicken</li>
                <li>Special Biriyani Spices</li>
                <li>Yogurt</li>
                <li>Onion</li>
                <li>Ginger & Garlic</li>
                <li>Cooking Oil</li>
                <li>Salt</li>
            </ul>
        </div>
    );
};

export default Ingredients;