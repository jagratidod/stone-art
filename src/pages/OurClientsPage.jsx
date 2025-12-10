import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import headingImage from '../assets/house of marble/our client/heading/Residential.jpeg'
import headingImage2 from '../assets/house of marble/our client/heading/06fcbe87-a149-445b-912c-6787ef4a4d50.png'
import clientLogo1 from '../assets/house of marble/our client/icons/download.png'
import clientLogo2 from '../assets/house of marble/our client/icons/download (1).png'
import clientLogo3 from '../assets/house of marble/our client/icons/download (2).png'
import clientLogo4 from '../assets/house of marble/our client/icons/download (3).png'
import clientLogo5 from '../assets/house of marble/our client/icons/download (4).png'

const OurClientsPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  // Heading images array - can add more images here
  const headingImages = [
    { id: 1, image: headingImage, alt: 'Our Clients' },
    { id: 2, image: headingImage2, alt: 'Our Clients' }
    // Add more images here as needed:
    // { id: 3, image: thirdImage, alt: 'Client Image 3' },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Client logos array
  const clientLogos = [
    { id: 1, image: clientLogo1, name: 'Client 1' },
    { id: 2, image: clientLogo2, name: 'Client 2' },
    { id: 3, image: clientLogo3, name: 'Client 3' },
    { id: 4, image: clientLogo4, name: 'Client 4' },
    { id: 5, image: clientLogo5, name: 'Client 5' }
  ]

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? headingImages.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === headingImages.length - 1 ? 0 : prev + 1
    )
  }

  const currentImage = headingImages[currentImageIndex]

  return (
    <div className="w-full min-h-screen bg-white">
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

      {/* Image and Caption Section - Image Left, Caption Right */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image with Navigation Arrows */}
            <div className="w-full relative group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:shadow-3xl" style={{ aspectRatio: '16/9', maxHeight: '600px' }}>
                <img
                  src={currentImage.image}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                
                {/* Navigation Arrows - Only show if more than one image */}
                {headingImages.length > 1 && (
                  <>
                    {/* Left Arrow */}
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/95 hover:bg-white text-[#8B7355] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-[#8B7355]/20"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/95 hover:bg-white text-[#8B7355] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-[#8B7355]/20"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Indicator Dots - Only show if more than one image */}
                {headingImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                    {headingImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-8 h-2' 
                            : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Caption */}
            <div className="w-full">
              <div className="space-y-6">
                {/* Decorative Element */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-16" style={{ backgroundColor: '#8B7355' }}></div>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide" style={{ color: '#8B7355' }}>
                    Our Valued Clients
                  </h2>
                </div>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed italic" style={{ fontWeight: 400 }}>
                  At Aslam Marble Suppliers, we take immense pride in the trust and confidence that our clients place in us. 
                  Over the years, we have had the privilege of serving a diverse range of clients, from individual homeowners 
                  seeking exquisite marble pieces for their personal spaces to large-scale commercial and institutional projects. 
                  Our commitment to quality, craftsmanship, and customer satisfaction has made us a preferred choice for clients 
                  across India and beyond.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed italic" style={{ fontWeight: 400 }}>
                  Each project we undertake is a testament to our dedication to excellence. We work closely with our clients 
                  to understand their vision and bring it to life through our masterful craftsmanship. From residential temples 
                  and home decor to grand communal spaces and international projects, our portfolio reflects the diversity and 
                  scale of our expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Right to Left Scrolling - Full Screen Width */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#8B7355] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#8B7355] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Section Title */}
          <div className="text-center mb-6 md:mb-8 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-3" style={{ color: '#8B7355' }}>
              Trusted By
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#8B7355' }}></div>
          </div>

          {/* Scrolling Logos Container - Full Width */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 md:gap-8 lg:gap-10 animate-scroll-right-to-left">
              {/* Duplicate logos for seamless loop */}
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="relative p-2 transition-all duration-500 hover:scale-110">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-all duration-500 group-hover:brightness-110 filter grayscale hover:grayscale-0"
                    />
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-[#8B7355]/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default OurClientsPage

