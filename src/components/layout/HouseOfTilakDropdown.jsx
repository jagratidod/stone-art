import { Link } from 'react-router-dom'
import { homeImages } from '../../data/homeImages'

const HouseOfTilakDropdown = () => {
  const menuItems = [
    { name: 'About Us', path: '#', id: 'about-us' },
    { name: 'Experience Centre', path: '#', id: 'experience-centre' },
    { name: 'The Team', path: '#', id: 'the-team' },
    { name: 'Careers', path: '/careers', id: 'careers' },
    { name: 'OUR ARTIST', path: '/artisans-of-tilak', id: 'artisans-of-tilak' },
    { name: 'Collaborations', path: '#', id: 'collaborations' },
    { name: 'Our Clients', path: '#', id: 'our-clients' }
  ]

  const displayImages = homeImages.filter(item => item.id !== 'visit-store')

  return (
    <div className="w-full h-full flex items-start py-4 px-6 md:px-8 lg:px-12 gap-4 md:gap-6 lg:gap-8">
      {/* Menu Items - Left Side */}
      <div className="flex-shrink-0 w-48 md:w-56 lg:w-64">
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.path === '#' ? (
                <button className="w-full text-left px-3 py-2 text-xs md:text-sm text-gray-700 hover:text-[#8B7355] hover:bg-gray-50 rounded transition-all duration-200 font-medium">
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="block w-full text-left px-3 py-2 text-xs md:text-sm text-gray-700 hover:text-[#8B7355] hover:bg-gray-50 rounded transition-all duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Images - Right Side in Horizontal Line */}
      <div className="flex-1 flex items-center gap-3 md:gap-4 lg:gap-6 overflow-x-auto">
        {displayImages.map((item) => {
          const ImageContent = (
            <div className="group cursor-pointer flex-shrink-0">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-black text-center mt-2 group-hover:text-[#8B7355] transition-colors whitespace-nowrap">
                {item.name}
              </h3>
            </div>
          )

          if (item.id === 'careers') {
            return (
              <Link key={item.id} to="/careers">
                {ImageContent}
              </Link>
            )
          }

          if (item.id === 'artisans-of-tilak') {
            return (
              <Link key={item.id} to="/artisans-of-tilak">
                {ImageContent}
              </Link>
            )
          }

          return (
            <div key={item.id}>
              {ImageContent}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HouseOfTilakDropdown

