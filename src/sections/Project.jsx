import React from "react";
import { useState } from "react";
import DesignProjects from "../Components/DesignProject";
import DevProjects from "../Components/DevProjects";
import Title from "../Components/Title";
const Project = () => {
	const [devActive, setdevActive] = useState(true);
	return (
		<section
			className="cursor-default min-h-screen  md:px-[80px] px-[20px] mt-[80px]"
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
					<button className="dev w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full text-white bg-[#16425B]">
						Dev
					</button>
					<button
						className="design w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full text-white shadow-sm"
						onClick={() => setdevActive(!devActive)}>
						Design
					</button>
				</div>
			) : (
				// if design is active
				<div className="switchbtn flex justify-center items-center gap-[20px]">
					<button
						className="dev w-[150px] bg-[var(--bg2)] px-[24px] py-[12px] rounded-full text-white "
						onClick={() => setdevActive(!devActive)}>
						Dev
					</button>
					<button className="design w-[150px]  px-[24px] py-[12px] rounded-full text-white shadow-sm bg-[#16425B]">
						Design
					</button>
				</div>
			)}
			{devActive ? <DevProjects /> : <DesignProjects />}
		</section>
	);
};

export default Project;
