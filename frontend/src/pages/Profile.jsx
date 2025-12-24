import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { MessageCircle } from "lucide-react"
import DetailCard from '../components/DetailCard'
import { useChatStore } from "../store/chatStore"
import api from "../api/axios"
import defaultAvatar from "../assets/profile_1.jpg"

const Profile = () => {
  const { id } = useParams()
  const [newFeedback, setNewFeedback] = useState("")
  const [profile, setProfile] = useState(null)
  const { openChat } = useChatStore()

  //fetch profile info
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/api/user/technician/${id}`)
        if (res.data.success) {
          setProfile(res.data.user)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchProfile()
  }, [id])

  if (!profile) return null

  const avatarUrl = profile.profileImage
    ? `http://localhost:3000${profile.profileImage}`
    : defaultAvatar

  return (
    <div className="bg-gray-100 min-h-screen pt-20 px-4 md:px-10">

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* AVATAR */}
          <div className="relative">
            <img
              src={avatarUrl}
              className="w-36 h-36 xl:w-44 xl:h-44 rounded-full object-cover ring-4 ring-theme"
            />
          </div>

          {/* INFO */}
          <div className="text-center md:text-left flex-1">

            <h1 className="font-bold text-[20px] xl:text-[30px]">
              {profile.name}
            </h1>

            <p className="text-gray-500 mt-1">
              📍 {profile.technicianProfile?.workingLocation}
            </p>

            {profile.technicianProfile?.categories?.map((cat, index) => (
              <span
                key={index}
                className="inline-block mt-2 bg-theme/10 text-theme px-4 py-1 rounded-full text-sm font-medium mr-2"
              >
                {cat}
              </span>
            ))}

            {/* ACTIONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <button
                className="flex items-center gap-2 bg-theme text-white px-6 py-3 rounded-xl hover:bg-theme/80 transition"
                onClick={() => openChat(profile)}
              >
                <MessageCircle size={20} />
                Chat Now
              </button>

              <a
                href={`tel:${profile.mobile}`}
                className="px-6 py-3 border border-theme text-theme rounded-xl hover:bg-theme/10 transition"
              >
                Call
              </a>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <DetailCard label="Mobile" value={profile.mobile} />
          <DetailCard label="Working Days" value={profile.technicianProfile?.workingDays?.join(", ")} />
          <DetailCard label="Working Hours" value={profile.technicianProfile?.workingHours} />
          <DetailCard label="Best Time to Call" value={profile.technicianProfile?.bestTimeToCall} />

        </div>
      </div>

      {/* FEEDBACK SECTION */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 mt-10">

        <h2 className="font-bold text-[18px] xl:text-[24px] mb-6">
          Customer Feedbacks
        </h2>

        {/* FEEDBACK LIST */}
        <div className="space-y-4">
          {profile.feedbacks?.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-xl p-4 hover:shadow transition"
            >
              <p className="font-semibold">{f.user}</p>
              <p className="text-gray-600 mt-1">{f.comment}</p>
            </div>
          ))}
        </div>

        {/* ADD FEEDBACK */}
        <div className="mt-8">
          <textarea
            value={newFeedback}
            onChange={e => setNewFeedback(e.target.value)}
            placeholder="Share your experience..."
            className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-theme"
          />

          <button
            className="mt-4 bg-theme text-white px-8 py-3 rounded-xl hover:bg-theme/80 transition"
            onClick={() => setNewFeedback("")}
          >
            Submit Feedback
          </button>
        </div>
      </div>

    </div>
  )
}

export default Profile
