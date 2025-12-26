import React from 'react'
import aboutImg from "../assets/profile_2.jpg"

const About = () => {
  return (
    <div className='bg-background pt-20 xl:pt-25 px-4 md:px-10 lg:px-20 pb-10 min-h-screen'>
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-2xl xl:text-4xl font-bold mb-4">
          About <span className="text-theme">Hire 2 Fix</span>
        </h1>
        <p className="text-[14px] xl:text-[19px] text-gray-600 max-w-3xl mx-auto">
          Hire 2 Fix connects customers with skilled technicians to get everyday
          problems fixed quickly, safely, and affordably.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left content */}
        <div className="bg-white rounded-xl shadow-xl/20 p-6 xl:p-10">
          <h2 className="text-xl xl:text-3xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-[14px] xl:text-[19px] text-gray-700 mb-4">
            Hire 2 Fix is a service-based platform designed to make finding
            trusted technicians simple and fast. From electrical repairs to
            plumbing, we bring professionals closer to customers.
          </p>
          <p className="text-[14px] xl:text-[19px] text-gray-700">
            Our goal is to reduce delays, improve service quality, and give
            technicians a reliable way to find work.
          </p>
        </div>

        {/* Right image / illustration */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Hire 2 Fix"
            className="rounded-xl shadow-xl/20 max-h-[350px] object-cover"
          />
        </div>

      </div>

      {/* Stats / Mission */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-xl/20 p-6 text-center">
          <h3 className="text-xl xl:text-3xl font-bold text-theme mb-2">100+</h3>
          <p className="text-[14px] xl:text-[19px] text-gray-600">
            Verified Technicians
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl/20 p-6 text-center">
          <h3 className="text-xl xl:text-3xl font-bold text-theme mb-2">500+</h3>
          <p className="text-[14px] xl:text-[19px] text-gray-600">
            Successful Fixes
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl/20 p-6 text-center">
          <h3 className="text-xl xl:text-3xl font-bold text-theme mb-2">24/7</h3>
          <p className="text-[14px] xl:text-[19px] text-gray-600">
            Customer Support
          </p>
        </div>

      </div>

      {/* Footer spacing */}
      <div className="h-16"></div>
    </div>
  )
}

export default About
