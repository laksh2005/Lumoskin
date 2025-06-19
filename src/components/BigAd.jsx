import React from 'react'
import bigAdImage from '../assets/7.png';

const BigAd = () => {
  return (
    <section className="bg-[#f8f8ed] min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full h-full max-w-8xl max-h-3xl rounded-2xl overflow-hidden relative shadow-md group">
            <img alt="Feel Beautiful" className="w-full h-[750px] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" src={bigAdImage} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-center justify-end pb-20">
              <h1 className="text-white text-4xl md:text-5xl font-medium text-center mb-10 drop-shadow font-['Inter']">Feel Beautiful Inside and Out with Every Product.</h1>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium shadow hover:bg-gray-100 transition text-base md:text-lg cursor-pointer font-['Inter']">Shop Now</button>
            </div>
        </div>
    </section>
  )
}

export default BigAd
