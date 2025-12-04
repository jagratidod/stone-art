import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import { useNavigate } from 'react-router-dom'
import voiceOfDevotionImg from '../assets/testimonials/voice of devotion.webp'

const TestimonialsPage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen bg-white">
      <Header 
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
        onShowLocation={() => navigate('/location')}
        onShowBooking={() => navigate('/book-appointment')}
      />

      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-center">
            TESTIMONIALS
          </h1>
          
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xl md:text-2xl text-gray-600">
              Read what our clients say about their experience with Tilak Stone Arts.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              {/* Image */}
              <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
                <img 
                  src={voiceOfDevotionImg} 
                  alt="Voices of Devotion" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Text Overlay - VOICES OF DEVOTION */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-wide text-center px-4">
                    VOICES OF DEVOTION
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default TestimonialsPage

