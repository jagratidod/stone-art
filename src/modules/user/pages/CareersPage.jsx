import { useState } from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import JobOpportunities from '../../../components/careers/JobOpportunities'
import JoinTheTeamForm from '../../../components/careers/JoinTheTeamForm'
import { useNavigate } from 'react-router-dom'
import careerHeroImage from '../../../assets/house of marble/careers/SMT01780-Edit_6ebd2fd8-7aa4-4df4-b841-2cb2e362337e_large.jpeg'

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
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
          <img
            src={careerHeroImage}
            alt="Careers"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Captions and Apply Button - Center of Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-5xl px-4 md:px-6 lg:px-8">
            <div className="text-center text-white space-y-4 md:space-y-6">
              {/* Heading */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
                Craft Timeless Masterpieces at Aslam Marble Suppliers
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200">
                Where Tradition Meets Excellence
              </p>
              
              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-gray-100 drop-shadow-md">
                Join a team where heritage, artistry, and innovation come together to create extraordinary works of marble. At Aslam Marble Suppliers, we transform raw stone into sacred spaces and stunning masterpieces through passion, precision, and unmatched craftsmanship.
              </p>
              
              {/* Apply Now Button */}
              <div className="pt-2 md:pt-4">
                <button
                  onClick={handleApplyNow}
                  className="bg-white text-[#8B7355] font-bold px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-5 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-sm md:text-base lg:text-lg uppercase tracking-wide"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6" style={{ color: '#8B7355' }}>
            WHY JOIN US?
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto">
            At Aslam Marble Suppliers, we offer more than just a job - we offer a career path filled with growth, learning, and meaningful contributions to timeless art.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#8B7355]/30 hover:-translate-y-2">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">Growth Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">Continuous learning and career development in a supportive environment. We invest in your professional growth.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#8B7355]/30 hover:-translate-y-2">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">Team Culture</h3>
              <p className="text-gray-600 leading-relaxed">Work with passionate professionals dedicated to preserving traditional craftsmanship and creating excellence.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#8B7355]/30 hover:-translate-y-2">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">Meaningful Work</h3>
              <p className="text-gray-600 leading-relaxed">Create lasting masterpieces that honor tradition and inspire generations. Your work will stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6" style={{ color: '#8B7355' }}>
            EMPLOYEE BENEFITS
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto">
            We value our team members and offer comprehensive benefits to support your well-being and success.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-semibold text-black mb-1">Competitive Salary</h4>
              <p className="text-xs text-gray-600">Fair compensation packages</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">🏥</div>
              <h4 className="font-semibold text-black mb-1">Health Insurance</h4>
              <p className="text-xs text-gray-600">Medical coverage for you & family</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold text-black mb-1">Training Programs</h4>
              <p className="text-xs text-gray-600">Skill development opportunities</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-semibold text-black mb-1">Performance Bonus</h4>
              <p className="text-xs text-gray-600">Rewards for excellence</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">🏖️</div>
              <h4 className="font-semibold text-black mb-1">Paid Time Off</h4>
              <p className="text-xs text-gray-600">Work-life balance</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">🍽️</div>
              <h4 className="font-semibold text-black mb-1">Meal Facilities</h4>
              <p className="text-xs text-gray-600">On-site dining options</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">🚗</div>
              <h4 className="font-semibold text-black mb-1">Transportation</h4>
              <p className="text-xs text-gray-600">Commute assistance</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B7355]/10 to-[#8B7355]/5 p-5 rounded-lg text-center border border-[#8B7355]/20">
              <div className="text-3xl mb-2">🎉</div>
              <h4 className="font-semibold text-black mb-1">Team Events</h4>
              <p className="text-xs text-gray-600">Regular celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
        <JobOpportunities />
      </section>

      {/* Join the Team Section */}
      <section className="w-full py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <JoinTheTeamForm />
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default CareersPage

