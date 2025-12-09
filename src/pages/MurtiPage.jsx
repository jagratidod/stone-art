import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreationsNavBar from '../components/layout/CreationsNavBar'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import { murtiCollections } from '../data/murtiCollections'

const MurtiPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking,
  onShowCart,
  onShowLikes
}) => {
  // Category state
  const [selectedCategory, setSelectedCategory] = useState('Ganesha')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const navigate = useNavigate()

  // All categories combined
  const allCategories = ['Ganesha', 'Hanuman Ji', 'Radha Krishna', 'Ram Darbar', 'Sai Baba', 'Vishnu Laxmi', 'Durga', 'Saraswati', 'Shiv Parivar']

  const handleCollectionClick = (collectionId) => {
    if (collectionId === 'durga') {
      navigate('/murti/durga')
    }
    // Add other category navigation logic here if needed
  }

  const handleCategoryClick = (category) => {
    if (category === 'Ganesha') {
      navigate('/murti/ganesha')
    } else if (category === 'Hanuman Ji') {
      navigate('/murti/hanuman')
    } else if (category === 'Radha Krishna') {
      navigate('/murti/radha-krishna')
    } else if (category === 'Ram Darbar') {
      navigate('/murti/ram-darbar')
    } else if (category === 'Durga') {
      navigate('/murti/durga')
    } else if (category === 'Saraswati') {
      navigate('/murti/saraswati')
    } else if (category === 'Shiv Parivar') {
      navigate('/murti/shiv-parvati')
    } else if (category === 'Sai Baba') {
      navigate('/murti/sai-baba')
    } else if (category === 'Vishnu Laxmi') {
      navigate('/murti/vishnu-laxmi')
    } else {
      setSelectedCategory(category)
    }
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <CreationsNavBar onShowCart={onShowCart} onShowLikes={onShowLikes} />

      {/* Shop Murtis Section */}
      <div className="w-full py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-6 md:mb-8">
            Shop Murtis
          </h1>

          {/* Category Navigation Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`relative text-base md:text-lg lg:text-xl font-bold transition-all duration-300 pb-2 ${
                  selectedCategory === category
                    ? 'text-[#8B7355]'
                    : 'text-black hover:text-[#8B7355]'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#8B7355] z-10"></span>
                )}
              </button>
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

          {/* Circular Image Cards - Auto Scrolling */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 md:gap-8 lg:gap-10 animate-scroll-right-to-left">
              {/* Duplicate items for seamless loop */}
              {[...murtiCollections, ...murtiCollections].map((collection, index) => (
                <div
                  key={`${collection.id}-${index}`}
                  onClick={() => handleCollectionClick(collection.id)}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  {/* Circular Image Card */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
            Here are some of the most common questions we get asked.
          </p>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">
                    Q.1
                  </span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 1 ? 'text-[#8B7355]' : 'text-gray-800'}`}>
                    What products do you offer?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 1 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 1 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      We offer a variety of products including murtis, home decor items, wall art, and other stone artifacts. Each item is crafted with precision and dedication to ensure the highest quality.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 2 ? null : 2)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">
                    Q.2
                  </span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 2 ? 'text-[#8B7355]' : 'text-gray-800'}`}>
                    How can I place an order?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 2 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 2 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      You can place an order directly through our website. Simply browse our products, add your desired items to the cart, and proceed to checkout.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 3 ? null : 3)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">
                    Q.3
                  </span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 3 ? 'text-[#8B7355]' : 'text-gray-800'}`}>
                    What payment methods do you accept?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 3 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 3 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      We accept various payment methods including credit/debit cards, net banking, and UPI. For international orders, we also accept PayPal and international credit cards.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 4 ? null : 4)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">
                    Q.4
                  </span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 4 ? 'text-[#8B7355]' : 'text-gray-800'}`}>
                    Do you offer customization?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 4 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 4 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Yes, we offer customization for certain products. Please contact our customer service team to discuss your specific requirements.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 5 ? null : 5)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-base md:text-lg font-semibold text-gray-800 flex-shrink-0">
                    Q.5
                  </span>
                  <span className={`text-sm md:text-base font-medium flex-1 ${expandedFaq === 5 ? 'text-[#8B7355]' : 'text-gray-800'}`}>
                    How can I contact customer support?
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedFaq === 5 ? (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedFaq === 5 && (
                <div className="px-5 pb-4 pt-0">
                  <div className="pl-8 border-l-2 border-gray-300">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      You can place an order through our website or contact our customer support for assistance.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default MurtiPage

