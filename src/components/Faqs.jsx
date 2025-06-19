import React, { useState } from "react";
import faqImage from "../assets/5.png";
import headphoneIcon from "../assets/headphone-svg.png";

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes, our products are dermatologically tested and safe for sensitive skin.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely! None of our products are tested on animals. Check individual product details for specifics.",
    isDefaultOpen: true,
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy on all unused products.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    question: "How do I choose the right product?",
    answer: "Our skincare experts can help you find the perfect product for your skin type.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(
    faqs.findIndex((faq) => faq.isDefaultOpen)
  );

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="bg-[#f8f8ed] py-16 px-4 md:px-12 font-inter">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex flex-col items-center relative mb-8 md:mb-0">
          <div className="rounded-2xl overflow-hidden relative w-full max-w-md group">
            <img
              src={faqImage}
              alt="FAQ Product"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-[#f6f8e5] rounded-full shadow px-4 py-2 flex items-center gap-2">
              <div className=" p-1 rounded-full">
                <img
                  src={headphoneIcon}
                  alt="Headset Icon"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="text-xs text-gray-800">
                24/7 We're Here to Help You
              </span>
            </div>
          </div>
        </div>


        <div className="flex-1 flex flex-col items-start">
          <button className="mb-4 px-5 py-2 border border-gray-900 rounded-full text-sm font-medium flex items-center gap-2 bg-[#f8f8ed]">
            <span className="w-3 h-3 rounded-full bg-gray-600 inline-block"></span>
            Frequently Asked Question
          </button>

          <h3 className="text-xl md:text-4xl font-light text-gray-900 mb-10">
            Answers to Your
            <br />
            Skincare Questions, All
            <br />
            in One Place.
          </h3>

          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-4 py-3 mb-4 rounded-lg border text-left transition ${
                    openIndex === index
                      ? "border-gray-900"
                      : "border-gray-300 hover:bg-gray-50"
                  } bg-[#f8f8ed]`}
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-gray-500 text-lg">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-3 text-gray-700 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
