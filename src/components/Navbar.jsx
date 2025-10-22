import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import ThemeToggle from "./ThemeToggle.jsx"

const Navbar = () => {
    return (
        <div>
            <header className="bg-gray-100 dark:bg-[#1c1a27] text-black dark:text-white flex items-center justify-between py-4 px-5 lg:px-14 transition duration-300">
                {/*logo  */}
                <div className="flex items-center gap-1.5 text-2xl font-bold text-orange-500">
                <MdOutlineRestaurant/>
                <span>BiteHub</span>
                </div>
                {/* nav Link */}
                <nav className="hidden md:flex space-x-8 font-medium">
                    <a href="/" className="hover:text-orange-400 transition">Home</a>
                    <a href="/" className="hover:text-orange-400 transition">Restaurants</a>
                    <a href="/" className="hover:text-orange-400 transition">Foods</a>
                    <a href="/" className="hover:text-orange-400 transition">Offers</a>
                    <a href="/" className="hover:text-orange-400 transition">Service</a>
                </nav>

                {/* Cart & Button  */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                  <button className="hidden md:flex text-orange-400 text-xl"><FaShoppingCart /></button> 
                  <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-4 rounded-full text-sm font-medium">Register Now</button> 
                </div>

            </header>
        </div>
    )
}

export default Navbar;