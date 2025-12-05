import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import JobOpportunities from '../components/careers/JobOpportunities'
import JoinTheTeamForm from '../components/careers/JoinTheTeamForm'
import { useNavigate } from 'react-router-dom'
import careerHeroImage from '../assets/house of marble/careers/SMT01780-Edit_6ebd2fd8-7aa4-4df4-b841-2cb2e362337e_large.jpeg'

const CareersPage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowHowItWorks 
}) => {
  const navigate = useNavigate()

  const handleApplyNow = () => {
    const joinTeamSection = document.getElementById('join-the-team')
    if (joinTeamSection) {
      joinTeamSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Header 
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
        onShowLocation={() => navigate('/location')}
        onShowBooking={() => navigate('/book-appointment')}
      />

      {/* Hero Image Section - Horizontal */}
      <section className="w-full relative">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <img
            src={careerHeroImage}
            alt="Careers"
            className="w-full h-full object-cover blur-sm"
          />
          
          {/* Captions and Apply Button - Center of Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="text-center text-white space-y-4 md:space-y-6">
              {/* Heading */}
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                Craft Timeless Masterpieces at Aslam Marble Suppliers – Where Tradition Meets Excellence
              </h1>
              
              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Join a team where heritage, artistry, and innovation come together to create extraordinary works of marble. At Aslam Marble Suppliers, we transform raw stone into sacred spaces and stunning masterpieces through passion, precision, and unmatched craftsmanship. Together, we honor age-old techniques while embracing modern design, crafting creations that inspire awe, elevate spaces, and stand the test of time.
              </p>
              
              {/* Apply Now Button */}
              <div className="pt-2 md:pt-4">
                <button
                  onClick={handleApplyNow}
                  className="bg-white text-black font-semibold px-6 md:px-10 lg:px-12 py-2 md:py-3 lg:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base lg:text-lg uppercase tracking-wide"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
        <JobOpportunities />
      </section>

      {/* Join the Team Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gray-50">
        <JoinTheTeamForm />
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default CareersPage

