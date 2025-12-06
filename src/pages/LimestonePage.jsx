import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'

// Import all limestone images
import asianGoldMarble from '../assets/our products/limestone/asian-gold-marble.jpg'
import floweryGoldMarble from '../assets/our products/limestone/flowery-gold-marble.jpg'
import fossilGoldLimestone from '../assets/our products/limestone/fossil-gold-limestone.jpg'
import galaxyGoldLimestone from '../assets/our products/limestone/galaxy-gold-limestone.jpg'
import itaGoldLimestone from '../assets/our products/limestone/ita-gold-limestone.jpg'
import jaisalmerGoldLimestone from '../assets/our products/limestone/jaisalmer-gold-limestone.jpg'
import kotaBlueLimestone from '../assets/our products/limestone/kota-blue-limestone.jpg'
import kotaBrownLimestone from '../assets/our products/limestone/kota-brown-limestone.jpg'
import kotaHoneyLimestone from '../assets/our products/limestone/kota-honey-limestone.jpg'
import pinkLimestone from '../assets/our products/limestone/pink-limestone.jpg'
import limestoneHeroImg from '../assets/our products/limestone.jpg'

const LimestonePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowProducts,
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
  const limestoneImages = [
    { id: 1, name: 'Asian Gold Marble', image: asianGoldMarble },
    { id: 2, name: 'Flowery Gold Marble', image: floweryGoldMarble },
    { id: 3, name: 'Fossil Gold Limestone', image: fossilGoldLimestone },
    { id: 4, name: 'Galaxy Gold Limestone', image: galaxyGoldLimestone },
    { id: 5, name: 'Ita Gold Limestone', image: itaGoldLimestone },
    { id: 6, name: 'Jaisalmer Gold Limestone', image: jaisalmerGoldLimestone },
    { id: 7, name: 'Kota Blue Limestone', image: kotaBlueLimestone },
    { id: 8, name: 'Kota Brown Limestone', image: kotaBrownLimestone },
    { id: 9, name: 'Kota Honey Limestone', image: kotaHoneyLimestone },
    { id: 10, name: 'Pink Limestone', image: pinkLimestone }
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

      {/* Hero Image Container */}
      <div className="relative w-full overflow-hidden" style={{ height: '60vh', minHeight: '500px' }}>
        {/* Background Image */}
        <img 
          src={limestoneHeroImg} 
          alt="Limestone Background" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Hero Text Overlay - Left Side */}
        <div className="absolute top-16 md:top-24 lg:top-32 left-4 md:left-6 lg:left-8 xl:left-12 z-10 max-w-xl md:max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight uppercase tracking-wide drop-shadow-lg">
            LIMESTONE
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white font-light mb-2 drop-shadow-md">
            Elegant Natural Stone for Timeless Beauty
          </p>
        </div>
      </div>

      {/* Images Gallery Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
              OUR LIMESTONE COLLECTION
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our stunning range of limestone varieties, perfect for creating elegant and sophisticated spaces.
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {limestoneImages.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#8B7355] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      filter: 'contrast(1.25) saturate(1.1) brightness(1.02)',
                      WebkitFilter: 'contrast(1.25) saturate(1.1) brightness(1.02)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg uppercase">{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default LimestonePage

