import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import headingImage from '../assets/house of marble/exprience/heading/Artisan.jpeg'
import horizontalImage1 from '../assets/house of marble/exprience/horizontal/446d311a-f90e-4837-b736-3f8e6a5f4b2c.png'
import horizontalImage2 from '../assets/house of marble/exprience/horizontal/SMT01780-Edit_6ebd2fd8-7aa4-4df4-b841-2cb2e362337e_large.jpeg'
import horizontalImage3 from '../assets/house of marble/exprience/horizontal/voice of devotion.jpg'
import image1 from '../assets/house of marble/exprience/06fcbe87-a149-445b-912c-6787ef4a4d50.png'
import image2 from '../assets/house of marble/exprience/1708509016923_large.jpeg'
import image3 from '../assets/house of marble/exprience/1733296958645.jpeg'
import image4 from '../assets/house of marble/exprience/1733300646054.jpeg'
import image5 from '../assets/house of marble/exprience/2d07e532-fa01-4e30-b638-52b26887f92c-small.jpeg'
import image6 from '../assets/house of marble/exprience/4d2730d0-5d47-49f4-94b5-a8d151f7b39b.png'
import image7 from '../assets/house of marble/exprience/8d836775-b2f6-4c0a-8ab4-5b7c27a36e55.png'
import image8 from '../assets/house of marble/exprience/99e40aab-0df8-4175-ad0e-a0a94517b611-medium.jpeg'
import image9 from '../assets/house of marble/exprience/large.jpeg'
import image10 from '../assets/house of marble/exprience/result_0 (1).jpeg'
import image11 from '../assets/house of marble/exprience/SMT01426-Edit_cc5ea55a-3771-4aa1-b484-c73f1cf8103e_large.jpeg'
import image12 from '../assets/house of marble/exprience/SMT01696-Edit_46274549-fd77-4997-8cd6-0067340d0636_large.jpeg'
import clientLogo1 from '../assets/house of marble/our client/icons/download.png'
import clientLogo2 from '../assets/house of marble/our client/icons/download (1).png'
import clientLogo3 from '../assets/house of marble/our client/icons/download (2).png'
import clientLogo4 from '../assets/house of marble/our client/icons/download (3).png'
import clientLogo5 from '../assets/house of marble/our client/icons/download (4).png'

const ExperienceCentrePage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  // Regular images array (4 images per row)
  const regularImages = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 12, image: image12 }
  ]

  // Horizontal images array
  const horizontalImages = [
    { id: 1, image: horizontalImage1 },
    { id: 2, image: horizontalImage2 },
    { id: 3, image: horizontalImage3 }
  ]

  // Client logos array
  const clientLogos = [
    { id: 1, image: clientLogo1, name: 'Client 1' },
    { id: 2, image: clientLogo2, name: 'Client 2' },
    { id: 3, image: clientLogo3, name: 'Client 3' },
    { id: 4, image: clientLogo4, name: 'Client 4' },
    { id: 5, image: clientLogo5, name: 'Client 5' }
  ]

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

      {/* Hero Image Section - Full Width Horizontal */}
      <section className="relative w-full overflow-hidden">
        <img
          src={headingImage}
          alt="Experience Centre"
          className="w-full h-auto object-cover"
          style={{ display: 'block', width: '100%' }}
        />
      </section>

      {/* Caption Section - About Our Experience */}
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed italic" style={{ fontWeight: 400 }}>
            Step into our Experience Centre, where tradition meets innovation and craftsmanship comes to life. 
            Our showroom is a sanctuary of marble artistry, showcasing the finest collection of handcrafted pieces 
            that reflect decades of expertise and passion. Here, you can witness the intricate details, feel the 
            premium quality, and experience the timeless beauty of our creations firsthand.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-6 italic" style={{ fontWeight: 400 }}>
            From elegant temple designs to exquisite home decor, our Experience Centre offers a curated journey 
            through our portfolio. Each piece tells a story of devotion, precision, and artistic excellence. 
            Visit us to explore our collections, consult with our experts, and discover how we can transform 
            your vision into reality.
          </p>
        </div>
      </section>

      {/* Images Grid Section - Pattern: 4 images, horizontal, 4 images, horizontal, 4 images, horizontal, 4 images */}
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          {/* First Row - 4 Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {regularImages.slice(0, 4).map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                <img
                  src={item.image}
                  alt={`Experience ${item.id}`}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* First Horizontal Image */}
          {horizontalImages[0] && (
            <div className="w-full relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={horizontalImages[0].image}
                alt="Experience Centre"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          )}

          {/* Second Row - 4 Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {regularImages.slice(4, 8).map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                <img
                  src={item.image}
                  alt={`Experience ${item.id}`}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Second Horizontal Image */}
          {horizontalImages[1] && (
            <div className="w-full relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={horizontalImages[1].image}
                alt="Experience Centre"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          )}

          {/* Third Row - 4 Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {regularImages.slice(8, 12).map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                <img
                  src={item.image}
                  alt={`Experience ${item.id}`}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Third Horizontal Image */}
          {horizontalImages[2] && (
            <div className="w-full relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={horizontalImages[2].image}
                alt="Experience Centre"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          )}

          {/* Fourth Row - 4 Images (if more images available, otherwise repeat or leave empty) */}
          {regularImages.length > 12 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {regularImages.slice(12, 16).map((item) => (
                <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <img
                    src={item.image}
                    alt={`Experience ${item.id}`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}
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

export default ExperienceCentrePage

