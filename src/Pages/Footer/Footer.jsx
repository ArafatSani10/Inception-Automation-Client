import React from 'react';
import { FaFacebook, FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <div>
            {/* Footer Content */}
            <footer className="bg-blue-900 space-y-6 w-full text-white">
                <div className="container mx-auto px-4 space-y-6">
                    <div className="bg-green-400 h-[200px] flex justify-between items-center border p-6 rounded-2xl">
                        <div className="w-2/3">
                            <h1 className="text-2xl font-semibold">Join us today</h1>
                            <p className="text-sm mt-2">#We will send the best deals and offers to your email.</p>
                        </div>
                        {/* Input field and button together */}
                        <div className="relative text-sm w-full max-w-lg">
                            <input
                                type="text"
                                placeholder="Enter your email here."
                                className="input input-bordered shadow-2xl w-full rounded-full p-9 max-sm:p-7 border-2 border-gray-300 focus:outline-none"
                            />
                            <button className="btn btn-primary shadow-lg absolute right-0 top-0 mt-3 max-sm:mt-2 px-7 items-center mr-3 rounded-full bg-green-400 text-white hover:bg-green-500">
                                Join
                            </button>
                        </div>
                    </div>
                    
                    {/* Grid Layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* About Us */}
                        <div className="w-full">
                            <h2 className="text-lg font-semibold">About Us</h2>
                            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet vehicula urna, at tincidunt velit convallis a.</p>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full">
                            <h3 className="font-semibold">Quick Links</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                                <li><a href="#" className="hover:text-blue-400">About</a></li>
                                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="w-full">
                            <h3 className="font-semibold">Support</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                                <li><a href="#" className="hover:text-blue-400">Returns</a></li>
                                <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
                            </ul>
                        </div>

                        {/* Connect With Us */}
                        <div className="w-full">
                            <h3 className="font-semibold">Connect With Us</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
                                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-700 my-8"></div>

                    {/* Logo and Contact Info */}
                    <div className="flex flex-wrap justify-between items-center mt-8">
                        <div className="flex items-center space-x-4">
                            <img src="https://inceptionbd.com/store/1/Untitled%20design%20(3).png" alt="Logo" className="w-32" />
                        </div>

                        <div className="mt-6 flex space-x-4 justify-center">
                            <p className="text-2xl hover:text-blue-400 transition-all"><FaLinkedinIn /></p>
                            <p className="text-2xl hover:text-blue-400 transition-all"><FaFacebook /></p>
                            <p className="text-2xl hover:text-blue-400 transition-all"><FaWhatsapp /></p>
                            <p className="text-2xl hover:text-blue-400 transition-all"><FaTwitter /></p>
                            <p className="text-2xl hover:text-blue-400 transition-all"><FaYoutube /></p>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mt-5 text-center">
                        <div className="flex justify-center space-x-8">
                            <p className="text-sm flex items-center gap-2"><SiGmail />hello@Inceptionbd.com</p>
                            <p className="text-sm flex items-center gap-2"><FaPhone />:+8801736384167</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
