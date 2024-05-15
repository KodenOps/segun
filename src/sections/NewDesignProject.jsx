import React, { useState } from 'react'
import Navigation from "../Components/Navigation"
const NewDesignProject = ({ popupDetails, setpopupDetails, modalIsOn, setmodalIsOn }) => {
  const [nickname, setnickname] = useState("")
  return (
    <div className='fixed top-0 overflow-y-scroll  z-[10000000] max-h-[100vh] pb-[400px] bg-[var(--bg)] w-screen overflow-x-hidden'>
      <Navigation />
      {/* title tiles */}
      <div className="mt-[60px] md:mt-[90px] text-white bg-[#13253A] py-[24px] flex justify-between md:px-[100px] px-[16px] items-center">
        <h2 className='text-lg md:text-3xl font-mono text-[var(--secondary)]'>- {popupDetails[0].title} -</h2>
        <button type="submit" className='md:px-[32px] md:w-auto w-[100px] rounded-sm md:py-[16px] py-[5px] bg-red-500 text-white outline-none  ' onClick={()=> setmodalIsOn(!modalIsOn)}>Close This</button>
      </div>
      {/* InfoBox Container */}
      <div className=" flex md:flex-row flex-col md:px-[32px] px-[10px] py-[24px] md:mx-[70px]  gap-[10px] h-auto">
        {/* the problem section */}
        <div className="left md:w-[55%] w-[100%] bg-[#13253A] rounded-lg pb-[32px]">
          <div className="topBox p-r-[10px] text-white px-[32px] py-[12px]">
            <h3 className="title text-[24px] text-[var(--secondary)] font-mono md:text-left text-center">{popupDetails[0].problemTitle}</h3>
            <p className='font-mono'>{popupDetails[0].problemText}
            </p>
          </div>{ /* End of top box */}
          <div className="bottomBox p-[12px] bg-[#29394c] w-[92%] mx-[4%] gap-5 md:gap-0 flex md:flex-row flex-col items-top justify-between rounded-lg">
            {/* left */}
            <div className="gettingStarted  text-white text-[14px]">
              <h4 className='text-[var(--secondary)] '>{popupDetails[0].gettingStartedTitle}</h4>
              <p className='font-mono md:w-[90%]'>{popupDetails[0].gettingStartedTexts}</p>
            </div>
            {/* right */}
            <div className="gettingStarted  text-white text-[14px]">
              <h4 className='text-[var(--secondary)] '>{popupDetails[0].snoopAroundTitle}</h4>
              <p className='font-mono'> {popupDetails[0].snoopAroundTexts} </p>
            </div>
          </div>
        </div>
        <div className="right md:w-[45%]   text-white h-[100%]">
          {/* solution box starts here */}
          <div className="solution  px-[32px] py-[24px] bg-[#13253A] rounded-lg">
            <h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>{popupDetails[0].solutionTitle}</h4>
            <p className='text-[16px] font-mono text-center mb-[16px]'>After careful studies into the problems, Here are the solutions to the problem I came up with.</p>
           
            <ul className='list-disc font-mono'>
               {popupDetails[0].solutionTexts.map((e) => {
              return <li className='font-mono text-[14px] ' key={e}>{e}</li>
            })}
            </ul>
          </div>
          {/* colour pallete starts here */}
          <div className="px-[32px] py-[24px] bg-[#13253A] rounded-lg mt-[10px]">
            <h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>{popupDetails[0].colorPalleteTitle}</h4>
            <p className='text-[16px] font-mono text-center mb-[16px]'>Below are the colours used to complete this particular project. The colour HEX codes are added for easy reference</p>
            <div className="colours flex items-center justify-center gap-[5px] flex-wrap">
              {popupDetails[0].colorPallete.map((e) => {
                // Handles the color box
                return <div className='colorBox text-white' style={{backgroundColor: e}} key={e}> {e}</div>
              })}
              
             
            </div>
          </div>
          {/* Icon box starts here */}
          <div className="px-[32px] py-[24px] bg-[#13253A] rounded-lg mt-[10px] h-full">
            <h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>{popupDetails[0].toolsTitle}</h4>
            <p className='text-[16px] font-mono text-center mb-[16px]'>Here are the tools and Languages used in bringing this project into life. You too can try any new one you see here.</p>
            <div className="colours flex items-center justify-center gap-[60px] flex-wrap">
              {popupDetails[0].toolsIcons.map((Item) => {
                let ItemIcon = Item.icon
                // console.log(f)
                return <div className='iconFlex ' key={Item.name}> <ItemIcon size={30}/> {Item.name} </div>
              })}
            </div>
          </div>
          {/* END OF ICON BOX */}
        </div>
        {/* END OF RIGHT */}
      </div>
      {/* RESEARCH ANALYSIS */}
      <div className="research px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px]">
        <h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center'>{popupDetails[0].ResearchAnalysisTitle}</h4>
        <div className="images w-[100%] flex justify-start items-center gap-[10px] flex-wrap mt-[24px] text-white ">
          {popupDetails[0].researchImgs.map((e) => {
            return <div className='researchbox  flex-col bg-none'>
              <img
            src={e.img}
              className="img1 w-full md:object-cover object-fit rounded-md "
              alt='snapshot images'
              key={e.name}
              />
              <p>{e.name }</p>
              </div>
          })}
         
        </div>
      </div>
      {/* PROJECT SNAPSHOTS */}
      <div className="research px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px] mt-[24px]">
        <h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center'>{popupDetails[0].snapshotTitle}</h4>
        <p className='text-[16px] font-mono text-center md:text-left mb-[16px] md:w-[40%] my-[16px] text-white'>Here are sample snapshot of the designs. These are just mockups to showcase the final product. Click The Behance Btn to preview more</p>
        <div className="images w-[100%] flex justify-start items-center gap-[10px] flex-wrap mt-[24px] text-white ">
          {popupDetails[0].snapshotImg.map((e) => {
            return <img
            src={e}
              className="img1 researchbox md:object-cover object-fit "
              alt='snapshot images'
              key={e}
            />
          })}
          
          {/* <div className="img1 researchbox">img 2</div>
          <div className="img1 researchbox">img 3</div>
          <div className="img1 researchbox">img 4</div>
          <div className="img1 researchbox">img 5</div> */}
        </div>
        <button className='px-[32px] md:w-[300px] w-full rounded-md py-[16px] bg-[var(--secondary)] text-[var(--bg)] mt-[24px]'>View Prototype</button>
      </div>
      {/* RATE PROJECT SECTION */}
      <div className="Ratebox px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px] mt-[24px] flex md:justify-between justify-center items-center flex-wrap">
        <div className="left">
          <h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center'>Rate The Damn Thang!</h4>
          <p className='text-[16px] font-mono text-center md:text-left mb-[16px]  my-[16px] text-white'>What Do you think About this project?</p>
        </div>
        {/* RIGHT SIDE */}

        <form action="" className='flex items-center justify-center flex-wrap gap-3' onSubmit={(e) => {
          e.preventDefault()

         
        }}>
          <input type="text" placeholder='Nickname' className='md:w-[40%] m-[0] py-[16px] rounded-sm' value={nickname} onChange={(e) => { 
            setnickname(e.target.value)
          }} />
          <select name="rate" id="rate" className='px-[32px]  rounded-sm py-[16px] outline-none mr-2'>
            <option value="select Option" >Select Option</option>
            <option value="Bleh">Bleh</option>
            <option value="Not Bad">Not Bad</option>
            <option value="Awesome">Awesome</option>
            <option value="Blow My Mind">Blow My Mind</option>
          </select>
          <button type="submit" className='px-[32px]  rounded-sm py-[16px] bg-[var(--secondary)] text-[var(--bg)] outline-none  '>Submit</button>
        </form>
      </div>
      {/* end of RATE IT */}
      <button className='px-[32px] md:w-[400px] w-full mx-[10px] md:mx-[100px] mt-[16px] rounded-sm py-[16px] bg-red-400 text-[var(--bg)] outline-none  ' onClick={()=> setmodalIsOn(!modalIsOn)}>Close Project</button>
    </div>
  )
}

export default NewDesignProject