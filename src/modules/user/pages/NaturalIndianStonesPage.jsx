import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'

// Import all Natural Indian Stone images
import naturalStoneCarving from '../../../assets/our products/Natural Indian Stones/Natural Stone Carving.jpg'
import naturalStoneMosaic from '../../../assets/our products/Natural Indian Stones/Natural Stone Mosaic.jpg'
import naturalStoneVeneer from '../../../assets/our products/Natural Indian Stones/Natural Stone Veneer.jpg'
import naturalMonolithStone from '../../../assets/our products/Natural Indian Stones/Natural Monolith Stone.jpg'
import stoneRoofTile from '../../../assets/our products/Natural Indian Stones/Stone Roof Tile.jpg'
import stonePierCap from '../../../assets/our products/Natural Indian Stones/Stone Pier Cap.jpg'
import naturalStoneCircle from '../../../assets/our products/Natural Indian Stones/Natural Stone Circle.jpg'
import naturalCrazyStone from '../../../assets/our products/Natural Indian Stones/Natural Crazy Stone.jpg'
import naturalStonePalisade from '../../../assets/our products/Natural Indian Stones/Natural Stone Palisade.jpg'
import naturalSteppingStone from '../../../assets/our products/Natural Indian Stones/Natural Stepping Stone.jpg'
import naturalStoneLintel from '../../../assets/our products/Natural Indian Stones/Natural Stone Lintel.jpg'
import naturalStoneKerb from '../../../assets/our products/Natural Indian Stones/Natural Stone Kerb.jpg'
import naturalStoneStep from '../../../assets/our products/Natural Indian Stones/Natural Stone Step.jpg'
import stoneWallCladding from '../../../assets/our products/Natural Indian Stones/Stone Wall Cladding.jpg'
import stoneWallPanel from '../../../assets/our products/Natural Indian Stones/Stone Wall Panel.jpg'
import kandlaGreySandstone from '../../../assets/our products/Natural Indian Stones/kandla-grey-sandstone-wall-panels.jpg'

const NaturalIndianStonesPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)

  const stoneImages = [
    {
      id: 1,
      name: 'Natural Stone Carving',
      image: naturalStoneCarving
    },
    {
      id: 2,
      name: 'Natural Stone Mosaic',
      image: naturalStoneMosaic
    },
    {
      id: 3,
      name: 'Natural Stone Veneer',
      image: naturalStoneVeneer
    },
    {
      id: 4,
      name: 'Natural Monolith Stone',
      image: naturalMonolithStone
    },
    {
      id: 5,
      name: 'Stone Roof Tile',
      image: stoneRoofTile
    },
    {
      id: 6,
      name: 'Stone Pier Cap',
      image: stonePierCap
    },
    {
      id: 7,
      name: 'Natural Stone Circle',
      image: naturalStoneCircle
    },
    {
      id: 8,
      name: 'Natural Crazy Stone',
      image: naturalCrazyStone
    },
    {
      id: 9,
      name: 'Natural Stone Palisade',
      image: naturalStonePalisade
    },
    {
      id: 10,
      name: 'Natural Stepping Stone',
      image: naturalSteppingStone
    },
    {
      id: 11,
      name: 'Natural Stone Lintel',
      image: naturalStoneLintel
    },
    {
      id: 12,
      name: 'Natural Stone Kerb',
      image: naturalStoneKerb
    },
    {
      id: 13,
      name: 'Natural Stone Step',
      image: naturalStoneStep
    },
    {
      id: 14,
      name: 'Stone Wall Cladding',
      image: stoneWallCladding
    },
    {
      id: 15,
      name: 'Stone Wall Panel',
      image: stoneWallPanel
    },
    {
      id: 16,
      name: 'Kandla Grey Sandstone Wall Panels',
      image: kandlaGreySandstone
    }
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

      {/* Page Header */}
      <div className="w-full py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-4 uppercase tracking-wide">
            NATURAL INDIAN STONES
          </h1>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Explore our exquisite collection of natural Indian stones, crafted with precision and showcasing the timeless beauty of Indian craftsmanship.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
        </div>
      </div>

      {/* Images Grid */}
      <div className="w-full py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {stoneImages.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const productData = {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    specifications: {
                      'Origin': 'North India',
                      'Color': 'Various',
                      'Finish': 'Honed, Brushed, Natural, Tumbled',
                      'Offered In': 'Tiles, Pavers, Crazy, Mosaic',
                      'Tiles Size': '30 X 30, 30 X 60, 60 X 60 CM',
                      'Price': '₹45 - ₹65 per sq.ft'
                    }
                  }
                  sessionStorage.setItem(`stoneProduct_natural-indian-stones_${item.id}`, JSON.stringify(productData))
                  navigate(`/products/natural-indian-stones/${item.id}`)
                }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#8B7355] transition-colors text-center">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-[120] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h3 className="text-xl font-bold">{selectedImage.name}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default NaturalIndianStonesPage

