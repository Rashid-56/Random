import React from "react";

import { FaBehance,FaLinkedin,FaWhatsapp   } from "react-icons/fa";
import Logo from "../assets/img/Logo/logo.png"



const Header = () => {
  return (
    
    
    <nav class="bg-black border-gray-200">
  <div className="m">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-36  p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
        <span className="w-28 bg-black"><img className="bg-transparent bg-black w-[100]" src={Logo} alt="" /></span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-row p-3 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 items-center justify-center bg-black ">
        <li>
          <a href="https://www.linkedin.com/in/moinmuhammad/" class="block text-[25px] py-2 px-3 text-blue-900 rounded md:bg-transparent md:p-0 " aria-current="page"><FaLinkedin /></a>
        </li>
        
        <li>
          <a href="https://www.behance.net/muhammamoinud" class="block text-[25px] py-2 px-3 text-light-blue-600 rounded md:bg-transparent md:p-0 " aria-current="page"><FaBehance/></a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send/?phone=923324778818&text&type=phone_number&app_absent=0" class="block text-[25px] py-2 px-3 text-green-500 rounded md:bg-transparent md:p-0 " aria-current="page"><FaWhatsapp/></a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 " aria-current="page"><button className="bg-green-600 rounded px-3 py-1">Portfolio</button></a>
        </li>
        
      </ul>
    </div>
  </div>
    </div>
</nav>

  );
};

export default Header;
