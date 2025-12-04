import { useNavigate } from 'react-router-dom'
import { homeImages } from '../../data/homeImages'

const HomeImagesSection = () => {
  const navigate = useNavigate()

  const handleVisitStoreClick = () => {
    navigate('/visit-store')
  }

  // Find only the visit store image
  const visitStoreImage = homeImages.find(item => item.id === 'visit-store')

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {visitStoreImage && (
          <div className="relative w-full">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/1', height: '35vh', maxHeight: '400px' }}>
              <img
                src={visitStoreImage.image}
                alt={visitStoreImage.name}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center center' }}
              />
              {visitStoreImage.hasButton && (
                <button
                  onClick={handleVisitStoreClick}
                  className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 bg-[#8B7355] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base lg:text-lg font-semibold uppercase tracking-wide rounded hover:bg-[#6B5A42] transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                >
                  {visitStoreImage.name}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeImagesSection

