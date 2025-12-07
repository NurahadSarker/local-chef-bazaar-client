import React from 'react';
import Avatar from '../../assets/avatar.png'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { RiDoubleQuotesL } from 'react-icons/ri';

const Reviews = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-15'>
            <div className='mb-10'>
                <h1 className='text-[32px] font-bold text-center mb-2'>What Our Food Lovers Are Saying</h1>
                <p className='text-center'>Real experiences from people who enjoy fresh, homemade meals from trusted local chefs.</p>
            </div>
            <div>
                <div className='bg-base-100 w-80 p-5 shadow-md rounded-md'>
                    <div>
                        <div className='bg-base-300 w-15 rounded-full border-2 border-base-100 -mt-12'>
                            <img className='w-15 rounded-full' src={Avatar} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[18px] font-medium'>Md. Nur-Ahad Robi</h1>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2 text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                                <div>
                                    <h1>10-10-2025</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-2xl font-bold'>
                        <RiDoubleQuotesL />
                        <div className='border'></div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, ut.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;