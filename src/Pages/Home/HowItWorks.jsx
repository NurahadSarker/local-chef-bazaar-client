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
        <section className="py-20 bg-[#F7F4EF]">
            <div className="max-w-6xl mx-auto px-5">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2A41]">
                        How It Works
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
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
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-[#1B2A41]">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                {step.desc}
                            </p>

                            <button className="mt-4 px-4 py-2 bg-[#F5A623] text-white rounded-md hover:bg-[#e59412] transition">
                                Learn More
                            </button>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
