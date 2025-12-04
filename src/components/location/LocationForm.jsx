import { useState } from 'react'
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from '../../utils/constants'

const LocationForm = () => {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    aboutYourself: '',
    lookingFor: '',
    budget: '',
    timeline: '',
    additionalInfo: '',
    designReferences: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! Your form has been submitted.')
    setFormStep(1)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      aboutYourself: '',
      lookingFor: '',
      budget: '',
      timeline: '',
      additionalInfo: '',
      designReferences: null
    })
  }

  return (
    <div className="w-full md:w-1/3 lg:w-2/5 bg-white shadow-2xl overflow-y-auto">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-black">Talk to Our Expert</h2>
          <span className="text-red-600 font-semibold text-base">{formStep}/2</span>
        </div>

        {formStep === 1 ? (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormStep(2); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 bg-gray-50 border-r border-gray-300">
                  <span className="text-xl">🇮🇳</span>
                  <span className="text-sm">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
              <input
                type="text"
                placeholder="City *"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Tell us about yourself *</label>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="aboutYourself"
                    value="homeowner"
                    checked={formData.aboutYourself === 'homeowner'}
                    onChange={(e) => setFormData({...formData, aboutYourself: e.target.value})}
                    className="mt-1 w-4 h-4"
                    required
                  />
                  <span className="text-sm">I am a homeowner looking for a pooja unit or pooja room</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="aboutYourself"
                    value="designer"
                    checked={formData.aboutYourself === 'designer'}
                    onChange={(e) => setFormData({...formData, aboutYourself: e.target.value})}
                    className="mt-1 w-4 h-4"
                    required
                  />
                  <span className="text-sm">I am an interior designer/consultant seeking solutions for my client</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              NEXT
            </button>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">What are you looking for? *</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="lookingFor"
                    value="singular"
                    checked={formData.lookingFor === 'singular'}
                    onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                    className="w-4 h-4"
                    required
                  />
                  <span className="text-sm">Singular Marble Mandir Unit</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="lookingFor"
                    value="complete"
                    checked={formData.lookingFor === 'complete'}
                    onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                    className="w-4 h-4"
                    required
                  />
                  <span className="text-sm">Complete Pooja Room Solution</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">What is your estimated budget? *</label>
              <div className="space-y-3">
                {BUDGET_OPTIONS.map((budget) => (
                  <label key={budget} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={budget}
                      checked={formData.budget === budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-4 h-4"
                      required
                    />
                    <span className="text-sm">{budget}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">What is your timeline for the project? *</label>
              <div className="space-y-3">
                {TIMELINE_OPTIONS.map((timeline) => (
                  <label key={timeline} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="timeline"
                      value={timeline}
                      checked={formData.timeline === timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-4 h-4"
                      required
                    />
                    <span className="text-sm">{timeline}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <textarea
                placeholder="Please share a bit more about your needs"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            <div>
              <input
                type="file"
                id="designReferences"
                accept="image/*,.pdf"
                multiple
                onChange={(e) => setFormData({...formData, designReferences: e.target.files})}
                className="hidden"
              />
              <label
                htmlFor="designReferences"
                className="block w-full bg-blue-600 text-white py-3 rounded-lg text-center font-medium cursor-pointer hover:bg-blue-700 transition-colors"
              >
                UPLOAD DESIGN REFERENCES
              </label>
              {formData.designReferences && formData.designReferences.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {formData.designReferences.length} file(s) selected
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormStep(1)}
                className="flex-1 bg-white text-black border-2 border-black py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                BACK
              </button>
              <button
                type="submit"
                className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default LocationForm

