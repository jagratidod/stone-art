import HeroSection from '../components/home/HeroSection'
import StepsSection from '../components/home/StepsSection'
import HomeImagesSection from '../components/home/HomeImagesSection'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'

const HomePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowHowItWorks 
}) => {
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
    </>
  )
}

export default HomePage

