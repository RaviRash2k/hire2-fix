import React from 'react'
import map from "../assets/map.jpg";
import { useNavigate } from 'react-router-dom'
import { categories } from '../assets/assets.js'

const Categories = ({setSelectedCategory, setCurrentPage, selectedCategory}) => {
  
  const navigate = useNavigate()

  return (
    <div>
      {/* categories */}
      <ul className="divide-y text-center">
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={()=> {setSelectedCategory(item); setCurrentPage(1)}}
            className={selectedCategory === item ? "text-theme py-3 text-[14px] xl:text-[19px] border-gray-400 font-medium cursor-pointer hover:text-theme" : "py-3 text-[14px] xl:text-[19px] border-gray-400 font-medium cursor-pointer hover:text-theme"}
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="text-blue-600 text-[14px] xl:text-[19px] mt-3 cursor-pointer text-center" onClick={()=> navigate('/categories')}>See more...</p>
    </div>
  )
}

export default Categories
