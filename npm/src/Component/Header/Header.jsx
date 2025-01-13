// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false); // Desktop About dropdown
    const [isCountryOpen, setIsCountryOpen] = useState(false); // Desktop Country dropdown
    const [selectedCountry, setSelectedCountry] = useState(null); // To store the selected country

    const countries = [
        { country: "Australia", flagSrc: "data:image/png;base64,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" },
        { country: "United Kingdom", flagSrc: "data:image/png;base64,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" },
        { country: "Japan", flagSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAb1BMVEX///+8AC27ACq3AAC6ACG7ACa6ACO5ABi5ABy7ACj9+fq4ABS4ABC4AAu3AAP14OTcl6D78fPPbnnakZrpv8W+IDfw0dbJU2LBLkPUe4blsrnsxszWhY7eoKbmt7z46OvFRlXhqq/OZnPKW2fDO00P6eL9AAAER0lEQVR4nO3d23aqMBAGYEkChJMUVCoeCrZ9/2fcoNtltVUQMyTR/7vsFTMLJ5NJtJMJAAAAAAAAAAAAAAAAAAAAAMDTC7O02EuzUPezaBAWu/J9GXM+TRpTzuPle7krXicVYbH99mNfuIHzQ+CK5o/120skoigXXLrOFa7ki7LQ/Yy0qrcFF+xaBg6Y4M6s0v2kZNJc+h0Z+J8HKfNU99OSSHMu+mTgQPDP50tDVt6TgkMaykz3U6u1c+V9KWhJd6f7uRWq6qRXLbjEkvppKuRKekNS0PLkSvfTq5HzoSlo8Vz38ytQLQdUg5/k0vqPRMqudod9uczyxXKdBN1Rdgmma91xPGI+bFW4xJK57kiGU5QDq7NQPLQsnOOWfiJSqeg9aDFpZXXMmIKaeBIwG3cS9Z0bpi6i1h3R/TaR2hw4TrTRHdO91gqL4tHUsiUicxUWxSPm2lUWcsUF4UBYtZlaTylyYFm3sFS6Op4ES92R9beNaXLQrBBb3bH1FfpUOXAc35YDqtmDY5SbSZjpjq6fMCBYHo9YYMersFXeK/5kSVVwCF+E5lVwdMfXx5psaTiIbegVPgcfMvTjfeqOsFtI/CI0VcH80rgiT0Js/qHU18PnDF3cL90xdslo14YWc0zfURcJdQ4cJzH9UhNly3wkTW+da/KS0BSFWneUHcjXhlasO8rbUoL56m/c7IOYOenm6Sgye+y8HaEuNpXR7J1kSTJlviRK3XHeRN8vtgzvGWuiMfNFEmrdcd5ENWs/Z/bkPVyQ7xxabGnybnqsJCyQBCQBSbAjCWOtDiYnYaQ+Iah1x3kTOsZGTnzocOCZfWNljOma8fO1FeHVhBPf7JOHguiy0rmp2ePmcJzxmtEr5GQyRrfEFrqj7DDGaMnwwdJk8jHCzD3+0B1lh2qMEyjjvx5Hv3swe660R98uGd4qtejPoAw/f9r7Jv48BN+6I+xhR9w5+zb8nkBGfBwZmX5PZY/mCx9HlnzxIyW9sZNYUBZbX4STFc/sodIJ5Sppw/p48ElWFYQFd3r/q8hWSd/4bcPJjCgLtnzv5WBB0jYGpk9TztHMGo2/ynqhJOgbI9MnSr98Kz+Lcm3YOZ2rIsUjVxZZtDIczRW3TNzsG5xXbJXuIRKzL3BeVSqcPMfWFcWjXNkSEdnTLv+iKguRHUOEK3IldSGxOgeTyUZBFhLrflbn0o4/2C8wbum68FPBHho0eYFlG4a/Ze8PlMfo3cI+8U9vfOBGwuVvup9dnaqOB1QGFj/PLxbvrcTdB7VS2HDWdJdw5t/z+4xM+hvDbyYNkm3cfj/q36TAdzdWnLYNkG0d7nXmgXnc2T5rCvaK3Ilv/ZsLJmInf4rO4KZwXi7iSPyxaLoiip1y/oyl4C/pR1lLnvhSCK8hhPQTLutyZc0hmyJhVax2mzJvlJvdqqhe5Q0AAAAAAAAAAAAAAAAAAAAAgNf1D53+Qj8zo+6sAAAAAElFTkSuQmCC" },
    ];

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsCountryOpen(false); // Close the dropdown when a country is selected
    };

    return (
        <header className="relative bg-[#DE9060] w-full z-30">
            <div className="flex flex-wrap justify-between items-center w-full py-2 px-3 md:px-5">
                {/* About Dropdown - Hidden on mobile, visible on tablet and desktop */}
                <div
                    className="relative hidden md:inline-block"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                >
                    <button
                        className="text-sm font-medium rounded-lg px-3 md:px-5 py-2.5 inline-flex items-center transition-colors duration-300 text-white bg-[#DE9060]"
                    >
                        About
                        <svg
                            className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${isAboutOpen ? "rotate-180" : "rotate-0"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                            aria-hidden="true"
                        >
                            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {isAboutOpen && (
                        <div
                            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#FFFAFA]"
                            style={{ top: "30px" }}
                            role="menu"
                        >
                            <ul className="py-2 text-sm text-black">
                                {["Why Koala", "Koala Second Home", "Sydney Showroom"].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                           to='/About'
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#DE9060] dark:hover:text-white"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Black Friday Sale Button - Responsive text sizing */}
                <div className="flex-1 text-center text-white group px-2 md:px-4">
                    <a
                        href="#"
                        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold hover:text-black relative inline-block"
                    >
                        Black Friday sale | up to 30% off everything
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transform transition-all duration-300 origin-left" />
                    </a>
                </div>

                {/* Extra Links - Hidden on mobile, visible on tablet and desktop */}
                <div className="hidden md:flex justify-end items-center text-white gap-2 md:gap-3">
                    <a href="#" className="text-xs md:text-sm font-semibold hover:text-gray-300">FAQs</a>
                    <a href="#" className="text-xs md:text-sm font-semibold hover:text-gray-300">Trade</a>
                    <a href="#" className="text-xs md:text-sm font-semibold hover:text-gray-300 whitespace-nowrap">Manage my order</a>

                    {/* Country Dropdown - Responsive sizing */}
                    <div
                        className="relative inline-block"
                        onMouseEnter={() => setIsCountryOpen(true)}
                        onMouseLeave={() => setIsCountryOpen(false)}
                    >
                        <button
                            className="text-xs md:text-sm font-medium rounded-lg px-2 md:px-4 py-2 inline-flex items-center transition-colors duration-300 text-white bg-[#DE9060]"
                        >
                            {selectedCountry ? (
                                <span className="flex items-center">
                                    <img
                                        src={selectedCountry.flagSrc}
                                        alt={selectedCountry.country}
                                        className="w-4 md:w-5 h-4 md:h-5 mr-1 md:mr-2"
                                    />
                                    <span className="hidden md:inline">{selectedCountry.country}</span>
                                </span>
                            ) : (
                                "Country"
                            )}
                            <svg
                                className={`w-2 md:w-2.5 h-2 md:h-2.5 ml-1 md:ml-2 transition-transform duration-300 ${isCountryOpen ? "rotate-180" : "rotate-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {isCountryOpen && (
                            <div
                                className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#FFFAFA]"
                                style={{ top: "30px" }}
                                role="menu"
                            >
                                <ul className="py-2 text-xs md:text-sm text-black">
                                    {countries.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handleCountrySelect(item)}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#DE9060] dark:hover:text-white w-full text-left"
                                            >
                                                <img
                                                    src={item.flagSrc}
                                                    alt={item.country}
                                                    className="inline-block mr-2 w-4 md:w-5 h-4 md:h-5"
                                                />
                                                {item.country}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Country Selector - Only visible on mobile */}
                <div className="md:hidden">
                    {selectedCountry && (
                        <button className="flex items-center text-white">
                            <img
                                src={selectedCountry.flagSrc}
                                alt={selectedCountry.country}
                                className="w-5 h-5"
                            />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
