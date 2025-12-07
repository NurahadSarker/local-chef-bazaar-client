import React from 'react';
import Image01 from '../../assets/chickenbiriani.jpg'
import { Link } from 'react-router';

const Card = () => {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-3 gap-5'>
                {/* Image */}

                <div className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                    <div>
                        <div className='flex items-center justify-center bg-gray-400 w-full mb-2 overflow-hidden'>
                            <img className='object-cover hover:scale-110 transition-transform duration-500' src={Image01} alt="" />
                        </div>
                        <h1 className='text-xl font-semibold'>Chicken Biriyani</h1>
                        <h2 className='text-gray-400 font-medium'>Chef: Robi-C002</h2>
                        <div className='flex items-center justify-between text-gray-400 font-medium'>
                            <h1>Rating</h1>
                            <h1>$ 10.00</h1>
                        </div>
                        <h2 className='text-gray-400 font-medium'>Location</h2>
                    </div>
                    <Link to={'/meals-details'} className='w-full text-center button2'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;