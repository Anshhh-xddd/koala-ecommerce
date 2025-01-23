import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const products = [
    { id: 1, title: "Bangalow Modualar Sofas", price: 650.99, rating: 4.5, imageUrl: "https://au.koala.com/cdn/shop/files/Greenwattle_3seater_1-3OKzAwBFg0ThpVaEjbLgm8.jpg?v=1725431902&width=1660" },
    { id: 2, title: "Suffolk Sofa", price: 1200.99, rating: 4.7, imageUrl: "https://au.koala.com/cdn/shop/files/Suffolk_Sofa_3.5_Chaise_CoastalMoss_1-5NbXRQHdtyMQ78xJESySeL.jpg?v=1725431093&width=720" },
    { id: 3, title: "Wanda Sofa Bed", price: 2500.99, rating: 4.8, imageUrl: "https://au.koala.com/cdn/shop/files/Wanda_SunsetBlush_1.webp?v=1727356006&width=720" },
    { id: 4, title: "Torakina Outdoor Lounge Sets", price: 650.99, rating: 4.5, imageUrl: "https://au.koala.com/cdn/shop/files/Outdoor_Torakina_LoungeSet1__SoftMoss_1-4tKgT4EMdq7sAwV70XAvAs.jpg?v=1725430405&width=720" },
    { id: 5, title: "Torakina Outdoor Dining Sets", price: 1200.99, rating: 4.7, imageUrl: "https://au.koala.com/cdn/shop/files/Outdoor_Torakina_DiningSet1_Rose_1-4ijAzOTZhaW1GSVFGezdjh.png?v=1725430469&width=720" },
    { id: 6, title: "Balmain Bedside Table", price: 2500.99, rating: 4.8, imageUrl: "https://au.koala.com/cdn/shop/files/Balmain_BedsideTable_1-44eSARIUEZaEoFfqYcojHt.jpg?v=1725430238&width=720" },
    { id: 7, title: "Balmain Chest of Drawers", price: 650.99, rating: 4.5, imageUrl: "https://au.koala.com/cdn/shop/files/Balmain_ChestOfDrawers_5Drawers_1-5ZCCWv5u2bDClKCj4MGv7L.jpg?v=1725430290&width=720" },
    { id: 8, title: "Suffolk armchair", price: 1200.99, rating: 4.7, imageUrl: "https://au.koala.com/cdn/shop/files/Suffolk_Armchair_Sandstone_1-68vH5molvpx1jiDpWODR1E.jpg?v=1725431123&width=720" },
    { id: 9, title: "Suffolk Ottoman", price: 2500.99, rating: 4.8, imageUrl: "https://au.koala.com/cdn/shop/files/Suffolk_Ottoman_CoastalMoss_1-7e7LYoltx6uVUs7yA0jZWH.jpg?v=1725430846&width=720x`x`" },
    // { id: 10, title: "HP Spectre x36`0 15", price: 650.99, rating: 4.5, imageUrl: "/assets/images/product1.png" },
];

const ProductCard = ({ product }) => (
    <Link to={`/product/${product.id}`} className="no-underline">
        <div className="relative w-full h-auto bg-white text-black rounded-xl border shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">{product.title}</h1>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-yellow-400">&#9733; &#9733; &#9733; &#9733; &#9734;</div>
                    <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    </Link>
);

const SeactionThree = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < products.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const underlineStyle = {
        transform: `translateX(${currentIndex * 260}px)`,
        transition: "transform 0.5s ease",
    };

    return (
        <div className="relative w-full bg-gray-200 py-8 mt-4">
            <div className="flex items-center justify-between px-6 mb-6">
                <h2 className="text-left text-4xl font-extrabold font-serif">New seller</h2>
            </div>

            {/* Product Carousel */}
            <div className="relative overflow-hidden px-6 py-10">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 260}px)` }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-[240px] mx-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                {/* Underline */}
                <div className="absolute bottom-0 left-0 w-[240px] h-[4px] bg-[#DE9060]" style={underlineStyle}></div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute right-4 top-1/2 transform -translate-y-[200px] z-10 flex items-center gap-4">
                <button
                    onClick={handlePrev}
                    className="bg-white text-black rounded-full shadow-md p-3 hover:bg-gray-100"
                    aria-label="Previous"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-white text-black rounded-full shadow-md p-3 hover:bg-gray-100"
                    aria-label="Next"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default SeactionThree;
