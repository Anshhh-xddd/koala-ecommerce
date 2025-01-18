import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const products = [
  { id: 1, title: "HP Spectre x360 15", price: 650.99, rating: 4.5, imageUrl: "/assets/images/product1.png" },
  { id: 2, title: "Dell XPS 13", price: 1200.99, rating: 4.7, imageUrl: "/assets/images/product2.png" },
  { id: 3, title: "Apple MacBook Pro", price: 2500.99, rating: 4.8, imageUrl: "/assets/images/product3.png" },
  { id: 4, title: "HP Spectre x360 15", price: 650.99, rating: 4.5, imageUrl: "/assets/images/product1.png" },
  { id: 5, title: "Dell XPS 13", price: 1200.99, rating: 4.7, imageUrl: "/assets/images/product2.png" },
  { id: 6, title: "Apple MacBook Pro", price: 2500.99, rating: 4.8, imageUrl: "/assets/images/product3.png" },
  { id: 7, title: "HP Spectre x360 15", price: 650.99, rating: 4.5, imageUrl: "/assets/images/product1.png" },
  { id: 8, title: "Dell XPS 13", price: 1200.99, rating: 4.7, imageUrl: "/assets/images/product2.png" },
  { id: 9, title: "Apple MacBook Pro", price: 2500.99, rating: 4.8, imageUrl: "/assets/images/product3.png" },
  { id: 10, title: "HP Spectre x360 15", price: 650.99, rating: 4.5, imageUrl: "/assets/images/product1.png" },
];

const SeactionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < products.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart.`);
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicked`);
  };

  return (
    <div className="relative w-full bg-gray-200 py-8 mt-4">
      {/* Section Title */}
      <div className="flex items-center justify-between px-6 mb-6">
        <h2 className="text-left text-4xl font-extrabold font-serif">Top Rated Products</h2>  
      </div>

      {/* Product Carousel */}
      <div className="flex overflow-hidden px-6 py-10">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 260}px)` }}>
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[240px] mx-2">
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute right-4 top-1/2 transform -translate-y-[200px] z-10 flex items-center gap-4">
        <button onClick={handlePrev} className="bg-white text-black rounded-full shadow-md p-3 hover:bg-gray-100" aria-label="Previous">
          <FaArrowLeft />
        </button>
        <button onClick={handleNext} className="bg-white text-black rounded-full shadow-md p-3 hover:bg-gray-100" aria-label="Next">
          <FaArrowRight />
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex overflow-x-auto gap-4 px-6 mb-6">
        <button className="px-4 py-2 text-white rounded-md shadow" style={{ backgroundColor: '#DE9060' }} onClick={() => handleButtonClick('Featured')}>
          Featured
        </button>
        <button className="px-4 py-2 text-white rounded-md shadow" style={{ backgroundColor: '#DE9060' }} onClick={() => handleButtonClick('Sofa Beds')}>
          Sofa Beds
        </button>
        <button className="px-4 py-2 text-white rounded-md shadow" style={{ backgroundColor: '#DE9060' }} onClick={() => handleButtonClick('Mattresses')}>
          Mattresses
        </button>
        <button className="px-4 py-2 text-white rounded-md shadow" style={{ backgroundColor: '#DE9060' }} onClick={() => handleButtonClick('Sofas')}>
          Sofas
        </button>
        <button className="px-4 py-2 text-white rounded-md shadow" style={{ backgroundColor: '#DE9060' }} onClick={() => handleButtonClick('Bed Bases')}>
          Bed Bases
        </button>
        <button className="px-4 py-2 text-white rounded-md shadow" style={{ backgroundColor: '#DE9060' }} onClick={() => handleButtonClick('Pillows')}>
          Pillows
        </button>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
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
    <Link to={`/product/${product.id}`} className="no-underline">
      <div className="relative w-full h-auto bg-white text-black rounded-xl border shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover rounded-t-xl" />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{product.title}</h1>
          <div className="flex items-center justify-between mt-2">
            {renderStars(product.rating)}
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2 bg-[#DE9060] text-white rounded-full hover:bg-[#e9b665] transition-all">
              Buy Now
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 py-2 border border-[#DE9060] text-[#DE9060] rounded-full hover:bg-[#DE9060] hover:text-white transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SeactionTwo;
