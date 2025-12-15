import React, { useState } from 'react'
import Categories from '../components/Categories'
import TechnicianCard from '../components/TechnicianCard'
import searchIcon from "../assets/search_icon.png"
import { workers } from "../assets/assets.js"

const TechnicianList = () => {

  const [selectedCategory, setSelectedCategory] = useState("Carpenters");

  const filteredWorkers =
        workers.filter(
        worker => worker.job === selectedCategory
      )

  const ITEMS_PER_PAGE = 15
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(filteredWorkers.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentWorkers = filteredWorkers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )


  return (
    <div className="bg-background min-h-screen pt-16">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xl">

        {/* LEFT FILTER */}
        <div className="lg:col-span-1 hidden md:block bg-background overflow-y-auto p-6 xl:p-10">
          
          {/* Search */}
          <div className="flex items-center bg-white rounded-full shadow-xl/10 mb-6 px-3 py-2">
            <img src={searchIcon} className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-2 text-sm w-28 h-7 md:w-40"
            />
          </div>

          <Categories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} setCurrentPage={setCurrentPage} />
        </div>

        {/* TECHNICIAN LIST */}
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-6 py-4">
          {currentWorkers.map(worker => (
            <TechnicianCard key={worker.id} worker={worker} />
          ))}
        </div>

      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 mt-8 pb-10">

        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white shadow hover:bg-gray-100"
            }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition
              ${currentPage === i + 1
                ? "bg-theme text-white"
                : "bg-white shadow hover:bg-gray-100"
              }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white shadow hover:bg-gray-100"
            }`}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default TechnicianList
