import React, { useState, useEffect } from "react";

const slides = [
  { image: "src/assets/Image/Carousel/17323070830190bxaxz0k.png", title: "Up to 30% off", description: "On Every Item" },
  { image: "src/assets/Image/Carousel/1732307434981gvx6k9j2.png", title: "Black Friday Sale", description: "Assured discount" },
  // Add more slides here
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 7000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="carousel relative h-[500px] md:h-[700px] lg:h-[800px] z-0 overflow-hidden bg-[#de8e5f]">
      <div className="relative h-full flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-4 md:px-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-left font-bold text-[#ebb54b]">
                {slide.title}
              </h1>
              <p className="text-center sm:text-left text-[#ebb54b] font-bold md:text-lg lg:text-2xl mt-4 mx-4 max-w-md">
                {slide.description}
              </p>
              <div className="mt-4 flex justify-center sm:justify-start">
                <button className="px-6 py-2 bg-[#FCD78C] rounded-[60px] text-white font-bold transition hover:bg-[#ebb54b] hover:text-black text-lg sm:w-[250px] md:w-[300px] lg:w-[350px]">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#de8e5f] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FCD78C] transition"
        >
          <BiSolidLeftArrow />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#de8e5f] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FCD78C] transition"
        >
          <BiSolidRightArrow />
        </button> */}
      </div>

      {/* Time Running Animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FCD78C] animate-[runningTime_7s_linear_infinite]" />
    </div>
  );
}

export default Carousel;
