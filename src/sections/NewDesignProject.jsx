import React from 'react'
import Navigation from "../Components/Navigation"
import { DiHtml5, DiCss3, DiReact, DiLinux   } from "react-icons/di";
const NewDesignProject = () => {
  return (
    <div className='   min-h-[100vh] pb-[200px] bg-[var(--bg)]'>
      <Navigation />
      {/* title tiles */}
      <div className="mt-[60px] md:mt-[90px] text-white bg-[#13253A] py-[24px] flex justify-center items-center">
        <h2 className='text-lg md:text-2xl font-mono text-[var(--secondary)]'>- Title -</h2>
      </div>
      {/* InfoBox Container */}
      <div className=" flex md:flex-row flex-col md:px-[32px] px-[10px] py-[24px] md:mx-[70px]  gap-[10px] h-auto">
        {/* the problem section */}
        <div className="left md:w-[55%] w-[100%] bg-[#13253A] rounded-lg pb-[32px]">
          <div className="topBox p-r-[10px] text-white px-[32px] py-[12px]">
            <h3 className="title text-[24px] text-[var(--secondary)] font-mono md:text-left text-center">The Problem</h3>
            <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus praesentium nulla voluptatibus ipsam blanditiis et voluptates minima accusantium in eius quae incidunt error exercitationem, nam ea dolore iste veritatis reiciendis. Quis error in harum sunt voluptas iusto. Ullam libero ex eum porro nulla, provident explicabo consequuntur laborum, nam consectetur nesciunt. Obcaecati consectetur quisquam ullam et assumenda tenetur recusandae, commodi culpa quibusdam repudiandae voluptatum magnam! Veritatis molestiae natus quibusdam saepe facilis recusandae fugiat in excepturi distinctio nihil, cumque quisquam incidunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus autem dolor nostrum est sed hic id esse explicabo iste necessitatibus magnam, quas provident quidem laudantium nam animi quos nesciunt quasi expedita fugit obcaecati alias consectetur. Iste ea culpa minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum reiciendis quisquam, perferendis a vitae, magni dolorum officiis facere dicta obcaecati quis. Provident minima fugit incidunt. Dolorum fuga cum eaque praesentium voluptatem reiciendis nulla, voluptatum ex. Similique, beatae fugiat? Animi tempore sapiente blanditiis beatae nam voluptatem id assumenda ullam inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor culpa impedit blanditiis optio nulla animi deserunt, exercitationem illum sed expedita totam suscipit eius vel doloremque debitis soluta ipsa. Ipsam fuga alias praesentium ex eligendi? Quas, nulla? Magni possimus illum sunt laborum beatae, eius ad saepe vel ex, in nesciunt dignissimos pariatur neque ipsa voluptatum corporis aliquam eaque eos delectus, aperiam alias
            </p>
          </div>{ /* End of top box */}
          <div className="bottomBox p-[12px] bg-[#29394c] w-[92%] mx-[4%] gap-5 md:gap-0 flex md:flex-row flex-col items-center justify-between rounded-lg">
            {/* left */}
            <div className="gettingStarted  text-white text-[14px]">
              <h4 className='text-[var(--secondary)] '>Getting Started</h4>
              <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatibus minima ullam eveniet explicabo, voluptas illo necessitatibus eum perferendis, nihil, reiciendis est aliquid. Voluptatum, quos dolorem. Nisi, recusandae perspiciatis!</p>
            </div>
            {/* right */}
            <div className="gettingStarted  text-white text-[14px]">
              <h4 className='text-[var(--secondary)] '>Snooping Around</h4>
              <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatibus minima ullam eveniet explicabo, voluptas illo necessitatibus eum perferendis, nihil, reiciendis est aliquid. Voluptatum, quos dolorem. Nisi, recusandae perspiciatis!</p>
            </div>
          </div>
        </div>
        <div className="right md:w-[45%]   text-white h-[100%]">
          {/* solution box starts here */}
          <div className="solution  px-[32px] py-[24px] bg-[#13253A] rounded-lg">
            <h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>The Solution</h4>
            <p className='text-[16px] font-mono text-center mb-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero temporibus pariatur accusantium amet laudantium?</p>
            <ul className='list-disc font-mono'>
              <li className='font-mono text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, nisi? Debitis suscipit quas numquam ex? Cumque quibusdam modi reiciendis officiis.</li>
              <li className='font-mono text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, nisi? Debitis suscipit quas numquam ex? Cumque quibusdam modi reiciendis officiis.</li>
              <li className='font-mono text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, nisi? Debitis suscipit quas numquam ex? Cumque quibusdam modi reiciendis officiis.</li>
            </ul>
          </div>
          {/* colour pallete starts here */}
          <div className="px-[32px] py-[24px] bg-[#13253A] rounded-lg mt-[10px]">
            <h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>Colour Pallete</h4>
            <p className='text-[16px] font-mono text-center mb-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero temporibus pariatur accusantium amet laudantium?</p>
            <div className="colours flex items-center justify-center gap-[5px] flex-wrap">
              <div className='colorBox bg-red-200 '> #232123</div>
              <div className='colorBox bg-green-200 '> #232123</div>
              <div className='colorBox bg-yellow-200 '> #232123</div>
              <div className='colorBox bg-blue-200 '> #232123</div>
              <div className='colorBox bg-orange-200 '> #232123</div>
            </div>
          </div>
          {/* Icon box starts here */}
          <div className="px-[32px] py-[24px] bg-[#13253A] rounded-lg mt-[10px] h-full">
            <h4 className='text-[var(--secondary)] text-center text-[24px] font-mono'>Tools Used</h4>
            <p className='text-[16px] font-mono text-center mb-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero temporibus pariatur accusantium amet laudantium?</p>
            <div className="colours flex items-center justify-center gap-[60px] flex-wrap">
              <div className='iconFlex '> <DiHtml5 size={40}/> HTML </div>
              <div className='iconFlex'> <DiCss3 size={40}/> CSS</div>
              <div className='iconFlex'> <DiReact size={40}/>REACT </div>
              <div className='iconFlex'> <DiLinux size={40}/> Linux</div>
            </div>
          </div>
          {/* END OF ICON BOX */}
        </div>
        {/* END OF RIGHT */}
      </div>
      {/* RESEARCH ANALYSIS */}
      <div className="research px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px]">
        <h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center'>Research Analysis</h4>
        <div className="images w-[100%] flex justify-start items-center gap-[10px] flex-wrap mt-[24px] text-white ">
          <div className="img1 researchbox">img 1</div>
          <div className="img1 researchbox">img 2</div>
          <div className="img1 researchbox">img 3</div>
          <div className="img1 researchbox">img 4</div>
          <div className="img1 researchbox">img 5</div>
        </div>
      </div>
      {/* PROJECT SNAPSHOTS */}
      <div className="research px-[32px] py-[24px] bg-[#13253A] rounded-lg md:mx-[100px] mx-[10px] mt-[24px]">
        <h4 className='text-[var(--secondary)]  text-[24px] font-mono md:text-left text-center'>Research Analysis</h4>
        <p className='text-[16px] font-mono text-center md:text-left mb-[16px] md:w-[40%] my-[16px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero temporibus pariatur accusantium amet laudantium?</p>
        <div className="images w-[100%] flex justify-start items-center gap-[10px] flex-wrap mt-[24px] text-white ">
          <div className="img1 researchbox">img 1</div>
          <div className="img1 researchbox">img 2</div>
          <div className="img1 researchbox">img 3</div>
          <div className="img1 researchbox">img 4</div>
          <div className="img1 researchbox">img 5</div>
        </div>
      </div>
    </div>
  )
}

export default NewDesignProject