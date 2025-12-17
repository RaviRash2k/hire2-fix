import React from "react"
import { useChatStore } from "../store/chatStore"
import { X, Send } from "lucide-react"

const ChatPopup = () => {
  const { isOpen, activeUser, closeChat } = useChatStore()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-end lg:items-center justify-center">

      <div className="bg-white w-[75%] m-auto lg:w-96 h-[70vh] rounded-t-xl lg:rounded-xl shadow-xl flex flex-col overflow-hidden">

        {/* header */}
        <div className="bg-theme px-4 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
            <img
            src={activeUser?.image}
            alt={activeUser?.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />

            <div>
            <p className="font-semibold text-white text-[14px] xl:text-[19px]">
                {activeUser? activeUser.name : "User"}
            </p>
            <p className="text-white/70 text-[10px] xl:text-[15px]">
                {activeUser? activeUser.job : "carpenter"}
            </p>
            </div>
        </div>

        {/* close */}
        <button
            onClick={closeChat}
            className="w-9 h-9 flex items-center justify-center rounded-full text-white hover:text-theme hover:bg-white/40"
        >
            ✕
        </button>

        </div>

        {/* msg */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3
                        text-[14px] xl:text-[19px]">

          <div className="w-fit max-w-[75%] bg-white px-4 py-2 rounded-xl shadow">
            Hi 👋
          </div>

          <div className="w-fit max-w-[75%] ml-auto bg-theme text-white px-4 py-2 rounded-xl">
            Hello!
          </div>
        </div>

        {/* input */}
        <div className="bg-theme p-4">
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2">
            <input
              className="flex-1 outline-none bg-transparent
                         text-[14px] xl:text-[19px]"
              placeholder="Type a message..."
            />

            <button className="text-theme">
              <Send size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChatPopup
