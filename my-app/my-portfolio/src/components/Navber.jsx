import React, { useState } from "react"
import {RiMenu2Line,RiCloseLine}from "@remixicon/react"



const Navber = () => {
    const [menu ,openMenu]=useState(false);
    const[showMenu,setShowMenu]=useState(true);
    return(
        <nav  className=" flex flex-wrap  justify-between  md:items-center text-white px-10 pt-4 md:px-20 ">
            <span className='text-xl font-bold tracking-wide'>Portfolio</span>
            <ul className={` ${menu ?"block":"hidden"} mx-24 p-y2 mt-2  mb-6   md:mt-5 ml-10 font-bold bg-black px-2 rounded-x1 bg-opacaity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6  `} >
                <a href="#About">
                <li className="text-md transition-all duration-300 p-1 md:p-0">About</li></a>
                <a href="#Education"><li  className="text-md transition-all duration-300 p-1 md:p-0">Education</li></a>
                
                <a href="#Projects"><li className="text-md transition-all duration-300 p-1 md:p-0">Project</li></a>
               <a href="#Skills"> <li className="text-md transition-all duration-300 p-1 md:p-0">Skills</li></a>
               <div className="relative cursor-pointer">
              <a href="#Contact"><li className="text-md transition-all duration-300 p-1 md:p-0">Contact <button  className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button></li></a>
              </div>
            </ul>
            {showMenu ?(
                <RiMenu2Line size={30} className='md:hidden absolute right-30 top-6 transition-all duration-300'
                onClick={()=>{
                    openMenu(!menu);
                    setShowMenu(!showMenu);}}/>
                ):(
                        <RiCloseLine  size={30} className='md:hidden absolute right-30 top-6 transition-all duration-300'/>
                    )
                }

        </nav>
    )
  
}

export default Navber;

