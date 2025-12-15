import React from 'react'
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const Contact = () => {
  return (
    <div className="bg-background min-h-screen pt-20 xl:pt-25 px-4 md:px-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-2xl xl:text-4xl font-bold mb-4">
          Contact <span className="text-theme">Us</span>
        </h1>
        <p className="text-[14px] xl:text-[19px] text-gray-600 max-w-3xl mx-auto">
          Have a question, feedback, or need help?  
          We’re here to assist you anytime.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Contact Form */}
        <div className="bg-gray-100 rounded-xl shadow-xl/20 p-6 xl:p-10">
          <h2 className="text-xl xl:text-3xl font-semibold mb-6">
            Send us a message
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white shadow-xl/20 rounded-lg px-4 py-3 outline-none text-[14px] xl:text-[19px]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-white shadow-xl/20 rounded-lg px-4 py-3 outline-none text-[14px] xl:text-[19px]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-white shadow-xl/20 rounded-lg px-4 py-3 outline-none resize-none text-[14px] xl:text-[19px]"
            />

            <button
              type="submit"
              className="bg-theme text-white py-3 mt-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-xl/20 p-6 xl:p-10">
          <h2 className="text-xl xl:text-3xl font-semibold mb-6">
            Get in touch
          </h2>

          <div className="flex flex-col gap-5 text-[14px] xl:text-[19px] text-gray-700">

            <div>
              <p className="font-semibold flex gap-3"><MapPin /> Address</p>
              <p>Sri Lanka</p>
            </div>

            <div>
              <p className="font-semibold flex gap-3"><Phone /> Phone</p>
              <p>+94 7X XXX XXXX</p>
            </div>

            <div>
              <p className="font-semibold flex gap-3"><Mail /> Email</p>
              <p>support@hire2fix.com</p>
            </div>

            <div>
              <p className="font-semibold flex gap-3"><Clock /> Working Hours</p>
              <p>24/7 Customer Support</p>
            </div>

          </div>

        </div>

      </div>

      {/* Footer spacing */}
      <div className="h-16"></div>

    </div>
  )
}

export default Contact
