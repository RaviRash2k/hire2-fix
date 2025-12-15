import React from 'react'
import { MessageCircle } from "lucide-react"

const TechnicianCard = ({ worker }) => {
  return (
    <div className="bg-white rounded-xl h-30 lg:h-40 shadow-xl/10 hover:shadow-xl/30 transition-all duration-300 p-2 m-2 flex items-center justify-between gap-4">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* Image */}
        <img
          src={worker.image}
          alt={worker.name}
          className="w-16 h-16 xl:w-25 xl:h-25 rounded-lg object-cover"
        />

        {/* Info */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[14px] xl:text-[19px]">
            {worker.name}
          </h3>

          <p className="text-gray-500 flex items-center gap-1 text-[12px] xl:text-[15px]">
            📍 {worker.location}
          </p>

          <span className="text-gray-700 font-medium text-[13px] xl:text-[16px]">
            {worker.job}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <button className="w-10 h-10 rounded-full bg-theme text-white flex items-center justify-center hover:bg-theme/80 transition">
        <MessageCircle size={18} />
      </button>

    </div>


  )
}

export default TechnicianCard
