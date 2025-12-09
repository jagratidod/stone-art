import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DreamMurtisDropdown from './DreamMurtisDropdown'
import HomeDecorDropdown from './HomeDecorDropdown'
import ShopByDropdown from './ShopByDropdown'
import LearnMoreDropdown from './LearnMoreDropdown'

const CreationsNavBar = () => {
  const location = useLocation()
  const [hoveredDropdown, setHoveredDropdown] = useState(null)
  const [isFading, setIsFading] = useState(false)
  const timeoutRef = useRef(null)

  const navItems = [
    { name: 'DREAM TEMPLE', path: '/dream-temple', hasDropdown: false },
    { name: 'DREAM MURTIS', path: '/murti', hasDropdown: true, dropdownKey: 'dream-murtis' },
    { name: 'HOME DECOR', path: '/home-decor', hasDropdown: true, dropdownKey: 'home-decor' },
    { name: 'SHOP BY', path: '/shop-by', hasDropdown: true, dropdownKey: 'shop-by' },
    { name: 'LIMITED EDITION', path: '/limited-edition', hasDropdown: false },
    { name: 'ON SALE', path: '/on-sale', hasDropdown: false },
    { name: 'GUIDES', path: '/guides', hasDropdown: false },
    { name: 'LEARN MORE', path: '/learn-more', hasDropdown: true, dropdownKey: 'learn-more' }
  ]

  // Handle dropdown change with fade animation
  const handleDropdownChange = (newDropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    if (hoveredDropdown && hoveredDropdown !== newDropdown) {
      setIsFading(true)
      
      timeoutRef.current = setTimeout(() => {
        setHoveredDropdown(newDropdown)
        
        setTimeout(() => {
          setIsFading(false)
          timeoutRef.current = null
        }, 50)
      }, 300)
    } else if (!hoveredDropdown) {
      setIsFading(false)
      setHoveredDropdown(newDropdown)
    }
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm relative">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1500px] px-4 md:px-6 lg:px-8">
          {/* Hover Wrapper - Wraps buttons and dropdown */}
          <div
            className="relative"
            onMouseLeave={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
                timeoutRef.current = null
              }
              setHoveredDropdown(null)
              setIsFading(false)
            }}
          >
            <div className="flex items-center justify-between md:justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 py-4 md:py-5 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => handleDropdownChange(item.dropdownKey)}
                    >
                      <Link
                        to={item.path}
                        className={`
                          relative group pb-1
                          text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
                          font-medium tracking-[0.05em] uppercase
                          whitespace-nowrap
                          transition-all duration-300 ease-in-out
                          ${isActive 
                            ? 'text-black font-semibold' 
                            : 'text-gray-700 hover:text-[#8B7355]'
                          }
                        `}
                      >
                        {item.name}
                        {isActive && (
                          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#8B7355] transition-all duration-300"></span>
                        )}
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B7355] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  )
                }
                
                return (
                  <div
                    key={item.name}
                    onMouseEnter={() => {
                      if (hoveredDropdown) {
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current)
                          timeoutRef.current = null
                        }
                        setHoveredDropdown(null)
                        setIsFading(false)
                      }
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`
                        relative group pb-1
                        text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
                        font-medium tracking-[0.05em] uppercase
                        whitespace-nowrap
                        transition-all duration-300 ease-in-out
                        ${isActive 
                          ? 'text-black font-semibold' 
                          : 'text-gray-700 hover:text-[#8B7355]'
                        }
                      `}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#8B7355] transition-all duration-300"></span>
                      )}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B7355] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                )
              })}
            </div>

            {/* Shared Dropdown Container - Full Screen Width */}
            <div
              className={`absolute bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-50 ${
                hoveredDropdown
                  ? (hoveredDropdown === 'home-decor' 
                      ? 'h-[450px] translate-y-0 pointer-events-auto'
                      : hoveredDropdown === 'learn-more'
                      ? 'h-[150px] translate-y-0 pointer-events-auto'
                      : hoveredDropdown === 'dream-murtis'
                      ? 'h-[500px] translate-y-0 pointer-events-auto'
                      : 'h-[220px] translate-y-0 pointer-events-auto')
                  : 'h-0 -translate-y-4 pointer-events-none'
              }`}
              style={{
                left: '50%',
                transform: hoveredDropdown 
                  ? 'translateX(-50%) translateY(0)' 
                  : 'translateX(-50%) translateY(-16px)',
                width: '100vw',
                top: 'calc(100% - 2px)',
                opacity: isFading ? 0 : (hoveredDropdown ? 1 : 0),
                transition: hoveredDropdown === 'dream-murtis'
                  ? 'opacity 0.5s ease-in-out, transform 0.9s ease-in-out, height 0.9s ease-in-out'
                  : 'opacity 0.3s ease-in-out, transform 0.5s ease-in-out, height 0.5s ease-in-out'
              }}
            >
              {/* Dropdown Content */}
              {hoveredDropdown && (
                <>
                  {hoveredDropdown === 'dream-murtis' && <DreamMurtisDropdown />}
                  {hoveredDropdown === 'home-decor' && <HomeDecorDropdown />}
                  {hoveredDropdown === 'shop-by' && <ShopByDropdown />}
                  {hoveredDropdown === 'learn-more' && <LearnMoreDropdown />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default CreationsNavBar

