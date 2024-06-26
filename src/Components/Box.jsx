import React from "react";
// import { DiHtml5 } from "react-icons/di";
export const Box = ({ top, bottom, link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer">
			<div className="h-[60px] md:w-[200px] w-[120px] px-[10px]  shadow  rounded-[10px] bg-[#162646] flex flex-col items-center justify-center hover:translate-y-[-2px]  ease duration-300 cursor-pointer">
				<h3 className="md:text-[12px] text-[12px] font-bold text-center text-[var(--secondary)]">
					{top}
				</h3>
				<h3 className="md:text-[16xpx] text-[12px]  text-center">{bottom}</h3>
			</div>
		</a>
	);
};

export const Box2 = ({ text, Icons }) => (
	<div className="h-[60px] md:w-[200px] w-[120px] px-[10px]  shadow  rounded-[10px] bg-[#162646] flex items-center justify-center hover:translate-y-[-2px]  ease duration-300 cursor-pointer gap-[10px]">
		<Icons size={25} />
		<h3 className="md:text-[16xpx] text-[10px]  text-center flex  items-center justify-center">
			{text}
		</h3>
	</div>
);
