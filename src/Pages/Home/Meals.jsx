import React from 'react';
import Card from './Card';

const Meals = () => {
    return (
        <div className='max-w-[1200px] mx-auto my-15'>
            <div className='text-center mb-10'>
                <h1 className='text-[32px] font-bold'>Explore Delicious Meals</h1>
                <p>
                    Find the perfect dish, check ingredients, and discover your next favorite meal.
                </p>
            </div>
            <Card></Card>
        </div>
    );
};

export default Meals;