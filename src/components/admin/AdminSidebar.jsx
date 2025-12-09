import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const AdminSidebar = () => {
  const location = useLocation()
  const [expandedMenus, setExpandedMenus] = useState({
    leads: location.pathname.startsWith('/admin/leads'),
    products: location.pathname.startsWith('/admin/products'),
    content: location.pathname.startsWith('/admin/content')
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
        { title: 'Content Pages', path: '/admin/content/pages' }
      ]
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
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold" style={{ color: '#8B7355' }}>
          Admin Panel
        </h2>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.key)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded-lg transition-colors"
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
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                              isActive(subItem.path)
                                ? 'text-white font-medium'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            style={isActive(subItem.path) ? { backgroundColor: '#8B7355' } : {}}
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
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={isActive(item.path) ? { backgroundColor: '#8B7355' } : {}}
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
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8B7355] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Website
        </Link>
      </div>
    </div>
  )
}

export default AdminSidebar

