import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import HeroSectionWithForm from '../components/common/HeroSectionWithForm'

// Import hero image
import tsaDesignHubHeroImage from '../assets/services/TSA design hub/heading/edc914ef-1943-4164-9e46-bc67ee0d0364.png'

// Import images
import tsaDesignHubImg1 from '../assets/services/TSA design hub/Screenshot 2025-12-08 122520.png'
import tsaDesignHubImg2 from '../assets/services/TSA design hub/unnamed.jpg'
import tsaDesignHubGif from '../assets/services/TSA design hub/gif/image1.gif'
import tsaCardImg1 from '../assets/services/TSA design hub/images card/bottom_img.jpeg'
import tsaCardImg2 from '../assets/services/TSA design hub/images card/centerimg2.jpeg'
import tsaCardImg3 from '../assets/services/TSA design hub/images card/howitwork_bannerimg.jpeg'

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
        title="TSA DESIGN HUB"
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
                Join the TSA Design Hub — Where Businesses Build Better Together.
              </h2>
              <div className="w-24 h-1 rounded-full mt-6" style={{ backgroundColor: '#8B7355' }}></div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={tsaDesignHubImg2} 
                  alt="TSA Design Hub" 
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

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default TSADesignHubPage

