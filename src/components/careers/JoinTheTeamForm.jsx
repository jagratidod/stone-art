import { useState } from 'react'

const JoinTheTeamForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    currentCity: '',
    currentPosition: '',
    email: '',
    department: '',
    applyingFor: '',
    phoneNo: '',
    resume: null
  })

  const departments = [
    'Architecture',
    'Creative',
    'Sales',
    'Design',
    'Marketing',
    'Operations',
    'HR'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! Your application has been submitted successfully.')
    setFormData({
      fullName: '',
      currentCity: '',
      currentPosition: '',
      email: '',
      department: '',
      applyingFor: '',
      phoneNo: '',
      resume: null
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    })
  }

  return (
    <div id="join-the-team" className="max-w-6xl mx-auto scroll-mt-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: '#8B7355' }}>
        JOIN THE TEAM
      </h2>
      
      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
        Join the Tilak Stone Arts team and help shape the future of craftsmanship and sacred art.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            {/* Current City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current City *</label>
              <input
                type="text"
                placeholder="Current City"
                value={formData.currentCity}
                onChange={(e) => setFormData({...formData, currentCity: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            {/* Current Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Position</label>
              <input
                type="text"
                placeholder="Current Position"
                value={formData.currentPosition}
                onChange={(e) => setFormData({...formData, currentPosition: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-sm md:text-base"
                >
                  Choose File
                </label>
                <span className="text-sm text-gray-500">
                  {formData.resume ? formData.resume.name : 'No file chosen'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none bg-white"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Applying For */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Applying for *</label>
              <select
                value={formData.applyingFor}
                onChange={(e) => setFormData({...formData, applyingFor: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none bg-white"
                required
              >
                <option value="">Select Position</option>
                <option value="Architect">Architect</option>
                <option value="Video Editor">Video Editor</option>
                <option value="Online Sales Representative">Online Sales Representative</option>
                <option value="Designer">Designer</option>
                <option value="Marketing Executive">Marketing Executive</option>
              </select>
            </div>

            {/* Phone No */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone No. *</label>
              <input
                type="tel"
                placeholder="Phone No."
                value={formData.phoneNo}
                onChange={(e) => setFormData({...formData, phoneNo: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 md:mt-10 text-center">
          <button
            type="submit"
            className="px-8 md:px-12 py-3 md:py-4 rounded-lg text-white font-semibold text-base md:text-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  )
}

export default JoinTheTeamForm

