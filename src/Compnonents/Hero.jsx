import React from "react";
import Profile from "../assets/img/Yellow Inspiration Modern Instagram Profile Picture (4) 1.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
     <div className="mx-36 mt-32">
      <div className="flex md:flex-row flex-col
       justify-between items-center">

<div className="text-white" >
<h1 className="text-3xl">Hi There!</h1>
            <h1 className="  font-bold text-5xl mt-1 mb-3">
              Moin ud Din Muhammad-Design Panda
            </h1>
            <h1 className="text-3xl">UXUI Designer</h1>
            <p className="my-5 w-[500px]">
              Three years immersed in the design realm, overseeing 100+ UI/UX
              projects as a top rated Upwork freelancer. Experienced in project
              mangement and cross-team collaboration at Techxpaert.io, ensuring
              smooth execution and client satisfaction.
            </p>
            <div className="flex gap-x-4 items-center">
            <div><h1>Book a meeting:</h1></div>
              <div >
              
              
                  <button className="flex items-center  justify-center gap-x-1 bg-green-600 px-4 py-2 rounded">

                <span>Calendly</span>
                <span><a href="https://calendly.com/moinuddinmuhammad"><FaExternalLinkAlt/></a></span>
                  </button>
                </div>
            </div>

</div>
<div>
  <img src={Profile} alt="" />
</div>
      </div>
     </div>
    </div>
  );
};

export default Hero;
