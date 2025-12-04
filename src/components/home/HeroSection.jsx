import { useVideoPlayer } from '../../hooks/useVideoPlayer'
import Header from '../layout/Header'

const HeroSection = ({ onShowSidebar, onShowProjects, onShowCreations, onShowServices, onShowHowItWorks }) => {
  const videoRef = useVideoPlayer()

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Navbar Overlay on Top of Video */}
      <Header 
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
      />

      {/* Promotional Text Overlay - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4">
          <p className="text-white text-sm md:text-base lg:text-lg mb-2 md:mb-4 font-light">
            Your Ultimate Pooja Room Destination
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 md:mb-4 leading-tight">
            YOUR SPIRITUAL CONNECTION, MADE SIMPLE
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-light">
            — TILAK STONE ARTS
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

