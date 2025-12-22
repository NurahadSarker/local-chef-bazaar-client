// import React, { useEffect, useState } from 'react';
// import Card from './Card';
// import useAuth from '../../Hooks/useAuth';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';

// const Meals = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const [meals, setMeals] = useState([]);

//     /* ===== FETCH DATA ===== */
//     useEffect(() => {
//         if (user?.email) {
//             axiosSecure
//                 .get(`/meals`)
//                 .then(res => setMeals(res.data));
//         }
//     }, [user, axiosSecure]);
//     return (
//         <div className='max-w-[1200px] mx-auto my-15'>
//             <div className='text-center mb-10'>
//                 <h1 className='text-[32px] font-bold'>Explore Delicious Meals</h1>
//                 <p>
//                     Find the perfect dish, check ingredients, and discover your next favorite meal.
//                 </p>
//             </div>
//             <div className='mt-5'>
//                 <div className='grid grid-cols-3 gap-5'>

//                     {
//                         meals.map((meal) => (
//                             <Card key={meal._id} meal={meal}></Card>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Meals;

import React, { useEffect, useState } from 'react';
import Card from './Card';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Meals = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [meals, setMeals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    /* ===== FETCH DATA ===== */
    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/meals`)
                .then(res => setMeals(res.data));
        }
    }, [user, axiosSecure]);

    /* ===== PAGINATION LOGIC ===== */
    const totalPages = Math.ceil(meals.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentMeals = meals.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='max-w-[1200px] mx-auto my-15'>
            <div className='text-center mb-10'>
                <h1 className='text-[32px] font-bold'>Explore Delicious Meals</h1>
                <p>
                    Find the perfect dish, check ingredients, and discover your next favorite meal.
                </p>
            </div>

            {/* ===== MEALS GRID ===== */}
            <div className='mt-5 grid grid-cols-3 gap-5'>
                {
                    currentMeals.map(meal => (
                        <Card key={meal._id} meal={meal} />
                    ))
                }
            </div>

            {/* ===== PAGINATION BUTTONS ===== */}
            {
                totalPages > 1 && (
                    <div className='flex justify-center gap-2 mt-10'>
                        {
                            [...Array(totalPages).keys()].map(number => (
                                <button
                                    key={number}
                                    onClick={() => setCurrentPage(number + 1)}
                                    className={`px-5 py-1 cursor-pointer
                                        ${currentPage === number + 1
                                            ? "bg-[#FF6700] text-white"
                                            : "bg-base-100 hover:bg-base-300"
                                        }`}
                                >
                                    {number + 1}
                                </button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Meals;
