import React from 'react'

const DetailCard = ({ label, value }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-semibold mt-1">{value}</p>
    </div>
  )
}

export default DetailCard

