import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import Abcd from '../../assets/secition/one/one.png'


const Navbar = () => {
  const [dropdowns, setDropdowns] = useState([false, false, false, false]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef([]);

  const toggleDropdown = (index) => {
    setDropdowns((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  const handleOutsideClick = (event) => {
    if (!dropdownRefs.current.some((ref) => ref && ref.contains(event.target))) {
      setDropdowns([false, false, false, false]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const categories = [
    {
      title: "Sofas",
      subcategories: [
        { name: "Leather Sofas", imgSrc: "abcd" },
        { name: "Fabric Sofas", imgSrc: "/images/fabric-sofa.jpg" },
        { name: "Recliners", imgSrc: "/images/recliner.jpg" },
      ],
    },
    {
      title: "Bedrooms",
      subcategories: [
        { name: "Beds", imgSrc: "/images/bed.jpg" },
        { name: "Wardrobes", imgSrc: "/images/wardrobe.jpg" },
        { name: "Dressers", imgSrc: "/images/dresser.jpg" },
      ],
    },
    {
      title: "Living Room",
      subcategories: [
        { name: "Coffee Tables", imgSrc: "/images/coffee-table.jpg" },
        { name: "TV Stands", imgSrc: "/images/tv-stand.jpg" },
        { name: "Accent Chairs", imgSrc: "/images/accent-chair.jpg" },
      ],
    },
    {
      title: "Outdoor",
      subcategories: [
        { name: "Outdoor Sofas", imgSrc: "/images/outdoor-sofa.jpg" },
        { name: "Dining Sets", imgSrc: "/images/dining-set.jpg" },
        { name: "Fire Pits", imgSrc: "/images/fire-pit.jpg" },
      ],
    },
  ];

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 pl-0 pr-0 mr-5">
        {/* Logo */}
        <Link to="/" className="text-2xl   font-bold text-gray-800">
      Koala
        </Link>

        {/* Hamburger Menu Icon and Right-Side Icons (Mobile) */}
        <div className="lg:hidden flex items-center  space-x-6">
          {/* Search Icon */}
          <FaSearch
            className="text-gray-800 text-xl cursor-pointer"
            onClick={() => setIsSearchActive(!isSearchActive)}
          />

          {/* Cart Icon */}
          <Link to="/cart">
            <FaCartPlus className="text-gray-800 text-xl cursor-pointer" />
          </Link>

          {/* Log In Icon */}
          <Link to="/login">
            <FaUser className="text-gray-800 text-xl cursor-pointer" />
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto absolute lg:static bg-gray-100 top-16 left-0 lg:bg-transparent lg:shadow-none shadow-lg z-10`}
        >
          {/* Main Links */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <Link to="/Mattres" className="text-yellow-600 font-semibold">
              Shop Sale
            </Link>
            <Link to="/Mattres" className="hover:text-gray-600">
              Mattresses
            </Link>
            <Link to="/Mattres" className="hover:text-gray-600">
              Sofa Beds
            </Link>

            {/* Dropdown Menus */}
            {categories.map((category, index) => (
              <div
                key={index}
                ref={(el) => (dropdownRefs.current[index] = el)}
                className="relative"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="hover:text-gray-600 flex items-center space-x-1"
                >
                  <span>{category.title}</span>
                  <span
                    className={`transition-transform ${
                      dropdowns[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {dropdowns[index] && (
                  <div className="absolute bg-white shadow-md mt-2 rounded-md w-56 z-10">
                    <div className="flex flex-wrap p-4 gap-4">
                      {category.subcategories.map((sub, subIndex) => (
                        <div key={subIndex} className="w-1/3 text-center">
                          <img
                            src={sub.imgSrc}
                            alt={sub.name}
                            className="w-full h-20 object-cover rounded-md mb-2"
                          />
                          <Link
                            to={`/${category.title
                              .toLowerCase()
                              .replace(" ", "-")}/${sub.name
                              .toLowerCase()
                              .replace(" ", "-")}`}
                            className="text-gray-800 hover:text-gray-600 text-sm"
                          >
                            {sub.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Clearance Button */}
            <Link to="Mattres">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4 lg:mt-0">
                Clearance
              </button>
            </Link>
          </div>
        </div>

        {/* Right-Side Icons (Desktop) */}
        <div className="hidden lg:flex items-center m-1 space-x-3">
          {/* Search Bar */}
          <div className="relative">
            {isSearchActive ? (
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-200 border border-gray-300 pl-8 pr-4 py-2 rounded-md w-64"
              />
            ) : (
              <FaSearch
                className="text-gray-600 cursor-pointer"
                onClick={() => setIsSearchActive(true)}
              />
            )}
          </div>
          {/* Login and Cart */}
          <Link to="/login" className="flex items-center text-gray-600">
            <FaUser className="mr-1" />
            Log In
          </Link>
          <Link to="/cart" className="text-gray-600">
            <FaCartPlus />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
