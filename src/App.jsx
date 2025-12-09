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
import HanumanCategoryPage from './pages/HanumanCategoryPage'
import RadhaKrishnaCategoryPage from './pages/RadhaKrishnaCategoryPage'
import RamDarbarCategoryPage from './pages/RamDarbarCategoryPage'
import KrishnaCategoryPage from './pages/KrishnaCategoryPage'
import ShivCategoryPage from './pages/ShivCategoryPage'
import JainMurtiCategoryPage from './pages/JainMurtiCategoryPage'
import NandiCategoryPage from './pages/NandiCategoryPage'
import BalajiCategoryPage from './pages/BalajiCategoryPage'
import DreamTemplePage from './pages/DreamTemplePage'
import ArtisansOfTilakPage from './pages/ArtisansOfTilakPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CommunalProjectsPage from './pages/CommunalProjectsPage'
import ResidentialProjectsPage from './pages/ResidentialProjectsPage'
import InternationalProjectsPage from './pages/InternationalProjectsPage'
import SandstonePage from './pages/SandstonePage'
import LimestonePage from './pages/LimestonePage'
import SlatePage from './pages/SlatePage'
import NaturalIndianStonesPage from './pages/NaturalIndianStonesPage'
import MarblePage from './pages/MarblePage'
import QuartzitePage from './pages/QuartzitePage'
import PebbleStonesPage from './pages/PebbleStonesPage'
import CobbleStonesPage from './pages/CobbleStonesPage'
import StoneChipsPage from './pages/StoneChipsPage'
import GranitePage from './pages/GranitePage'
import TSADesignHubPage from './pages/TSADesignHubPage'
import TSAInternationalPage from './pages/TSAInternationalPage'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import LeadsManagementPage from './pages/admin/LeadsManagementPage'
import ProductsManagementPage from './pages/admin/ProductsManagementPage'
import BlogManagementPage from './pages/admin/BlogManagementPage'
import TestimonialsManagementPage from './pages/admin/TestimonialsManagementPage'
import ProjectsManagementPage from './pages/admin/ProjectsManagementPage'
import FAQsManagementPage from './pages/admin/FAQsManagementPage'
import ContentPagesManagementPage from './pages/admin/ContentPagesManagementPage'
import SettingsPage from './pages/admin/SettingsPage'
import ProtectedRoute from './components/admin/ProtectedRoute'
import ProjectsModal from './components/modals/ProjectsModal'
import OurCreationsModal from './components/modals/OurCreationsModal'
import OurProductsModal from './components/modals/OurProductsModal'
import OurServicesModal from './components/modals/OurServicesModal'
import Sidebar from './components/modals/Sidebar'
import HouseOfTilakModal from './components/modals/HouseOfTilakModal'
import CartModal from './components/modals/CartModal'
import LikesModal from './components/modals/LikesModal'
import TalkToExpertModal from './components/modals/TalkToExpertModal'
import BookingModal from './components/modals/BookingModal'

function App() {
  // Modal states (shared across all routes)
  const [showModal, setShowModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showLikes, setShowLikes] = useState(false)
  const [showProjectsModal, setShowProjectsModal] = useState(false)
  const [showOurCreations, setShowOurCreations] = useState(false)
  const [showOurProducts, setShowOurProducts] = useState(false)
  const [showOurServices, setShowOurServices] = useState(false)

  const location = useLocation()

  // Close all modals when route changes to prevent state leaks
  useEffect(() => {
    setShowModal(false)
    setShowBookingModal(false)
    setShowSidebar(false)
    setShowProjectsModal(false)
    setShowOurCreations(false)
    setShowOurProducts(false)
    setShowOurServices(false)
    setShowCart(false)
    setShowLikes(false)
  }, [location.pathname])

  // Prevent body scroll when any modal is open
  useEffect(() => {
    const isAnyModalOpen = showModal || showSidebar || showProjectsModal || showOurCreations || showOurProducts || showOurServices || showBookingModal || showCart || showLikes
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal, showSidebar, showProjectsModal, showOurCreations, showOurProducts, showOurServices, showBookingModal, showCart, showLikes])

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={
          <HomePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
          />
        } />
        
        <Route path="/artisans-of-tilak" element={
          <ArtisansOfTilakPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
          />
        } />
        
        <Route path="/how-it-works" element={
          <HowItWorksPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
          />
        } />
        
        <Route path="/dream-temple" element={
          <DreamTemplePage 
            onShowCart={() => setShowCart(true)}
            onShowLikes={() => setShowLikes(true)}
          />
        } />
        
        <Route path="/communal-projects" element={
          <CommunalProjectsPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/residential-projects" element={
          <ResidentialProjectsPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/international-projects" element={
          <InternationalProjectsPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/sandstone" element={
          <SandstonePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/limestone" element={
          <LimestonePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/slate" element={
          <SlatePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/natural-indian-stones" element={
          <NaturalIndianStonesPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/marble" element={
          <MarblePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/quartzite" element={
          <QuartzitePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/pebble-stones" element={
          <PebbleStonesPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/cobble-stones" element={
          <CobbleStonesPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/stone-chips" element={
          <StoneChipsPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/products/granite" element={
          <GranitePage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/services/tsa-design-hub" element={
          <TSADesignHubPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/services/tsa-international" element={
          <TSAInternationalPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
            onShowCart={() => setShowCart(true)}
            onShowLikes={() => setShowLikes(true)}
          />
        } />
        
        <Route path="/murti/ganesha" element={
          <GaneshaCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/hanuman" element={
          <HanumanCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/hanuman/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/radha-krishna" element={
          <RadhaKrishnaCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/radha-krishna/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
            onShowCart={() => setShowCart(true)}
            onShowLikes={() => setShowLikes(true)}
          />
        } />
        
        <Route path="/murti/ram-darbar" element={
          <RamDarbarCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/ram-darbar/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/krishna-ji" element={
          <KrishnaCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/krishna-ji/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/shiva" element={
          <ShivCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/shiva/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/jain-gods" element={
          <JainMurtiCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/jain-gods/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/nandi" element={
          <NandiCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/nandi/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/balaji" element={
          <BalajiCategoryPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />
        
        <Route path="/murti/balaji/:productId" element={
          <ProductDetailPage 
            onShowSidebar={() => setShowSidebar(true)}
            onShowProjects={() => setShowProjectsModal(true)}
            onShowCreations={() => setShowOurCreations(true)}
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
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
            onShowProducts={() => setShowOurProducts(true)}
            onShowServices={() => setShowOurServices(true)}
            onShowHowItWorks={() => setShowModal(true)}
            onShowLocation={() => {}}
            onShowBooking={() => {}}
          />
        } />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/leads/:type" element={
          <ProtectedRoute>
            <LeadsManagementPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/products/:category" element={
          <ProtectedRoute>
            <ProductsManagementPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/content/blog" element={
          <ProtectedRoute>
            <BlogManagementPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/content/testimonials" element={
          <ProtectedRoute>
            <TestimonialsManagementPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/content/projects" element={
          <ProtectedRoute>
            <ProjectsManagementPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/content/faqs" element={
          <ProtectedRoute>
            <FAQsManagementPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/content/pages" element={
          <ProtectedRoute>
            <ContentPagesManagementPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/settings" element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
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
      <CartModal 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
      />
      <LikesModal 
        isOpen={showLikes} 
        onClose={() => setShowLikes(false)} 
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
      <OurProductsModal 
        isOpen={showOurProducts} 
        onClose={() => setShowOurProducts(false)} 
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
