import React from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router';
import Card from './Card';

const DailyMeals = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-15'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[32px] font-bold'>Daily Meals</h1>
                <div className='flex items-center'>
                    <Link className='flex items-center gap-1' to={'/meals'}> <h3>See All</h3> <FaAnglesRight /></Link>
                </div>
            </div>
            <Card></Card>
        </div>
    );
};

export default DailyMeals;