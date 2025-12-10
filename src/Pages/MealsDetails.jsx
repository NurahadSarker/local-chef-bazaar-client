import React from 'react';
import Img from '../assets/chickenbiriani.jpg'
import { FaStar } from 'react-icons/fa6';
import { FaStarHalfAlt } from 'react-icons/fa';

const MealsDetails = () => {
    return (
        <div className="max-w-2xl mx-auto h-200 my-16 relative shadow-xl rounded-3xl">
            {/* Image */}
            <div className="bg-base-100 h-full rounded-3xl border border-gray-300 overflow-hidden p-2">
                <img className="rounded-2xl w-full" src={Img} alt="" />
            </div>

            {/* Details Box */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[97.6%] bg-base-100 p-5 rounded-3xl border border-gray-300">
                <div className='flex items-end gap-2 mb-2'>
                    <h1 className="text-3xl font-bold">Chicken Biriani</h1>
                    <p className="text-gray-400 mt-2">..... Cooked by 'Robi'</p>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-2 border-r border-gray-400 pr-3'>
                        <div className='flex items-center gap-2 text-yellow-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <h1 className='text-base-content font-bold -mb-1.5'>4.8</h1>
                        </div>
                        <h1 className='text-gray-400'>(120 Reviews)</h1>
                    </div>
                </div>
                <button className="mt-4 btn btn-primary w-full">Order Now</button>
            </div>
        </div>
    );
};

export default MealsDetails;