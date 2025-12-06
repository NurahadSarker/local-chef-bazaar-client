
import React from 'react';
import { motion } from 'framer-motion';
import Img1 from '../../assets/heroimg1.jpg';

const Hero = () => {
    return (
        <div className="hero md:h-120 relative overflow-hidden mb-15">
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Img1})`, filter: 'brightness(45%)' }}

                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>

            <div className="relative hero-content text-white text-center z-10">
                <div className="max-w-[1200px] mx-auto">
                    
                    <motion.h1
                        className="mb-5 text-xl md:text-5xl font-bold"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Fresh, Homemade, and Delivered With Care.
                    </motion.h1>

                    <motion.p
                        className="mb-5 md:text-xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        Discover authentic homemade meals prepared by local chefs near you.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
