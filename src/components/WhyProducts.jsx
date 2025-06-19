import React from 'react';
import image from '../assets/4.png';
import lockIcon from '../assets/lock-svg.png';

const features = [
  {
    number: '01',
    title: 'Bio Ingredients',
    desc: 'Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.'
  },
  {
    number: '02',
    title: 'Everything Natural',
    desc: 'Pure ingredients for pure skin. The Perfect solution for your skin care needs.'
  },
  {
    number: '03',
    title: 'All Handmade',
    desc: 'Made with love and care. Just for you. Give your skin the tender loving care it deserves.'
  }
];

export default function WhyProducts() {
  return (
    <section className="w-full bg-[#FAFAF0] py-20 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row gap-8 md:gap-16 items-start font-inter">
      <div className="flex-1 max-w-[600px]">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-12 bg-white rounded-full border border-[#E5E7EB] shadow-sm">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-sm font-light text-[#111827]">Why Our Products</span>
        </div>

        <h2 className="text-[40px] leading-[1.2] font-light mb-6 text-[#111827]">
          YOUR SKIN DESERVES
          <br />
          THE BEST CARE.
        </h2>

        <p className="text-[#4B5563] text-lg font-light mb-12 leading-relaxed max-w-[520px]">
          Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin.
          Explore our rage crafted with love backed by science, and inspired by nature.
        </p>

        <div className="space-y-12">
          {features.map((item) => (
            <div key={item.number} className="flex items-start gap-6">
              <span className="text-6xl font-light w-18 mr-4 bg-gradient-to-b from-[#1F2B26] to-[#1F2B2600] text-transparent bg-clip-text">
                {item.number}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[#4B5563] font-light leading-relaxed pr-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center pt-28 md:pt-20">
        <div className="relative w-full max-w-[520px]">
          <img src={image} alt="Skincare" className="w-full h-[600px] object-cover rounded-2xl" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img src={lockIcon} alt="Award" className="w-5 h-5" />
            </div>
            <p className="text-sm font-light whitespace-nowrap">
              Best Skin Care Product
              <br />
              Award Wining
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center pt-4 px-4">
          <span className="text-sm text-[#6B7280] font-light">SINCE 2001</span>
          <button className="text-sm text-[#6B7280] hover:text-black underline font-light">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}
