const ImageGallery = ({ 
  title, 
  description, 
  images 
}) => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
        </div>
        
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((item, index) => (
            <div
              key={item.id || index}
              className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#8B7355] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name || `Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {item.name && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg uppercase">{item.name}</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery

