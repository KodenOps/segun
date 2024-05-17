import Contact from "./sections/Contact";
import { React, useState } from "react";
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
	
	const [modalIsOn, setmodalIsOn] = useState(false);
	return (
		<div className="relative bg-[var(--bg)] min-h-[120vh]  overflow-hidden">
			<Hero modalIsOn={modalIsOn} setmodalIsOn={setmodalIsOn } />
			<About />
			<Skills />
			<Project modalIsOn={modalIsOn} setmodalIsOn={setmodalIsOn } />
			<Contact />
			<Footer />
			<ToastContainer  className="z-[100000000000000]"/>
		</div>
	);
};

export default App;
