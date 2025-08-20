import { FaTruckFast } from "react-icons/fa6";
import { TbHeadset } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import Image from "next/image";


function NewArrivals(){
return (
<div className="py-12 border-b-2 border-neutral-200 w-400 ml-40">
      <div className="display: flex mb-4">
      <div className="mb-8 flex">
        <div className="w-7 h-15 bg-red-500 rounded-sm mr-4"/>
        <span className="text-red-500 font-semibold mt-4">Featured</span>
      </div>
      </div>
       <h2 className="text-5xl text-nowrap font-bold ">New Arrival</h2>
      <div className="grid grid-cols-3 gap-6 place-items-center justify-center">
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="relative bg-black text-white rounded-lg overflow-hidden h-170 pt-3 mt-8 w-170">
    <Image
      src="/images/ps5.png"
      alt="PlayStation 5"
      className="w-full h-auto object-cover"
       width={500}
       height={0}
    />
    <div className="absolute bottom-4 left-4">
      <h3 className="font-semibold text-lg mt-10">PlayStation 5</h3>
      <p className="text-sm text-neutral-300">Black and White version of the PS5<br></br> coming out on sale.</p>
      <button className="mt-2 text-sm font-medium underline">Shop Now</button>
    </div>
  </div>
<div>
    <div className="relative bg-black text-white rounded-lg overflow-hidden mb-3 ml-40 flex items-center w-180 mt-8 h-80 opacity-100">
    <Image
      src="/images/womanImage.png"
      alt="Women's Collections"
      className="w-full h-auto object-cover ml-50"
       width={500}
       height={0}
    />
    <div className="absolute bottom-4 left-4">
      <h3 className="font-semibold text-lg">Women&apos;s Collections</h3>
      <p className="text-sm text-neutral-300">Featured woman collections that give you another vibe.</p>
      <button className="mt-2 text-sm font-medium underline">Shop Now</button>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 h-86 ml-40">
    <div className="relative bg-black text-white rounded-lg overflow-hidden w-86">
      <Image
        src="/images/speakers.png"
        width={1000}
        height={1000}
        alt="Speakers"
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-2 left-2">
        <h3 className="font-semibold text-sm">Speakers</h3>
        <button className="text-xs underline">Shop Now</button>
      </div>
    </div>
    <div className="relative bg-black text-white rounded-lg overflow-hidden w-86 ml-45">
      <Image
       className="w-full h-auto object-cover"
        src="/images/perfume.png"
        alt="Perfume"
        width={1000}
        height={1000}
      />
      <div className="absolute bottom-2 left-2">
        <h3 className="font-semibold text-sm">Perfume</h3>
        <button className="text-xs underline">Shop Now</button>
      </div>
    </div>
  </div>
</div>
</div>
 <div className="flex ml-50 gap-56 py-10 mt-20">
      <div className="flex flex-col items-center text-center max-w-xs">
        <FaTruckFast className="bg-black rounded-full p-4 text-7xl text-white mb-5"/>
        <h4 className="font-bold mb-2 text-2xl">FREE AND FAST DELIVERY</h4>
        <p className="text-neutral-500 text-sm">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <TbHeadset className="bg-black rounded-full p-4 text-7xl text-white mb-5"/>
        <h4 className="font-bold mb-2 text-2xl">24/7 CUSTOMER SERVICE</h4>
        <p className="text-neutral-500 text-sm">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <MdVerifiedUser className="bg-black rounded-full p-4 text-7xl text-white mb-5"/>
        <h4 className="font-bold mb-2 text-2xl">MONEY BACK GUARANTEE</h4>
        <p className="text-neutral-500 text-sm">We return money within 30 days</p>
      </div>
    </div>
</div>
    );
}

export default NewArrivals




