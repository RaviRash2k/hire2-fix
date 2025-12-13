import React, { useState } from 'react'
import searchIcon from "../assets/search_icon.png";
import chatIcon from "../assets/chat-icon.png";
import notificationIcon from "../assets/notification.png";
import profileImg from "../assets/profile_1.jpg";
import { Menu, Search} from "lucide-react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  return (

    <>
      <nav className="w-full bg-theme shadow-md px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* logo */}
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6 cursor-pointer text-white md:hidden" onClick={() => setMenuOpen(true)}/>

            <h1 className="text-xl md:text-2xl font-bold text-white"> Hire 2 Fix </h1>
          </div>

          {/* nav links */}
          <ul className="hidden md:flex gap-8 font-medium text-white">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          {/* serach and icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search */}
            <div className="hidden sm:flex items-center bg-white rounded-full px-3 py-1">
              <img src={searchIcon} alt="search" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none px-2 text-sm w-28 md:w-40"
              />
            </div>

            <Search
                className="w-5 h-5 cursor-pointer text-white sm:hidden" 
                onClick={() => setShowSearch(true)}
            />

            <img src={chatIcon} className="w-5 h-5 cursor-pointer" />
            <img src={notificationIcon} className="w-5 h-5 cursor-pointer" />
            <img src={profileImg} className="w-8 h-8 rounded-full object-cover cursor-pointer" />
          </div>
          
        </div>
      </nav>

      {/* side menu for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-theme text-white z-50
        transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 text-xl font-bold border-b">
          Hire 2 Fix
        </div>

        <ul className="flex flex-col gap-6 p-5 font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* search in mobile */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-20">
            
            <div className="bg-white w-[90%] rounded-lg flex items-center px-4 py-2">
            <img src={searchIcon} className="w-4 h-4" />

            <input autoFocus type="text" placeholder="Search" className="flex-1 outline-none px-3" />

            <button onClick={() => setShowSearch(false)} className="text-gray-500 text-xl"> ✕ </button>
            </div>
        </div>
)}

    </>
  )
}

export default Navbar
