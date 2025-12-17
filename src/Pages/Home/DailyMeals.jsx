import React, { useEffect, useState } from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router';
import Card from './Card';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import CardForDailyMeals from './CardForDailyMeals';

const DailyMeals = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [meals, setMeals] = useState([]);

    /* ===== FETCH DATA ===== */
    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/meals`)
                .then(res => setMeals(res.data));
        }
    }, [user, axiosSecure]);
    return (
        <div className='max-w-[1200px] mx-auto mb-15'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[32px] font-bold'>Daily Meals</h1>
                <div className='flex items-center'>
                    <Link className='flex items-center gap-1' to={'/meals'}> <h3>See All</h3> <FaAnglesRight /></Link>
                </div>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-3 gap-5'>

                    {
                        meals.map((meal) => (
                            <CardForDailyMeals key={meal._id} meal={meal}></CardForDailyMeals>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DailyMeals;