import React from "react";
import cartIcon from "../assets/cart-svg.png";
import product1 from "../assets/5.png";
import product2 from "../assets/3.png";
import product3 from "../assets/6.png";
import leftArrow from "../assets/left-arrow-svg.png";
import rightArrow from "../assets/right-arrow-svg.png";

const products = [
  {
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: product1,
  },
  {
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: product2,
  },
  {
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: product3,
  },
];

const BestSellers = () => {
  return (
    <section className="bg-[#f8f8ed] min-h-screen py-12 px-4 md:px-12 font-inter flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <button className="px-5 py-1 border border-gray-900 rounded-full text-sm font-medium flex items-center gap-2 bg-[#f6f8e5]">
            <span className="w-3 h-3 rounded-full bg-gray-900 inline-block"></span>
            Best Selling Products
          </button>
        </div>
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center flex-1">
          Skincare That Brings Out
          <br className="hidden md:block" />
          Your Natural Radiance
        </h2>
        <div className="flex items-center gap-6 justify-center mt-2 md:mt-0">
          <button class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"><img alt="Headset Icon" class="w-10 h-10 object-contain bg-[#f8f8ed]" src={leftArrow} /></button>
          <button class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition"><img alt="Headset Icon" class="w-10 h-10 object-contain bg-[#f8f8ed]"  src={rightArrow} /></button>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mb-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:shadow-xl hover:border-[#35413c] hover:scale-[1.02]"
          >
            <img src={product.image} alt={product.name} className="w-full h-110 object-cover" />
            <div className="flex items-center justify-between px-4 py-3 bg-[#f8f8ed]">
              <div>
                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                <div className="text-xs text-gray-500">{product.price}</div>
              </div>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center transition hover:bg-gray-200 text-gray-900">
                <img src={cartIcon} alt="Cart Icon" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
