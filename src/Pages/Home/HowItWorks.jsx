import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {

    const steps = [
        {
            id: 1,
            title: "Browse Meals",
            desc: "Explore fresh, home-cooked dishes from trusted local chefs around you.",
            icon: "🛒",
        },
        {
            id: 2,
            title: "Place Your Order",
            desc: "Choose your favorite meal and order instantly with a seamless experience.",
            icon: "📦",
        },
        {
            id: 3,
            title: "Enjoy Fresh Delivery",
            desc: "Your food is prepared with care and delivered hot to your doorstep.",
            icon: "🚚",
        },
    ];

    return (
        <div className="max-w-[1200px] mx-auto mb-15">
            <div className="text-center mb-10">
                <h2 className="text-[32px] md:text-4xl font-bold mb-2">
                    How It Works
                </h2>
                <p>
                    Enjoy homemade meals from local chefs in just three easy steps.
                </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {steps.map((step) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: step.id * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-base-100 p-6 rounded-md shadow-md hover:shadow-xl transition"
                    >
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold">
                            {step.title}
                        </h3>
                        <p className="mt-2">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}

            </div>

        </div>
    );
};

export default HowItWorks;
