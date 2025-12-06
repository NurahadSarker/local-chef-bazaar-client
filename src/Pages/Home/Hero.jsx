import React from 'react';
import Img1 from '../../assets/heroimg1.jpg'

const Hero = () => {
    return (
        <div className="hero md:min-h-screen relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Img1})`, filter: 'brightness(45%)' }}
            ></div>
            <div className="relative hero-content text-white text-center z-10">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="mb-5 text-xl md:text-5xl font-bold">“Connect, Create & Contribute — Together<br />for a Better Tomorrow.”</h1>
                    <p className="mb-5 md:text-xl">
                        Join hands to organize and participate in social development events across Bangladesh.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;