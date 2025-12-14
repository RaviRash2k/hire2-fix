import React from 'react'
import profileImg from "../assets/profile_1.jpg"
import {chats} from "../assets/assets.js"

const Message = () => {
  return (
    <div className="bg-white shadow-lg h-full overflow-y-auto p-4 xl:p-6 scrollbar-hide">

      {/* Header */}
      <h3 className="font-semibold mb-4 xl:text-3xl">Messages</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="Search messages"
        className="w-full mb-4 px-4 py-2 rounded-full bg-gray-100 outline-none text-[14px] xl:text-[19px]"
      />

      {/* Chat List */}
      <div className="flex flex-col gap-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-4 mb-3 rounded-xl hover:bg-gray-100 cursor-pointer"
          >
            {/* Profile */}
            <div className="relative">
              <img
                src={profileImg}
                className="w-12 h-12 rounded-full object-cover"
              />
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="font-medium text-[14px] xl:text-[19px]">
                {chat.name}
              </p>
              <p className="text-gray-500 text-[14px] xl:text-[19px] truncate">
                {chat.message}
              </p>
            </div>

            {/* Time */}
            <p className="text-gray-500 text-[13px] xl:text-[18px]">
              {chat.time}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Message
