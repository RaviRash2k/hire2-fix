import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Clock, MapPin, FileText, Home, Phone } from 'lucide-react'
import api from '../api/axios'
import { toast } from 'react-toastify'

const TechnicianApplication = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [nicFront, setNicFront] = useState(false)
  const [nicBack, setNicBack] = useState(false)
  
  const [data, setData] = useState({
    address: "",
    workingLocation: "",
    categories: [],
    workingDays: [],
    workingHours: "",
    bestTimeToCall: ""
  })

  const daysOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const categoriesOptions = ['Plumbing', 'Electrical', 'Carpentry', 'Cleaning', 'AC Repair', 'Painting', 'Gardening', 'Appliance Repair', 'Masonry', 'Roofing']

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setData({...data, [name]: value})
  }

  const onCheckboxChange = (e, type) => {
    const { value, checked } = e.target
    if (type === 'categories') {
      setData(prev => ({
        ...prev,
        categories: checked 
          ? [...prev.categories, value]
          : prev.categories.filter(cat => cat !== value)
      }))
    } else if (type === 'workingDays') {
      setData(prev => ({
        ...prev,
        workingDays: checked 
          ? [...prev.workingDays, value]
          : prev.workingDays.filter(day => day !== value)
      }))
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const formData = new FormData()
      formData.append("nicFront", nicFront)
      formData.append("nicBack", nicBack)
      formData.append("address", data.address)
      formData.append("workingLocation", data.workingLocation)
      formData.append("categories", JSON.stringify(data.categories))
      formData.append("workingDays", JSON.stringify(data.workingDays))
      formData.append("workingHours", data.workingHours)
      formData.append("bestTimeToCall", data.bestTimeToCall)

      const response = await api.post('/api/user/apply-technician', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.data.success) {
        toast.success("Application submitted successfully!")
        navigate('/')
      } else {
        toast.error(response.data.message)
      }

    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit application")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background pt-20 xl:pt-25 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8 text-center">
          <h1 className="text-2xl xl:text-4xl font-bold mb-4">
            Become a <span className="text-theme">Technician</span>
          </h1>
          <p className="text-gray-600">
            Fill out the form below to apply as a technician. Our team will review your application.
          </p>
        </div>

        {/* form */}
        <div className="bg-white rounded-xl shadow-xl/20 p-6 xl:p-8">
          <form onSubmit={submitHandler} className="space-y-8">

            {/* personal details */}
            <div>
              <h2 className="text-xl font-semibold mb-6 pb-3 border-b flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* nic front */}
                <div>
                  <p className="mb-3 font-medium">NIC Front Image *</p>
                  <label
                    htmlFor="nicFront"
                    className="block w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer bg-gray-50 hover:border-theme transition-colors"
                  >
                    <div className="flex flex-col items-center">
                      
                      {nicFront ? 
                        <img
                            src={nicFront ? URL.createObjectURL(nicFront) : upload_area}
                            alt=""
                            className="w-12 h-12 object-cover rounded-xl"
                        /> 
                        : 
                        <FileText className="w-12 h-12 text-gray-400 mb-3" />
                      }

                      <p className="text-sm text-gray-600 mb-1">
                        {nicFront ? nicFront.name : 'Click to upload'}
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG or PDF
                      </p>
                    </div>
                  </label>
                  <input
                    onChange={(e) => setNicFront(e.target.files[0])}
                    type="file"
                    id="nicFront"
                    hidden
                    required
                  />
                </div>

                {/* nic back */}
                <div>
                  <p className="mb-3 font-medium">NIC Back Image *</p>
                  <label
                    htmlFor="nicBack"
                    className="block w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer bg-gray-50 hover:border-theme transition-colors"
                  >
                    <div className="flex flex-col items-center">
                      
                      {nicBack ? 
                        <img
                            src={nicBack ? URL.createObjectURL(nicBack) : upload_area}
                            alt=""
                            className="w-12 h-12 object-cover rounded-xl"
                        /> 
                        : 
                        <FileText className="w-12 h-12 text-gray-400 mb-3" />
                      }

                      <p className="text-sm text-gray-600 mb-1">
                        {nicBack ? nicBack.name : 'Click to upload'}
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG or PDF
                      </p>
                    </div>
                  </label>
                  <input
                    onChange={(e) => setNicBack(e.target.files[0])}
                    type="file"
                    id="nicBack"
                    hidden
                    required
                  />
                </div>
              </div>

              {/* address */}
              <div>
                <p className="mb-2 font-medium flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Address *
                </p>
                <textarea
                  onChange={onChangeHandler}
                  name="address"
                  value={data.address}
                  placeholder="Enter your complete address"
                  rows="3"
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-theme outline-none"
                  required
                />
              </div>
            </div>

            {/* working details */}
            <div>
              <h2 className="text-xl font-semibold mb-6 pb-3 border-b flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Working Information
              </h2>

              <div className="space-y-6">

                <div>
                  <p className="mb-2 font-medium">Working Location *</p>
                  <input
                    onChange={onChangeHandler}
                    type="text"
                    name="workingLocation"
                    value={data.workingLocation}
                    placeholder="e.g., Colombo, Galle, Kandy"
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-theme outline-none"
                    required
                  />
                </div>

                <div>
                  <p className="mb-3 font-medium">Select Categories *</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {categoriesOptions.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={category}
                          value={category}
                          checked={data.categories.includes(category)}
                          onChange={(e) => onCheckboxChange(e, 'categories')}
                          className="h-4 w-4 text-theme focus:ring-theme border-gray-300 rounded"
                        />
                        <label htmlFor={category} className="ml-2 text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Working Days *
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {daysOptions.map((day) => (
                      <div key={day} className="flex items-center">
                        <input
                          type="checkbox"
                          id={day}
                          value={day}
                          checked={data.workingDays.includes(day)}
                          onChange={(e) => onCheckboxChange(e, 'workingDays')}
                          className="h-4 w-4 text-theme focus:ring-theme border-gray-300 rounded"
                        />
                        <label htmlFor={day} className="ml-2 text-sm">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Working Hours *
                  </p>
                  <input
                    onChange={onChangeHandler}
                    type="text"
                    name="workingHours"
                    value={data.workingHours}
                    placeholder="e.g., 9:00 AM - 6:00 PM"
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-theme outline-none"
                    required
                  />
                </div>

                <div>
                  <p className="mb-2 font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Best Time to Call *
                  </p>
                  <input
                    onChange={onChangeHandler}
                    type="text"
                    name="bestTimeToCall"
                    value={data.bestTimeToCall}
                    placeholder="e.g., 10:00 AM - 4:00 PM"
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-theme outline-none"
                    required
                  />
                </div>

              </div>
            </div>

            {/* button */}
            <div className="pt-6 border-t">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-theme text-white p-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>

          </form>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            <strong>Note:</strong> Your application will be reviewed by our team. You will be notified via email once your application is approved. This process usually takes 2-3 business days.
          </p>
        </div>

      </div>
    </div>
  )
}

export default TechnicianApplication