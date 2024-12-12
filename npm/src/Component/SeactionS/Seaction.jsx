import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const products = [
    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },
    {
        id: 2,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product2.png",
    },
    {
        id: 3,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product3.png",
    },
    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },
    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },

    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },
    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },
    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },
    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },
    {
        id: 1,
        title: "HP Spectre x360 15",
        price: 650.99,
        rating: 4.5,
        imageUrl: "/assets/images/product1.png",
    },
];

const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <div className="flex items-center">
                {Array(fullStars)
                    .fill()
                    .map((_, index) => (
                        <span key={`full-${index}`} className="text-yellow-400">&#9733;</span>
                    ))}
                {halfStar === 1 && <span className="text-yellow-400">&#9734;</span>}
                {Array(emptyStars)
                    .fill()
                    .map((_, index) => (
                        <span key={`empty-${index}`} className="text-gray-400">&#9734;</span>
                    ))}
                <span className="ml-2 text-gray-600">({rating.toFixed(1)})</span>
            </div>
        );
    };

    return (
        <div className="relative w-full h-auto bg-white text-black rounded-xl border shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">{product.title}</h1>
                <div className="flex items-center justify-between mt-2">
                    {renderStars(product.rating)}
                    <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                </div>
                {/* <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2 bg-[#DE9060] text-white rounded-full hover:bg-[#e9b665] transition-all">
            Buy Now
          </button>
          <button className="flex-1 py-2 border border-[#DE9060] text-[#DE9060] rounded-full hover:bg-[#DE9060] hover:text-white transition-all">
            Add to Cart
          </button>
        </div> */}
            </div>
        </div>
    );
};

const Seaction = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 1;
    const cardWidth = 240;
    const cardSpacing = 16;

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < products.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="relative w-full bg-gray-200 py-8 mt-4 overflow-hidden" {...handlers}>
            {/* Aligned See All Button with Save on Bestsellers text */}
            <div className="flex items-center justify-between px-6 mb-6">
                <h2 className="text-left text-4xl font-extrabold font-serif">Australia's most awarded mattress brand</h2>
                <button className="px-4 py-2 font-semibold text-black rounded-full hover:text-gray-400 underline">
                    See All
                </button>
            </div>

            {/* Underline Animation */}
            <div className="absolute bottom-[100px] left-0 w-full max-w-[20%] h-1 bg-[#DE9060] transition-transform duration-700 hidden md:block" style={{ transform: `translateX(${currentIndex * (cardWidth + cardSpacing)}px)` }} />

            {/* Carousel Container */}
            <div className="flex overflow-hidden px-6 py-10">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (cardWidth + cardSpacing)}px)`,
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-[240px] mx-2 sm:w-[180px] md:w-[200px]"
                            style={{ minWidth: `${cardWidth}px` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Moved Carousel Controls down further */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-y-56 z-10 flex items-center gap-4">
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

            {/* Category Buttons */}
            <div className="flex overflow-x-auto no-scrollbar px-[50px] gap-4 mt-6">
                {["Featured", "Sofa Beds", "Mattresses", "Sofas", "Bed Bases", "Pillows", "Bookshelves"].map(
                    (category) => (
                        <button
                            key={category}
                            onClick={() => filterByCategory(category)}
                            className="flex-shrink-0 px-4 py-2 bg-[#DE9060] text-white rounded-full hover:bg-[#e9b665] transition-all"
                        >
                            {category}
                        </button>
                    )
                )}
                {/* <button className="flex-shrink-0 px-4 py-2 font-semibold text-black rounded-full hover:text-gray-400 underline">
          See All
        </button> */}
            </div>
        </div>
    );
};

export default Seaction