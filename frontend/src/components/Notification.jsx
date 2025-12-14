import React from 'react'
import profileImg from "../assets/profile_1.jpg";
import {notifications} from "../assets/assets.js";

const Notification = () => {
  
  return (
    <div className="bg-white shadow-lg min-h-0 h-full overflow-y-auto scroll-smooth scrollbar-hide p-4 xl:p-6">

      <h3 className="font-semibold mb-8 xl:text-3xl">Notifications</h3>

      {/* <p className="text-sm xl:text-xl font-semibold mb-2">New</p> */}

      {notifications.map((n, i) => (
        <div key={i} className="flex items-center gap-3 mb-3">
          <img
            src={profileImg}
            className="w-12 h-12 rounded-full"
          />
          <div className="text-[14px] xl:text-[19px]">
            <p>
              <span className="font-medium">{n.name}</span> {n.message}.
            </p>
            <p className="text-[13px] xl:text-[18px] text-gray-500">{n.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notification
