import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import JobOpportunities from '../components/careers/JobOpportunities'
import JoinTheTeamForm from '../components/careers/JoinTheTeamForm'
import { useNavigate } from 'react-router-dom'

const CareersPage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowHowItWorks 
}) => {
  const navigate = useNavigate()

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

