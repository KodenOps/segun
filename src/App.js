import Contact from "./sections/Contact";
import { React } from "react";
// import { React,useEffect } from 'react'
import Skills from "./sections/skills";
import "./index.css";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import { ToastContainer } from "react-toastify";
import Footer from "./sections/Footer";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	
	return (
		<div className="relative bg-[var(--bg)] min-h-[120vh]  overflow-hidden">
			<Hero />
			<About />
			<Skills />
			<Project />
			<Contact />
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default App;
