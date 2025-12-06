import Header from '../layout/Header'
import heroVideo from '../../assets/video/WhatsApp Video 2025-12-06 at 10.52.27 AM.mp4'

const HeroSection = ({ onShowSidebar, onShowProjects, onShowCreations, onShowServices, onShowHowItWorks }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Navbar Overlay */}
      <Header 
        variant="video-overlay"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
      />

      {/* Caption Overlay - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 md:mb-4 leading-tight">
            Crafting Divine Spaces
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-2 md:mb-4 font-light">
            Where Faith Meets Fine Marble
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-light">
            – Aslam Marble Suppliers
          </p>
        </div>
      </div>

    </section>
  )
}

export default HeroSection

