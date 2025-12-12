import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreationsNavBar from '../../../components/layout/CreationsNavBar'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import { ganeshaProducts } from '../../../data/ganeshaProducts'

const GaneshaCategoryPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen bg-white">
      <CreationsNavBar />

      {/* Category Header */}
      <div className="w-full py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-4">
            DISCOVER Lord Ganesha
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {ganeshaProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/murti/ganesha/${product.id}`)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  {product.isPreOrder && (
                    <div className="absolute top-3 left-3 z-10 bg-black rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold uppercase">Pre Order</span>
                    </div>
                  )}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#8B7355] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{product.sku}</p>
                      <p className="text-xl font-bold text-[#8B7355]">₹ {product.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default GaneshaCategoryPage

