"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaMobileAlt, FaLaptop, FaHeadphones, FaGamepad, FaCamera, FaClock } from "react-icons/fa";

const categories = [
  { name: "Phones", icon: <FaMobileAlt size={58} /> },
  { name: "Computers", icon: <FaLaptop size={58} /> },
  { name: "SmartWatch", icon: <FaClock size={58} /> },
  { name: "Camera", icon: <FaCamera size={58} /> },
  { name: "HeadPhones", icon: <FaHeadphones size={58} /> },
  { name: "Gaming", icon: <FaGamepad size={58} /> },
];


function Categories() {
const [active, setActive] = useState("Camera"); 
return (
<div className="py-12 border-b-2 border-neutral-200 ml-40">
    <div className="display: flex mb-4">
        <div className="mb-8 flex items-center">
          <div className="w-7 h-15 bg-red-500 rounded-sm mr-4" />
         <span className="text-red-500 font-semibold">Categories</span>
        </div>
    </div>
    <div className="gap-0 flex">
      <h2 className="text-5xl font-bold mb-8 text-nowrap">Browse By Category</h2> 
      <div>            
      <div className="display: flex gap-2 ml-300">            
        <FaArrowLeft className="text-3xl"/>
        <FaArrowRight className="text-3xl"/> 
      </div> 
      </div> 
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
    {categories.map((category) => (
      <div
        key={category.name}
        onClick={() => setActive(category.name)}
        className={`flex flex-col items-center justify-center rounded-lg border cursor-pointer transition
        ${active === category.name ? " w-40 h-40 bg-red-500 text-white" : " border border-neutral-400 text-black w-40 h-40"}`}
        >
      <div>{category.icon}</div>
         <p className="mt-2 text-sm font-medium">{category.name}</p>
      </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;