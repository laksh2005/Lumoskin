import React from 'react';

const Footer = () => {
  return (
    <section className="relative bg-[#35413c] text-white pt-16 pb-40 px-4 md:px-16 overflow-hidden font-inter">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-normal leading-snug">
            Join The Skincare<br />Community Now.
          </h2>
        </div>
        <div>
          <div className="text-base mb-1">Get in Touch</div>
          <a
            href="#"
            className="text-2xl font-normal text-white hover:underline"
          >
            contact.skincare.com
          </a>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 gap-6 md:gap-0 mb-8">
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">YouTube</a>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies Policy</a>
        </div>
      </div>

      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-full text-[20vw] md:text-[20vw] font-extrabold text-[#3d4a43] opacity-90 select-none pointer-events-none leading-none text-center z-0">
        SKINCARE
      </div>
    </section>
  );
};

export default Footer;
