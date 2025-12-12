import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreationsNavBar from '../../../components/layout/CreationsNavBar'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import headingImage from '../../../assets/ourcreation/pooja room/headiing/06fcbe87-a149-445b-912c-6787ef4a4d50.png'
import wallIcon from '../../../assets/ourcreation/pooja room/icons/1wall.png'
import floorIcon from '../../../assets/ourcreation/pooja room/icons/2floor.png'
import virtualIcon from '../../../assets/ourcreation/pooja room/icons/3virtual.png'
import customDesignIcon from '../../../assets/ourcreation/pooja room/icons/4custom design.png'
import visualisationIcon from '../../../assets/ourcreation/pooja room/icons/5visualisation.png'
import projectTrackingIcon from '../../../assets/ourcreation/pooja room/icons/6project tracking.png'
import consultationImage1 from '../../../assets/ourcreation/pooja room/consultation lcons/Gemini_Generated_Image_h2oaaqh2oaaqh2oa.png'
import consultationImage2 from '../../../assets/ourcreation/pooja room/consultation lcons/Gemini_Generated_Image_xtcirextcirextci.png'
import poojaRoom1 from '../../../assets/ourcreation/pooja room/images/06fcbe87-a149-445b-912c-6787ef4a4d50.png'
import poojaRoom2 from '../../../assets/ourcreation/pooja room/images/14d31fa5-cfd7-4b90-a247-9748d279f3c7.png'
import poojaRoom3 from '../../../assets/ourcreation/pooja room/images/299a63e6-532b-4b95-960c-1547e879b758.png'
import poojaRoom4 from '../../../assets/ourcreation/pooja room/images/446d311a-f90e-4837-b736-3f8e6a5f4b2c.png'
import galleryImg1 from '../../../assets/ourcreation/pooja room/images/1733296958645.jpeg'
import galleryImg2 from '../../../assets/ourcreation/pooja room/images/1733300646054.jpeg'
import galleryImg3 from '../../../assets/ourcreation/pooja room/images/4d2730d0-5d47-49f4-94b5-a8d151f7b39b.png'
import galleryImg4 from '../../../assets/ourcreation/pooja room/images/81fe6d99-c983-460b-9cfb-586795089d56.png'
import galleryImg5 from '../../../assets/ourcreation/pooja room/images/8d836775-b2f6-4c0a-8ab4-5b7c27a36e55.png'
import galleryImg6 from '../../../assets/ourcreation/pooja room/images/ca344ef3-3bd3-44dc-adeb-cd70d1b3c573.png'
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from '../../../utils/constants'

const PoojaRoomPage = ({ onShowCart, onShowLikes }) => {
  const navigate = useNavigate()
  const [formStep, setFormStep] = useState(1)
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [selectedProjectType, setSelectedProjectType] = useState('Communal')
  const [galleryIndex, setGalleryIndex] = useState(0)
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

  const poojaRooms = [
    {
      id: 1,
      name: 'Small Pooja Room',
      size: 'upto 50 Sqft',
      price: '12L',
      fullPrice: 1200000,
      image: poojaRoom1
    },
    {
      id: 2,
      name: 'Medium Pooja Room',
      size: 'upto 80 Sqft',
      price: '20L',
      fullPrice: 2000000,
      image: poojaRoom2
    },
    {
      id: 3,
      name: 'Large Pooja Room',
      size: 'Above 80 Sqft',
      price: '25.75L',
      fullPrice: 2575000,
      image: poojaRoom3
    },
    {
      id: 4,
      name: 'Grand Pooja Room',
      size: 'Custom Size',
      price: '35L',
      fullPrice: 3500000,
      image: poojaRoom4
    }
  ]

  const galleryImages = [
    poojaRoom1,
    poojaRoom2,
    poojaRoom3,
    poojaRoom4,
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6
  ]

  const handleGalleryPrev = () => {
    setGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleGalleryNext = () => {
    setGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const services = [
    {
      id: 1,
      name: 'Wall Cladding',
      icon: wallIcon
    },
    {
      id: 2,
      name: 'Floor Inlay',
      icon: floorIcon
    },
    {
      id: 3,
      name: 'Virtual Tour',
      icon: virtualIcon
    },
    {
      id: 4,
      name: 'Custom Design',
      icon: customDesignIcon
    },
    {
      id: 5,
      name: '3D visualisation',
      icon: visualisationIcon
    },
    {
      id: 6,
      name: 'Project Tracking',
      icon: projectTrackingIcon
    }
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      <CreationsNavBar onShowCart={onShowCart} onShowLikes={onShowLikes} />

      {/* Hero Image Container with Form Overlay */}
      <div className="relative w-full overflow-hidden" style={{ height: '75vh', minHeight: '600px' }}>
        {/* Horizontal Heading Image */}
        <img 
          src={headingImage} 
          alt="Pooja Room" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        
        {/* Form Container - Overlay on Right Side, Fits Image Height */}
        <div id="expert-form-container" className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-[85%] sm:w-[320px] md:w-[340px] max-w-[calc(100%-32px)] bg-white rounded-xl md:rounded-2xl shadow-2xl z-20 flex flex-col backdrop-blur-sm bg-white/95">
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
                    className="w-full text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#8B7355' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                  >
                    NEXT →
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
                      className="flex-1 text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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

      {/* Pooja Rooms Collection Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
              OUR POOJA ROOM COLLECTION
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your sacred space with our meticulously crafted pooja rooms, designed to bring peace and divinity into your home.
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {poojaRooms.map((room) => (
              <div
                key={room.id}
                className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#8B7355] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-sm font-bold" style={{ color: '#8B7355' }}>INR {room.price}</span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5 md:p-6 bg-white">
                  <div className="mb-2">
                    <p className="text-xs md:text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                      Starting at
                    </p>
                    <p className="text-lg md:text-xl font-bold text-black mb-2 group-hover:text-[#8B7355] transition-colors duration-300">
                      INR {room.price}
                    </p>
                    <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                      {room.name}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {room.size}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section 1 */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                ALL WE NEED IS YOUR SPACE DIMENSIONS AND PICTURES
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Before starting the session, we require you to have your site pictures and dimensions ready. This allows us to understand your space and craft a suitable solution, ensuring we make the most out of our concept discovery session.
              </p>
              <button
                onClick={() => setShowConsultationModal(true)}
                className="px-6 py-3 md:px-8 md:py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <img 
                  src={consultationImage1} 
                  alt="Consultation" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
              WE OFFER UNPARALLELED SERVICES
            </h2>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>

          {/* Services Grid - 2x3 Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#8B7355] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                    <img 
                      src={service.icon} 
                      alt={service.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#8B7355] transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrollable Image Gallery Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={handleGalleryPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110"
              style={{ color: '#8B7355' }}
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Gallery Container */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleGalleryNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110"
              style={{ color: '#8B7355' }}
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Gallery Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === galleryIndex ? 'w-8 bg-[#8B7355]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section 2 - Customised Solutions */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                CUSTOMISED SOLUTIONS
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Let us bring your vision to life with a custom-designed space that reflects your unique taste and lifestyle. Whether it's a traditional pooja room or a modern sanctuary, we'll work with you to create the perfect fit. Ready to make your dream a reality?
              </p>
              <button
                onClick={() => setShowConsultationModal(true)}
                className="px-6 py-3 md:px-8 md:py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <img 
                  src={consultationImage2} 
                  alt="Customised Solutions" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Projects Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 md:mb-10 uppercase tracking-wide">
              EXPLORE OUR PROJECTS
            </h2>
            
            {/* Three Option Buttons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <button
                onClick={() => {
                  setSelectedProjectType('Communal')
                  navigate('/communal-projects')
                }}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                  selectedProjectType === 'Communal'
                    ? 'text-white'
                    : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-400'
                }`}
                style={selectedProjectType === 'Communal' ? { backgroundColor: '#8B7355' } : {}}
              >
                Communal
              </button>
              <button
                onClick={() => {
                  setSelectedProjectType('Residential')
                  navigate('/residential-projects')
                }}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                  selectedProjectType === 'Residential'
                    ? 'text-white'
                    : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-400'
                }`}
                style={selectedProjectType === 'Residential' ? { backgroundColor: '#8B7355' } : {}}
              >
                Residential
              </button>
              <button
                onClick={() => {
                  setSelectedProjectType('International')
                  navigate('/international-projects')
                }}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                  selectedProjectType === 'International'
                    ? 'text-white'
                    : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-400'
                }`}
                style={selectedProjectType === 'International' ? { backgroundColor: '#8B7355' } : {}}
              >
                International
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />

      {/* Consultation Modal */}
      {showConsultationModal && (
        <ConsultationModal
          formStep={formStep}
          setFormStep={setFormStep}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          onClose={() => {
            setShowConsultationModal(false)
            setFormStep(1)
          }}
        />
      )}
    </div>
  )
}

// Consultation Modal Component
const ConsultationModal = ({ formStep, setFormStep, formData, setFormData, handleSubmit, onClose }) => {
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[110] transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="fixed inset-0 z-[115] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden pointer-events-auto transform transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b-2 border-gray-200 bg-gradient-to-r from-[#8B7355]/10 to-transparent">
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wide" style={{ color: '#8B7355' }}>Talk to Our Expert</h3>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#8B7355]/10" style={{ color: '#8B7355' }}>{formStep}/2</span>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 text-2xl font-bold transition-colors w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>

          <div className="px-4 pt-4 pb-5 md:px-5 md:pt-5 md:pb-6 bg-white overflow-y-auto max-h-[calc(90vh-80px)]">
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
                  className="w-full text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  style={{ backgroundColor: '#8B7355' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                >
                  NEXT →
                </button>
              </form>
            ) : (
              <form className="space-y-2.5" onSubmit={(e) => { e.preventDefault(); handleSubmit(e); onClose(); }}>
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
                    id="modalDesignReferences"
                    accept="image/*,.pdf"
                    multiple
                    onChange={(e) => setFormData({...formData, designReferences: e.target.files})}
                    className="hidden"
                  />
                  <label
                    htmlFor="modalDesignReferences"
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
                    className="flex-1 text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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
    </>
  )
}

export default PoojaRoomPage
