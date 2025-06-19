import React, { useState, useEffect } from 'react';
import cartSvg from '../assets/cart-svg.png';
import heartSvg from '../assets/heart-svg.png';
import avatarSvg from '../assets/avatar-svg.png';
import heroImage from '../assets/1.png';
import productImage from '../assets/2.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 1.5s ease-out; }
        .slide-up { animation: slideUp 1.2s ease-out; }
        .fade-in-delay { animation: fadeIn 1.8s ease-out; }
        .hero-watermark {
          font-size: 240px;
          font-weight: 900;
          color: #2B3D36;
          opacity: 1;
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          text-align: center;
          letter-spacing: 18px;
          z-index: 1;
          pointer-events: none;
          user-select: none;
          font-family: 'Inter', sans-serif;
        }
        .hero-navbar {
          width: 100%;
          background: #EFF5E1;
          border-radius: 0 0 32px 32px;
          padding: 0 24px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 10;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 1200px) {
          .hero-watermark { font-size: 120px; letter-spacing: 10px; }
        }
      `}</style>

      <section className="min-h-screen bg-[#EFF5E1] relative overflow-hidden flex flex-col justify-start font-inter">
        <nav className="hero-navbar mt-6 flex-wrap gap-y-4">
          <div className="text-[24px] font-semibold tracking-wide">SKINCARE</div>
          <div className="hidden md:flex gap-6 lg:gap-12">
            <span className="text-[15px] cursor-pointer text-[#333]">All Products</span>
            <span className="text-[15px] cursor-pointer text-[#333]">Serum</span>
            <span className="text-[15px] cursor-pointer text-[#333]">Sunscreen</span>
            <span className="text-[15px] cursor-pointer text-[#333]">Bundle</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer text-sm">
              <img src={cartSvg} alt="cart" className="w-4 h-4" />
              <span>(1)</span>
            </div>
            <img src={heartSvg} alt="wishlist" className="w-4 h-4 cursor-pointer" />
            <img src={avatarSvg} alt="profile" className="w-4 h-4 cursor-pointer" />
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 pt-8 pb-8">
          <div className="hero-watermark">SKINCARE</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full items-center relative z-20">
            <div className="flex flex-col justify-center items-start gap-6 md:gap-8 pl-0 md:pl-2 mt-0 md:mt-[-200px]">
              <p className="text-[18px] md:text-[22px] leading-[1.6] text-[#333] max-w-[340px] fade-in">
                Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
              </p>
              <button className="mt-8 md:mt-[160px] bg-black text-white py-3 px-7 rounded-full text-[15px] transition-transform duration-300">
                Shop Now
              </button>
            </div>

            <div className="flex flex-col items-center relative mt-0 md:mt-[-30px]">
              <h1 className="text-[40px] md:text-[65px] font-bold leading-none text-center mb-6 slide-up">
                GLOW <br /> NATUR- <br /> ALLY
              </h1>
              <div className="relative w-full max-w-[500px] mt-4">
                <img src={heroImage} alt="Hero" className="w-full h-auto rounded-2xl fade-in" />
                <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-[#F6F7E9] py-3 px-6 rounded-full flex items-center gap-4 shadow-lg w-[90%] max-w-[370px] border border-[#e5e5e5]">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center border border-[#e5e5e5]">
                    <img src={productImage} alt="icon" className="w-6 h-6 object-contain" />
                  </div>
                  <p className="text-[14px] md:text-[15px] text-[#333] font-medium">
                    While giving you an invigorating cleansing experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] mt-8 md:mt-[-350px] bg-white rounded-lg overflow-hidden shadow-lg fade-in-delay">
                <img src={productImage} alt="Product" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
