import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'

// Import all marble images
import blackGoldMarble from '../assets/our products/marble/black-gold-marble.jpg'
import brunoWhiteMarble from '../assets/our products/marble/bruno-white-marble.jpg'
import cappuccinoBrownMarble from '../assets/our products/marble/cappuccino-brown-marble.jpg'
import carbonBlackMarble from '../assets/our products/marble/carbon-black-marble.jpg'
import cherryGoldMarble from '../assets/our products/marble/cherry-gold-marble.jpg'
import chocoBrownMarble from '../assets/our products/marble/choco-brown-marble.jpg'
import crocodileGreenMarble from '../assets/our products/marble/crocodile-green-marble.jpg'
import fantasyBlackMarble from '../assets/our products/marble/fantasy-black-marble.jpg'
import fantasyBrownMarble from '../assets/our products/marble/fantasy-brown-marble.jpg'
import fantasyGreyMarble from '../assets/our products/marble/fantasy-grey-marble.jpg'
import indianTorontoMarble from '../assets/our products/marble/indian-toronto-marblejpg.jpg'
import indianWhiteMarble from '../assets/our products/marble/indian-white-marble.jpg'
import katniBeigeMarble from '../assets/our products/marble/katni-beige-marble.jpg'
import levantoRedMarble from '../assets/our products/marble/levanto-red-marble.jpg'
import linerBlackMarble from '../assets/our products/marble/liner-black-marble.jpg'
import linerGreyMarble from '../assets/our products/marble/liner-grey-marble.jpg'
import majesticGoldMarble from '../assets/our products/marble/majestic-gold-marble.jpg'
import makranaWhiteMarble from '../assets/our products/marble/makrana-white-marble.jpg'
import marineBlackMarble from '../assets/our products/marble/marine-black-marble.jpg'
import moltenBlackMarble from '../assets/our products/marble/molten-black-marble.jpg'
import omanRedMarble from '../assets/our products/marble/oman-red-marble.jpg'
import onyxGreenMarble from '../assets/our products/marble/onyx-green-marble.jpg'
import onyxPinkMarble from '../assets/our products/marble/onyx-pink-marble-stone.jpg'
import opelWhiteMarble from '../assets/our products/marble/opel-white-marble.jpg'
import pantherBrownMarble from '../assets/our products/marble/panther-brown-marble.jpg'
import pantherIndianWhiteMarble from '../assets/our products/marble/panther-indian-white-marble.jpg'
import pantherYellowIndianMarble from '../assets/our products/marble/panther-yellow-indian-marble.jpg'
import perlatoBeigeMarble from '../assets/our products/marble/perlato-beige-marble.jpg'
import pistaWhiteMarble from '../assets/our products/marble/pista-white-marble.jpg'
import purpleWhiteMarble from '../assets/our products/marble/purple-white-marble.jpg'
import rainforestBrownMarble from '../assets/our products/marble/rainforest-brown-marble.jpg'
import rainforestGoldMarble from '../assets/our products/marble/rainforest-gold-marble.jpg'
import rainforestGreenMarble from '../assets/our products/marble/rainforest-green-marble.jpg'
import rajnagarWhiteMarble from '../assets/our products/marble/rajnagar-white-marble.jpg'
import roseWoodMarble from '../assets/our products/marble/rose-wood-marble.jpg'
import silverGreyMarble from '../assets/our products/marble/silver-grey-marble.jpg'
import smokeGreyMarble from '../assets/our products/marble/smoke-grey-marble.jpg'
import spiderGreenMarble from '../assets/our products/marble/spider-green-marble.jpg'
import teakBrownMarble from '../assets/our products/marble/teak-brown-marble.jpg'
import udaipurGreenMarble from '../assets/our products/marble/udaipur-green-marble.jpg'
import udaipurPinkMarble from '../assets/our products/marble/udaipur-pink-marble.jpg'
import wonderBeigeMarble from '../assets/our products/marble/wonder-beige-marble.jpg'
import wonderPinkMarble from '../assets/our products/marble/wonder-pink-marble.jpg'
import marbleHeroImg from '../assets/our products/marble .jpg'

const MarblePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowProducts,
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
  const marbleImages = [
    { id: 1, name: 'Black Gold Marble', image: blackGoldMarble },
    { id: 2, name: 'Bruno White Marble', image: brunoWhiteMarble },
    { id: 3, name: 'Cappuccino Brown Marble', image: cappuccinoBrownMarble },
    { id: 4, name: 'Carbon Black Marble', image: carbonBlackMarble },
    { id: 5, name: 'Cherry Gold Marble', image: cherryGoldMarble },
    { id: 6, name: 'Choco Brown Marble', image: chocoBrownMarble },
    { id: 7, name: 'Crocodile Green Marble', image: crocodileGreenMarble },
    { id: 8, name: 'Fantasy Black Marble', image: fantasyBlackMarble },
    { id: 9, name: 'Fantasy Brown Marble', image: fantasyBrownMarble },
    { id: 10, name: 'Fantasy Grey Marble', image: fantasyGreyMarble },
    { id: 11, name: 'Indian Toronto Marble', image: indianTorontoMarble },
    { id: 12, name: 'Indian White Marble', image: indianWhiteMarble },
    { id: 13, name: 'Katni Beige Marble', image: katniBeigeMarble },
    { id: 14, name: 'Levanto Red Marble', image: levantoRedMarble },
    { id: 15, name: 'Liner Black Marble', image: linerBlackMarble },
    { id: 16, name: 'Liner Grey Marble', image: linerGreyMarble },
    { id: 17, name: 'Majestic Gold Marble', image: majesticGoldMarble },
    { id: 18, name: 'Makrana White Marble', image: makranaWhiteMarble },
    { id: 19, name: 'Marine Black Marble', image: marineBlackMarble },
    { id: 20, name: 'Molten Black Marble', image: moltenBlackMarble },
    { id: 21, name: 'Oman Red Marble', image: omanRedMarble },
    { id: 22, name: 'Onyx Green Marble', image: onyxGreenMarble },
    { id: 23, name: 'Onyx Pink Marble', image: onyxPinkMarble },
    { id: 24, name: 'Opel White Marble', image: opelWhiteMarble },
    { id: 25, name: 'Panther Brown Marble', image: pantherBrownMarble },
    { id: 26, name: 'Panther Indian White Marble', image: pantherIndianWhiteMarble },
    { id: 27, name: 'Panther Yellow Indian Marble', image: pantherYellowIndianMarble },
    { id: 28, name: 'Perlato Beige Marble', image: perlatoBeigeMarble },
    { id: 29, name: 'Pista White Marble', image: pistaWhiteMarble },
    { id: 30, name: 'Purple White Marble', image: purpleWhiteMarble },
    { id: 31, name: 'Rainforest Brown Marble', image: rainforestBrownMarble },
    { id: 32, name: 'Rainforest Gold Marble', image: rainforestGoldMarble },
    { id: 33, name: 'Rainforest Green Marble', image: rainforestGreenMarble },
    { id: 34, name: 'Rajnagar White Marble', image: rajnagarWhiteMarble },
    { id: 35, name: 'Rose Wood Marble', image: roseWoodMarble },
    { id: 36, name: 'Silver Grey Marble', image: silverGreyMarble },
    { id: 37, name: 'Smoke Grey Marble', image: smokeGreyMarble },
    { id: 38, name: 'Spider Green Marble', image: spiderGreenMarble },
    { id: 39, name: 'Teak Brown Marble', image: teakBrownMarble },
    { id: 40, name: 'Udaipur Green Marble', image: udaipurGreenMarble },
    { id: 41, name: 'Udaipur Pink Marble', image: udaipurPinkMarble },
    { id: 42, name: 'Wonder Beige Marble', image: wonderBeigeMarble },
    { id: 43, name: 'Wonder Pink Marble', image: wonderPinkMarble }
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
          src={marbleHeroImg} 
          alt="Marble Background" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Hero Text Overlay - Left Side */}
        <div className="absolute top-16 md:top-24 lg:top-32 left-4 md:left-6 lg:left-8 xl:left-12 z-10 max-w-xl md:max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight uppercase tracking-wide drop-shadow-lg">
            MARBLE
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white font-light mb-2 drop-shadow-md">
            Luxury and Elegance in Every Slab
          </p>
        </div>
      </div>

      {/* Images Gallery Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
              OUR MARBLE COLLECTION
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our premium collection of marble varieties, showcasing timeless beauty and sophistication for your architectural and design needs.
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {marbleImages.map((item) => (
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

export default MarblePage

