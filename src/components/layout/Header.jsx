import { Link, useLocation } from 'react-router-dom'
import logoImage from '../../assets/logo/download.png'

const Header = ({ 
  variant = 'default', 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowHowItWorks 
}) => {
  const location = useLocation()
  const isLocationPage = variant === 'location' || location.pathname === '/location'
  const isLocationDetail = variant === 'locationDetail' || location.pathname.startsWith('/location/')
  const textColor = 'text-black'

  return (
    <header className={`sticky top-0 z-[150] w-full ${isLocationPage ? 'bg-[#fffbf0] shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="flex items-center justify-between px-2 md:px-3 lg:px-4">
        {/* Logo on Left */}
        <div className="flex-shrink-0">
          <Link to="/" className="block hover:opacity-80 transition-opacity">
            <img 
              src={logoImage} 
              alt="Stone Art Logo" 
              className="h-20 md:h-28 lg:h-36 xl:h-40 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation in Center */}
        <nav className="flex-1 flex justify-center px-4 overflow-x-auto">
          <ul className="flex justify-center items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 whitespace-nowrap min-w-max">
            <li className="inline-block">
              <Link 
                to="/"
                className={`${textColor} hover:opacity-70 transition-opacity inline-block`}
                title="Home"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 md:w-6 md:h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  />
                </svg>
              </Link>
            </li>
            <li className="inline-block">
              <button 
                onClick={onShowSidebar}
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block bg-transparent border-none cursor-pointer`}
              >
                HOUSE OF TILAK
              </button>
            </li>
            <li className="inline-block">
              <button 
                onClick={onShowProjects}
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block bg-transparent border-none cursor-pointer`}
              >
                PROJECTS
              </button>
            </li>
            <li className="inline-block">
              <button 
                onClick={onShowCreations}
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block bg-transparent border-none cursor-pointer`}
              >
                OUR CREATIONS
              </button>
            </li>
            <li className="inline-block">
              <button 
                onClick={onShowServices}
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block bg-transparent border-none cursor-pointer`}
              >
                OUR SERVICES
              </button>
            </li>
            <li className="inline-block">
              <Link 
                to="/how-it-works"
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block`}
              >
                HOW IT WORKS
              </Link>
            </li>
            <li className="inline-block">
              <Link 
                to="/location"
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block`}
              >
                LOCATION
              </Link>
            </li>
            <li className="inline-block">
              <Link 
                to="/blog"
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block`}
              >
                BLOG
              </Link>
            </li>
            <li className="inline-block">
              <Link 
                to="/book-appointment"
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block`}
              >
                BOOK APPOINTMENT
              </Link>
            </li>
            <li className="inline-block">
              <Link 
                to="/testimonials"
                className={`${textColor} font-medium text-xs md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity inline-block`}
              >
                TESTIMONIALS
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side spacer for balance */}
        <div className="flex-shrink-0 w-20 md:w-28 lg:w-36 xl:w-40"></div>
      </div>
    </header>
  )
}

export default Header

