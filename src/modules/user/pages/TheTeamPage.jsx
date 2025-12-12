import { useState } from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import { teamMembers } from '../../../data/teamMembers'
import headingImage from '../../../assets/house of marble/team/heading/Gemini_Generated_Image_ipme0eipme0eipme (1).png'

// Add CSS for slide-in animation
const slideInRightStyle = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animate-slide-in-right {
    animation: slideInRight 0.5s ease-out forwards;
  }
`

const TheTeamPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [hoveredMember, setHoveredMember] = useState(null)

  const handleMemberClick = (member) => {
    setSelectedMember(member)
  }

  const handleCloseModal = () => {
    setSelectedMember(null)
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <style>{slideInRightStyle}</style>
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

      {/* Full Screen Horizontal Hero Image */}
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src={headingImage}
          alt="Our Team"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </section>

      {/* Caption Section */}
      <section className="w-full py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed" style={{ color: '#8B7355' }}>
            At Aslam Marble Suppliers, our team is the heart of our craft. Each member brings decades of expertise, 
            passion for traditional stone artistry, and a commitment to excellence. Together, we transform visions 
            into timeless marble masterpieces, blending heritage craftsmanship with modern innovation to create 
            spiritual spaces that inspire devotion and tranquility.
          </p>
        </div>
      </section>

      {/* Team Members Grid - Black Images */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => handleMemberClick(member)}
              >
                {/* Image Container */}
                <div className="relative w-full h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredMember === member.id 
                        ? 'opacity-100 brightness-[1.3] grayscale-0' 
                        : 'opacity-100 grayscale brightness-50'
                    }`}
                  />
                  
                  {/* Overlay with Name and Position - Shows on Hover with Slide-in Animation */}
                  {hoveredMember === member.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-3 md:p-4 lg:p-5 transition-opacity duration-300">
                      <div className="transform translate-x-0 animate-slide-in-right">
                        <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1 uppercase">
                          {member.name}
                        </h3>
                        <p className="text-xs md:text-sm lg:text-base text-gray-300 uppercase">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal - No Black Background, Current Page Visible */}
      {selectedMember && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          {/* Modal Content */}
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content - Image Left, Description Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="w-full h-72 lg:h-auto lg:min-h-[450px] overflow-hidden bg-gray-100">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover brightness-110"
                />
              </div>

              {/* Right Side - Description */}
              <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-8" style={{ backgroundColor: '#8B7355' }}></div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide" style={{ color: '#8B7355' }}>
                      {selectedMember.name}
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 uppercase font-medium">
                    {selectedMember.position}
                  </p>
                </div>
                
                <div className="mt-3">
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default TheTeamPage

