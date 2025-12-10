import { useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import HeroSectionWithForm from '../components/common/HeroSectionWithForm'
import ImageGallery from '../components/common/ImageGallery'

// Import hero image
import floweryGoldMarble from '../assets/our products/limestone/flowery-gold-marble.jpg'

// Import all limestone images
import asianGoldMarble from '../assets/our products/limestone/asian-gold-marble.jpg'
import fossilGoldLimestone from '../assets/our products/limestone/fossil-gold-limestone.jpg'
import galaxyGoldLimestone from '../assets/our products/limestone/galaxy-gold-limestone.jpg'
import itaGoldLimestone from '../assets/our products/limestone/ita-gold-limestone.jpg'
import jaisalmerGoldLimestone from '../assets/our products/limestone/jaisalmer-gold-limestone.jpg'
import kotaBlueLimestone from '../assets/our products/limestone/kota-blue-limestone.jpg'
import kotaBrownLimestone from '../assets/our products/limestone/kota-brown-limestone.jpg'
import kotaHoneyLimestone from '../assets/our products/limestone/kota-honey-limestone.jpg'
import pinkLimestone from '../assets/our products/limestone/pink-limestone.jpg'

const LimestonePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowProducts,
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
  const navigate = useNavigate()

  const limestoneImages = [
    { id: 1, name: 'Asian Gold Marble', image: asianGoldMarble },
    { id: 2, name: 'Flowery Gold Marble', image: floweryGoldMarble },
    { id: 3, name: 'Fossil Gold Limestone', image: fossilGoldLimestone },
    { id: 4, name: 'Galaxy Gold Limestone', image: galaxyGoldLimestone },
    { id: 5, name: 'Ita Gold Limestone', image: itaGoldLimestone },
    { id: 6, name: 'Jaisalmer Gold Limestone', image: jaisalmerGoldLimestone },
    { id: 7, name: 'Kota Blue Limestone', image: kotaBlueLimestone },
    { id: 8, name: 'Kota Brown Limestone', image: kotaBrownLimestone },
    { id: 9, name: 'Kota Honey Limestone', image: kotaHoneyLimestone },
    { id: 10, name: 'Pink Limestone', image: pinkLimestone }
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      <Header 
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowProducts={onShowProducts}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
        onShowLocation={onShowLocation}
        onShowBooking={onShowBooking}
      />

      {/* Hero Section with Form */}
      <HeroSectionWithForm
        heroImage={floweryGoldMarble}
        title="LIMESTONE"
        subtitle="Elegant Natural Stone for Timeless Beauty"
        description="Discover our stunning range of limestone varieties, perfect for creating elegant and sophisticated spaces with natural elegance and durability."
      />

      {/* Images Gallery Section */}
      <ImageGallery
        title="OUR LIMESTONE COLLECTION"
        description="Discover our stunning range of limestone varieties, perfect for creating elegant and sophisticated spaces."
        images={limestoneImages}
        stoneType="limestone"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default LimestonePage

