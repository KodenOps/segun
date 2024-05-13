import React from "react";
import Navigation from "../Components/Navigation";
import vid from "../assets/vid.mp4";
import heroimg from "../assets/heroimg.png";
import Typewriter from "typewriter-effect";
const Hero = () => {
	return (
		<div
			className="min-h-screen w-screen relative cursor-default"
			id="home">
			<Navigation />
			<video
				src={vid}
				autoPlay
				loop
				muted
				className="w-full h-full object-cover  left-0 top-0 absolute z-[1] opacity-10"></video>
			<div className="hero flex md:flex-row flex-col justify-center md:justify-around  items-center   min-h-[100vh] z-[3] absolute md:w-[90vw] w-full md:ml-[5vw] pt-[10px]  md:gap-[20px] gap-[50px] ">
				<div className="left  w-full md:w-[50%] text-white flex flex-col items-center ">
					<h4 className="md:text-xl text-md lg:text-4xl text-white font-medium">
						Smart People Writes Codes
					</h4>
					<div className=" md:text-4xl lg:text-6xl text-3xl font-bold md:my-[30px] my-[10px] flex justify-center items-center gap-[10px]">
						<h2>I</h2>

						{/* the typing effect on the hero page */}
						<div className="text-[var(--secondary)]">
							<Typewriter
								options={{
									strings: ["CODE", "DESIGN", "ENGINEER"],
									autoStart: true,
									loop: true,
									cursor: null,
								}}
							/>
						</div>

						<h2>Solutions</h2>
					</div>

					<h4 className="md:text-xl text-md lg:text-4xl text-white font-medium">
						Instead
					</h4>
					<h4 className="text-md md:text-2xl mt-[32px]  ">
						Want to know more?
					</h4>
					<a
						href="#about"
						className="w-[100%] ">
						<button className="p-4 px-6 bg-[var(--secondary)] rounded-[10px]  my-[30px] w-[60%] mx-[20%] hover:bg-slate-200 ease duration-[1s] cursor-pointer text-[var(--bg2)] font-bold md:block hidden">
							Get Started
						</button>
					</a>
				</div>
				{/* end of left side of hero */}
				<div className="right  w-[100%] lg:w-[45%] md:w-[60%] ">
					<img
						src={heroimg}
						alt="a young boy smiling"
						className="w-[60%] md:w-[70%] lg:w-[80%] ml-[20%] md:ml-[10%]"
					/>
				</div>
				<div className="w-full md:hidden block">
					<a
						href="#about"
						className="w-[100%] ">
						<button className="py-3 px-6 bg-[var(--secondary)] rounded-[10px] font-[500] my-[30px] w-[60%] mx-[20%] hover:bg-slate-200 ease duration-[1s] cursor-pointer text-[var(--bg2)] md:hidden block">
							Get Started
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
