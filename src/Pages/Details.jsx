import React from 'react';

const Details = () => {
    return (
        <div>
            <div className='mb-3'>
                <h1 className='text-[20px] font-semibold'>Description</h1>
                <p>Traditional Chicken Biriyani cooked with aromatic basmati rice and authentic spices. Perfect for lunch and dinner.</p>
            </div>

            <div className='mb-3'>
                <h1 className='text-[20px] font-semibold'>Delivery Area</h1>
                <p>Mirpur, Dhanmondi, Gulshan</p>
            </div>

            <div className='mb-3'>
                <h1 className='text-[20px] font-semibold'>Estimated Time</h1>
                <p>30–40 Minutes</p>
            </div>

            <div className='mb-3'>
                <h1 className='text-[20px] font-semibold'>Chef Information</h1>
                <p>Nur-Ahad (Chef ID: Ch-203)</p>
                <p>Experience: 4+ Years</p>
            </div>
        </div>
    );
};

export default Details;