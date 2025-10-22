import React from "react";
import { FaLeaf, FaMapMarkerAlt } from "react-icons/fa";
import img from "../assets/img/Hero.jpg"
import { GiFoodTruck } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";

const Hero = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between px-5 lg:px-14 gap-8 pt-5 md:pt-0 transition-colors duration-300">
                {/* left component */}
                <div className="lg:w-1/2 w-full text-center lg:text-left">
                    <div className="inline-flex items-center mb-4 text-orange-400 font-medium">
                        <FaLeaf className="mr-2" /> People trust us
                    </div>
                    <h1 className="text-4xk md:text-5xl font-bold leading-tight">
                        Most <span className="text-orange-500">Fastest</span> Food
                        <br /> <span className="text-orange-500">Delivery</span>Service
                    </h1>

                    <p className="mt-4 text-gray-600 dark:text-gray-300">Enter your location to yuor nearest testaurants or get
                        deliver foods & enjoy. Happy foodie life
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                        <div className="flex items-center bg-white rounded-full px-4 py-2 text-black w-full sm:w-auto">
                            <FaMapMarkerAlt className="text-orange-500 mr-2" />
                            <input type="text" placeholder="Mumbai, India" className="outline-none w-full bg-transparent" />
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 transiton text-white font-semibold rounded-full px-6 py2">Find foods</button>
                    </div>
                </div>
                {/* right content */}

                <div className="lg:w-1/2 w-full relative flex justify-center mb-10 lg:mb-0">
                    <div className="relative">
                        <img src={img} alt="Delivery Guy" className="rounded-full w-[350px] h-[350px] md:w-[400px] md:h-[400px] oblect-cover" />
                    </div>

                    {/* badges */}
                    <div className="absolute top-8 right-0 md:right-10 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
                        <GiFoodTruck className="text-orange-500 mr-2" /> Quality food
                    </div>

                    <div className="absolute bottom-10 left-0 md:left-12 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
                        <BsCartCheckFill className="text-green-500 mr-2" /> Easy to Order
                    </div>

                    <div className="absolute bottom-6 right-0 md:right-10 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center shadow-lg">
                        <MdDeliveryDining className="text-blue-500 mr-2" /> Faster Delivery
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;