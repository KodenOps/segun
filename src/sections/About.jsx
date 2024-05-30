import React, { useState } from "react";
import { Box } from "../Components/Box";
import Title from "../Components/Title";
import me from "../assets/me.png";
import me2 from "../assets/me2.png";
import me3 from "../assets/me3.png";

const About = () => {
	
	// let myImages = [me, me2, me3]
	const [MeImg, setMeImg] = useState(me)
	function MeToggle() {
		setTimeout(() => {
			if (MeImg === me) {
				setMeImg(me2)
			}
			else if (MeImg === me2) {
				setMeImg(me3)
			} else {
				setMeImg(me)
			}
		}, 2000);
	}
MeToggle()
	return (
		<div
			className="min-h-[90vh] text-white flex cursor-default justify-center items-center py-[80px] md:flex-row w-screen flex-col-reverse"
			id="about">
			<div className="lefts md:w-[45%] w-[100%] ">
				<img
					src={MeImg}
					alt="My images changing every 2 seconds"
					className="w-[80%] md:w-[70%] lg:w-[80%] ml-[10%] md:ml-[15%] lg:ml-[10%]"
				/>
			</div>
			{/* end of left side */}
			<div className="rights md:w-[45%] w-[100%] md:pl-[32px] md:ml-[0] md:mb-[0] mb-[50px] md:mt-[30px]">
				<Title
					small="ABOUT ME"
					large="Who I Am"
				/>
				<div className="content w-full">
					<p className=" px-[24px] md:px-[0] md:text-justify leading-[38px] my-[10px]">I'm a frontend developer passionate about crafting immersive digital experiences that blend form and function. With expertise in UX design, I specialize in creating intuitive interfaces prioritizing user satisfaction. My process involves user research and empathy, using tools like Figma, Protopie, and Figjam to visualize and iterate on design concepts. Proficient in web languages like HTML, CSS, Tailwind CSS, and React/NextJs, I bring designs to life efficiently. Additionally, I have a solid understanding of backend technologies like Linux, Bash scripting, Vagrants, and Docker. Currently, I work as a Site Reliability Engineer, focusing on ensuring system reliability and performance. I thrive in collaborative environments and am eager to innovate. Let's connect to bring your vision to life.
					</p>
					<div className="funfact w-[90%] mx-[5%] md:mx-[0] md:w-[100%]">
						<h3 className="text-2xl font-bold my-[24px] text-center">
							Fun Facts
						</h3>
						<div className="topfact flex  justify-center gap-[32px] flex-wrap   mb-[32px] ">
							<Box
								top="Twitter/X"
								bottom="@fadiya_pelumi"
								link="https://x.com/fadiya_pelumi"
							/>
							<Box
								top="LinkedIn"
								bottom="Click to view"
								link="https://ng.linkedin.com/in/femi-fadiya-segun-pelumi"
							/>
							<Box
								top="Self Taught"
								bottom="Dev/Designer"
							/>
							<Box
								top="Favorite Channel"
								bottom="Freecodecamp"
							/>
							<Box
								top="Availability"
								bottom="Web & Dev gig"
							/>
							{/* <Box
								top="Twitter"
								bottom="@frontend_bros"
							/> */}
							
						</div>
					</div>
				</div>
			</div>
			{/* end of right side */}
		</div>
	);
};

export default About;
