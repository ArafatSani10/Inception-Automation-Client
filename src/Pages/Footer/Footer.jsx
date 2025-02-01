import React from 'react';
import { FaFacebook, FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";




const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-6">
                {/* 4 Flex Lines: About Us, Quick Links, Support, Connect With Us */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {/* Logo */}
                        <img src="https://inceptionbd.com/store/1/Untitled%20design%20(3).png" alt="Logo" />

                    </div>


                    <div className="mt-6 flex space-x-4 justify-center">
                        <p className='text-xl font-bold'><FaLinkedinIn></FaLinkedinIn></p>
                        <p className='text-xl font-bold'><FaFacebook></FaFacebook></p>
                        <p className='text-xl font-bold'><FaWhatsapp></FaWhatsapp></p>
                        <p className='text-xl font-bold'><FaTwitter></FaTwitter></p>
                        <p className='text-xl font-bold'><FaYoutube></FaYoutube></p>

                    </div>
                </div>

                {/* Social Media Icons */}
                <div className='md:text-center md:mx-96 mt-5'>
                    <div className="flex text-center space-x-4">
                        <p className="text-sm flex items-center gap-2"><SiGmail></SiGmail>hello@Inceptionbd.com</p>
                        <p className="text-sm flex items-center gap-2"><FaPhone></FaPhone>:+8801736384167</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
