import React from "react";
import Profile from "../assets/img/Yellow Inspiration Modern Instagram Profile Picture (4) 1.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
     <div className='md:mx-36 mx-12'>
        <div className="relative mt-36">
          <div className="text-white text">
            <h1 className="text-2xl">Hi There!</h1>
            <h1 className="  font-bold text-4xl mt-1 mb-2">
              Moin ud Din Muhammad-Design Panda
            </h1>
            <h1 className="text-2xl">UXUI Designer</h1>
            <p className="my-5 w-[500px] text-slate-200">
              Three years immersed in the design realm, overseeing 100+ UI/UX
              projects as a top rated Upwork freelancer. Experienced in project
              mangement and cross-team collaboration at Techxpaert.io, ensuring
              smooth execution and client satisfaction.
            </p>
            <div>
            <div className="flex gap-x-3 items-center" >
              <div>
                <h1>Book a meeting: </h1>
                
                </div>
              <div className=" inline ">
                  <button className="flex items-center justify-center gap-x-1 bg-green-600 px-4 py-2 rounded">

                <span>Calendly</span>
                <span><a href="https://calendly.com/moinuddinmuhammad"><FaExternalLinkAlt/></a></span>
                  </button>
                </div></div>
            </div>
            </div>
          <div className="absolute top-[-197px] right-[-140px] overflow-none -z-50">
            <img className="max-w-[700px] overflow-hidden" src={Profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
