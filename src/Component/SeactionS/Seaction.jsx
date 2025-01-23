import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const products = [
  { id: 1, title: "Koala Mattress ", price: 650.99, rating: 4.5, imageUrl: "https://au.koala.com/cdn/shop/files/AU_-_The_New_Koala_Mattress_-_Double_-_1_14cc7b35-b07f-4cd8-b9e8-6263a0327b84.webp?v=1728130488&width=720" },
  { id: 2, title: "Cushy Sofa Bed", price: 1200.99, rating: 4.7, imageUrl: "https://au.koala.com/cdn/shop/files/CushySofaBed_Gumleaf_Double_1-7MEyi5y1DgB0ROwzeyNpsD.jpg?v=1725435226&width=720" },
  { id: 3, title: "Koala Plus Mattress", price: 2500.99, rating: 4.8, imageUrl: "https://au.koala.com/cdn/shop/files/PlusMattress_4_1_ca134414-61db-43f8-8835-51271efe47df.jpg?v=1728227443&width=720" },
  { id: 4, title: "Byron Sofa Bed", price: 650.99, rating: 4.5, imageUrl: "https://au.koala.com/cdn/shop/files/Beauty_Morning_Grey_1-2QERYoBZ956T9xvKzc8RKJ.jpg?v=1725432358&width=720" },
  { id: 5, title: "Koala Luxe Mattress", price: 1200.99, rating: 4.7, imageUrl: "https://au.koala.com/cdn/shop/files/Queen_Luxe_Mattress_1_3.webp?v=1728130989&width=720" },
  { id: 6, title: "Modern Sofa", price: 2500.99, rating: 4.8, imageUrl: "https://au.koala.com/cdn/shop/files/Mask_group_1_-2zDIMEZoAbIriKsFUw4Rzm.jpg?v=1725432185&width=720" },
  { id: 7, title: "Koala SE MAttress", price: 650.99, rating: 4.5, imageUrl: "https://au.koala.com/cdn/shop/files/SEMattress_12_1_869df618-64d5-4f28-b432-ae4aa71c1bd5.jpg?v=1728227524&width=720" },
  { id: 8, title: "Kirribilli Beds Base", price: 1200.99, rating: 4.7, imageUrl: "https://au.koala.com/cdn/shop/files/KirribilliBedBase_Queen_10-37gChphwEiQGq4S0NDNu72.jpg?v=1725433209&width=720" },
  { id: 9, title: "Bangalow modular Sofas", price: 2500.99, rating: 4.8, imageUrl: "https://au.koala.com/cdn/shop/files/Greenwattle_3seater_1-3OKzAwBFg0ThpVaEjbLgm8.jpg?v=1725431902&width=720" },
  { id: 10, title: "BAlmain Bed Base", price: 650.99, rating: 4.5, imageUrl: "https://au.koala.com/cdn/shop/files/Balmain_Bed_Base_Queen_1-3pnFdJejnlAUx9qzGkbkbI.jpg?v=1725430275&width=1660" },
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
        <h2 className="text-left text-4xl font-extrabold font-serif">Bestsellers</h2>
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
