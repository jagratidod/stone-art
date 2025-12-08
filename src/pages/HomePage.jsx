import { useState, useEffect } from 'react'
import HeroSection from '../components/home/HeroSection'
import StepsSection from '../components/home/StepsSection'
import HomeImagesSection from '../components/home/HomeImagesSection'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import ExpertFormModal from '../components/modals/ExpertFormModal'

const HomePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowHowItWorks 
}) => {
  const [showFormModal, setShowFormModal] = useState(false)

  // Show modal when page loads
  useEffect(() => {
    // Small delay to ensure page is loaded
    const timer = setTimeout(() => {
      setShowFormModal(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <HeroSection 
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
      />
      <StepsSection />
      <HomeImagesSection />
      <Footer />
      <FloatingButtons />
      
      {/* Expert Form Modal - Auto opens on page load */}
      <ExpertFormModal 
        isOpen={showFormModal} 
        onClose={() => setShowFormModal(false)} 
      />
    </>
  )
}

export default HomePage

