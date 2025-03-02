import React, { useState } from 'react';
import DesignProjects from '../Components/DesignProject';
import DevProject from '../Components/DevProject';
import Title from '../Components/Title';
import { FiFigma } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { IoInfinite } from 'react-icons/io5';
import DevOpsProjects from '../Components/DevOpsProjects';

const Project = ({ modalIsOn, setmodalIsOn }) => {
	const [devActive, setdevActive] = useState(true);
	const [designActive, setdesignActive] = useState(false);
	const [devopsActive, setdevopsActive] = useState(false);

	const handleDevClick = () => {
		setdevActive(true);
		setdesignActive(false);
		setdevopsActive(false);
	};

	const handleDesignClick = () => {
		setdevActive(false);
		setdesignActive(true);
		setdevopsActive(false);
	};

	const handleDevOpsClick = () => {
		setdevActive(false);
		setdesignActive(false);
		setdevopsActive(true);
	};

	return (
		<section
			className='cursor-default md:px-[80px] px-[20px] mt-[80px]'
			id='project'>
			<Title
				small='PROJECTS & BLOGS'
				large="What I've done"
			/>
			<p className='px-[10px] md:px-[0] text-center leading-[38px] my-[10px] mb-[30px] text-slate-100'>
				Here are the few projects I worked on over the months. Toggle between
				the design projects and the Frontend Development projects using the
				switch below
			</p>
			{/* the switch button for dev and design */}
			<div className='switchbtn flex justify-center items-center gap-[20px] flex-wrap'>
				<button
					className={`design w-[150px] ${
						devActive ? 'bg-[#16425B]' : 'bg-[var(--bg2)]'
					} px-[24px] py-[12px] rounded-full gap-4 text-white shadow-sm flex justify-center items-center`}
					onClick={handleDevClick}>
					<FaCode /> Dev
				</button>
				<button
					className={`design w-[150px] ${
						designActive ? 'bg-[#16425B]' : 'bg-[var(--bg2)]'
					} px-[24px] py-[12px] rounded-full gap-4 text-white shadow-sm flex justify-center items-center`}
					onClick={handleDesignClick}>
					<FiFigma /> Design
				</button>
				<button
					className={`devops w-[150px] ${
						devopsActive ? 'bg-[#16425B]' : 'bg-[var(--bg2)]'
					} px-[24px] py-[12px] rounded-full gap-4 text-white shadow-sm flex justify-center items-center`}
					onClick={handleDevOpsClick}>
					<IoInfinite /> DevOps
				</button>
			</div>

			{devActive ? (
				<DevProject
					modalIsOn={modalIsOn}
					setmodalIsOn={setmodalIsOn}
				/>
			) : designActive ? (
				<DesignProjects
					modalIsOn={modalIsOn}
					setmodalIsOn={setmodalIsOn}
				/>
			) : (
				<DevOpsProjects />
			)}
		</section>
	);
};

export default Project;
