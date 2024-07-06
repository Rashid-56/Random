import React from "react";
import contact from "../assets/img/Contact.png";
import { FaBehance,FaLinkedin,FaWhatsapp   ,FaRegCopy  } from "react-icons/fa";
import { TbMailHeart } from "react-icons/tb";
import { MdOutlineWifiCalling } from "react-icons/md";

const handlecopy=()=>{
    navigator.clipboard.writeText("+92 3324778818")
}

const handlecopy1=()=>{
    navigator.clipboard.writeText("mmoinuddin002@gmail.com")
}

const Contact = () => {
  return (
    <div>
      <div className="md:mx-36 mx-14 my-24 flex justify-center items-center">
        <div>
          <img src={contact} alt="" />
        </div>

      </div>
      <div className="md:mx-36 mx-10 md:mb-8 mb-2 md:pb-4 pb-2  rounded-2xl bg-black ">
        <div className=" text-center md:p-8 p-4 md:text-[20px] text-[10px] text ">
            <h1 className="my-3">What’s next? Feel free to reach out to me </h1>
            <h1> if you're looking for a designer, Or you want to hire development Resource</h1>
        </div>
        <div className="md:mt-6 mt-3 items-center text-center text-white md:text-[30px] text-[10px]">
            <div className="flex items-center justify-center gap-x-4">
                <div className="text-green-400"><TbMailHeart  /></div>

                <div>
                    <h1>mmoinuddin002@gmail.com</h1>

                    </div>
                    <div className="text-blue-300"><button className="text-blue-300" onClick={handlecopy1}><FaRegCopy /></button></div>
                </div>
                <div className="flex items-center justify-center md:gap-x-4 gap-x-1">
                <div className="text-green-400"><MdOutlineWifiCalling  /></div>

                <div>
                    <h1>+92 3324778818</h1>

                    </div>
                    <div ><button className="text-blue-300" onClick={handlecopy}><FaRegCopy /></button></div>
                </div>
            <div className="mt-4 text md:text-[12px] text-[6px]">
                <h1>You may also find me on these platform!</h1>
                <div className="flex text-center justify-center items-center gap-4 mt-2">

                <div className="text-blue-900 text-[20px]"><a href="https://www.linkedin.com/in/moinmuhammad/"><FaLinkedin /></a></div>
                <div className="text-light-blue-600 text-[20px]"><a href="https://www.behance.net/muhammamoinud"><FaBehance /></a></div>
                <div className="text-green-500 text-[20px] "><a href="https://api.whatsapp.com/send/?phone=923324778818&text&type=phone_number&app_absent=0"><FaWhatsapp  /></a></div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
