import { useState } from 'react'

const JobOpportunities = () => {
  const [expandedJobs, setExpandedJobs] = useState({})

  const jobCategories = [
    {
      id: 'architecture',
      title: 'Architecture',
      jobs: [
        {
          id: 'architect-1',
          title: 'Architect',
          experience: '1 to 3 years',
          description: 'We are looking for a skilled Architect with experience in designing sacred spaces and temple architecture.'
        }
      ]
    },
    {
      id: 'creative',
      title: 'Creative',
      jobs: [
        {
          id: 'video-editor-1',
          title: 'Video Editor',
          experience: '2 Years',
          description: 'Join our creative team as a Video Editor to create compelling visual content showcasing our craftsmanship.'
        }
      ]
    },
    {
      id: 'sales',
      title: 'Sales',
      jobs: [
        {
          id: 'sales-rep-1',
          title: 'Online Sales Representative',
          experience: '3 Years',
          description: 'We need an experienced Online Sales Representative to help expand our digital presence and customer reach.'
        }
      ]
    }
  ]

  const toggleJobExpansion = (jobId) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }))
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12" style={{ color: '#8B7355' }}>
        JOB OPPORTUNITIES
      </h1>

      {/* Job Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {jobCategories.map((category) => (
          <div key={category.id} className="flex flex-col">
            {/* Category Title */}
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">
              {category.title}
            </h2>

            {/* Job Cards */}
            <div className="space-y-4">
              {category.jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Job Title */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    {job.title}
                  </h3>

                  {/* Experience */}
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Experience: {job.experience}
                  </p>

                  {/* Expanded Description */}
                  {expandedJobs[job.id] && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a
                      href="#join-the-team"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('join-the-team')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-sm md:text-base font-medium underline cursor-pointer"
                      style={{ color: '#8B7355' }}
                    >
                      Apply Now
                    </a>
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className="px-4 py-2 rounded-lg text-white text-sm md:text-base font-medium transition-colors"
                      style={{ backgroundColor: '#8B7355' }}
                    >
                      {expandedJobs[job.id] ? 'Show Less' : 'View More'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobOpportunities

