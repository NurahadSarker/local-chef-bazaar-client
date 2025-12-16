import React from 'react';
import Image01 from '../../assets/chickenbiriani.jpg'
import { Link, useNavigate } from 'react-router';

const Card = ({ meals }) => {
    // const location = useLocation()
    const navigate = useNavigate()

    const handleDetailsBtn = () => {
        navigate('/meals-details')
    }
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-3 gap-5'>
                {/* Image */}

                {
                    meals.map((meal) => (
                        <div key={meal._id} className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                            <div>
                                <div className='flex items-center justify-center bg-gray-400 w-full mb-2 overflow-hidden'>
                                    <img className='object-cover hover:scale-110 transition-transform duration-500' src={meal.image || Image01} alt="" />
                                </div>
                                <h1 className='text-xl font-semibold'>{meal.foodName}</h1>
                                <h2 className='text-gray-400 font-medium'>Chef: {meal.chefName}-{meal.chefId}</h2>
                                <div className='flex items-center justify-between text-gray-400 font-medium'>
                                    <h1>⭐ Rating: {meal.rating || 0}/5</h1>
                                    <h1>৳ {meal.price}</h1>
                                </div>
                                <h2 className='text-gray-400 font-medium'>Location</h2>
                            </div>
                            <Link onClick={() => handleDetailsBtn()} className='w-full text-center button2'>See Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;