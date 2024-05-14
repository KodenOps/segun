import React from 'react'
import Navigation from "../Components/Navigation"
const NewDesignProject = () => {
  return (
    <div className='   min-h-[100vh] pb-[200px] bg-[var(--bg)]'>
      <Navigation />
      {/* title tiles */}
      <div className="mt-[60px] md:mt-[90px] text-white bg-[#13253A] py-[24px] flex justify-center items-center">
        <h2 className='text-lg md:text-2xl font-mono text-[var(--secondary)]'>- Title -</h2>
      </div>
      {/* InfoBox Container */}
      <div className=" flex md:flex-row flex-col px-[32px] py-[24px] md:mx-[70px] ">
        {/* the problem section */}
        <div className="left md:w-[55%] w-[100%] bg-[#13253A] rounded-lg pb-[32px]">
          <div className="topBox p-r-[10px] text-white px-[32px] py-[12px]">
            <h3 className="title text-[24px] text-[var(--secondary)] font-mono ">The Problem</h3>
            <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus praesentium nulla voluptatibus ipsam blanditiis et voluptates minima accusantium in eius quae incidunt error exercitationem, nam ea dolore iste veritatis reiciendis. Quis error in harum sunt voluptas iusto. Ullam libero ex eum porro nulla, provident explicabo consequuntur laborum, nam consectetur nesciunt. Obcaecati consectetur quisquam ullam et assumenda tenetur recusandae, commodi culpa quibusdam repudiandae voluptatum magnam! Veritatis molestiae natus quibusdam saepe facilis recusandae fugiat in excepturi distinctio nihil, cumque quisquam incidunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus autem dolor nostrum est sed hic id esse explicabo iste necessitatibus magnam, quas provident quidem laudantium nam animi quos nesciunt quasi expedita fugit obcaecati alias consectetur. Iste ea culpa minima.
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
        <div className="right w-[45%]">ddd</div>
      </div>
    </div>
  )
}

export default NewDesignProject