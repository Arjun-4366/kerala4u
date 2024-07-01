import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 bg-navbar bg-cover bg-center border-transparent bg-no-repeat  transition-all duration-500">
      <div className="container mx-auto flex flex-wrap items-center justify-between transition-all duration-700  px-6 border-none">
        <div className="w-full sticky flex justify-between lg:w-auto lg:justify-between lg:static h-[5vh] items-center">
          <a href="" onClick={() => navigate("/")}>
            <p className="text-green-600  text-4xl font-sans font-extrabold italic font-custom ">
              Ker<span className="text-green-700">ala</span>
              <span className="text-green-800">4U</span>{" "}
            </p>
          </a>
          <div className="flex text-center">
            <button
              className="cursor-pointer text-xl px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <MdClose /> : <FaBars />}
            </button>
          </div>
        
        </div>
        <div className={`lg:flex flex-grow items-center lg:h-auto  justify-center transition-all duration-500${navOpen ? "flex" : ' hidden '}`}>
            <ul className="flex flex-col lg:flex-row items-center gap-x-6 list-none lg:ml-auto lg:transform-none lg:gap-y-0 gap-y-8  mt-5 mb-4 font-sans  font-bold cursor-pointer text-gray-500 text-xl">
                <li className="hover:text-green-700 hover:text-lg hover:transition-all duration-500 py-2 leading-snug" onClick={()=>navigate('explore')}>Experience Kerala</li>
                <li className="hover:text-green-700 hover:text-lg hover:transition-all duration-500 py-2 leading-snug" onClick={()=>navigate('destinations')}>Destinations</li>
                <li className="hover:text-green-700 hover:text-lg hover:transition-all duration-500 py-2 leading-snug" onClick={()=>navigate('thingsTodo')}>Things To Do</li>
                <li className="hover:text-green-700 hover:text-lg hover:transition-all duration-500 py-2 leading-snug" onClick={()=>navigate('stay')}>Where To Stay</li>
                {/* <li className="hover:text-green-700 hover:text-lg hover:transition-all duration-500 py-2 leading-snug" onClick={()=>navigate('guide')}>Travel Guide</li> */}
                <li className="py-2 flex text-white font-medium items-center leading-snug">
                    <button className="bg-[#4f61ae] rounded-full px-4 py-1 flex items-center hover:text-green-400 transition-all duration-500 hover:bg-[#8383cd]" onClick={()=>navigate('login')}>
                      SignIn
                    </button>
                </li>
            </ul>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
