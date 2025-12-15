import React from 'react'
import {services} from "../assets/assets.js"

const Services = () => {
  return (
    <div className="bg-background pt-20 xl:pt-25 px-4 md:px-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-2xl xl:text-4xl font-bold mb-4">
          Our <span className="text-theme">Services</span>
        </h1>
        <p className="text-[14px] xl:text-[19px] text-gray-600 max-w-3xl mx-auto">
          Hire skilled and verified professionals for all your repair and
          maintenance needs — fast, reliable, and affordable.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl/20 p-5 xl:p-7 flex flex-col hover:scale-[1.02] transition"
          >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 xl:h-32 mb-4 rounded-xl shadow-xl/10 object-cover mx-auto"
              />

            <h3 className="font-semibold text-lg xl:text-2xl mb-2">
              {service.title}
            </h3>

            <p className="text-[14px] xl:text-[19px] text-gray-600 flex-1">
              {service.desc}
            </p>

            <button className="mt-4 bg-theme text-white py-2 rounded-lg hover:opacity-90 transition">
              Request Service
            </button>
          </div>
        ))}

      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-16 bg-white rounded-xl shadow-xl/20 p-6 xl:p-10">
        <h2 className="text-xl xl:text-3xl font-bold mb-6 lg:mb-8 text-center">
          Why Choose Hire 2 Fix?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div>
            <h3 className="font-semibold text-lg xl:text-2xl mb-2">
              Verified Professionals
            </h3>
            <p className="text-[14px] xl:text-[19px] text-gray-600">
              All technicians are background-checked and verified.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg xl:text-2xl mb-2">
              Fast & Reliable
            </h3>
            <p className="text-[14px] xl:text-[19px] text-gray-600">
              Quick service with transparent pricing and real-time updates.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg xl:text-2xl mb-2">
              Secure Payments
            </h3>
            <p className="text-[14px] xl:text-[19px] text-gray-600">
              Safe and secure payment options for peace of mind.
            </p>
          </div>

        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-16"></div>

    </div>
  )
}

export default Services
