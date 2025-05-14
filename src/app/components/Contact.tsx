'use client'

import React, { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-[url('/icons/bkg.png')] flex items-center justify-center px-4 py-10" id="Contact">
      <div className="w-full max-w-2xl bg-[#f6efce] rounded-2xl shadow-xl p-8">
        <h1 className="text-5xl font-bold text-center text-[#CD4631] mb-6">Contact Us</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-[#9E6240]">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#DEA47E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81ADC8]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#9E6240]">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#DEA47E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81ADC8]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#9E6240]">Company</label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#DEA47E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81ADC8]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#9E6240]">License Type</label>
            <select
              name="licenseType"
              required
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#DEA47E] rounded-md bg-[#f6efce] focus:outline-none focus:ring-2 focus:ring-[#81ADC8]"
            >
              <option value="" disabled>Select license type</option>
              <option value="single">Single User</option>
              <option value="team">Team</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#9E6240]">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#DEA47E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81ADC8]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#CD4631] hover:bg-[#9E6240] text-white font-semibold rounded-md transition duration-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
