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
			<div className="hero flex md:flex-row flex-col justify-center md:justify-around  items-center   min-h-[100vh] z-[3] absolute md:w-[90vw] w-full md:ml-[5vw] pt-[90px]  gap-[30px] ">
				<div className="left  w-full md:w-[50%] text-white flex flex-col items-center ">
					<h4 className="md:text-xl text-xl lg:text-2xl text-white font-medium">
						Smart People Writes Codes
					</h4>
					<div className=" md:text-3xl lg:text-5xl text-xl font-bold my-[30px] flex justify-center items-center gap-[10px]">
						<h2>I</h2>

						{/* the typing effect on the hero page */}
						<div className="text-[var(--secondary)]">
							<Typewriter
								options={{
									strings: ["Code", "Design", "Engineer"],
									autoStart: true,
									loop: true,
									cursor: null,
								}}
							/>
						</div>

						<h2>Solutions</h2>
					</div>

					<h4 className="text-xl md:text-2xl  lg:text-2xl">
						Instead. Want to know more?
					</h4>
					<a
						href="#about"
						className="w-[100%] ">
						<button className="py-3 px-6 bg-[var(--secondary)] rounded-full  my-[30px] w-[60%] mx-[20%] hover:bg-slate-200 ease duration-[1s] cursor-pointer text-[var(--bg2)] font-bold md:block hidden">
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
						<button className="py-3 px-6 bg-[var(--secondary)] rounded-full font-[500] my-[30px] w-[60%] mx-[20%] hover:bg-slate-200 ease duration-[1s] cursor-pointer text-[var(--bg2)] font-bold md:hidden block">
							Get Started
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
