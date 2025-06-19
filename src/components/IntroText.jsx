import React from 'react';

const lines = [
	{
		text: 'Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with',
		strong: 'Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with',
		faded: ''
	},
	{
		text: 'advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.',
		strong: '',
		faded: 'advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.'
	}
];

export default function IntroText() {
	return (
		<section className="w-full bg-[#FAFAF0] pt-28 mb-20 pb-4 px-4 md:px-8 lg:px-12 animate-[fadeIn_1.2s_ease-out] font-['Inter']"
			style={{ animationFillMode: 'forwards' }}>
			<style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
			<div className="max-w-none mx-auto">
				<p className="text-[20px] md:text-[26px] lg:text-[28px] font-normal leading-snug text-[#222] font-inter"
					style={{ lineHeight: '1.7' }}>
					<span className="font-medium text-[#222] font-['Inter']">Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with </span>
					<span className="text-[#C1C5C1] font-medium font-['Inter']">advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.</span>
				</p>
			</div>
		</section>
	);
}
