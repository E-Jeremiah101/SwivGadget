
import React, { useState, useEffect, useRef } from "react";

import watch from "../assets/watch.webp";
import speaker from "../assets/speaker.webp";
import charger from "../assets/charger.webp";
import earbuds from "../assets/earbuds.webp";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
const ProductSlider = () => {
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
      name: "BLUNT HIGH BASS ",
      price: "₦17,600.00",
      image: speaker,
      badge: "Best Seller",
    },
    {
      id: 4,
      name: "BLUNT WIRELESS ",
      price: "₦12,500.00",
      image: earbuds,
      badge: "Best Seller",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalSlides = Math.ceil(products.length / slidesToShow);

  // Responsive settings
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 2 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Calculate which products to show
  const visibleProducts = () => {
    const startIndex = (currentSlide * slidesToShow) % products.length;
    const result = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (startIndex + i) % products.length;
      result.push(products[index]);
    }

    return result;
  };

  return (

        <section className="">
          <div className="container relative">
            <span className="text-[1.2rem] font-semibold text-gray-800 mb-2 block md:mt-13">
              Best Seller
            </span>

            <div className="relative">
  
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 md:translate-x-3 z-20"
                aria-label="Previous products"
              >
                <ChevronLeft className="text-gray-500" size={45} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1 md:-translate-x-3 z-20"
                aria-label="Next products"
              >
                <ChevronRight className="text-gray-500" size={45} />
              </button>


              <div className="flex justify-center">
                <div className="flex justify-between w-full  overflow-hidden">
                  {visibleProducts().map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 transition-all duration-500 ease-out"
                      style={{
                        width:
                          slidesToShow === 3
                            ? "calc(33.333% - 1rem)"
                            : "calc(50% - 0.5rem)",
                        minWidth:
                          slidesToShow === 3
                            ? "calc(33.333% - 1rem)"
                            : "calc(50% - 0.5rem)",
                      }}
                    >
                      <div className="bg-gray-50 relative rounded-2xl h-60 md:h-80 w-full overflow-hidden group">
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-[#14b8a6] px-3 py-1 rounded-md text-white font-semibold text-xs md:text-sm">
                            {product.badge}
                          </span>
                        </div>

                        {/* Product Image */}
                        <div className="h-full flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          )}
                        </div>
                      </div>
                      <div className="mt-3 md:mt-4">
                        <p className="m-0 font-semibold text-[0.85rem] md:text-[0.95rem] text-gray-800 line-clamp-2">
                          {product.name}
                        </p>
                        <p className="m-0 font-bold text-[1rem] md:text-[1.1rem] text-gray-900 mt-1">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center mt-3 md:mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="focus:outline-none transition-all duration-300"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`w-9 h-[0.1rem] rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#fe6d2c] md:mr-3 "
                        : "bg-black md:mr-3 "
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
  );
};

export default ProductSlider;
