import { useState } from 'react'
import { Link } from 'react-router-dom'

const OurProductsModal = ({ isOpen, onClose }) => {
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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">OUR PRODUCTS</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-3xl font-bold transition-colors w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
          
          <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
            <div className="text-center text-gray-600">
              <p className="text-lg">Products content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProductsModal

