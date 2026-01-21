import React from 'react';
import watch from "../assets/watch.webp";
import speaker from "../assets/speaker.webp";
import charger from "../assets/charger.webp";
import earbuds from "../assets/earbuds.webp";
import extension from "../assets/extnsion.webp";
import powerbank from "../assets/powerbank.webp";

const ProductListGrid = () => {
  const products = [
    {
      id: 1,
      name: "Smart Watch Pro",
      price: 199.99,
      image: watch,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 89.99,
      image: speaker,
      badge: "Bestseller",
    },
    {
      id: 3,
      name: "Fast Wireless Charger",
      price: 34.99,
      image: charger,
      badge: "Bestseller",
    },
    {
      id: 4,
      name: "Noise Cancelling Earbuds",
      price: 129.99,
      image: earbuds,
      badge: "Bestseller",
    },
    {
      id: 5,
      name: "Multi-Port Extension Cord",
      price: 24.99,
      image: extension,
      badge: "Bestseller",
    },
    {
      id: 6,
      name: "High-Capacity Power Bank",
      price: 79.99,
      image: powerbank,
      badge: "Bestseller",
    },
    {
      id: 7,
      name: "Multi-Port Extension Cord",
      price: 24.99,
      image: extension,
      badge: "Bestseller",
    },
    {
      id: 8,
      name: "High-Capacity Power Bank",
      price: 79.99,
      image: powerbank,
      badge: "Bestseller",
    },
  ];

  return (
    
      // <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
      //   {products.map((product) => (
      //     <div
      //       key={product.id}
      //       className="flex-shrink-0 transition-all duration-500 ease-out"
      //     >
      //       <div className="bg-gray-50 relative rounded-2xl h-60 md:h-80 w-full overflow-hidden group">
      //         <div className="absolute top-3 left-3 z-10">
      //           <span className="bg-[#14b8a6] px-3 py-1 rounded-md text-white font-semibold text-xs md:text-sm">
      //             {product.badge}
      //           </span>
      //         </div>

      //         {/* Product Image */}
      //         <div className="h-full flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      //           {product.image && (
      //             <img
      //               src={product.image}
      //               alt={product.name}
      //               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      //             />
      //           )}
      //         </div>
      //       </div>
      //       <div className="mt-3 md:mt-4">
      //         <p className="m-0 font-semibold text-[0.85rem] md:text-[0.95rem] text-gray-800 line-clamp-2">
      //           {product.name}
      //         </p>
      //         <p className="m-0 font-bold text-[1rem] md:text-[1.1rem] text-gray-900 mt-1">
      //           ₦{product.price.toLocaleString()}
      //         </p>
      //       </div>
      //     </div>
      //   ))}
      // </div>
 <section className="">
        
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 transition-all duration-500 ease-out"
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
                ₦{product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
        </section>
  );
};

export default ProductListGrid;