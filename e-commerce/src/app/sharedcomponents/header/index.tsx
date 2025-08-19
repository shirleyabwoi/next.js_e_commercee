import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";


export function Header() {
  return (
    <div className="w-full ">
      <div className="bg-black text-white text-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex ml-160">
          <span className="text-base">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <button className="ml-2 underline font-semibold text-base">ShopNow</button>
          <div className="ml-auto">
            <select className="bg-transparent border-none text-white">
              <option className="text-base">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="border-b border-neutral-200 py-4 px-4">
        <div className="flex items-center max-w-6xl mx-auto justify-between">
          <Link href="" className="text-2xl font-bold text-black">Exclusive</Link>
          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-black hover:underline">Home</Link>
            <Link href="/contact" className="text-black hover:underline">Contact</Link>
            <Link href="/about" className="text-black hover:underline">About</Link>
            <Link href="/signUp" className="hover:underline text-black">Sign Up</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-neutral-light pl-3 pr-10 py-2 text-sm border-none w-60"
              />
              <MdSearch className="absolute right-3 top-0.5 w-8.5 h-8.5 text-black" />
            </div>
            <div className="flex items-center space-x-4">
              <button><CiHeart className="w-7.5 h-7.5 text-black" /></button>
              <button><IoCartOutline className="h-7.5 w-7.5 text-black" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;




