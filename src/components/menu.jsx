import React from "react";
import MenuCard from "../layouts/MenuCard";
import menu1 from "../assets/img/menu1.png";
import menu2 from "../assets/img/menu2.png";
import menu3 from "../assets/img/menu3.png";
import menu4 from "../assets/img/menu4.png";
import menu5 from "../assets/img/menu5.png";
import menu6 from "../assets/img/menu6.png";
import menu7 from "../assets/img/menu7.png";
import menu8 from "../assets/img/menu8.png";

const dishes = [
  {
    id: 1,
    name: "Chicken Burger",
    price: "$5.99",
    tag: "Hot",
    image: "menu1",
  },
  {
    id: 2,
    name: "Peri Peri Pizza",
    price: "$8.49",
    tag: "New",
    image: "menu12",
  },
  {
    id: 3,
    name: "Sushi Deluxe",
    price: "$6.25",
    tag: "",
    image: "menu3",
  },
  {
    id: 4,
    name: "Paneer Poppers",
    price: "$7.80",
    tag: "Hot",
    image: "menu4",
  },
  {
    id: 5,
    name: "Club Sandwich",
    price: "$3.20",
    tag: "",
    image: "menu5",
  },
  {
    id: 6,
    name: "Mocktail Mojito",
    price: "$4.75",
    tag: "New",
    image: "menu6",
  },
  {
    id: 7,
    name: "Nacho Fiesta",
    price: "$7.80",
    tag: "Hot",
    image: "menu7",
  },
  {
    id: 8,
    name: "Biryani Bowl",
    price: "$3.20",
    tag: "",
    image: "menu8",
  },
];



const Menu = () => {
    return(
        <div>
            <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-5 lg:x-14 transition-colors duration-300">
                <div className="text-center mb-12">
                   <p className="text-orange-500 font-medium uppercase tracking-wider mb-2">Our Menu</p> 
                   <h2 className="text-3xl md:text-4xl font-bold">Top Picks For you</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    {dishes.map((dish) => (
                        <MenuCard key={dish.id} {...dish} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Menu
