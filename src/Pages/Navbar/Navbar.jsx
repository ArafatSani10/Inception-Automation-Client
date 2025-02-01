import React, { useState } from 'react';
import Search from '../seacrh/Search';
import { FaTable } from "react-icons/fa";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <Search></Search>
            <nav className="bg-white border-2 mt-2 shadow-md   left-0 right-0 z-50 w-full mb-16">
                <div className="max-w-7xl mx-auto flex justify-start gap-12 items-center py-4 px-6">
                    {/* Logo */}
                    <div className="flex items-center justify-between w-full md:w-auto">
                        {/* On small screens, move the logo to the right */}
                        <img
                            src="https://inceptionbd.com/store/1/Untitled%20design%20(3).png"
                            alt="Logo"
                            className="h-6 md:h-10 transition-all duration-300 md:ml-auto"  // Moves logo right on small screen
                        />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden opacity-60 md:flex text-[18px] space-x-6 items-center  text-black font-semibold ml-4">
                        <button className='btn bg-gray-300 text-2xl'><FaTable></FaTable>Categories</button>
                        <li><a href="#home" className="hover:text-green-500 transition-all duration-300">Home</a></li>
                        <li><a href="#about" className="hover:text-green-500 transition-all duration-300">Courses</a></li>
                        <li><a href="#services" className="hover:text-green-500 transition-all duration-300">Instructors</a></li>
                        <li><a href="#contact" className="hover:text-green-500 transition-all duration-300">Store</a></li>
                        <li><a href="#blog" className="hover:text-green-500 transition-all duration-300">Forums</a></li>
                        <li><a href="#blog" className="hover:text-green-500 transition-all duration-300">Inception Automation</a></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={handleMenuToggle}
                            className="text-black p-2"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {/* Cross icon or Hamburger icon */}
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Slide-in effect with animation) */}
                <div
                    className={`md:hidden transition-all  duration-300 ease-in-out fixed top-0 left-0 w-full h-full bg-white z-40 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                >
                    <ul className="text-black p-6 space-y-6">
                        <li><a href="#home" className="block py-2 text-lg font-medium" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" className="block py-2 text-lg font-medium" onClick={handleLinkClick}>Courses</a></li>
                        <li><a href="#services" className="block py-2 text-lg font-medium" onClick={handleLinkClick}>Instructors</a></li>
                        <li><a href="#contact" className="block py-2 text-lg font-medium" onClick={handleLinkClick}>store</a></li>
                        <li><a href="#blog" className="block py-2 text-lg font-medium" onClick={handleLinkClick}>Forums</a></li>
                        <li><a href="#blog" className="block py-2 text-lg font-medium" onClick={handleLinkClick}>inception Automation</a></li>
                    </ul>

                    {/* Close Button */}
                    <div className="text-center mt-6">
                        <button onClick={handleMenuToggle} className="text-black py-2 px-4 border-2 border-black rounded-md">
                            Close Menu
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
