import { Link } from 'react-router-dom'
import { homeImages } from '../../data/homeImages'

const HouseOfTilakModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const menuItems = [
    { name: 'About Us', path: '#', id: 'about-us' },
    { name: 'Experience Centre', path: '#', id: 'experience-centre' },
    { name: 'The Team', path: '#', id: 'the-team' },
    { name: 'Careers', path: '/careers', id: 'careers' },
    { name: 'Artisans of Tilak', path: '#', id: 'artisans-of-tilak' },
    { name: 'Our Clients', path: '#', id: 'our-clients' }
  ]

  // Filter out visit store image
  const displayImages = homeImages.filter(item => item.id !== 'visit-store')

  const handleImageClick = (imageItem) => {
    if (imageItem.id === 'careers') {
      // Careers is handled via Link
      return
    }
    // Other images can have actions or just show/highlight
    console.log('Clicked:', imageItem.name)
  }

  const handleMenuItemClick = (item) => {
    if (item.path !== '#') {
      onClose()
    }
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[110] transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="fixed inset-0 z-[115] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-lg shadow-2xl max-w-[95vw] w-full max-h-[90vh] overflow-hidden pointer-events-auto transform transition-all duration-500 ease-out"
          style={{ animation: 'slideUp 0.5s ease-out' }}
        >
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">ASLAM MARBLE SUPPLIERS</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-3xl font-bold transition-colors w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col md:flex-row h-[calc(90vh-100px)]">
            {/* Left Sidebar */}
            <div className="w-full md:w-64 lg:w-72 bg-gray-50 border-r border-gray-200 overflow-y-auto p-4 md:p-6">
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.path === '#' ? (
                      <button
                        onClick={() => handleMenuItemClick(item)}
                        className="w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Side - Images Grid */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {displayImages.map((item) => {
                  const ImageContent = (
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100 aspect-[4/3] shadow-md hover:shadow-lg transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-black text-center group-hover:text-[#8B7355] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  )

                  // Make Careers image clickable to navigate
                  if (item.id === 'careers') {
                    return (
                      <Link
                        key={item.id}
                        to="/careers"
                        onClick={onClose}
                        className="block"
                      >
                        {ImageContent}
                      </Link>
                    )
                  }

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleImageClick(item)}
                      className="cursor-pointer"
                    >
                      {ImageContent}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HouseOfTilakModal

