import React, { useEffect, useState } from 'react';
import Card from './Card';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Meals = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [meals, setMeals] = useState([]);

    /* ===== FETCH DATA ===== */
    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/meals/chef/${user.email}`)
                .then(res => setMeals(res.data));
        }
    }, [user, axiosSecure]);
    return (
        <div className='max-w-[1200px] mx-auto my-15'>
            <div className='text-center mb-10'>
                <h1 className='text-[32px] font-bold'>Explore Delicious Meals</h1>
                <p>
                    Find the perfect dish, check ingredients, and discover your next favorite meal.
                </p>
            </div>
            <Card meals={meals}></Card>
        </div>
    );
};

export default Meals;