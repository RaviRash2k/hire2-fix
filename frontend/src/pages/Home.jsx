import React from 'react'
import HomePageLeft from '../components/HomePageLeft'
import PostFeed from '../components/PostFeed'
import Notification from '../components/Notification'
import Message from '../components/Message'

const Home = ({state}) => {

  return (
    <div className="bg-background h-screen pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xl h-[calc(100vh-4rem)]">

        <div className="lg:col-span-1 hidden md:block h-full min-h-0">
          <HomePageLeft />
        </div>

        <div className="md:col-span-2 h-full min-h-0">
          <PostFeed />
        </div>

        <div className="lg:col-span-1 hidden lg:block h-full min-h-0">
          {state === "notification" ? <Notification /> : <Message />}
        </div>

        

      </div>
    </div>
  )
}

export default Home
