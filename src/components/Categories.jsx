import React, { useState } from 'react';
import cartIcon from '../assets/cart-svg.png';
import img6 from '../assets/6.png';
import img3 from '../assets/3.png';
import img5 from '../assets/5.png';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('NEW ARRIVAL');

  const products = [
    {
      image: img6,
      title: 'ALYA SKIN CLEANSER.',
      price: '29.99',
      cartBg: '#f8f8ed'
    },
    {
      image: img3,
      title: 'RITUAL OF SAKURA.',
      price: '27.99',
      cartBg: '#2D3B36'
    },
    {
      image: img5,
      title: 'THE BODY LOTION.',
      price: '19.99',
      cartBg: '#f8f8ed'
    },
  ];

  const categories = ['NEW ARRIVAL', 'CLEANSING', 'ACNE FIGHTER', 'ANTI AGING'];

  return (
    <section className="bg-[#FAFAF2] py-16 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">Feel Beautiful Inside and Out</h2>
          <p className="text-xl mb-8">with Every Product.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition ${
                  activeCategory === category
                    ? 'bg-[#2D3B36] text-white'
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mb-12 mx-auto font-['Inter']">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:shadow-xl hover:border-[#35413c] hover:scale-[1.02]"
        >
          <img alt={product.title} className="w-full h-110 object-cover" src={product.image} />
          <div className="flex items-center justify-between px-4 py-3 bg-[#f8f8ed]">
            <div>
              <div className="text-sm font-medium text-gray-900">{product.title}</div>
              <div className="text-xs text-gray-500">FROM ${product.price}</div>
            </div>
            <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center transition hover:bg-gray-200 text-gray-900">
              <img alt="Cart Icon" className="w-5 h-8 object-contain text-gray-700" src={cartIcon} />
            </button>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default Categories;
