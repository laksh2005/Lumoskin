import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import IntroText from './components/IntroText';
import WhyProducts from './components/WhyProducts';
import BestSellers from './components/BestSellers';
import BigAd from './components/BigAd';
import Categories from './components/Categories';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <div className="bg-[#FAFAF0] min-h-screen">
        <Hero />
        <IntroText />
        <WhyProducts />
        <BestSellers />
        <BigAd />
        <Categories />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default App;
