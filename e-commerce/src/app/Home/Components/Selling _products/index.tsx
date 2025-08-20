"use client"
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

interface Item{
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  discount: string;
  quantity:string;
  colors?: string[];
}
const items: Item[] = [
{
  id: 1,
    name: "The north coat",
    image: "/images/northCoat.png",
    price: "$260",
    discount: "$360",
    quantity:"(65)",
    rating: 5,
},
{
  id: 2,
    name: "Gucci duffle bag",
    image: "/images/duffleBag.png",
    price: "$960",
    discount: "$1160",
    quantity:"",
    rating: 4,
},
{
  id: 3,
    name: "RGB liquid CPU Cooler",
    image: "/images/cpuCooler.png",
    price:"$160",
    discount: "$170",
    quantity:"(65)",
    rating: 4,
},
{
  id: 4,
    name: "Small Bookself",
    image: "/images/bookShelf.png",
    price: "$360",
    discount:"",
    quantity:"(65)",
    rating: 5,
},
]
 
function SellingProducts(){
return(
<div className="py-12 border-b-2 border-neutral-200 w-400 ml-40">
<div className="display: flex mb-4">
        <div className="mb-8 flex items-center">
          <div className="w-7 h-15 bg-red-500 rounded-sm mr-4" />
         <span className="text-red-500 font-semibold">This Month</span>
        </div>
</div>
        <div className="flex gap-40">
            <h2 className="text-5xl font-bold mb-8 text-nowrap">Best Selling Products</h2> 
            <div>            
                <button className="bg-red-500 w-45 h-15 rounded-md mb-10 text-white ml-150">View All</button>
            </div> 
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 px-4 w-400 mt-10">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-4 relative group"
                  >
                    <div>
                      <Image
                        src={item.image}
                        alt={item.name}
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
                    <p className="mt-2 font-semibold text-xl">{item.name}</p>
                  <div>
                  <p className="text-red-500 font-bold text-xl mt-3">{item.price}<span className="text-neutral-400 ml-5 line-through">{item.discount}</span></p>
                    <div className="text-yellow-600 mt-2 text-2xl">
                      {"★".repeat(Math.floor(item.rating)) }
                      {"☆".repeat(5 - Math.floor(item.rating))} <span className="text-neutral-400 ml-2 text-xl font-bold">{item.quantity}</span>
                    </div>
                  </div>
                  </div>
                ))}
        </div>

  <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center mt-20 justify-between h-130">
  <div className="flex flex-col gap-0">
    <p className="text-green-500 text-lg">Categories</p>
    <h2 className="text-3xl font-bold leading-snug">Enhance Your<br/> Music Experience</h2>
    <div className="flex gap-3 mt-4">
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 h-16 justify-center">
        <span className="text-lg font-bold">23</span>
        <span className="text-xs">Hours</span>
      </div>
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 h-16 justify-center">
        <span className="text-lg font-bold">05</span>
        <span className="text-xs">Days</span>
      </div>
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 h-16 justify-center">
        <span className="text-lg font-bold">59</span>
        <span className="text-xs">Minutes</span>
      </div>
      <div className="flex flex-col items-center bg-white text-black rounded-full w-16 h-16 justify-center">
        <span className="text-lg font-bold">35</span>
        <span className="text-xs">Seconds</span>
      </div>
    </div>
    <button className="bg-green-500 ml-10 text-white font-semibold px-6 w-40 h-15 py-2 rounded-lg mt-6">Buy Now!</button>
  </div>
  <div className="mt-8">
    <Image
      src="/images/jbl.png"
      alt="Speaker"
      width={1000}
      height={1000}
      className="w-100 h-80 ml-neg-50"
    />
  </div>
</div>








</div>
    )
}

export default SellingProducts;
