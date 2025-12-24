import React from 'react'

const Error = ({ error }) => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 px-4 md:px-10 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-theme text-white px-4 py-2 rounded-lg hover:bg-theme/90 transition"
          >
            Retry
          </button>
        </div>
      </div>
  )
}

export default Error
