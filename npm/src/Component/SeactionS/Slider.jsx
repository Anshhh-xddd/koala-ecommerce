import React from "react";

const items = [
    {
        image: "https://au.koala.com/cdn/shop/files/gq_1.svg?v=1726543341",
        // caption: "GQ Australia",
    },
    {
        image: "https://au.koala.com/cdn/shop/files/Group.svg?v=1726543341",
        // caption: "The Sydney Morning Herald",
    },
    {
        image: "https://au.koala.com/cdn/shop/files/Page-1.svg?v=1726543341",
        // caption: "Vogue Australia",
    },
    {
        image: "https://au.koala.com/cdn/shop/files/layer1.svg?v=1726543341",
        // caption: "Good Design Award",
    },
    {
        image: "https://au.koala.com/cdn/shop/files/Harper_s_Bazaar_Logo_1.svg?v=1726543341",
        // caption: "Harper's Bazaar",
    },
];

export default function Slider() {
    return (
        <div className="h-auto w-full bg-[#DE9060] py-8 mt-5">
            {/* Header Section */}
            <div className="text-white text-left text-5xl md:text-6xl font-bold font-serif ml-8 md:ml-16 mb-6">
                As seen in
            </div>

            {/* Marquee Section */}
            <div className="relative overflow-hidden">
                <div className="flex w-full animate-marquee [--duration:25s] hover:[animation-play-state:paused] space-x-6 px-8">
                    {/* Render logos in two loops for continuous scrolling */}
                    {[...items, ...items].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 h-full w-60 md:w-80 bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            {/* Image */}
                            <div className="flex justify-center items-center h-40 md:h-60 bg-gray-100">
                                <img
                                    src={logo.image}
                                    alt={`Featured in ${logo.caption}`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            {/* Caption */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
