import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import { sandstoneProducts } from '../../../data/sandstoneProducts'

const StoneProductDetailPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const { productId, stoneType } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Extract stone type from URL path
  const pathParts = location.pathname.split('/')
  const actualStoneType = stoneType || pathParts[2] // /products/{stoneType}/{productId}
  
  // Get product data based on stone type
  let product = null
  
  if (actualStoneType === 'sandstone') {
    product = sandstoneProducts.find(p => p.id === parseInt(productId))
  } else {
    // For other stone types, get product data from sessionStorage
    const storedProduct = sessionStorage.getItem(`stoneProduct_${actualStoneType}_${productId}`)
    if (storedProduct) {
      try {
        const parsed = JSON.parse(storedProduct)
        product = {
          ...parsed,
          specifications: parsed.specifications || {
            'Origin': 'North India',
            'Color': 'Various',
            'Finish': 'Honed, Brushed, Natural, Tumbled',
            'Offered In': 'Tiles, Pavers, Crazy, Mosaic',
            'Tiles Size': '30 X 30, 30 X 60, 60 X 60 CM',
            'Price': '₹45 - ₹65 per sq.ft'
          }
        }
      } catch (e) {
        console.error('Error parsing stored product:', e)
      }
    }
  }

  // Get stone type display name
  const getStoneTypeName = (type) => {
    const names = {
      'sandstone': 'Sandstone',
      'limestone': 'Limestone',
      'slate': 'Slate',
      'marble': 'Marble',
      'granite': 'Granite',
      'quartzite': 'Quartzite',
      'pebble-stones': 'Pebble Stones',
      'cobble-stones': 'Cobble Stones',
      'stone-chips': 'Stone Chips',
      'natural-indian-stones': 'Natural Indian Stones'
    }
    return names[actualStoneType] || actualStoneType
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate(`/products/${actualStoneType}`)}
            className="px-6 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            Back to {getStoneTypeName(actualStoneType)}
          </button>
        </div>
      </div>
    )
  }

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

      {/* Product Detail Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(`/products/${actualStoneType}`)}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-[#8B7355] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to {getStoneTypeName(actualStoneType)}</span>
          </button>

          {/* Product Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
            {product.name}
          </h1>

          {/* Product Content - Image Left, Table Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Image */}
            <div className="w-full">
              <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Image Caption */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-800">{product.name}</span> is a premium natural stone 
                  from {product.specifications.Origin}, known for its distinctive {product.specifications.Color.toLowerCase()} color 
                  and exceptional durability. This versatile stone is available in multiple finishes including 
                  {product.specifications.Finish.toLowerCase()} and can be used in various applications such as 
                  {product.specifications['Offered In'].toLowerCase()}. Perfect for both interior and exterior projects, 
                  it offers timeless elegance and natural beauty that enhances any architectural design.
                </p>
              </div>
            </div>

            {/* Right Side - Specifications Table */}
            <div className="w-full">
              <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase">
                    {product.name}
                  </h2>
                  
                  {/* Specifications Table */}
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left py-3 px-4 font-bold text-gray-800 border-b-2 border-gray-300" style={{ backgroundColor: '#f9fafb' }}>
                          Category
                        </th>
                        <th className="text-left py-3 px-4 font-bold text-gray-800 border-b-2 border-gray-300" style={{ backgroundColor: '#f9fafb' }}>
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-4 px-4 font-semibold text-gray-700 border-b border-gray-200">
                            {key}
                          </td>
                          <td className="py-4 px-4 text-gray-600 border-b border-gray-200">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default StoneProductDetailPage

