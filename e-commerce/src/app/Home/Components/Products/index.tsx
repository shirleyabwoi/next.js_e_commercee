import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import { IoEyeOutline } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  isNew?: boolean;
  description:string
  colors?: string[];
}
const products: Product[] = [
  {
    id: 1,
    name: "Dog Food",
    image: "/images/dogFood.png",
    description:"Breed Dry Dog Food",
    price: "$100",
    rating: 5,
  },
  { id: 2,
    name: "CANON Camera",
    image: "/images/canonCamera.png",
    description:"CANON EOS Camera",
    price:"$360",
    rating: 4,
 },
  {
    id: 3,
    name: " Asus laptop",
     image: "/images/gamningMonitor.png",
     description:"ASUS FHD Gaming Laptop",
     price: "$700",
      rating: 5,
 },
  {
    id: 4,
    name: "Skincare",
    image: "/images/curology.png",
    description:"Curology Product Set",
    price: "$500",
    rating: 5,
  },
  {
    id: 5,
    name: "Electric toy-car",
    image: "/images/kidsCar.png",
    description:"Kid's Electric Car",
    price: "$960",
    rating: 4,
    isNew: true,
    colors: ["#FF0000", "#000000"],
  },
  {
    id: 6,
    name: "Sport Shoes",
    image: "/images/zoomSoccerShoes.png",
    description:"Jr. Zoom Soccer Cleats",
    price: "$960",
    rating: 5,
    colors: ["#FFFF00", "#000000"],
  },
  {
    id: 7,
    name: "Game pad",
    image: "/images/usbGamepad.png",
    description:"GP11 Shooter USB Gamepad",
    price:"$660",
    rating: 4,
    isNew: true,
    colors: ["#FF0000", "#000000"],
  },
  {
    id: 8,
    name: "Green jacket",
    image: "/images/satinJacket.png",
    description:"Quilted Satin Jacket</strong",
    price: "$660",
    rating: 4,
    colors: ["#004D40", "#FF0000"],
  },
];
function Products() {
return (
<div className="py-12 border-b-2 border-neutral-200 ml-40">
  <div className="display: flex mb-4">
    <div>
        <div className="mb-8 flex items-center">
          <div className="w-7 h-15 bg-red-500 rounded-sm mr-4" />
          <span className="text-red-500 font-semibold">Our Products</span>
        </div>
        <h2 className="text-5xl font-bold mb-8 text-nowrap">Explore Our Products</h2>
    </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 w-400">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 relative group"
          >
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>
            )}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                className="size-auto rounded"
                width={500}
                height={0}
              />
              <button className="bg-white-500 w-70 h-13 rounded-md mb-10 text-white hover:bg-black">Add to Cart</button>
              <div className="absolute top-2 right-2 flex flex-col gap-2 ">
                <button className="bg-white p-2 rounded-full shadow">
                 {< CiHeart className="stroke-1 text-3xl"></CiHeart>}
                </button>
                <button className="bg-white p-2 rounded-full shadow ">
                 {<IoEyeOutline className="stroke-1 text-3xl"></IoEyeOutline>}
                </button>
              </div>
            </div>
            <p className="mt-2 font-semibold text-xl">{product.description}</p>
          <div className="flex items-center ml-2 mt-2 space-x-4">
            <br></br>
          <p className="text-red-500 font-bold text-xl mt-3">{product.price}</p>
            <div className="text-yellow-600 mt-2 text-2xl">
              {"★".repeat(Math.floor(product.rating)) }
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>
          </div>
            {product.colors && (
              <div className="flex gap-2 mt-3 ml-15">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="mt-10 bg-red-500 h-15 ml-170 text-white px-6 py-2 rounded">View All Products</button>
</div>
  );
};
export default Products;