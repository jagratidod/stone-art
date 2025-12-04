import { services } from '../../data/services'

const OurServicesDropdown = () => {
  return (
    <div className="w-full h-full flex items-center px-6 md:px-8 lg:px-12 gap-4 md:gap-6 lg:gap-8">
      {/* Menu Items - Left Side */}
      <div className="flex-shrink-0 w-48 md:w-56 lg:w-64">
        <nav className="space-y-1">
          {services.map((service) => (
            <button
              key={service.id}
              className="w-full text-left px-3 py-2 text-xs md:text-sm text-gray-700 hover:text-[#8B7355] hover:bg-gray-50 rounded transition-all duration-200 font-medium"
            >
              {service.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Images - Right Side in Horizontal Line */}
      <div className="flex-1 flex items-center gap-3 md:gap-4 lg:gap-6 overflow-x-auto">
        {services.map((service) => (
          <div key={service.id} className="group cursor-pointer flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-black text-center mt-2 group-hover:text-[#8B7355] transition-colors whitespace-nowrap">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServicesDropdown

