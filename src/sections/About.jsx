import React from "react";
import { Box } from "../Components/Box";
import Title from "../Components/Title";
import heroimg from "../assets/me.png";

const About = () => {
	return (
		<div
			className="min-h-[90vh] text-white flex cursor-default justify-center items-center py-[80px] md:flex-row w-screen flex-col-reverse"
			id="about">
			<div className="lefts md:w-[45%] w-[100%] ">
				<img
					src={heroimg}
					alt="a young boy smiling"
					className="w-[60%] md:w-[70%] lg:w-[80%] ml-[20%] md:ml-[10%]"
				/>
			</div>
			{/* end of left side */}
			<div className="rights md:w-[45%] w-[100%] md:pl-[32px] md:ml-[0] md:mb-[0] mb-[50px] md:mt-[30px]">
				<Title
					small="ABOUT ME"
					large="Who I Am"
				/>
				<div className="content w-full">
					<p className=" px-[32px] md:px-[0] text-justify leading-[38px] my-[10px]">
						Segun is not just a skilled junior developer; he's a multifaceted
						asset, blending frontend development expertise with a deep
						understanding of DevOps practices. His proficiency extends beyond
						crafting visually appealing interfaces; he integrates DevOps
						principles to ensure seamless deployment and continuous integration.
						Segun's commitment to practical solutions encompasses not only the
						frontend experience but also the underlying infrastructure,
						optimizing performance and reliability. With a keen eye on industry
						trends, Segun actively incorporates DevOps methodologies into his
						workflow, staying ahead in the rapidly evolving landscape of
						technology and design. His holistic approach makes him an invaluable
						player in the realm of frontend development and product design,
						bridging the gap between aesthetics and operational efficiency.
					</p>
					<div className="funfact w-[90%] mx-[5%] md:mx-[0] md:w-[100%]">
						<h3 className="text-2xl font-bold my-[24px] text-center">
							Fun Facts
						</h3>
						<div className="topfact flex  justify-center gap-[32px] flex-wrap   mb-[32px] ">
							<Box
								top="2 Years"
								bottom="Solo Experience"
							/>
							<Box
								top="Self Taught"
								bottom="Dev/Designer"
							/>
							<Box
								top="Current Role"
								bottom="Site Reliability Engineer"
							/>
							<Box
								top="Availability"
								bottom="UI Design + Frontend dev gig"
							/>
							{/* <Box
								top="Twitter"
								bottom="@frontend_bros"
							/> */}
							<Box
								top="LinkedIn"
								bottom="Click to view"
								link="https://ng.linkedin.com/in/femi-fadiya-segun-pelumi"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* end of right side */}
		</div>
	);
};

export default About;
