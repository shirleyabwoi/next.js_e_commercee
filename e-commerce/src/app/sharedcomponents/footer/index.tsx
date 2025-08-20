import { FaRegPaperPlane, FaFacebookF,  FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black w-full">
      <div className="max-w-max mx-auto py-12 px-8">
      <div className="grid grid-cols-5 gap-20 mb-12">
        <div>
          <h2 className="text-2xl text-white font-semibold mb-6">Exclusive</h2>
            <h4 className="text-white font-medium mb-2">Subscribe</h4>
            <p className="text-white mb-3 text-sm"> Get 10% off your first order</p>
            <form className="flex border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm px-3 py-2 text-white placeholder:text-neutral-400 outline-none flex-1"
              />
              <button type="submit" className="px-4 flex items-center justify-center"><FaRegPaperPlane className="text-white"></FaRegPaperPlane></button>
            </form>
        </div>
        <div>
          <h2 className="text-2xl text-white font-semibold mb-6">Support</h2>
          <p className="text-white mb-2 text-sm">111 Bijoy Sarani, Dhaka, <br />DH 1515, Bangladesh.</p>
          <p className="text-white mb-1 text-sm">exclusive@gmail.com</p>
          <p className="text-white text-sm">+88015-8888-9999</p>
        </div>
          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">Account</h2>
            <ul>
              {[
                "My Account",
                "Login /signup",
                "Cart",
                "Wishlist",
                "Shop",
              ].map((item) => (
                <li key={item} className="text-white mb-2 text-sm">
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-white hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">Quick Link</h2>
            <ul>
              {[
                "Privacy Policy",
                "Terms Of Use",
                "FAQ",
                "Contact",
              ].map((link) => (
                <li key={link} className="text-white mb-2 text-sm">
                  <a
                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-white hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">Download App</h2>
            <p className="text-neutral-400 text-sm mb-4">Save $3 with App New User Only</p>
            <div className="flex space-x-3 items-center mb-4">
             <BsQrCode className="size-20 text-white"/>
              <div className="flex flex-col gap-3">
              <div className="flex border border-white pt-2">
                  <a href="#" className=" w-fit">
                  <Image
                    src="/images/playstoreicon.png"
                    alt="Play Store"
                    width={30}
                    height={15}
                    className="mr-2 mb-3"
                  />
                </a>
                <p className="text-white text-xs">GET IT ON<br></br><span>Google Play</span></p>
              </div>
                <div className="flex gap-2  border border-white pt-2">
                <a href="#" className=" w-fit">
                  <FaApple className="size-7 text-white mb-3"/>
                </a>
                <p className="text-white text-xs mr-1">Download on the<br></br><span>App Store</span></p>
                </div>
               
              </div>
            </div>
            <div className=" text-white flex space-x-4">
              <a href="#"> <FaFacebookF ></FaFacebookF></a>
              <a href="#"><FaTwitter ></FaTwitter></a>
              <a href="#"><FaInstagram ></FaInstagram></a>
              <a href="#"><FaLinkedinIn></FaLinkedinIn> </a>
            </div>
          </div>
        </div>
        <hr className="border-neutral-700 mb-4" />
        <p className="text-center text-neutral-500 text-sm pb-2">&copy; Copyright Rimel 2022. All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;
