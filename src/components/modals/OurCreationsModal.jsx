import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ourCreations, categories } from '../../data/creations'

const OurCreationsModal = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('Pooja Rooms')

  if (!isOpen) return null

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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">OUR CREATIONS</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-3xl font-bold transition-colors w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col md:flex-row h-[calc(90vh-100px)]">
            <div className="w-full md:w-64 lg:w-72 bg-gray-50 border-r border-gray-200 overflow-y-auto p-4 md:p-6">
              <nav className="space-y-2">
                {categories.map((category) => {
                  // Make "Murti" clickable and navigate to /murti
                  if (category === 'Murti') {
                    return (
                      <Link
                        key={category}
                        to="/murti"
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium"
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
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium"
                      >
                        {category}
                      </Link>
                    )
                  }

                  // Make "Pooja Rooms" clickable and navigate to /pooja-room
                  if (category === 'Pooja Rooms') {
                    return (
                      <Link
                        key={category}
                        to="/pooja-room"
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium"
                      >
                        {category}
                      </Link>
                    )
                  }

                  // Make "Home Decor" clickable and navigate to /home-decor
                  if (category === 'Home Decor') {
                    return (
                      <Link
                        key={category}
                        to="/home-decor"
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium"
                      >
                        {category}
                      </Link>
                    )
                  }

                  // Make "Communal Temples" clickable and navigate to /communal-temples
                  if (category === 'Communal Temples') {
                    return (
                      <Link
                        key={category}
                        to="/communal-temples"
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium"
                      >
                        {category}
                      </Link>
                    )
                  }

                  // Make "Jain Temples" clickable and navigate to /jain-temples
                  if (category === 'Jain Temples') {
                    return (
                      <Link
                        key={category}
                        to="/jain-temples"
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-200 hover:text-[#8B7355] font-medium"
                      >
                        {category}
                      </Link>
                    )
                  }
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-[#8B8B5C] text-white font-semibold shadow-md'
                          : 'text-gray-700 hover:bg-gray-200 font-medium'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </nav>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {ourCreations.map((item) => {
                  const ItemContent = (
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100 aspect-[4/3]">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-black text-center">
                        {item.name}
                      </h3>
                    </div>
                  )

                  // Make Murti image clickable
                  if (item.id === 'murti') {
                    return (
                      <Link key={item.id} to="/murti" onClick={onClose}>
                        {ItemContent}
                      </Link>
                    )
                  }

                  // Make Dream Temples image clickable
                  if (item.id === 'dream-temples') {
                    return (
                      <Link key={item.id} to="/dream-temple" onClick={onClose}>
                        {ItemContent}
                      </Link>
                    )
                  }

                  // Make Pooja Rooms image clickable
                  if (item.id === 'pooja-rooms') {
                    return (
                      <Link key={item.id} to="/pooja-room" onClick={onClose}>
                        {ItemContent}
                      </Link>
                    )
                  }

                  // Make Home Decor image clickable
                  if (item.id === 'home-decor') {
                    return (
                      <Link key={item.id} to="/home-decor" onClick={onClose}>
                        {ItemContent}
                      </Link>
                    )
                  }

                  // Make Communal Temples image clickable
                  if (item.id === 'communal-temples') {
                    return (
                      <Link key={item.id} to="/communal-temples" onClick={onClose}>
                        {ItemContent}
                      </Link>
                    )
                  }

                  // Make Jain Temples image clickable
                  if (item.id === 'jain-temples') {
                    return (
                      <Link key={item.id} to="/jain-temples" onClick={onClose}>
                        {ItemContent}
                      </Link>
                    )
                  }

                  return (
                    <div key={item.id}>
                      {ItemContent}
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

export default OurCreationsModal

