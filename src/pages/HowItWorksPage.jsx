import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from '../utils/constants'
import howItWorksBg from '../assets/how it work/voice of devotion.jpeg'
import icon1 from '../assets/how it work/icons/icon1.png'
import icon2 from '../assets/how it work/icons/icon2.png'
import icon3 from '../assets/how it work/icons/icon3.png'
import icon4 from '../assets/how it work/icons/icon4.png'
import icon5 from '../assets/how it work/icons/icon5.png'
import gif1 from '../assets/how it work/5stepvideo/image1.gif'
import gif2 from '../assets/how it work/5stepvideo/image2.gif'
import gif3 from '../assets/how it work/5stepvideo/image3.gif'
import gif4 from '../assets/how it work/5stepvideo/image4.gif'
import gif5 from '../assets/how it work/5stepvideo/image5.gif'

const HowItWorksPage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowLocation, 
  onShowBooking 
}) => {
  const navigate = useNavigate()
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [formStep, setFormStep] = useState(1)
  const [visibleSections, setVisibleSections] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  })
  
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)
  const step4Ref = useRef(null)
  const step5Ref = useRef(null)

  useEffect(() => {
    const observers = []
    const sections = [
      { ref: step1Ref, key: 'step1' },
      { ref: step2Ref, key: 'step2' },
      { ref: step3Ref, key: 'step3' },
      { ref: step4Ref, key: 'step4' },
      { ref: step5Ref, key: 'step5' }
    ]

    sections.forEach(({ ref, key }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [key]: true }))
            }
          },
          { threshold: 0.3 }
        )
        observer.observe(ref.current)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  const scrollToForm = () => {
    const formContainer = document.getElementById('expert-form-container')
    if (formContainer) {
      const containerPosition = formContainer.getBoundingClientRect().top + window.pageYOffset
      const offset = 100 // Offset from top
      window.scrollTo({
        top: containerPosition - offset,
        behavior: 'smooth'
      })
    }
  }
  const [formData, setFormData] = useState({
    type: 'DOMESTIC',
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
      type: 'DOMESTIC',
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
    <div className="w-full min-h-screen bg-white relative">
      <Header 
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={() => {}}
        onShowLocation={() => navigate('/location')}
        onShowBooking={() => navigate('/book-appointment')}
      />

      {/* Background Image Container - Reduced Bottom Height */}
      <div className="relative w-full overflow-hidden" style={{ height: '75vh', minHeight: '600px' }}>
        {/* Background Image */}
        <img 
          src={howItWorksBg} 
          alt="How It Works Background" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />

        {/* Form Container - Overlay on Right Side, Fits Image Height */}
        <div id="expert-form-container" className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-[85%] sm:w-[320px] md:w-[340px] max-w-[calc(100%-32px)] bg-white rounded-xl md:rounded-2xl shadow-2xl z-20 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 md:p-4 border-b-2 border-gray-200 bg-gradient-to-r from-[#8B7355]/10 to-transparent flex-shrink-0 rounded-t-xl md:rounded-t-2xl">
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wide" style={{ color: '#8B7355' }}>Talk to Our Expert</h3>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#8B7355]/10" style={{ color: '#8B7355' }}>{formStep}/2</span>
          </div>

          <div className="px-3 pt-3 pb-4 md:px-4 md:pt-4 md:pb-4 bg-white overflow-y-auto flex-1 rounded-b-xl md:rounded-b-2xl">
            {formStep === 1 ? (
              <form className="space-y-2.5" onSubmit={(e) => { e.preventDefault(); setFormStep(2); }}>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="DOMESTIC"
                      checked={formData.type === 'DOMESTIC'}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-3 h-3 accent-amber-600"
                    />
                    <span className="text-xs font-medium" style={{ color: formData.type === 'DOMESTIC' ? '#8B7355' : '#333' }}>DOMESTIC</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="INTERNATIONAL"
                      checked={formData.type === 'INTERNATIONAL'}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-3 h-3 accent-amber-600"
                    />
                    <span className="text-xs font-medium" style={{ color: formData.type === 'INTERNATIONAL' ? '#8B7355' : '#333' }}>INTERNATIONAL</span>
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />

                <div>
                  <label className="block text-xs font-medium mb-1">Phone number</label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-1 px-2 bg-gray-50 border-r">
                      <span className="text-sm">🇮🇳</span>
                      <span className="text-xs">+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="City *"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />

                <div>
                  <label className="block text-xs font-medium mb-1.5">Tell us about yourself *</label>
                  <div className="space-y-1.5">
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="aboutYourself"
                        value="homeowner"
                        checked={formData.aboutYourself === 'homeowner'}
                        onChange={(e) => setFormData({...formData, aboutYourself: e.target.value})}
                        className="mt-0.5 w-3 h-3 accent-amber-600 flex-shrink-0"
                        required
                      />
                      <span className="text-xs leading-relaxed">I am a homeowner looking for a pooja unit or pooja room</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="aboutYourself"
                        value="designer"
                        checked={formData.aboutYourself === 'designer'}
                        onChange={(e) => setFormData({...formData, aboutYourself: e.target.value})}
                        className="mt-0.5 w-3 h-3 accent-amber-600 flex-shrink-0"
                        required
                      />
                      <span className="text-xs leading-relaxed">I am an interior designer/consultant seeking solutions for my client</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-2.5 rounded-lg text-xs font-medium transition-colors shadow-md"
                  style={{ backgroundColor: '#8B7355' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                >
                  NEXT
                </button>
              </form>
            ) : (
              <form className="space-y-2.5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold mb-1.5">What are you looking for? *</label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="lookingFor"
                        value="singular"
                        checked={formData.lookingFor === 'singular'}
                        onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                        className="w-3 h-3 accent-amber-600"
                        required
                      />
                      <span className="text-xs">Singular Marble Mandir Unit</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="lookingFor"
                        value="complete"
                        checked={formData.lookingFor === 'complete'}
                        onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                        className="w-3 h-3 accent-amber-600"
                        required
                      />
                      <span className="text-xs">Complete Pooja Room Solution</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5">What is your estimated budget? *</label>
                  <div className="space-y-1.5">
                    {BUDGET_OPTIONS.map((budget) => (
                      <label key={budget} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          checked={formData.budget === budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-3 h-3 accent-amber-600"
                          required
                        />
                        <span className="text-xs">{budget}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5">What is your timeline for the project? *</label>
                  <div className="space-y-1.5">
                    {TIMELINE_OPTIONS.map((timeline) => (
                      <label key={timeline} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline}
                          checked={formData.timeline === timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="w-3 h-3 accent-amber-600"
                          required
                        />
                        <span className="text-xs">{timeline}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  placeholder="Please share a bit more about your needs"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
                />

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
                    className="block w-full text-white py-2 rounded-lg text-xs text-center font-medium cursor-pointer transition-colors shadow-md"
                    style={{ backgroundColor: '#8B7355' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                  >
                    UPLOAD DESIGN REFERENCES
                  </label>
                  {formData.designReferences && formData.designReferences.length > 0 && (
                    <p className="text-xs text-gray-600 mt-1">
                      {formData.designReferences.length} file(s) selected
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="flex-1 bg-white py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors shadow-md border-2"
                    style={{ color: '#8B7355', borderColor: '#8B7355' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f9f9f9'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white'
                    }}
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="flex-1 text-white py-2 rounded-lg text-xs font-medium transition-colors shadow-md"
                    style={{ backgroundColor: '#8B7355' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 5 Steps Section */}
      <div className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              Build Your Dream Temple in Just 5 Steps
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Ready to design your Dream Temple? Here's how you can get started.
            </p>
          </div>

          {/* 5 Steps Icons */}
          <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 mt-6 md:mt-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-shrink-0 w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px]">
              <div className="relative mb-3 rounded-full">
                <img 
                  src={icon1} 
                  alt="Step 1 - Let's Connect" 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-contain"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">
                Let's Connect One on One
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden sm:flex items-center justify-center mx-0.5 md:mx-1 flex-shrink-0">
              <svg className="w-6 h-4 md:w-7 md:h-5 lg:w-8 lg:h-5 xl:w-10 xl:h-6" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12L35 12M35 12L26 3M35 12L26 21" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-shrink-0 w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px]">
              <div className="relative mb-3 rounded-full">
                <img 
                  src={icon2} 
                  alt="Step 2 - Explore Catalog" 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-contain"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">
                Explore our Catalog
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden sm:flex items-center justify-center mx-0.5 md:mx-1 flex-shrink-0">
              <svg className="w-6 h-4 md:w-7 md:h-5 lg:w-8 lg:h-5 xl:w-10 xl:h-6" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12L35 12M35 12L26 3M35 12L26 21" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-shrink-0 w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px]">
              <div className="relative mb-3 rounded-full">
                <img 
                  src={icon3} 
                  alt="Step 3 - Place Order" 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-contain"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">
                Place The Order
              </p>
            </div>

            {/* Arrow 3 */}
            <div className="hidden sm:flex items-center justify-center mx-0.5 md:mx-1 flex-shrink-0">
              <svg className="w-6 h-4 md:w-7 md:h-5 lg:w-8 lg:h-5 xl:w-10 xl:h-6" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12L35 12M35 12L26 3M35 12L26 21" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center flex-shrink-0 w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px]">
              <div className="relative mb-3 rounded-full">
                <img 
                  src={icon4} 
                  alt="Step 4 - Approval" 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-contain"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">
                Approval
              </p>
            </div>

            {/* Arrow 4 */}
            <div className="hidden sm:flex items-center justify-center mx-0.5 md:mx-1 flex-shrink-0">
              <svg className="w-6 h-4 md:w-7 md:h-5 lg:w-8 lg:h-5 xl:w-10 xl:h-6" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12L35 12M35 12L26 3M35 12L26 21" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center flex-shrink-0 w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px]">
              <div className="relative mb-3 rounded-full">
                <img 
                  src={icon5} 
                  alt="Step 5 - Delivery and Installation" 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-contain"
                />
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">
                Delivery and Installation
              </p>
            </div>
          </div>

          {/* Start Your Project Button */}
          <div className="flex justify-center mt-6 md:mt-8 mb-8 md:mb-10">
            <button
              onClick={scrollToForm}
              className="px-6 py-3 md:px-8 md:py-4 text-white text-sm md:text-base font-bold uppercase tracking-wide transition-colors shadow-lg"
              style={{ backgroundColor: '#8B7355' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
            >
              Start Your Project Now
            </button>
          </div>
        </div>
      </div>

      {/* Step 1: Let's Connect One on One */}
      <div ref={step1Ref} className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              GET STARTED WITH OUR 5 STEP EASY PROCESS
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              LETS CONNECT ONE ON ONE
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left - GIF Image with Creative Frame */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full rounded-2xl shadow-lg border-2 border-gray-200 hover:border-[#8B7355] transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7355]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={gif1} 
                  alt="Let's Connect One on One" 
                  className="w-full h-auto rounded-lg relative"
                />
              </div>
            </div>

            {/* Right - Info Box */}
            <div className={`order-1 lg:order-2 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 lg:sticky lg:top-24 lg:self-start transition-all duration-700 ease-out ${
              visibleSections.step1 
                ? 'opacity-100 lg:translate-x-0' 
                : 'opacity-100 lg:opacity-0 lg:translate-x-full'
            }`}>
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    It all Begins with a Form
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-3">
                    Let's get acquainted. The more we learn about you, the better we can design your home.
                  </p>
                  <button
                    onClick={() => navigate('/book-appointment')}
                    className="px-4 py-2 text-white text-xs md:text-sm font-medium transition-colors"
                    style={{ backgroundColor: '#8B7355' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                  >
                    Fill Form Link
                  </button>
                </div>

                {/* Step 2 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Connect over a Meet
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Let's get acquainted. The more we learn about you, the better we can design your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Start with Your Design */}
      <div ref={step2Ref} className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left - GIF Image with Creative Frame */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full rounded-2xl shadow-md border-2 border-gray-200 hover:border-[#8B7355] transition-all duration-300 hover:shadow-lg overflow-hidden" style={{ backgroundColor: '#F5E6D3' }}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7355]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={gif2} 
                  alt="Start with Your Design" 
                  className="w-full h-auto rounded-lg relative"
                />
              </div>
            </div>

            {/* Right - Info Box */}
            <div className={`order-1 lg:order-2 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 lg:sticky lg:top-24 lg:self-start transition-all duration-700 ease-out ${
              visibleSections.step2 
                ? 'opacity-100 lg:translate-x-0' 
                : 'opacity-100 lg:opacity-0 lg:translate-x-full'
            }`}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                START WITH YOUR DESIGN
              </h2>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Pay the Design Fee
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-1.5">
                    Once we understand your requirements and we feel we can help you, and you are happy with the session, start with your design by choosing one of the design plans,
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Don't Worry if you have wrong measurements we also take our own site measurements in one of the plans.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Finalise your Design
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Once we agree on a Design we will finalise it to start the production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Place The Order */}
      <div ref={step3Ref} className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center mb-8">
            {/* Left - GIF Image with Creative Frame */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full rounded-2xl shadow-lg border-2 border-gray-200 hover:border-[#8B7355] transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7355]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={gif3} 
                  alt="Place The Order" 
                  className="w-full h-auto rounded-lg relative"
                />
              </div>
            </div>

            {/* Right - Info Box */}
            <div className={`order-1 lg:order-2 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 lg:sticky lg:top-24 lg:self-start transition-all duration-700 ease-out ${
              visibleSections.step3 
                ? 'opacity-100 lg:translate-x-0' 
                : 'opacity-100 lg:opacity-0 lg:translate-x-full'
            }`}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                PLACE THE ORDER
              </h2>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Start the Order Process
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Once you're happy with what we've proposed, pay 50% of the final quote.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    The Work Commences
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Keep a tab on your project status on the portal provided.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Banner */}
          <div className="w-full py-4 md:py-6 px-6 md:px-8 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#8B7355' }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white text-sm md:text-base lg:text-lg font-bold uppercase">
              YOU ARE HALF WAY THERE ! YOUR ORDER IS IN PROCESS
            </p>
          </div>
        </div>
      </div>

      {/* Step 4: Approval */}
      <div ref={step4Ref} className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center mb-8">
            {/* Left - GIF Image with Creative Frame */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full rounded-2xl shadow-md border-2 border-gray-200 hover:border-[#8B7355] transition-all duration-300 hover:shadow-lg overflow-hidden" style={{ backgroundColor: '#B2E0E0' }}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7355]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={gif4} 
                  alt="Approval" 
                  className="w-full h-auto rounded-lg relative"
                />
              </div>
            </div>

            {/* Right - Info Box */}
            <div className={`order-1 lg:order-2 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 lg:sticky lg:top-24 lg:self-start transition-all duration-700 ease-out ${
              visibleSections.step4 
                ? 'opacity-100 lg:translate-x-0' 
                : 'opacity-100 lg:opacity-0 lg:translate-x-full'
            }`}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                APPROVAL
              </h2>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Give your Approval
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Once the Order reaches the approval stage, you will be asked to provide your feedback and approve
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Pay 100% at Execution Milestone
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Once the Order is fully set according to your requirements pay the 100% and the next stage begins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Confirmation Banner */}
          <div className="w-full py-4 md:py-6 px-6 md:px-8 rounded-lg flex items-center gap-4" style={{ backgroundColor: '#8B7355' }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white text-sm md:text-base lg:text-lg font-bold uppercase">
              HURRAH! COMPLETE PAYMENT HAS BEEN MADE!
            </p>
          </div>
        </div>
      </div>

      {/* Step 5: Delivery and Installation */}
      <div ref={step5Ref} className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left - GIF Image with Creative Frame */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full rounded-2xl shadow-lg border-2 border-gray-200 hover:border-[#8B7355] transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7355]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={gif5} 
                  alt="Delivery and Installation" 
                  className="w-full h-auto rounded-lg relative"
                />
              </div>
            </div>

            {/* Right - Info Box */}
            <div className={`order-1 lg:order-2 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 lg:sticky lg:top-24 lg:self-start transition-all duration-700 ease-out ${
              visibleSections.step5 
                ? 'opacity-100 lg:translate-x-0' 
                : 'opacity-100 lg:opacity-0 lg:translate-x-full'
            }`}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                DELIVERY AND INSTALLATION
              </h2>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Prepare for Delivery
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Once the 100% of the order value is received we prepare for the Delivery and Installation of the Order
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-5 border-l-2 border-dashed border-gray-300">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">
                    Installation
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Our Team reaches your Home and Install it at your space
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Type Table */}
      <div className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
            UNDERSTAND YOUR ORDER TYPE
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg text-xs md:text-sm">
              <thead>
                <tr style={{ backgroundColor: '#8B7355' }}>
                  <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs font-bold text-white uppercase border border-white/20">
                    Order Type
                  </th>
                  <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs font-bold text-white uppercase border border-white/20">
                    Category
                  </th>
                  <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs font-bold text-white uppercase border border-white/20">
                    Work Involved
                  </th>
                  <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs font-bold text-white uppercase border border-white/20">
                    Execution Milestone<br />(Make 100% payment)
                  </th>
                  <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs font-bold text-white uppercase border border-white/20">
                    Handover
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-800 border border-gray-200 font-medium">
                    Order Type 1
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Domestic Dream Temples
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Dream Temple Production, Delivery and Installation
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Post Production Temple Approval
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Delivery and Installation
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors" style={{ backgroundColor: '#f9f9f9' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-800 border border-gray-200 font-medium">
                    Order Type 2
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Domestic Pooja Rooms
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Custom Pooja Room Production
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    During Fitting and Installation
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Delivery, Installation and Handover
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-800 border border-gray-200 font-medium">
                    Order Type 3
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    International Dream Temples
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Custom Dream Temple
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Post Production Temple Approval
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Delivery
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors" style={{ backgroundColor: '#f9f9f9' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-800 border border-gray-200 font-medium">
                    Order Type 4
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Catalogue Products
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    NA
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    NA
                  </td>
                  <td className="px-3 py-2 md:px-4 md:py-3 text-xs text-gray-700 border border-gray-200">
                    Make 100% Payment for Door Delivery & Installation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full py-8 md:py-10 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="space-y-3">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">1.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 1 ? 'text-[#8B7355]' : 'text-gray-800'}`}>
                    How much is your design fee?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 1 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 1 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      For our domestic clients, we offer three different design services:<br /><br />
                      <strong>Starter Pack:</strong> INR 51,000 for a customized 2D design concept of your bespoke Dream Temple.<br /><br />
                      <strong>Premium Pack:</strong> INR 81,000, which includes a 2D concept of your Dream Temple along with a site visit.<br /><br />
                      <strong>Pro Pack:</strong> ₹111,000, which includes a 2D layout for your Pooja Room, Temple, walls, and floors, along with working drawings and a site visit.<br /><br />
                      Once you finalize your 2D concept, we also offer exceptional 3D rendering services, starting at INR 1.5 lakh.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 2 ? null : 2)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">2.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 2 ? 'text-amber-600' : 'text-gray-800'}`}>
                    How much time is required for designing an AMS pooja room?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 2 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 2 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Designing an AMS Pooja Room typically takes 2 weeks, depending on the project scope and complexity. The production process takes an additional 3-4 months to ensure smooth operations and timely delivery.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 3 ? null : 3)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">3.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 3 ? 'text-amber-600' : 'text-gray-800'}`}>
                    What is the production time for a custom Dream Temple?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 3 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 3 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      The production timeline for a custom Dream Temple is 8-10 weeks, excluding:<br /><br />
                      • The initial design phase of 10-15 days<br />
                      • Delivery and installation (approximately 1 week)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 4 ? null : 4)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">4.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 4 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Do you conduct site visits for taking measurements? What are the charges?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 4 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 4 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Yes, we conduct site visits across India for a site recce. You can opt for the Premium Pack, which offers you a 2D concept along with a site visit for ₹81,000 in Jaipur, Delhi NCR, and Mumbai. For other locations in India, additional charges apply.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 5 ? null : 5)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">5.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 5 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Do you deliver pan India?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 5 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 5 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Yes, we deliver across India and internationally. We have dedicated delivery and installation partners who manage the entire process seamlessly.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 6 ? null : 6)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">6.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 6 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Is the design fee refundable?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 6 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 6 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Please note that our design fee is non-refundable but adjustable. It serves as an advance payment for the design expertise AMS brings to your project and is later deducted from your total invoice upon order placement.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 7 ? null : 7)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">7.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 7 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Do custom temples cost more than ready-made ones?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 7 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 7 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Customization involves crafting bespoke concepts tailored to your specific needs and preferences. Ready-made temples are standardized products. However, pricing depends on the level of craftsmanship rather than solely on customization or readiness.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 8 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 8 ? null : 8)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">8.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 8 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Do you also make murtis?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 8 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 8 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Yes, we offer complete pooja room solutions, including temples, murtis, and other pooja room elements like walls, flooring, and ceilings, all crafted in exquisite stonework.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 9 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 9 ? null : 9)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">9.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 9 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Which marble do you use?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 9 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 9 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      We primarily use premium-quality Vietnam White Marble, known for its pristine finish and durability. For specific projects, we also work with other high-grade marbles.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 10 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 10 ? null : 10)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">10.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 10 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Are the drawers in the temple also made of marble?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 10 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 10 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      The drawer fronts are clad with marble carvings that seamlessly match the temple's design. The internal structure is made of high-grade Centuryply boards, fitted with Hafele push-to-open channels for smooth operation. The interiors are finished with premium-quality mica, ensuring a smooth and easy-to-clean experience.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 11 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#8B7355]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 11 ? null : 11)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">11.</span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 11 ? 'text-amber-600' : 'text-gray-800'}`}>
                    Is the chandelier included with the temple?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 11 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 11 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      No, the chandelier is not included with the temple. It can be added separately upon request as an additional feature.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default HowItWorksPage
