import React, { useState, useRef, useEffect } from 'react'
import searchIcon from "../assets/search_icon.png"
import chatIcon from "../assets/chat-icon.png"
import notificationIcon from "../assets/notification.png"
import profileImg from "../assets/profile_1.jpg"
import { Menu } from "lucide-react"
import Notification from "./Notification"
import Message from "./Message"

const Navbar = ({ state, setState }) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [openPanel, setOpenPanel] = useState(null)
  const profileRef = useRef(null)
  const panelRef = useRef(null)
  const panelWrapperRef = useRef(null)


  // close outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false)
      }

      if (
        panelWrapperRef.current &&
        !panelWrapperRef.current.contains(e.target)
      ) {
        setOpenPanel(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-theme shadow-md z-50 px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* left */}
          <div className="flex items-center gap-3">
            <Menu
              className="w-6 h-6 cursor-pointer text-white lg:hidden"
              onClick={() => setMenuOpen(true)}
            />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Hire 2 Fix
            </h1>
          </div>

          {/* links */}
          <ul className="hidden lg:flex gap-8 font-medium lg:text-xl text-white">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          {/* right */}
          <div className="flex items-center gap-3 md:gap-4 relative">

            {/* Search */}
            <div className="flex items-center bg-white rounded-full px-3 py-1">
              <img src={searchIcon} className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none px-2 text-sm w-28 h-7 md:w-40"
              />
            </div>

            {/* message */}
            <div className="relative" ref={panelWrapperRef}>
              <img
                src={chatIcon}
                className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer"
                onClick={() => {
                  setState("message")
                  setOpenPanel(openPanel === "message" ? null : "message")
                }}
              />

              {openPanel === "message" && (
                <div className="absolute right-0 mt-3 w-80 max-h-[70vh] overflow-y-auto scrollbar-hide bg-white rounded-lg shadow-xl/30 z-50 lg:hidden">
                  <Message />
                </div>
              )}
            </div>

            {/* notification */}
            <div className="relative" ref={panelWrapperRef}>
              <img
                src={notificationIcon}
                className="w-6 h-6 lg:w-7 lg:h-7 cursor-pointer"
                onClick={() => {
                  setState("notification")
                  setOpenPanel(openPanel === "notification" ? null : "notification")
                }}
              />

              {openPanel === "notification" && (
                <div className="absolute right-0 mt-3 w-80 max-h-[70vh] overflow-y-auto scrollbar-hide bg-white rounded-lg shadow-xl/30 z-50 lg:hidden">
                  <Notification />
                </div>
              )}
            </div>

            {/* PROFILE */}
            <div className="relative" ref={profileRef}>
              <img
                src={profileImg}
                className="w-9 h-9 rounded-full object-cover cursor-pointer"
                onClick={() => setOpenProfile(!openProfile)}
              />

              {openProfile && (
                <div className="absolute right-0 mt-3 w-70 xl:w-115 bg-white rounded-lg shadow-xl/30 z-50 text-[14px] xl:text-[19px]">

                  <div className="flex items-center bg-white rounded-lg shadow-xl/20 p-2 gap-3 m-3">
                    <img src={profileImg} className="w-11 h-11 rounded-full" />
                    <p className="font-medium">Ravindu Rashmitha</p>
                  </div>

                  <ul className="flex flex-col gap-4 p-5">
                    <li className="cursor-pointer hover:bg-gray-100 px-4 py-2">Setting</li>
                    <li className="cursor-pointer hover:bg-gray-100 px-4 py-2">Change to technician</li>
                    <li className="cursor-pointer hover:bg-gray-100 px-4 py-2">Give feedback</li>
                    <li className="cursor-pointer hover:bg-gray-100 px-4 py-2">Logout</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE SIDE MENU BACKDROP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[40%] bg-theme text-white z-50
        transform transition-transform duration-300 lg:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 text-xl font-bold border-b">
          Hire 2 Fix
        </div>

        <ul className="flex flex-col gap-6 p-5 text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
