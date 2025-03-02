import React from 'react';
import { devopsblogs } from '../Objects/devopsLinks';
import { Link } from 'react-router-dom';
const DevOpsProjects = () => {
	return (
		<div className='flex justify-center md:items-start gap-[16px] mt-[40px] flex-wrap'>
			{devopsblogs.map((articles) => {
				return (
					<Link
						to={articles.link}
						target='_blank'
						className='md:w-[250px]'>
						<div className='w-[130px] h-[130px] md:w-[250px] md:h-[250px] shadow-lg rounded-[8px] overflow-hidden relative'>
							<img
								src={articles.image}
								alt=''
								className='object-cover w-[150px] h-[150px] md:w-[250px] md:h-[250px] hover:scale-125  hover:grayscale ease duration-1000'
							/>
							<p className='absolute top-[10px] right-[10px]  bg-[var(--bg)] text-white px-[10px] py-[5px] rounded-full md:text-sm text-[10px] border-[2px] border-white'>
								{articles.source}
							</p>
						</div>
						<hr className='mt-4 border-[var(--secondary)]' />
						<p className='text-white  text-center mt-[10px] mb-[24px] md:w-full w-[130px] text-[14px] hover:text-[var(--secondary)] duration-300 ease capitalize '>
							{articles.title}
						</p>
					</Link>
				);
			})}
		</div>
	);
};

export default DevOpsProjects;
