import React from 'react';
import Image01 from '../../assets/chickenbiriani.jpg'

const Card = () => {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-3 gap-5'>
                {/* Image */}

                <div className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                    <div>
                        <div className='flex items-center justify-center bg-gray-400 w-full'>
                            <img src={Image01} alt="" />
                        </div>
                        <h1>Chicken Biriyani</h1>
                        <h2>Chef: Robi-C002</h2>
                        <div className='flex items-center justify-between'>
                            <h1>Rating</h1>
                            <h1>$ 10.00</h1>
                        </div>
                        <h2>Location</h2>
                    </div>
                    <button className='w-full items-center button2'>See Details</button>
                </div>

                <div className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                    <div>
                        <div className='flex items-center justify-center bg-gray-400 w-full'>
                            <img src={Image01} alt="" />
                        </div>
                        <h1>Chicken Biriyani</h1>
                        <h2>Chef: Robi-C002</h2>
                        <div className='flex items-center justify-between'>
                            <h1>Rating</h1>
                            <h1>$ 10.00</h1>
                        </div>
                        <h2>Location</h2>
                    </div>
                    <button className='w-full items-center button2'>See Details</button>
                </div>

                <div className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                    <div>
                        <div className='flex items-center justify-center bg-gray-400 w-full'>
                            <img src={Image01} alt="" />
                        </div>
                        <h1>Chicken Biriyani</h1>
                        <h2>Chef: Robi-C002</h2>
                        <div className='flex items-center justify-between'>
                            <h1>Rating</h1>
                            <h1>$ 10.00</h1>
                        </div>
                        <h2>Location</h2>
                    </div>
                    <button className='w-full items-center button2'>See Details</button>
                </div>

                <div className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                    <div>
                        <div className='flex items-center justify-center bg-gray-400 w-full'>
                            <img src={Image01} alt="" />
                        </div>
                        <h1>Chicken Biriyani</h1>
                        <h2>Chef: Robi-C002</h2>
                        <div className='flex items-center justify-between'>
                            <h1>Rating</h1>
                            <h1>$ 10.00</h1>
                        </div>
                        <h2>Location</h2>
                    </div>
                    <button className='w-full items-center button2'>See Details</button>
                </div>

                <div className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                    <div>
                        <div className='flex items-center justify-center bg-gray-400 w-full'>
                            <img src={Image01} alt="" />
                        </div>
                        <h1>Chicken Biriyani</h1>
                        <h2>Chef: Robi-C002</h2>
                        <div className='flex items-center justify-between'>
                            <h1>Rating</h1>
                            <h1>$ 10.00</h1>
                        </div>
                        <h2>Location</h2>
                    </div>
                    <button className='w-full items-center button2'>See Details</button>
                </div>

                <div className='w-full bg-base-100 shadow-md p-3 rounded-md'>
                    <div>
                        <div className='flex items-center justify-center bg-gray-400 w-full'>
                            <img src={Image01} alt="" />
                        </div>
                        <h1>Chicken Biriyani</h1>
                        <h2>Chef: Robi-C002</h2>
                        <div className='flex items-center justify-between'>
                            <h1>Rating</h1>
                            <h1>$ 10.00</h1>
                        </div>
                        <h2>Location</h2>
                    </div>
                    <button className='w-full items-center button2'>See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;