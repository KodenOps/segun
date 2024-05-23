import React from "react";
import { useState } from "react";
// import { ProjectDesignArray } from "../Objects/projectArr.js";
import random from "../assets/random.png";
import NewDesignProject from "../sections/NewDesignProject.jsx";
import {DesignProjectData} from "../Objects/DesignProjectData"
const DesignProjects = ({modalIsOn, setmodalIsOn}) => {
	const [popupDetails, setpopupDetails] = useState("default");
	
	return (
		<div className="flex justify-center md:items-center gap-[2px] mt-[40px] flex-wrap">
			{modalIsOn ? (
				//if true
				<NewDesignProject popupDetails={popupDetails}  modalIsOn={modalIsOn} setmodalIsOn={setmodalIsOn} />
			) : (
				//if false
				""
			)}
			{DesignProjectData.map((e) => {
				return (
					<div
						className="mx-[10px]  cursor-pointer"
						key={e.id}
						onClick={() => {
							setpopupDetails([e]);
							setmodalIsOn(!modalIsOn);
						}}>
						<div className="w-[130px] h-[130px] md:w-[250px] md:h-[250px] shadow-lg rounded-[8px] overflow-hidden relative">
							<img
								src={e.coverImg}
								alt=""
								className="object-cover w-[150px] h-[150px] md:w-[250px] md:h-[250px] hover:scale-125  hover:grayscale ease duration-1000"
							/>
							<p className="absolute top-[10px] right-[10px]  bg-[var(--bg)] text-white px-[10px] py-[5px] rounded-full md:text-sm text-[10px] border-[2px] border-white">
								{e.category}
							</p>
						</div>
						<p className="text-white  text-center mt-[10px] mb-[24px] md:w-full w-[130px] text-[14px] hover:text-[var(--secondary)] duration-300 ease">
							{e.title}
						</p>
					</div>
				);
			})
				
			}
			{/* Other random design box */}
			<a
				className="cursor-pointer"
				href="https://sprinkle-fern-c4b.notion.site/My-Random-Designs-37a8817e0b1744a89ef005f0a6ce389c"
				target="-blank">
				<div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] shadow-lg rounded-[16px] overflow-hidden relative">
					<img
						src={random}
						alt=""
						className="object-cover w-[150px] h-[150px] md:w-[250px] md:h-[250px] hover:w-[300px] hover:h-[300px] hover:grayscale ease duration-1000"
					/>
					<p className="absolute top-[10px] right-[10px]  bg-[var(--bg)] text-white px-[10px] py-[5px] rounded-full md:text-sm text-[10px] border-[2px] border-white">
								Notion Page
							</p>
				</div>
				<p className="text-white  text-center mt-[10px] mb-[24px] text-[14px] hover:text-[var(--secondary)] duration-300 ease">
					Random Designs
				</p>
			</a>

			
		</div>
	);
};

export default DesignProjects;
