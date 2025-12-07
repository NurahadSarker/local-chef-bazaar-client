import React from 'react';
import Hero from './Hero';
import DailyMeals from './DailyMeals';
import Reviews from './Reviews';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DailyMeals></DailyMeals>
            <Reviews></Reviews>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;