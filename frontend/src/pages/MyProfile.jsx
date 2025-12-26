import React, { useState, useEffect } from 'react'
import DetailCard from '../components/DetailCard'
import api from "../api/axios"
import { useAuthStore } from "../store/authStore";
import Error from '../components/Error';
import Loading from '../components/Loading';
import defaultAvatar from "../assets/profile_1.jpg"
import { UserPen } from "lucide-react";
import AvatarModal from '../components/AvaterModal';

const MyProfile = () => {
  const user = useAuthStore((state) => state.user);
  const id = user?.id;
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [openAvatar, setOpenAvatar] = useState(false)

  // Fetch profile info
  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    const fetchProfile = async () => {
      try {
        setLoading(true)
        const res = await api.get(`/api/user/technician/${id}`)
        if (res.data.success) {
          setProfile(res.data.user)
          setError(null)
        }
      } catch (err) {
        console.error(err)
        setError("Failed to load profile")
        setProfile(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [id])

  // Handle loading and error states
  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <Error error={error} />
    )
  }

  if (!profile) {
    return (
      <div className="bg-background min-h-screen pt-20 px-4 md:px-10 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No profile data available</p>
        </div>
      </div>
    )
  }

  const avatarUrl = profile?.profileImage
    ? `http://localhost:3000${profile.profileImage}`
    : defaultAvatar

  const hasImage = !!profile?.profileImage

  return (
    <div className="bg-background min-h-screen pt-20 px-4 md:px-10">

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">

        {/* HEADER WITH EDIT BUTTON */}
        <div className="flex flex-col md:flex-row items-center gap-8 relative">

          {/* AVATAR */}
          <div className="relative">
            <img
              src={avatarUrl}
              alt={`${profile?.name || 'User'}'s profile`}
              className="w-36 h-36 xl:w-44 xl:h-44 rounded-full object-cover ring-4 ring-theme cursor-pointer hover:opacity-90 transition-opacity"
              onError={(e) => {
                e.target.src = defaultAvatar
              }}
              onClick={() => setOpenAvatar(true)}
            />
          </div>

          {/* INFO */}
          <div className="text-center md:text-left flex-1">

            {/* EDIT BUTTON */}
            <div className="flex justify-center md:justify-end mb-4 md:mb-0 md:absolute md:top-0 md:right-0">
              <button
                // onClick={}
                className="flex items-center gap-2 bg-theme/10 text-theme hover:bg-theme/20 px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
              >
                <UserPen className="w-4 h-4 md:w-5 md:h-5" />
                <span>Edit Profile</span>
              </button>
            </div>

            <h1 className="font-bold text-[20px] xl:text-[30px] mt-4 md:mt-0">
              {profile?.name || 'No Name Provided'}
            </h1>

            <p className="text-gray-500 mt-1">
              📍 {profile?.technicianProfile?.workingLocation || 'Location not specified'}
            </p>

            <div className="mt-3">
              {profile?.technicianProfile?.categories?.map((cat, index) => (
                <span
                  key={index}
                  className="inline-block mt-2 bg-theme/10 text-theme px-4 py-1 rounded-full text-sm font-medium mr-2"
                >
                  {cat}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <DetailCard label="Mobile" value={profile?.mobile || 'Not provided'} />
          <DetailCard 
            label="Working Days" 
            value={profile?.technicianProfile?.workingDays?.join(", ") || 'Not specified'} 
          />
          <DetailCard 
            label="Working Hours" 
            value={profile?.technicianProfile?.workingHours || 'Not specified'} 
          />
          <DetailCard 
            label="Best Time to Call" 
            value={profile?.technicianProfile?.bestTimeToCall || 'Not specified'} 
          />

        </div>
      </div>

      {/* FEEDBACK SECTION */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 mt-10">

        <h2 className="font-bold text-[18px] xl:text-[24px] mb-6">
          Customer Feedbacks
        </h2>

        {/* FEEDBACK LIST */}
        <div className="space-y-4">
            
            {!profile?.feedbacks || profile.feedbacks.length === 0 ? (
                <p className="text-gray-500">No feedbacks yet.</p>
            ) : (
                profile.feedbacks.map((f, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border rounded-xl p-4 hover:shadow transition"
                    >
                      <p className="font-semibold">{f?.user || 'Anonymous'}</p>
                      <p className="text-gray-600 mt-1">{f?.comment || 'No comment'}</p>
                    </div>
                ))
            )}
        </div>
      </div>

      {/* Avatar Modal */}
      <AvatarModal
        isOpen={openAvatar}
        onClose={() => setOpenAvatar(false)}
        currentAvatar={avatarUrl}
        hasImage={hasImage}
      />

    </div>
  )
}

export default MyProfile