import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../../assets/logo/download.png'

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation()
  const [expandedMenus, setExpandedMenus] = useState({
    leads: location.pathname.startsWith('/admin/leads'),
    products: location.pathname.startsWith('/admin/products'),
    content: location.pathname.startsWith('/admin/content'),
    category: location.pathname.startsWith('/admin/category')
  })

  const menuItems = [
    {
      title: 'Dashboard',
      key: 'dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      path: '/admin/dashboard'
    },
    {
      title: 'Leads',
      key: 'leads',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      submenu: [
        { title: 'Home Form Leads', path: '/admin/leads/home-form' },
        { title: 'Pooja Enquiries', path: '/admin/leads/pooja-enquiry' },
        { title: 'B2B Registrations', path: '/admin/leads/b2b-registrations' },
        { title: 'Appointments', path: '/admin/leads/appointments' }
      ]
    },
    {
      title: 'Products',
      key: 'products',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      submenu: [
        { title: 'Pooja Room', path: '/admin/products/pooja-room' },
        { title: 'Dream Temple', path: '/admin/products/dream-temple' },
        { title: 'Murti', path: '/admin/products/murti' },
        { title: 'Home Decor', path: '/admin/products/home-decor' },
        { title: 'Communal Temples', path: '/admin/products/communal-temples' },
        { title: 'Jain Temples', path: '/admin/products/jain-temples' },
        { title: 'Stone Products', path: '/admin/products/stones' }
      ]
    },
    {
      title: 'Content',
      key: 'content',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      submenu: [
        { title: 'Blog Posts', path: '/admin/content/blog' },
        { title: 'Testimonials', path: '/admin/content/testimonials' },
        { title: 'Projects', path: '/admin/content/projects' },
        { title: 'FAQs', path: '/admin/content/faqs' },
        { title: 'Content Pages', path: '/admin/content/pages' },
        { title: 'Hero Section', path: '/admin/content/hero-section' },
        { title: 'Our Creations', path: '/admin/content/our-creations' },
        { title: 'Our Services', path: '/admin/content/our-services' }
      ]
    },
    {
      title: 'Category',
      key: 'category',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5.5c.582 0 1.13.214 1.55.582l4.5 4.5c.368.42.582.968.582 1.55V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
      ),
      path: '/admin/category/murti'
    },
    {
      title: 'Settings',
      key: 'settings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      path: '/admin/settings'
    }
  ]

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const toggleMenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }))
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 h-full flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `} style={{ backgroundColor: '#8B7355', borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}>
      {/* Header */}
        <div className="p-2 lg:p-3 border-b flex-shrink-0 flex items-center justify-center relative" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="flex items-center justify-center w-full">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="h-24 lg:h-28 w-auto object-contain max-w-full"
            />
          </div>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-2 right-2 text-white hover:opacity-80 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-2 lg:p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.key)}
                    className="w-full flex items-center justify-between gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-semibold text-white uppercase tracking-wider rounded-lg transition-colors"
                    style={{ 
                      backgroundColor: expandedMenus[item.key] ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                      ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                    }}
                    onMouseEnter={(e) => {
                      if (!expandedMenus[item.key]) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!expandedMenus[item.key]) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedMenus[item.key] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMenus[item.key] && (
                    <ul className="ml-2 lg:ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            onClick={onClose}
                            className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm rounded-lg transition-colors ${
                              isActive(subItem.path)
                                ? 'text-white font-medium'
                                : 'text-white hover:bg-white/10'
                            }`}
                            style={isActive(subItem.path) ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : { opacity: 0.9 }}
                            onMouseEnter={(e) => {
                              if (!isActive(subItem.path)) {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive(subItem.path)) {
                                e.currentTarget.style.backgroundColor = 'transparent'
                              }
                            }}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                  style={isActive(item.path) ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : { opacity: 0.9 }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-3 lg:p-4 border-t flex-shrink-0" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2 text-xs lg:text-sm text-white hover:opacity-80 transition-opacity"
          style={{ opacity: 0.9 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hidden sm:inline">Back to Website</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>
    </div>
    </>
  )
}

export default AdminSidebar

