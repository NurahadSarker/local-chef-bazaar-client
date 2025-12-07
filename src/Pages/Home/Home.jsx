import React from 'react';
import Hero from './Hero';
import DailyMeals from './DailyMeals';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DailyMeals></DailyMeals>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;