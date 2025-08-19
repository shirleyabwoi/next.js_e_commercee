"use client"
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Item{
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  discount: string;
  description:string;
  quantity:string;
  colors?: string[];
}
const items: Item[] = [
{
  id: 1,
    name: "Red gaming pad",
    image: "/images/gamepad.png",
    description:"HAVIT HV-G92 Gamepad",
    price: "$120",
    discount: "$160",
    quantity:"(88)",
    rating: 5,
},
{
  id: 2,
    name: "Keyboard",
    image: "/images/wiredKeyboared.png",
    description:"AK-900 Wired Keyboard",
    price: "$960",
    discount: "$1160",
    quantity:"(75)",
    rating: 4,
},
{
  id: 3,
    name: "Television",
    image: "/images/gamningMonitor.png",
    description:"IPS LCD Gaming Monitor",
    price:"$370",
    discount: "$400",
    quantity:"(99)",
    rating: 5,
},
{
  id: 4,
    name: "chair",
    image: "/images/comfortChair.png",
    description:"S-Series Comfort Chair",
    price: "$375",
    discount: "$400",
    quantity:"(99)",
    rating: 5,
},
]
const FlashSales= () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => {
        if (prev.seconds > 0) {
        return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
        return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
        return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
        return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
        });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    
return (
<div className="py-12 border-b-2 border-neutral-200 ml-40">
  <div className="display: flex mb-4">
    <div className="mb-8 flex items-center">
      <div className="w-7 h-15 bg-red-500 rounded-sm mr-4" />
         <span className="text-red-500 font-semibold">Today&apos;s</span>
      </div>
    </div>
    <div className="flex gap-20">
      <h2 className="text-5xl font-bold mb-8 ">Flash Sales</h2>
         <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-sm text-black mb-1">Days</div>
              <div className="text-4xl font-bold text-black">{String(timeLeft.days).padStart(2, '0')}</div>
         </div>
        <div className="text-red-800 text-2xl">:</div>
        <div className="text-center">
        <div className="text-sm text-black mb-1">Hours</div>
        <div className="text-4xl font-bold text-black">{String(timeLeft.hours).padStart(2, '0')}</div>
        </div>
        <div className="text-red-800 text-2xl">:</div>
        <div className="text-center">
        <div className="text-sm text-black mb-1">Minutes</div>
        <div className="text-4xl font-bold text-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
        </div>
        <div className="text-red-800 text-2xl">:</div>
        <div className="text-center">
        <div className="text-sm text-black mb-1">Seconds</div>
        <div className="text-4xl font-bold text-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
        </div>
        </div>
        <div className="ml-190 display: flex gap-9">            
            <FaArrowLeft className="text-3xl"/>
            <FaArrowRight className="text-3xl"/> 
        </div> 
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 px-4 w-400 mt-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 relative group"
          >
            <div>
              <div>
                <button className="bg-red-500 w-15 text-sm h-7 mt-2 rounded-md text-white mr-3">-40%</button>
              </div>
              <Image
                src={item.image}
                alt={item.description}
                className="size-auto rounded"
                width={500}
                height={0}
              />
                <button className="bg-white-500 w-70 h-13 rounded-md mb-10 text-white hover:bg-black">
                     Add to Cart
                </button>
              <div className="absolute top-2 right-2 flex flex-col gap-2 ">
                <button className="bg-white p-2 rounded-full">
                 {< CiHeart className="stroke-1 text-3xl"></CiHeart>}
                </button>
                <button className="bg-white p-2 rounded-full">
                 {<IoEyeOutline className="stroke-1 text-3xl"></IoEyeOutline>}
                </button>
              </div>
            </div>
            <p className="mt-2 font-semibold text-xl">{item.description}</p>
          <div className="">
          <p className="text-red-500 font-bold text-xl mt-3">{item.price}<span className="text-neutral-400 ml-5 line-through">{item.discount}</span></p>
            <div className="text-yellow-600 mt-2 text-2xl">
              {"★".repeat(Math.floor(item.rating)) }
              {"☆".repeat(5 - Math.floor(item.rating))} <span className="text-neutral-400 ml-2 text-xl font-bold">{item.quantity}</span>
            </div>
          </div>
          </div>
        ))}
      </div>
      <button className="bg-red-500 w-65 h-15 mt-7 rounded-md mb-10 text-white ml-150">
        View All Products
      </button>
    </div>
  );
};
export default FlashSales;
