import { useState } from 'react'
import { services } from '../../data/services'

const OurServicesModal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('AMS International')

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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">OUR SERVICES</h2>
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
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      selectedService === service.name
                        ? 'bg-[#8B8B5C] text-white font-semibold shadow-md'
                        : 'text-gray-700 hover:bg-gray-200 font-medium'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {services.map((service) => (
                  <div key={service.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100 aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-black text-center">
                      {service.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServicesModal

