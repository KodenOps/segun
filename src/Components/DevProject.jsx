import React from "react";
import { useState } from "react";
// import { ProjectDesignArray } from "../Objects/projectArr.js";
import NewDevProject from "../sections/NewDevProject.jsx";
import {DevProjectData} from "../Objects/DevProjectData.js"
const DesignProjects = ({modalIsOn, setmodalIsOn}) => {
	const [popupDetails, setpopupDetails] = useState("default");
	
	return (
		<div className="flex justify-center md:items-center gap-[2px] mt-[40px] flex-wrap">
			{modalIsOn ? (
				//if true
				<NewDevProject popupDetails={popupDetails}  modalIsOn={modalIsOn} setmodalIsOn={setmodalIsOn} />
			) : (
				//if false
				""
			)}
			{DevProjectData.map((e) => {
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
			

			
		</div>
	);
};

export default DesignProjects;
