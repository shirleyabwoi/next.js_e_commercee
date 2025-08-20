"use client";
import { useState } from "react";
import Header from "../sharedcomponents/header";
import Footer from "../sharedcomponents/footer";
import Image from "next/image";


function SignIn() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    
return (
<div className=" flex flex-col">
  <Header />
    <div className="flex flex-col md:flex-row items-center md:items-start gap-20 py-12">
      <div className="flex ml-10">
        <Image
         src="/images/phoneCartImage.png"
         alt="Cart and a smartphone"
         width={800}
         height={800}
         className="max-w-full h-auto"
        />
      </div>
      <div className="flex-1 flex items-center p-8 lg:p-16 bg-white">
        <div className="w-full max-w-md">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-medium text-black mb-2 mt-30">Log in to Exclusive</h1>
              <p className="text-black text-base">Enter your details below</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
             <div className="space-y-6">
                <div>
                 <input
                  type="text"
                  name="email"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 text-base border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-neutral-400 w-100"
                  />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="h-12 text-base border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-red-500 placeholder:text-neutral-400 w-100"
                    />
                 </div>
                </div>
                <div className="space-y-4 mt-14 display: flex gap-25">
                <button type="submit" className="w-40 h-12 bg-red-500 hover:bg-red-600 text-white text-base font-medium rounded-sm">Log in</button>
                <p className="mt-3 text-red-500">Forgot password?</p>
                </div>
                </form>
                </div>
                </div>
                </div>
    </div>
    <Footer />
</div>
    );
}

export default SignIn;




