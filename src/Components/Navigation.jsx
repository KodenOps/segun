import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import cv from "../assets/doc/mycv.pdf";
const Navigation = () => {
	const [isOn, setisOn] = useState(true);
	function handleNav() {
		setisOn(!isOn);
	}
	return (
		<nav className="flex items-center justify-between border-b-slate-100 shadow-md  lg:px-[100px] md:px-[40px] sm:px-[30px] px-[25px] h-[90px] bg-[var(--bg)] fixed w-screen top-0 z-[100] ">
			<div
				id="logo"
				className=" text-xl sm:text-3xl font-[600] z-[3]">
				<a href="#home">
					<h3 className="text-white">
						SE<span className="text-[var(--secondary)]">GUN</span>
					</h3>
				</a>
			</div>

			<div id="links">
				<ul
					id="web"
					className="hidden md:flex items-center justify-around text-white ">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#project">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			{/* end of web links */}
			<div
				id="button"
				className="hidden md:flex">
				<a
					className="md:py-3 px-6 bg-[var(--secondary)] rounded-full font-[500]"
					href={cv}
					target="_blank"
					rel="noreferrer">
					Download CV
				</a>
			</div>
			{/* this is where the mobile navigation starts from */}
			<div
				id="mobile-menu"
				className="flex z-[3] md:hidden"
				onClick={() => handleNav()}>
				{isOn ? (
					<AiOutlineMenu
						size={32}
						className="text-white"
					/>
				) : (
					<AiOutlineClose
						size={32}
						className="text-white"
					/>
				)}
			</div>
			<div
				id="mobile-links"
				className={
					isOn
						? "absolute top-[-150vh] ease duration-300 w-full left-0 h-screen"
						: "md:hidden block absolute top-0 w-full h-screen  left-0 bg-[var(--bg)] ease duration-300 z-[1]"
				}>
				<ul className="flex flex-col items-center text-xl text-white my-[calc(90px*1.3)] ">
					<a
						href="#home"
						onClick={() => setisOn(!isOn)}
						className="w-full">
						<li>Home</li>
					</a>
					<a
						href="#about"
						onClick={() => setisOn(!isOn)}
						className="w-full">
						<li>About</li>
					</a>
					<a
						href="#skills"
						onClick={() => setisOn(!isOn)}
						className="w-full">
						<li>Skills</li>
					</a>
					<a
						href="#project"
						onClick={() => setisOn(!isOn)}
						className="w-full">
						<li>Projects</li>
					</a>
					<a
						href="#contact"
						onClick={() => setisOn(!isOn)}
						className="w-full">
						<li>Contact</li>
					</a>
					<button className="py-3 px-6 bg-[var(--secondary)] rounded-full font-[500] text-[var(--bg)]">
						Download CV
					</button>
				</ul>
			</div>
			{/* end of mobile navigation */}
		</nav>
	);
};

export default Navigation;
