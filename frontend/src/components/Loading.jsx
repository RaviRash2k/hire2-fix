import React from 'react'

const Loading = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 px-4 md:px-10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
  )
}

export default Loading
