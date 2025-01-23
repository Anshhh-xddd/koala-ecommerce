import React from "react";
import { Link } from "react-router-dom";

const cards = [
    {
        image: "https://au.koala.com/cdn/shop/files/Image_Placeholder_3-1.jpg?v=1726643084&width=16600", // Replace with your image URL
        title: "We are a part of 1% for the Planet",
        description:
            "We’re the first Australian mattress and furniture retailer to join the 1% for the Planet movement, which means we give away one percent of gross sales annually for the good of the planet, people, and animals.",
    },
    {
        image: "https://au.koala.com/cdn/shop/files/Image_Placeholder_4.jpg?v=1726643084&width=1660", // Replace with your image URL
        title: "We’re proudly a B-Corp business",
        description:
            "We’re proud to be B-Corp certified, which means we stick to the highest social and environmental standards. We’re stoked to be a part of a group of companies working together to build a more inclusive and sustainable economy.",
    },
    {
        image: "https://au.koala.com/cdn/shop/files/Image_Placeholder_3.jpg?v=1726643084&width=1660", // Replace with your image URL
        title: "Help us save the koala",
        description:
            "Poaching and habitat loss have forced koalas on the endangered species list. We’ve partnered with the WWF Australia so every mattress purchase helps protect our koalas.",
    },
];

const features = [
    {
        title: "Thoughtful design",
        description: "Clever, comfy furniture that you're proud to show off but not precious about using every day.",
        icon: "🛋️",
    },
    {
        title: "Everyday value",
        description: "Our direct-to-consumer model cuts out the middlemen, hidden costs, and showroom expenses.",
        icon: "💰",
    },
    {
        title: "Effortless experiences",
        description: "Fast and flexible delivery, tool-free assembly, and a 120-night risk-free trial.",
        icon: "🚚",
    },
    {
        title: "Designed with the world in mind",
        description: "Ethically made to last. Every purchase helps save koalas and protect habitats.",
        icon: "🌏",
    },
];

const About = () => {
    return (
        <div className="bg-white py-8 px-4 md:py-16 md:px-6 md:px-12">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
                <p className="uppercase text-gray-500 font-medium text-sm mb-2">
                    Why Koala?
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    We’re in the business of making things good
                </h2>
                <div className="flex justify-center">

                    <Link to='/About' className="mt-4 w-full md:w-auto px-6 py-2 text-black rounded-lg border border-black hover:underline">
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm ${index === 1 ? 'order-last md:order-first' : ''}`}
                    >
                        {/* Image */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 md:h-64 object-cover"
                        />
                        {/* Content */}
                        <div className="p-4 md:p-8 text-center">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-600">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-6 md:p-10">

                <section className="bg-[#DE9060] text-center rounded-md py-6 px-4 md:py-10 md:px-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-white" >Our mission is to help plant and protect 2 billion trees in 10 years</h1>
                    <p className="mt-2 md:mt-4 text-white">
                        We love creating habitats for all Aussies, including those of the furry persuasion. Shockingly, 95% of koalas
                        perished during the horrific 2019-20 bushfires, so we’ve partnered with WWF-Australia to regenerate their
                        habitats.
                    </p>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-10 bg-white">
                    {features.map((feature, index) => (
                        <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                            <div className="text-3xl">{feature.icon}</div>
                            <h3 className="font-semibold text-xl mt-2">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.description}</p>
                        </div>
                    ))}
                </section>
                <section className="text-center py-6 md:py-10 px-4 md:px-6 bg-gray-50">
                    <h2 className="text-xl md:text-2xl font-bold">Subscribe to our emails</h2>
                    <p className="text-gray-700 mt-2">Be the first to know about new collections and exclusive offers.</p>
                    <form className="mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="mt-2 w-full px-6 py-2 bg-[#DE9060] text-white rounded-lg hover:bg-[#FAD389] hover:text-black"
                        >
                            Subscribe
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default About
