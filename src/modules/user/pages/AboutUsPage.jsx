import { useState, useRef } from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import { journeyTimeline } from '../../../data/aboutUsJourney'
import { companyValues } from '../../../data/aboutUsValues'
import headingImage from '../../../assets/house of marble/about us/heading/Gemini_Generated_Image_ipme0eipme0eipme (1).png'
import aboutImage1 from '../../../assets/house of marble/about us/Screenshot 2025-12-10 131359.png'
import aboutImage2 from '../../../assets/house of marble/about us/Screenshot 2025-12-10 131414.png'

// CSS to hide scrollbar
const scrollbarHideStyle = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

const AboutUsPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const journeyScrollRef = useRef(null)

  const scrollJourney = (direction) => {
    if (journeyScrollRef.current) {
      const scrollAmount = 400
      if (direction === 'left') {
        journeyScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        journeyScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="w-full min-h-screen relative">
      <style>{scrollbarHideStyle}</style>
      
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src={headingImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Wrapper - Scrolls Over Background */}
      <div className="relative z-10">
        <Header
          variant="default"
          onShowSidebar={onShowSidebar}
          onShowProjects={onShowProjects}
          onShowCreations={onShowCreations}
          onShowProducts={onShowProducts}
          onShowServices={onShowServices}
          onShowHowItWorks={onShowHowItWorks}
          onShowLocation={onShowLocation}
          onShowBooking={onShowBooking}
        />

        {/* Hero Section - Title Over Background */}
        <section className="relative w-full h-screen flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white uppercase tracking-wider text-center px-4" style={{ 
              textShadow: '3px 3px 12px rgba(0,0,0,0.9), 0 0 20px rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
              fontWeight: '900'
            }}>
              About Aslam Marble Suppliers
            </h1>
          </div>
        </section>

        {/* Introduction Section - Content Above Background */}
        <section className="w-full min-h-screen py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 border-2 border-white/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - Image */}
                <div className="w-full">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={aboutImage1}
                      alt="Aslam Marble Suppliers"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Introduction */}
                <div className="w-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-16" style={{ backgroundColor: '#8B7355' }}></div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide" style={{ color: '#8B7355' }}>
                        Introduction
                      </h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-base md:text-lg">
                        <span className="font-bold text-gray-900">Aslam Marble Suppliers</span> stands as a beacon of excellence in the realm of marble craftsmanship and spiritual artistry. With decades of unwavering dedication, we have transformed countless spaces into sanctuaries of divine beauty and timeless elegance.
                      </p>
                      <p className="text-base md:text-lg">
                        Our journey began with a simple yet profound vision: to blend traditional Indian craftsmanship with contemporary design sensibilities, creating marble masterpieces that honor both heritage and innovation. Every piece we create is a testament to our commitment to quality, precision, and the sacred art of stone carving.
                      </p>
                      <p className="text-base md:text-lg">
                        From intricate temple installations to elegant home decor, we have served clients across India and beyond, bringing the essence of spiritual artistry into their spaces. Our team of skilled artisans, guided by generations of knowledge, ensures that each creation tells a story of devotion, craftsmanship, and timeless beauty.
                      </p>
                      <p className="text-base md:text-lg">
                        At Aslam Marble Suppliers, we don't just create products; we craft experiences that connect the divine with the everyday, transforming ordinary spaces into extraordinary sanctuaries of peace and devotion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline Section - Merged with Horizontal Scroll */}
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
          <div className="w-full max-w-full mx-auto">
            {/* Title and Timeline in One Container */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 border-2 border-white/50">
              {/* Title Section */}
              <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4" style={{ color: '#8B7355' }}>
                  Timeline of Excellence
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  A journey through the milestones that have shaped Aslam Marble Suppliers into the trusted name it is today.
                </p>
              </div>

              {/* Horizontal Scrollable Timeline */}
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={() => scrollJourney('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-[#8B7355] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#A08A6F] transition-colors"
                  aria-label="Scroll left"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => scrollJourney('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-[#8B7355] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#A08A6F] transition-colors"
                  aria-label="Scroll right"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Scrollable Timeline - Horizontal Layout */}
                <div
                  ref={journeyScrollRef}
                  className="flex flex-row gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 px-14 md:px-16"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {journeyTimeline.map((item, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-gray-200 hover:border-[#8B7355] transition-all duration-300"
                      style={{ width: '300px', minWidth: '300px', maxWidth: '300px' }}
                    >
                      <div className="mb-4">
                        <div className="inline-block px-4 py-2 bg-[#8B7355] text-white rounded-lg font-bold text-lg md:text-xl mb-3">
                          {item.year}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 uppercase">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed italic" style={{ fontWeight: 400 }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
          <div className="w-full max-w-full mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 border-2 border-white/50">
              {/* Title Section */}
              <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4" style={{ color: '#8B7355' }}>
                  Our Values
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  We uphold our values in every step, guiding our craftsmanship, decisions, and interactions as the foundation of excellence in temple making.
                </p>
              </div>

              {/* Values Grid - 2 rows, 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {companyValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-gray-200 hover:border-[#8B7355] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-12" style={{ backgroundColor: '#8B7355' }}></div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed italic" style={{ fontWeight: 400 }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingButtons />
      </div>
    </div>
  )
}

export default AboutUsPage

