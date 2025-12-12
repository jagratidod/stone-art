import { useNavigate } from 'react-router-dom'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ExpertFormOverlay from '../../../components/common/ExpertFormOverlay'

// Import hero image
import tsaDesignHubHeroImage from '../../../assets/services/TSA design hub/heading/edc914ef-1943-4164-9e46-bc67ee0d0364.png'

// Import images
import tsaDesignHubImg1 from '../../../assets/services/TSA design hub/Screenshot 2025-12-08 122520.png'
import tsaDesignHubImg2 from '../../../assets/services/TSA design hub/unnamed.jpg'
import tsaDesignHubGif from '../../../assets/services/TSA design hub/gif/image1.gif'
import tsaCardImg1 from '../../../assets/services/TSA design hub/images card/bottom_img.jpeg'
import tsaCardImg2 from '../../../assets/services/TSA design hub/images card/centerimg2.jpeg'
import tsaCardImg3 from '../../../assets/services/TSA design hub/images card/howitwork_bannerimg.jpeg'

// Import How It Works icons
import registerIcon from '../../../assets/services/TSA design hub/how it work/1registered.png'
import bookIcon from '../../../assets/services/TSA design hub/how it work/2book.png'
import orderIcon from '../../../assets/services/TSA design hub/how it work/3order.png'
import relaxIcon from '../../../assets/services/TSA design hub/how it work/4relax.png'

// Import Visit Store image
import visitStoreImage from '../../../assets/home/visit store/poojaroomm.jpeg'

const TSADesignHubPage = ({ 
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
        heroImage={tsaDesignHubHeroImage}
        title="AMS DESIGN HUB"
        subtitle="Innovative Design Solutions for Your Space"
        description="Transform your vision into reality with our expert design services, combining creativity with functionality to create stunning spaces."
      />

      {/* Image with Caption Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Caption */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
                Join the AMS Design Hub — Where Businesses Build Better Together.
              </h2>
              <div className="w-24 h-1 rounded-full mt-6" style={{ backgroundColor: '#8B7355' }}></div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={tsaDesignHubImg2} 
                  alt="AMS Design Hub" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIF with Support Features Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - GIF */}
            <div className="order-1 md:order-1">
              <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white p-4">
                <img 
                  src={tsaDesignHubGif} 
                  alt="TSA Design Hub Support" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Right Side - Support Features Caption */}
            <div className="order-2 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight">
                We Support You With:
              </h2>
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8B7355] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#8B7355]">Exclusive Partner Pricing</span> crafted to fit your project requirements.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8B7355] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#8B7355]">Personalized Showroom Visits</span> for you and your clients, offering a private, curated experience.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8B7355] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#8B7355]">Detailed Product Insights & Sample Assistance</span> to help you choose confidently.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8B7355] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#8B7355]">Real-Time Stock Updates & Easy Order Management</span> for smooth project planning.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8B7355] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#8B7355]">Professional Installation Support</span> to ensure flawless execution at your client's site.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8B7355] mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#8B7355]">Interactive 2D Design Configurator</span> allowing instant customization of temple designs.
                  </p>
                </div>
              </div>
              <div className="w-24 h-1 rounded-full mt-6" style={{ backgroundColor: '#8B7355' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* First Image Section - Right Image, Left Caption */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Caption */}
            <div className="order-2 md:order-1">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Integrated pooja room solutions crafted with devotion — design, production, and installation all under one roof.
              </p>
              <div className="w-24 h-1 rounded-full mt-6" style={{ backgroundColor: '#8B7355' }}></div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={tsaCardImg1} 
                  alt="Integrated Pooja Room Solutions" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Image Section - Left Image, Right Caption */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-1 md:order-1">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={tsaCardImg2} 
                  alt="Exclusive Partner Pricing" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Caption */}
            <div className="order-2 md:order-2">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Architects & designers enjoy exclusive partner pricing designed to elevate every project.
              </p>
              <div className="w-24 h-1 rounded-full mt-6" style={{ backgroundColor: '#8B7355' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Image Section - Right Image, Left Caption */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Caption */}
            <div className="order-2 md:order-1">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Explore our latest pooja room concepts and ongoing projects through exclusive, partner-only lookbook access
              </p>
              <div className="w-24 h-1 rounded-full mt-6" style={{ backgroundColor: '#8B7355' }}></div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={tsaCardImg3} 
                  alt="Partner Lookbook Access" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
              HOW IT WORKS
            </h2>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>

          {/* Steps Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Step 1: Register with Us */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6">
                  <img 
                    src={registerIcon} 
                    alt="Register" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 uppercase tracking-wide">
                  Register with Us
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Join our AMS Soul Connect Platform and unlock access to 200+ curated concepts for pooja rooms, dream temples, artistic wall panels, and premium home décor pieces. Explore our global project portfolio, browse detailed price lists, and view exclusive client-specific pricing—all in one place.
                </p>
                <p className="text-xs md:text-sm font-semibold text-[#8B7355] mt-3 uppercase">
                  Version 1 – Premium & Professional
                </p>
              </div>
            </div>

            {/* Step 2: Book a Concept Discovery Session */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6">
                  <img 
                    src={bookIcon} 
                    alt="Book Session" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 uppercase tracking-wide">
                  Book a Concept Discovery Session
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Schedule a one-on-one concept discovery session with our team, where we'll align your client's vision with our design expertise. Together, we'll craft a bespoke experience tailored to their specific requirements. You can also choose to have customized quotations prepared and shared directly with your clients.
                </p>
              </div>
            </div>

            {/* Step 3: Place an Order */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6">
                  <img 
                    src={orderIcon} 
                    alt="Place Order" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 uppercase tracking-wide">
                  Place an Order
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  After the design is approved, simply place your order with us. Our team manages the entire process—from design and production to logistics and final delivery. For pooja rooms and dream temples, we also offer expert on-site installation to ensure a flawless finish.
                </p>
              </div>
            </div>

            {/* Step 4: Sit Back and Relax */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6">
                  <img 
                    src={relaxIcon} 
                    alt="Relax" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 uppercase tracking-wide">
                  Sit Back and Relax
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Enjoy complete peace of mind while we keep you informed at every step. Our team handles the entire process from start to finish, ensuring a smooth, effortless experience so you can focus on what truly matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Image Section Above Footer - Full Screen */}
      <section className="w-full py-0 bg-white">
        <div className="relative w-full overflow-hidden">
          <img 
            src={tsaDesignHubImg1} 
            alt="TSA Design Hub" 
            className="w-full h-auto object-cover"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      {/* Visit Store Section - Full Width Horizontal Image with Button */}
      <section className="w-full py-8 md:py-12">
        <div className="relative w-full h-[220px] md:h-[280px] lg:h-[350px] overflow-hidden">
          <img
            src={visitStoreImage}
            alt="Visit Store"
            className="w-full h-full object-cover"
          />
          {/* Visit Store Button - Center of Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => navigate('/visit-store')}
              className="bg-white text-black font-semibold px-6 md:px-10 lg:px-12 py-2 md:py-3 lg:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base lg:text-lg uppercase tracking-wide"
            >
              Visit Store
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default TSADesignHubPage

