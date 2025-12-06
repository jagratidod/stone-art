import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'

// Import all sandstone images
import agraRedSandstone from '../assets/our products/sandstone/agra red sandstone.jpg'
import automnBrownSandstone from '../assets/our products/sandstone/automn brown sandstone.jpg'
import bansipinkSandstone from '../assets/our products/sandstone/bansipink sandstone.jpg'
import camelDustSandstone from '../assets/our products/sandstone/camel dust sandstone.jpg'
import chocolateSandstone from '../assets/our products/sandstone/chocolate sandstone.jpg'
import dholpurBeigeSandstone from '../assets/our products/sandstone/dholpur beige sandstone.jpg'
import fossilMintSandstone from '../assets/our products/sandstone/fossil mint sandstone.jpg'
import jaisalmerYellowSandstone from '../assets/our products/sandstone/jaisalmer yellow sandstone.jpg'
import jodhpurPinkSandstone from '../assets/our products/sandstone/jodhpur pink sandstone.jpg'
import kandlaGreySandstone from '../assets/our products/sandstone/kandla grey sandstone.jpg'
import lalitpurGreySandstone from '../assets/our products/sandstone/lalitpur grey standstone.jpg'
import lalitpurYellowSandstone from '../assets/our products/sandstone/lalitpur yellow sandstone.jpg'
import mandanaRedSandstone from '../assets/our products/sandstone/mandana red sandstone.jpg'
import modakSandstone from '../assets/our products/sandstone/modak standstone.jpg'
import pantersandstone from '../assets/our products/sandstone/pantersandstone.jpg'
import pinkMintSandstone from '../assets/our products/sandstone/pink mint sandstone.jpg'
import rainbowSandstone from '../assets/our products/sandstone/rainbow sandstone.jpg'
import rajGreenSandstone from '../assets/our products/sandstone/raj green natural sandstone.jpg'
import raveenaSandstone from '../assets/our products/sandstone/raveena sandstone.jpg'
import sagarBlackSandstone from '../assets/our products/sandstone/sagar black sandstone.jpg'
import teakwoodSandstone from '../assets/our products/sandstone/teakwood sandstone.jpg'
import whiteMintSandstone from '../assets/our products/sandstone/white mint sandstone.jpg'
import yellowMintSandstone from '../assets/our products/sandstone/yellow mint sandstone.jpg'
import sandstoneHeroImg from '../assets/our products/sandstone.jpg'

const SandstonePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowProducts,
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
  const sandstoneImages = [
    { id: 1, name: 'Agra Red Sandstone', image: agraRedSandstone },
    { id: 2, name: 'Autumn Brown Sandstone', image: automnBrownSandstone },
    { id: 3, name: 'Bansi Pink Sandstone', image: bansipinkSandstone },
    { id: 4, name: 'Camel Dust Sandstone', image: camelDustSandstone },
    { id: 5, name: 'Chocolate Sandstone', image: chocolateSandstone },
    { id: 6, name: 'Dholpur Beige Sandstone', image: dholpurBeigeSandstone },
    { id: 7, name: 'Fossil Mint Sandstone', image: fossilMintSandstone },
    { id: 8, name: 'Jaisalmer Yellow Sandstone', image: jaisalmerYellowSandstone },
    { id: 9, name: 'Jodhpur Pink Sandstone', image: jodhpurPinkSandstone },
    { id: 10, name: 'Kandla Grey Sandstone', image: kandlaGreySandstone },
    { id: 11, name: 'Lalitpur Grey Sandstone', image: lalitpurGreySandstone },
    { id: 12, name: 'Lalitpur Yellow Sandstone', image: lalitpurYellowSandstone },
    { id: 13, name: 'Mandana Red Sandstone', image: mandanaRedSandstone },
    { id: 14, name: 'Modak Sandstone', image: modakSandstone },
    { id: 15, name: 'Pantersandstone', image: pantersandstone },
    { id: 16, name: 'Pink Mint Sandstone', image: pinkMintSandstone },
    { id: 17, name: 'Rainbow Sandstone', image: rainbowSandstone },
    { id: 18, name: 'Raj Green Natural Sandstone', image: rajGreenSandstone },
    { id: 19, name: 'Raveena Sandstone', image: raveenaSandstone },
    { id: 20, name: 'Sagar Black Sandstone', image: sagarBlackSandstone },
    { id: 21, name: 'Teakwood Sandstone', image: teakwoodSandstone },
    { id: 22, name: 'White Mint Sandstone', image: whiteMintSandstone },
    { id: 23, name: 'Yellow Mint Sandstone', image: yellowMintSandstone }
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
          src={sandstoneHeroImg} 
          alt="Sandstone Background" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Hero Text Overlay - Left Side */}
        <div className="absolute top-16 md:top-24 lg:top-32 left-4 md:left-6 lg:left-8 xl:left-12 z-10 max-w-xl md:max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight uppercase tracking-wide drop-shadow-lg">
            SANDSTONE
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white font-light mb-2 drop-shadow-md">
            Natural Beauty in Every Grain
          </p>
        </div>
      </div>

      {/* Images Gallery Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
              OUR SANDSTONE COLLECTION
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our exquisite range of sandstone varieties, each with unique textures and colors perfect for your projects.
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sandstoneImages.map((item) => (
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

export default SandstonePage

