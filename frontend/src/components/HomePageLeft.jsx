import React from 'react'
import map from "../assets/map.jpg";

const categories = [
  "Carpenters",
  "Tile",
  "Masons",
  "Electricians",
  "Painters",
  "Plumbers",
  "Cushion Works",
  "Gully Bowser",
];

const HomePageLeft = () => {
  return (
    <div className='bg-background h-full min-h-0 overflow-y-auto p-6 xl:p-10 scrollbar-hide'>

      {/* categories */}
      <ul className="divide-y text-center">
        {categories.map((item, i) => (
          <li
            key={i}
            className="py-3 text-[14px] xl:text-[19px] border-gray-400 font-medium cursor-pointer hover:text-theme"
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="text-blue-600 text-[14px] xl:text-[19px] mt-3 cursor-pointer text-center">See more...</p>

      {/* Find Near Me */}
      <h3 className="mt-8 font-semibold mb-4 xl:text-3xl">Find near me</h3>

      <div className="mt-3 rounded-lg">
        <img
          src={map}
          alt="map"
          className="w-full h-70 rounded-lg"
        />
      </div>
    </div>
  )
}

export default HomePageLeft
