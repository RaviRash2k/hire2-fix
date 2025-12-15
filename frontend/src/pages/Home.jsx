import React from 'react'
import Categories from '../components/Categories'
import PostFeed from '../components/PostFeed'
import Notification from '../components/Notification'
import Message from '../components/Message'
import map from "../assets/map.jpg";

const Home = ({state}) => {

  return (
    <div className="bg-background h-screen pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xl h-[calc(100vh-4rem)]">

        {/* left */}
        <div className="lg:col-span-1 hidden md:block h-full min-h-0 bg-background overflow-y-auto p-6 xl:p-10 scrollbar-hide">

          <Categories />

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

        {/* middle */}
        <div className="md:col-span-2 h-full min-h-0">
          <PostFeed />
        </div>

        {/* right */}
        <div className="lg:col-span-1 hidden lg:block h-full min-h-0">
          {state === "notification" ? <Notification /> : <Message />}
        </div>

      </div>
    </div>
  )
}

export default Home
