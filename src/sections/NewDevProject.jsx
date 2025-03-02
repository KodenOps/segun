import React, { useRef, useState } from 'react';
import Navigation from '../Components/Navigation';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewDevProject = ({ popupDetails, modalIsOn, setmodalIsOn }) => {
	// RATE THE DAMN THANG
	// RATE THE DAMN THANG
	// RATE THE DAMN THANG
	const [name, setname] = useState('');
	const [email, setemail] = useState('');
	const [message, setmessage] = useState('');
	const [subject, setsubject] = useState('');
	const [Rate, setRate] = useState('');
	const forms = useRef();

	const sendEmail = (e) => {
		// if (message === "" || name === "") {
		//   console.log("field cannot be empty")
		// } else {
		//   e.preventDefault();
		//   setemail("osbornefashe@gmail.com")
		//   emailjs.sendForm('service_sqjdu8d', 'template_j6wvgko', forms.current, '9ih2WuxJGqkctIegS')
		//     .then((result) => {
		//       console.log(result.text);
		//     }, (error) => {
		//       console.log(error.text);
		//     });
		//   toast.success(message + ' sent successfully! 🦄', {
		//     theme: "dark",
		//   });
		//   setname('');
		//   setemail('');
		//   setmessage('');
		//   setsubject('');
		// }
		if (message === '' || name === '') {
			alert('field cannot be empty');
			e.preventDefault();
		} else {
			e.preventDefault();
			console.log(name, email, message, subject);

			emailjs
				.sendForm(
					'service_sqjdu8d',
					'template_j6wvgko',
					forms.current,
					'9ih2WuxJGqkctIegS'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			toast.success(
				"'" +
					Rate +
					"'" +
					' rating has been sent successfully for this project! 🦄',
				{
					theme: 'dark',
				}
			);
			setname('');
			setemail('');
			setmessage('');
			setsubject('');
		}
	};

	return (
		<div className='fixed top-0 overflow-y-scroll  z-[10000000] max-h-[100vh] pb-[400px] bg-[var(--bg)] w-screen overflow-x-hidden'>
			<Navigation
				modalIsOn={modalIsOn}
				setmodalIsOn={setmodalIsOn}
			/>
			{/* title tiles */}
			<div className='mt-[60px] md:mt-[90px] text-white bg-[#13253A] py-[24px] flex md:justify-between justify-center gap-[20px] md:gap-0 md:px-[100px] px-[16px] items-center flex-wrap '>
				<h2 className='text-lg md:text-3xl font-mono text-[var(--secondary)]'>
					- {popupDetails[0].title} -
				</h2>
				<button
					type='submit'
					className='md:px-[32px] md:w-auto w-[100px] rounded-sm md:py-[16px] py-[5px] bg-red-500 text-white outline-none  '
					onClick={() => setmodalIsOn(!modalIsOn)}>
					Close This
				</button>
			</div>
			{/* InfoBox Container */}
			<div className=' flex md:flex-row flex-col md:items-center  md:px-[32px] px-[10px] py-[24px] md:mx-[70px]  gap-[10px] h-auto'>
				{/* the problem section */}
				<div className='left md:w-[55%] w-[100%]  rounded-lg h-full'>
					{/* introduction */}
					<div>
						<div className='topBox w-full mt-2 text-white  px-[32px] py-[24px] bg-[#13253A] rounded-lg'>
							<h3 className='title text-[24px] text-[var(--secondary)] font-mono md:text-left text-center'>
								{popupDetails[0].problemTitle}
							</h3>
							<p className='font-mono'>{popupDetails[0].problemText}</p>
						</div>
						{/* Features */}
						<div className='solution  w-full mt-2 text-white  px-[32px] py-[24px] bg-[#13253A] rounded-lg min-h-full flex-2'>
							<h4 className='text-[var(--secondary)] md:text-left text-center text-[24px] font-mono'>
								{popupDetails[0].solutionTitle}
							</h4>
							<p className='text-[16px] font-mono  mb-[16px] md:w-[80%] w-full md:text-left text-center'>
								After careful studies into the problems, Here are the solutions
								to the problem I came up with.
							</p>
							<ul className='list-disc font-mono'>
								{popupDetails[0].solutionTexts.map((e) => {
									return (
										<li
											className='font-mono text-[14px] '
											key={e}>
											{e}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div className='right md:w-[45%]   text-white h-[100%]'>
					{/* solution box starts here */}

					{/* colour pallete starts here */}
					<div className='px-[32px] py-[24px] bg-[#13253A] rounded-lg mt-[10px] flex-1'>
						<h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>
							{popupDetails[0].colorPalleteTitle}
						</h4>
						<p className='text-[16px] font-mono text-center mb-[16px]'>
							Below are the colours used to complete this particular project.
							The colour HEX codes are added for easy reference
						</p>
						<div className='colours flex items-center justify-center gap-[5px] flex-wrap'>
							{popupDetails[0].colorPallete.map((e) => {
								// Handles the color box
								return (
									<div
										className='colorBox text-white md:w-[40%] lg:w-[30%] w-[49%] flex-wrap'
										style={{ backgroundColor: e }}
										key={e}>
										{' '}
										{e}
									</div>
								);
							})}
						</div>
					</div>
					{/* Icon box starts here */}
					<div className='px-[32px] py-[24px] bg-[#13253A] rounded-lg mt-[10px] h-auto flex-1'>
						<h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>
							{popupDetails[0].toolsTitle}
						</h4>
						<p className='text-[16px] font-mono text-center mb-[16px]'>
							Here are the tools and Languages used in bringing this project
							into life. You too can try any new one you see here.
						</p>
						<div className='colours flex items-center justify-center gap-[60px] flex-wrap'>
							{popupDetails[0].toolsIcons.map((Item) => {
								let ItemIcon = Item.icon;
								// console.log(f)
								return (
									<div
										className='iconFlex '
										key={Item.name}>
										{' '}
										<ItemIcon size={30} /> {Item.name}{' '}
									</div>
								);
							})}
						</div>
					</div>
					{/* END OF ICON BOX */}
				</div>
				{/* END OF RIGHT */}
			</div>
			{/* RESEARCH ANALYSIS */}
			{popupDetails[0].researchImgs ? (
				<div className='research px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px]'>
					<h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center md:mb-[20px] mb-[32px]'>
						{popupDetails[0].ResearchAnalysisTitle}
					</h4>
					<div className='images w-[100%] flex justify-start items-center gap-[10px] flex-wrap mt-[24px] text-white md:py-[50px]'>
						{popupDetails[0].researchImgs.map((e) => {
							return (
								<div
									className='researchbox  flex-col bg-none mt-[20px] mb-[100px] md:mb-[30px]'
									key={e.img}>
									<img
										src={e.img}
										className='img1 w-full md:object-cover object-fit rounded-md '
										alt='snapshot images'
										key={e.name}
									/>
									<p className='md:mt-[16px]'>{e.name}</p>
								</div>
							);
						})}
					</div>
				</div>
			) : (
				''
			)}

			{/* PROJECT SNAPSHOTS */}
			<div className='research px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px] md:mt-[20px] mt-[20px]'>
				<h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center'>
					{popupDetails[0].snapshotTitle}
				</h4>
				<p className='text-[16px] font-mono text-center md:text-left mb-[16px] md:w-[40%] my-[16px] text-white'>
					Here are sample snapshot of the designs. These are just mockups to
					showcase the final product. Click The Live Link button to preview more
				</p>
				<div className='images w-[100%] flex justify-start items-center gap-[10px] flex-wrap mt-[80px] text-white '>
					{popupDetails[0].snapshotImg.map((e) => {
						return (
							<div
								className='researchbox  flex-col bg-none mb-[50px] md:mb-[100px]'
								key={e}>
								<img
									src={e}
									className='img1 w-full md:object-cover object-fit rounded-md '
									alt='snapshot images'
									key={e}
								/>
							</div>
						);
					})}
				</div>
				<a
					href={popupDetails[0].LiveLink}
					target='_blank'
					rel='noreferrer'>
					<button className='px-[32px] md:w-[300px] w-full rounded-md py-[16px] bg-[var(--secondary)] text-[var(--bg)] mt-[24px]'>
						Live Link
					</button>
				</a>
			</div>
			{/* RATE PROJECT SECTION */}
			<div className='Ratebox px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px] mt-[24px] flex md:justify-between justify-center items-center flex-wrap'>
				<div className='left'>
					<h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center'>
						Rate The Damn Thang!
					</h4>
					<p className='text-[16px] font-mono text-center md:text-left mb-[16px]  my-[16px] text-white'>
						What Do you think About this project?
					</p>
				</div>
				{/* RIGHT SIDE */}

				<form
					action='post'
					className='flex items-center justify-center flex-wrap gap-3'
					ref={forms}
					onSubmit={sendEmail}>
					<input
						name='user_name'
						placeholder='Your name'
						required
						autoComplete='on'
						onChange={(e) => setname(e.target.value)}
						className='md:w-[40%] m-[0] py-[16px] rounded-sm'
						value={name}
					/>
					{/* <label htmlFor="email">Email Address</label> */}
					{/* <label htmlFor="email">subject</label> */}
					<input
						type='text'
						name='subject'
						placeholder='Subject'
						typeof='text'
						value={subject}
						required
						autoComplete='off'
						readOnly
						onSubmit={(e) =>
							setsubject(
								'A new Project Rating - Title: ' +
									popupDetails[0].title +
									'!!!!'
							)
						}
						className='hidden'
					/>

					{/* <label htmlFor="message">Enter Message</label> */}
					<input
						name='user_message'
						id='message'
						value={message}
						cols='50'
						rows='10'
						placeholder='Enter Message'
						className='text-[var(--secondary)] hidden bg-[var(--bg2)] p-[20px]'
						readOnly
						required
						onSubmit={(e) => setmessage(e.value)}></input>
					<select
						name='rate'
						id='rate'
						className='px-[32px]  rounded-sm py-[16px] outline-none mr-2'
						onChange={(e) => setRate(e.target.value)}
						required>
						<option value='Blehhhhhhhh'>Blehhhhhhhh</option>
						<option value='Not Bad'>Not Bad</option>
						<option value='Awesome'>Awesome</option>
						<option value='Blow My Mind'>Blow My Mind</option>
					</select>
					<button
						type='submit'
						className='px-[32px]  rounded-sm py-[16px] bg-[var(--secondary)] text-[var(--bg)] outline-none  '
						onClick={() => {
							let messageMe = `${name} just Rate your  ${popupDetails[0].title} project. He rated your project: ${Rate}`;
							setmessage(messageMe);
							setsubject(
								'A new Project Rating - Title: ' +
									popupDetails[0].title +
									'!!!!'
							);
						}}>
						Submit
					</button>
				</form>
			</div>
			{/* end of RATE IT */}
			{/* <button className='px-[32px] md:w-[400px] w-full mx-[10px] md:mx-[100px] mt-[16px] rounded-sm py-[16px] bg-red-400 text-[var(--bg)] outline-none  ' onClick={() => setmodalIsOn(!modalIsOn)}>Close Project</button> */}
			<button
				type='submit'
				className='md:px-[32px]  md:w-auto w-[92%] mx-[4%] rounded-sm md:py-[16px] mt-[16px]  py-[16px] bg-red-500 text-white outline-none   md:mx-[100px]'
				onClick={() => setmodalIsOn(!modalIsOn)}>
				Close This
			</button>
			<ToastContainer />
		</div>
	);
};

export default NewDevProject;
