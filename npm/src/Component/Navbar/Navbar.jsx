import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Dropdown = ({ title, items, isOpen, toggleDropdown, onMouseEnter, onMouseLeave, underlineActive }) => {
  const dropdownRef = useRef(null);

  // Add hover state
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isOpen) {
          toggleDropdown();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <div className="z-20">
      <li
        ref={dropdownRef}
        className="relative cursor-pointer hover:text-gray-600 px-8 py-2 lg:p-0"
        onMouseEnter={() => {
          onMouseEnter();
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          onMouseLeave();
          setIsHovered(false);
        }}
      >
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none w-full lg:w-auto justify-between"
        >
          {title}
          <span
            className={`ml-1 text-sm transform transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"
              }`}
          >
            <IoIosArrowDown />
          </span>
        </button>
        {underlineActive && (
          <span
            className={`hidden lg:block h-[2px] bg-gray-800 transition-all duration-500 ${underlineActive ? "w-full" : "w-0"
              }`}
          ></span>
        )}
        <div
          className={`transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          {isOpen && (
            <ul className="flex flex-wrap justify-start gap-8 mt-4 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-white shadow-lg rounded-lg p-6 z-10 border border-gray-200 w-full lg:max-w-[1500px] lg:w-[800px]">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center w-[200px] transition-transform duration-500 hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[150px] h-[150px] object-cover rounded-md shadow-sm hover:shadow-md transition-shadow duration-500"
                  />
                  <span className="text-base mt-2 text-center hover:text-gray-600 transition-colors duration-500">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    </div>
  );
};

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false); // State to toggle search visibility
  const [query, setQuery] = useState(""); // State for search input

  // State for multiple dropdowns
  const [dropdowns, setDropdowns] = useState({
    sofas: false,
    bedroom: false,
    livingRoom: false,
    outdoor: false,
  });

  // State for underline animations
  const [underlineActiveShopSale, setUnderlineActiveShopSale] = useState(false);
  const [underlineActiveMattresses, setUnderlineActiveMattresses] = useState(false);
  const [underlineActiveSofaBeds, setUnderlineActiveSofaBeds] = useState(false);
  const [underlineActiveDropdown, setUnderlineActiveDropdown] = useState({
    sofas: false,
    bedroom: false,
    livingRoom: false,
    outdoor: false,
  });
  const [underlineActiveClearance, setUnderlineActiveClearance] = useState(false); // For the "Clearance" button

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => setQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
    setQuery("");
    setSearchActive(false); // Close the search bar after submission
  };

  const toggleDropdown = (category) => {
    setDropdowns((prev) => {
      const newDropdowns = { ...prev };

      // Close all dropdowns first
      Object.keys(newDropdowns).forEach((key) => {
        newDropdowns[key] = false;
      });

      // Toggle the clicked dropdown only if it's not already open
      newDropdowns[category] = !prev[category];

      return newDropdowns;
    });
  };

  const handleDropdownMouseEnter = (category) => {
    setUnderlineActiveDropdown((prev) => ({
      ...prev,
      [category]: true,
    }));
  };

  const handleDropdownMouseLeave = (category) => {
    setUnderlineActiveDropdown((prev) => ({
      ...prev,
      [category]: false,
    }));
  };

  const handleClearanceMouseEnter = () => {
    setUnderlineActiveClearance(true);
  };

  const handleClearanceMouseLeave = () => {
    setUnderlineActiveClearance(false);
  };


  // const handleLogoClick = () => {
  //   // Implement the action when the logo is clicked (e.g., redirect to homepage)
  //   alert("Logo clicked!");
  // };

  // const handleProfileClick = () => {
  //   navigate("/signup"); // Navigate to the profile page (you can change "/profile" to any route)
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all dropdowns when toggling mobile menu
    setDropdowns({
      sofas: false,
      bedroom: false,
      livingRoom: false,
      outdoor: false,
    });
  };

  const dropdownItems = {
    sofas: [
      { name: "Sofas", image: "src/assets/Image/nav/ModernSofa_ArvoStorm_3Seater_4_1.webp" },
      { name: "Sofa Beds", image: "src/assets/Image/nav/CushyLuxe_Gumleaf_Queen_8_2.webp" },
      { name: "Modular Sofas", image: "src/assets/Image/nav/e6077df4957a1c776616766922096db6.webp" },
      { name: "Chaise Sofas", image: "src/assets/Image/nav/ModernSofa_ArvoStorm_3Seater_4_1.webp" },
      { name: "Corner Sofas", image: "src/assets/Image/nav/5339e3a318c889036c8a8730676e26ce.webp" },
      { name: "Armchairs", image: "src/assets/Image/nav/bfa60f1787bbaab0c566e5e801a4ce80.webp" },
      { name: "Ottomans", image: "src/assets/Image/nav/0ee6644e40dc228648c53f85e758f77b.webp" },
      { name: "Sofa Modules", image: "src/assets/Image/nav/e6077df4957a1c776616766922096db6.webp" },
      { name: "Sofa Covers", image: "src/assets/Image/nav/8c19d14e86a86c19ce403b84ad12819c_d621ef82-9feb-4107-a708-0c5c8581212e.webp" },
    ],

    bedroom: [
      { name: "Mattresses", image: "src/assets/Image/nav/badrooms/0ee6644e40dc228648c53f85e758f77b.webp" },
      { name: "Bed-Bases", image: "src/assets/Image/nav/badrooms/Kirribilli_Bed_Base_Queen_10_1.webp" },
      { name: "Bundler", image: "src/assets/Image/nav/badrooms/CushyLuxe_PenguinParade_Double_1_ca892c9b-5879-49a0-bf12-cd88f3e4adc2_1.webp" },
      { name: "Kids", image: "src/assets/Image/nav/badrooms/119b9239bdbbebbe0e2cad70a251e78e.webp" },
      { name: "Pillows", image: "src/assets/Image/nav/badrooms/20210518_DTP_Studio_AU_Pillow0867.webp" },
      { name: "Bedside Tables", image: "src/assets/Image/nav/badrooms/e3ebe3004e7cf22d8ad59e834dcf084b.webp" },
      { name: "Chest of Drawers", image: "src/assets/Image/nav/badrooms/b929cefe306232c99ad7c11331e289e2.webp" },
      { name: "Bed Covers of sheets", image: "src/assets/Image/nav/badrooms/8215438cc5a02988bff0ac91a9378639_7fa70ae0-1627-438f-bc28-28f1bbe925ff.webp" },
      { name: "Mattress Protectors", image: "src/assets/Image/nav/badrooms/protector.webp" },
      { name: "Duvets", image: "src/assets/Image/nav/badrooms/83e5760dce9ee3eafc38e66f632a9a8c.webp" },
      { name: "Rugs", image: "src/assets/Image/nav/badrooms/ff220ca59ff40373d7bb325344fa2ca5.webp" },
    ],
    livingRoom: [
      { name: "Sofa Beds", image: "src/assets/Image/nav/CushyLuxe_Gumleaf_Queen_8_2.webp" },
      { name: "Sofas", image: "src/assets/Image/nav/LIVING/ModernSofa_ArvoStorm_3Seater_4_1.webp" },
      { name: "Armchairs", image: "src/assets/Image/nav/bfa60f1787bbaab0c566e5e801a4ce80.webp" },
      { name: "Rugs", image: "src/assets/Image/nav/badrooms/ff220ca59ff40373d7bb325344fa2ca5.webp" },
      { name: "Bookshelves", image: "src/assets/Image/nav/LIVING/2716e936a2eec1f41bb0afd8f978e802.webp" },
      { name: "Tv Units & Consoles", image: "src/assets/Image/nav/LIVING/tv.webp" },
      { name: "Coffee & Side Tables", image: "src/assets/Image/nav/LIVING/coffee_table.webp" },
      { name: "Ottomans", image: "src/assets/Image/nav/0ee6644e40dc228648c53f85e758f77b.webp" },
      { name: "Sofa Covers", image: "src/assets/Image/nav/8c19d14e86a86c19ce403b84ad12819c_d621ef82-9feb-4107-a708-0c5c8581212e.webp" },
    ],
    outdoor: [
      { name: "Outdoor Lounge Sets", image: "src/assets/Image/nav/outdoor/041d07346266ec3f6edf1a4ee7de14c2.png" },
      { name: "Outdoor Dining Sets", image: "src/assets//Image/nav/outdoor/fa13a7cda679550c50817a11d7446ed5.webp" },
      { name: "Outdoor Lounge chairs", image: "src/assets/Image/nav/outdoor/5345895de78485128e31b5c5b46db2f8.webp" },
      { name: "Outdoor Coffee Tables", image: "src/assets/Image/nav/outdoor/3fe2d629835e65c8e142b4131861db11.webp" },
      { name: "Outdoor Dining Tables", image: "src/assets/Image/nav/outdoor/66f21938eeec496633b6eda3f524a7e5.webp" },
      { name: "Outdoor Dining Seating", image: "src/assets/Image/nav/outdoor/e45601cf76481eb8e2b784ddc541d070.webp" },
    ],
  };

  // Add effect to close dropdowns when mobile menu is closed
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setDropdowns({
        sofas: false,
        bedroom: false,
        livingRoom: false,
        outdoor: false,
      });
    }
  }, [isMobileMenuOpen]);

  // Add effect to close dropdowns when search is opened
  useEffect(() => {
    if (searchActive) {
      setDropdowns({
        sofas: false,
        bedroom: false,
        livingRoom: false,
        outdoor: false,
      });
    }
  }, [searchActive]);

  return (
    <nav className="z-20 flex justify-between items-center py-4 px-6 bg-white shadow-md relative h-12">
      {/* Logo */}
      <div className="flex items-center text-gray-800 font-bold w-[110px] ml-[10px]">
        <img src="src\assets\Image\Koala Mattresses & Furniture - Fast & flexible delivery – Koala AU\download (1).png" alt="" srcset="" />
      </div>

      {/* Navigation Links - Remove the mobile menu button from here */}
      <ul
        className={`${isMobileMenuOpen
          ? "flex flex-col absolute top-12 left-0 w-full bg-white shadow-md py-4 z-50"
          : "hidden lg:flex"
          } lg:space-x-6 lg:items-center text-gray-800 text-lg transition-all duration-700 ease-in-out ${searchActive ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <li className="px-6 py-2 lg:p-0">
          <button
            className="bg-[#F9D997] text-black px-4 rounded font-semibold w-full lg:w-auto text-left"
            onMouseEnter={() => setUnderlineActiveShopSale(true)}
            onMouseLeave={() => setUnderlineActiveShopSale(false)}
          >
            Shop Sale
            <span
              className={`hidden lg:block h-[2px] bg-gray-800 transition-all duration-300 ${underlineActiveShopSale ? "w-full" : "w-0"
                }`}
            ></span>
          </button>
        </li>
        <li
          className="cursor-pointer hover:text-gray-600 px-6 lg:p-0"
          onMouseEnter={() => setUnderlineActiveMattresses(true)}
          onMouseLeave={() => setUnderlineActiveMattresses(false)}
        >
          Mattresses
          <span
            className={`block h-[2px] bg-gray-800 transition-all duration-300 ${underlineActiveMattresses ? "w-full" : "w-0"}`}
          ></span>
        </li>
        <li
          className="cursor-pointer hover:text-gray-600 px-6 lg:p-0"
          onMouseEnter={() => setUnderlineActiveSofaBeds(true)}
          onMouseLeave={() => setUnderlineActiveSofaBeds(false)}
        >
          Sofa Beds
          <span
            className={`block h-[2px] bg-gray-800 transition-all duration-300 ${underlineActiveSofaBeds ? "w-full" : "w-0"}`}
          ></span>
        </li>

        {Object.keys(dropdowns).map((category) => (
          <Dropdown
            key={category}
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            items={dropdownItems[category]}
            isOpen={dropdowns[category]}
            toggleDropdown={() => toggleDropdown(category)}
            onMouseEnter={() => handleDropdownMouseEnter(category)}
            onMouseLeave={() => handleDropdownMouseLeave(category)}
            underlineActive={underlineActiveDropdown[category]}
          />
        ))}

        <li
          className="cursor-pointer hover:text-gray-600 px-6 lg:p-0"
          onMouseEnter={handleClearanceMouseEnter}
          onMouseLeave={handleClearanceMouseLeave}
        >
          Clearance
          <span
            className={`block h-[2px] bg-gray-800 transition-all duration-300 ${underlineActiveClearance ? "w-full" : "w-0"}`}
          ></span>
        </li>
      </ul>

      {/* Icons, Search Box, and Mobile Menu Button */}
      <div className="flex items-center space-x-4 text-gray-800 text-xl">
        {searchActive ? (
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border border-gray-400 rounded-full px-4 py-2 bg-white shadow-md w-full max-w-lg transform transition-all duration-300 absolute left-1/2 transform -translate-x-1/2"
          >
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search"
              className="flex-grow border-none focus:outline-none text-lg"
            />
            <button type="submit">
              <FaSearch className="text-gray-600" />
            </button>
            <FaTimes
              className="ml-2 text-gray-600 cursor-pointer"
              onClick={() => setSearchActive(false)}
            />
          </form>
        ) : (
          <div className="flex items-center space-x-4">
            <FaSearch
              className="text-gray-800 text-xl cursor-pointer"
              onClick={() => setSearchActive(true)}
            />
              <span
              className="cursor-pointer hover:text-gray-600"
              // onClick={handleProfileClick}
            >
              <MdPerson className="text-xl" />
            </span>
            <span className="cursor-pointer hover:text-gray-600">
              <FaCartShopping />
            </span>
            {/* Updated hamburger/close button */}
            <button
              className="lg:hidden text-gray-800 text-2xl transition-transform duration-300"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
