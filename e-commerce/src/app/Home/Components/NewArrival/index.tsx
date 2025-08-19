import { FaTruckFast } from "react-icons/fa6";
import { TbHeadset } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";

function NewArrivals(){
return (
<div className="py-12 border-b-2 border-neutral-200 w-400 ml-40">
      <div className="display: flex mb-4">
        <div className="mb-8 flex items-center">
        <div className="w-7 h-15 bg-red-500 rounded-sm mr-4"/>
        <span className="text-red-500 font-semibold">Featured</span>
      </div>
      <h2 className="text-5xl text-nowrap font-bold mb-8 ml-7 mt-3">New Arrival</h2>
    
      <div className="grid grid-cols-3 gap-6 place-items-center justify-center">
        </div>
                {/* <div className="flex gap-5">
                    <div className="">
                        <div className="">
                        <Image className="m-3" src="/images/ps5.png"  alt="services" width={630} height={40} />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                        <Image className="m-3" src="/images/womanImage.png"  alt="services" width={650} height={30} />
                        </div>
                        <div className=" flex">
                        <Image className="m-3" src="/images/speakers.png"  alt="services" width={230} height={20} />
                        <Image className="m-3" src="/images/perfume.png"  alt="services" width={230} height={20} />
                        </div>
                    </div>
                </div> */}
                </div>
 <div className="flex ml-50 gap-56 py-10">
      <div className="flex flex-col items-center text-center max-w-xs">
        <FaTruckFast className="bg-black rounded-full p-4 text-7xl text-white mb-5"/>
        <h4 className="font-bold mb-2 text-2xl">FREE AND FAST DELIVERY</h4>
        <p className="text-gray-500 text-sm">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <TbHeadset className="bg-black rounded-full p-4 text-7xl text-white mb-5"/>
        <h4 className="font-bold mb-2 text-2xl">24/7 CUSTOMER SERVICE</h4>
        <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <MdVerifiedUser className="bg-black rounded-full p-4 text-7xl text-white mb-5"/>
        <h4 className="font-bold mb-2 text-2xl">MONEY BACK GUARANTEE</h4>
        <p className="text-gray-500 text-sm">We return money within 30 days</p>
      </div>
    </div>
</div>
    );
}

export default NewArrivals




