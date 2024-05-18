import React from "react";
import { useState } from "react";
import DesignProjects from "../Components/DesignProject";
import DevProject from "../Components/DevProject";
import Title from "../Components/Title";
import { FiFigma } from "react-icons/fi";
import { FaCode } from "react-icons/fa";


const Project = ({modalIsOn, setmodalIsOn}) => {
	const [devActive, setdevActive] = useState(true);
	return (
		<section
			className="cursor-default   md:px-[80px] px-[20px] mt-[80px]"
			id="project">
			<Title small="PROJECTS" large="What I've done" />
			<p className="px-[10px] md:px-[0] text-center leading-[38px] my-[10px] mb-[30px] text-slate-100">
				Here are the few projects I worked on over the months. Toggle between
				the design projects and the Frontend Development projects using the
				switch below{" "}
			</p>
			{/* the swith button for dev and design */}
			{devActive ? (
				// if dev is active
				<div className="switchbtn flex justify-center  items-center gap-[20px]">
					<button
						
						className="design w-[150px] bg-[#16425B] px-[24px] py-[12px] rounded-full gap-4 text-white shadow-sm flex justify-center items-center"
						onClick={() => setdevActive(!devActive)}>
						<FaCode /> Dev
					</button>
					<button
						
						className="design w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full gap-4 text-white shadow-sm flex justify-center items-center"
						onClick={() => setdevActive(!devActive)}>
						<FiFigma /> Design
					</button>
				</div>
			) : (
				// if design is active
				<div className="switchbtn flex justify-center items-center gap-[20px]">
					<button
						
						className="design w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full gap-4 text-white shadow-sm flex justify-center items-center"
						onClick={() => setdevActive(!devActive)}>
						<FaCode /> Dev
					</button>
					<button
						
						className="design w-[150px]  bg-[#16425B] px-[24px] py-[12px] rounded-full gap-4 text-white shadow-sm flex justify-center items-center"
						onClick={() => setdevActive(!devActive)}>
						<FiFigma /> Design
					</button>
				</div>
			)}
			{devActive ? <DevProject modalIsOn={modalIsOn} setmodalIsOn={setmodalIsOn }/> : <DesignProjects modalIsOn={modalIsOn} setmodalIsOn={setmodalIsOn }  />}
		</section>
	);
};

export default Project;
