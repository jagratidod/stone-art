import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'
import LocationDetailPage from './pages/LocationDetailPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import TestimonialsPage from './pages/TestimonialsPage'
import BookAppointmentPage from './pages/BookAppointmentPage'
import CareersPage from './pages/CareersPage'
import HowItWorksPage from './pages/HowItWorksPage'
import VisitStorePage from './pages/VisitStorePage'
import MurtiPage from './pages/MurtiPage'
import DurgaCategoryPage from './pages/DurgaCategoryPage'
import SaraswatiCategoryPage from './pages/SaraswatiCategoryPage'
import ShivParvatiCategoryPage from './pages/ShivParvatiCategoryPage'
import SaiBabaCategoryPage from './pages/SaiBabaCategoryPage'
import VishnuLaxmiCategoryPage from './pages/VishnuLaxmiCategoryPage'
import GaneshaCategoryPage from './pages/GaneshaCategoryPage'
import DreamTemplePage from './pages/DreamTemplePage'
import ArtisansOfTilakPage from './pages/ArtisansOfTilakPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CommunalProjectsPage from './pages/CommunalProjectsPage'
import ProjectsModal from './components/modals/ProjectsModal'
import OurCreationsModal from './components/modals/OurCreationsModal'
import OurServicesModal from './components/modals/OurServicesModal'
import Sidebar from './components/modals/Sidebar'
import HouseOfTilakModal from './components/modals/HouseOfTilakModal'
import TalkToExpertModal from './components/modals/TalkToExpertModal'
import BookingModal from './components/modals/BookingModal'

function App() {
  // Modal states (shared across all routes)
  const [showModal, setShowModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showProjectsModal, setShowProjectsModal] = useState(false)
  const [showOurCreations, setShowOurCreations] = useState(false)
  const [showOurServices, setShowOurServices] = useState(false)

  const location = useLocation()

  // Close all modals when route changes to prevent state leaks
  useEffect(() => {
    setShowModal(false)
    setShowBookingModal(false)
    setShowSidebar(false)
    setShowProjectsModal(false)
    setShowOurCreations(false)
    setShowOurServices(false)
  }, [location.pathname])

  // Prevent body scroll when any modal is open
  useEffect(() => {
    const isAnyModalOpen = showModal || showSidebar || showProjectsModal || showOurCreations || showOurServices || showBookingModal
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal, showSidebar, showProjectsModal, showOurCreations, showOurServices, showBookingModal])

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={
          <HomePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/location" element={
          <LocationPageWrapper 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/location/:locationName" element={
          <LocationDetailPageWrapper 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/blog" element={
          <BlogPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/blog/:id" element={
          <BlogDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/testimonials" element={
          <TestimonialsPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/book-appointment" element={
          <BookAppointmentPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
          />
        } />
        
        <Route path="/careers" element={
          <CareersPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
          />
        } />
        
        <Route path="/artisans-of-tilak" element={
          <ArtisansOfTilakPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
          />
        } />
        
        <Route path="/how-it-works" element={
          <HowItWorksPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/visit-store" element={
          <VisitStorePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
          />
        } />
        
        <Route path="/dream-temple" element={
          <DreamTemplePage />
        } />
        
        <Route path="/communal-projects" element={
          <CommunalProjectsPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti" element={
          <MurtiPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/ganesha" element={
          <GaneshaCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/ganesha/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/durga" element={
          <DurgaCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/durga/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/saraswati" element={
          <SaraswatiCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/saraswati/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/shiv-parvati" element={
          <ShivParvatiCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/shiv-parvati/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/sai-baba" element={
          <SaiBabaCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/sai-baba/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/vishnu-laxmi" element={
          <VishnuLaxmiCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/vishnu-laxmi/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
      </Routes>

      {/* Global Modals */}
      <TalkToExpertModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
      <HouseOfTilakModal 
        isOpen={showSidebar} 
        onClose={() => setShowSidebar(false)} 
      />
      <ProjectsModal 
        isOpen={showProjectsModal} 
        onClose={() => setShowProjectsModal(false)} 
      />
      <OurCreationsModal 
        isOpen={showOurCreations} 
        onClose={() => setShowOurCreations(false)} 
      />
      <OurServicesModal 
        isOpen={showOurServices} 
        onClose={() => setShowOurServices(false)} 
      />
    </div>
  )
}

// Wrapper components for routes that need navigation
const LocationPageWrapper = (props) => {
  const navigate = useNavigate()
  
  const handleLocationClick = (locationName) => {
    navigate(`/location/${locationName.toLowerCase()}`)
  }

  return (
    <LocationPage 
      {...props}
      onLocationClick={handleLocationClick}
    />
  )
}

const LocationDetailPageWrapper = (props) => {
  const { locationName } = useParams()
  const navigate = useNavigate()
  
  const location = locationName ? locationName.toUpperCase() : ''

  return (
    <LocationDetailPage 
      {...props}
      location={location}
      onBack={() => navigate('/location')}
    />
  )
}

export default App
