
 import React, { useState, useEffect } from 'react';
 import backgroundImage from "../assets/swiv-gadget-bg.webp"
 import watch from "../assets/watch.webp"
 import speaker from "../assets/speaker.webp";
 import charger from "../assets/charger.webp";
 import earbuds from "../assets/earbuds.webp";
 import {
   ShoppingCart,
   ChevronDown,
   Search
 } from "lucide-react";
 import AutoSlideshow from './AutoSlideshow';
 import ProductSlider from './ProductSlider';
 import ProductListGrid from './ProductListGrid';
 import Footer from './footer';
const HeroHeader = () => {

  const products = [
    {
      id: 1,
      name: "BLUNT STYLISH EARBUD",
      price: "₦17,800.00",
      image: charger,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "BLUNT SMART WATCH",
      price: "₦36,600.00",
      image: watch,
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "BLUNT HIGH BASS SPEAKER",
      price: "₦17,600.00",
      image: speaker,
      badge: "Best Seller",
    },
    {
      id: 4,
      name: "BLUNT WIRELESS CHARGER",
      price: "₦12,500.00",
      image: earbuds,
      badge: "Best Seller",
    },
  ];
   const [slidesToShow, setSlidesToShow] = useState(3);

   useEffect(() => {
     const handleResize = () => {
       setSlidesToShow(window.innerWidth < 768 ? 2 : 3);
     };

     handleResize();
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);

   const [isScrolled, setIsScrolled] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative md:h-135 h-99">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-950 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto py-3 flex justify-between items-center md:px-0 px-2">
          <div className="text-2xl font-bold">
            <span className={isScrolled ? "text-gray-800" : "text-white"}>
              <img
                src="https://www.bluntgadgets.com/_next/image?url=%2Fassets%2Flogo%2Fblunt-white.png&w=1920&q=75"
                alt=""
                className="w-21"
              />
            </span>
          </div>

          <div className="space-x-12 hidden md:flex">
            <a
              href="#"
              className={`font-medium transition-colors ${
                isScrolled ? "text-clean" : "text-clean"
              }`}
            >
              Charger
            </a>
            <a
              href="#"
              className={`font-medium transition-colors ${
                isScrolled ? "text-clean" : "text-clean"
              }`}
            >
              Speaker
            </a>
            <a
              href="#"
              className={`font-medium transition-colors ${
                isScrolled ? "text-clean" : "text-clean"
              }`}
            >
              Power Banks
            </a>
            <a
              href="#"
              className={`font-medium transition-colors ${
                isScrolled ? "text-clean" : "text-clean"
              }`}
            >
              Cables
            </a>
            <a
              href="#"
              className={`font-medium transition-colors ${
                isScrolled ? "text-clean" : "text-clean"
              }`}
            >
              Extensions
            </a>
            <div className=" relative">
              <div className="border text-[1rem] bg-white/20 text-white px-3 flex  rounded-3xl  md:py-1">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className=""
                >
                  More
                </button>
                <ChevronDown
                  size={30}
                  className={`ml-2 mt-1 w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      headsets
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      earbuds
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className=" flex gap-10 ">
            <div className="md:hidden relative">
              <div className="border text-[1rem] bg-white/20 text-white px-3 flex align-middle justify-center text-center rounded-3xl  md:py-2">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className=""
                >
                  Categories
                </button>
                <ChevronDown
                  size={30}
                  className={`ml-2 mt-3 md:mt-1 w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Charger
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Speaker
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Power Banks
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Cables
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Extensions
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-clean-mobile hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Watches
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative inline-flex">
              <div className="bg-[#fe6d2c] p-[0.7rem] rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                </svg>
              </div>

              <div className="absolute -top-1 -right-1 bg-white rounded-full min-w-[20px] h-5 flex items-center justify-center shadow-sm">
                <span className="text-xs font-semibold text-gray-800 px-1">
                  10
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-100 px-4 gap-7">
        <h1 className="text-5xl md:text-9xl font-bold text-center sizing text-nowrap">
          Big Power! Small Sizes
        </h1>

        <div
          className="bg-white flex w-full md:w-175 p-[0.4%] md:p-[0.2%]
         rounded-3xl"
        >
          <input
            type="text"
            placeholder="Search for any product here...."
            className="w-full pl-5 focus:outline-none focus:ring-0 placeholder:text-sm placeholder:font-semibold font-semibold"
          />

          <div className="bg-[#fe6d2c] md:p-[1.4%] p-[2%] rounded-3xl">
            <Search size={20} className="text-white" />
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white md:mx-47 mt-3 md:mb-15 px-3 md:px-8 ">
        <ProductSlider />
        <AutoSlideshow />
        <ProductListGrid />
      </div>
      <Footer />
    </div>
  );
};



export default HeroHeader