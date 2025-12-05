import { Link } from 'react-router-dom'
import { categories } from '../../data/creations'
import { ourCreations } from '../../data/creations'

const OurCreationsDropdown = () => {
  return (
    <div className="w-full h-full flex items-start py-4 px-6 md:px-8 lg:px-12 gap-4 md:gap-6 lg:gap-8">
      {/* Menu Items - Left Side */}
      <div className="flex-shrink-0 w-48 md:w-56 lg:w-64">
        <nav className="space-y-1">
          {categories.map((category) => {
            // Make "Murti" clickable and navigate to /murti
            if (category === 'Murti') {
              return (
                <Link
                  key={category}
                  to="/murti"
                  className="block w-full text-left px-3 py-2 text-xs md:text-sm text-gray-700 hover:text-[#8B7355] hover:bg-gray-50 rounded transition-all duration-200 font-medium"
                >
                  {category}
                </Link>
              )
            }
            
            // Make "Dream Temples" clickable and navigate to /dream-temple
            if (category === 'Dream Temples') {
              return (
                <Link
                  key={category}
                  to="/dream-temple"
                  className="block w-full text-left px-3 py-2 text-xs md:text-sm text-gray-700 hover:text-[#8B7355] hover:bg-gray-50 rounded transition-all duration-200 font-medium"
                >
                  {category}
                </Link>
              )
            }
            
            return (
              <button
                key={category}
                className="w-full text-left px-3 py-2 text-xs md:text-sm text-gray-700 hover:text-[#8B7355] hover:bg-gray-50 rounded transition-all duration-200 font-medium"
              >
                {category}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Images - Right Side in Horizontal Line */}
      <div className="flex-1 flex items-center gap-3 md:gap-4 lg:gap-6 overflow-x-auto">
        {ourCreations.map((item) => {
          // Make Murti image clickable
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

          if (item.id === 'murti') {
            return (
              <Link key={item.id} to="/murti">
                {ImageContent}
              </Link>
            )
          }

          if (item.id === 'dream-temples') {
            return (
              <Link key={item.id} to="/dream-temple">
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

export default OurCreationsDropdown

