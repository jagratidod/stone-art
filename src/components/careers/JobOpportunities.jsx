import { useState } from 'react'

const JobOpportunities = () => {
  const [expandedJobs, setExpandedJobs] = useState({})

  const jobCategories = [
    {
      id: 'architecture',
      title: 'Architecture',
      icon: '🏛️',
      jobs: [
        {
          id: 'architect-1',
          title: 'Senior Architect',
          experience: '5+ years',
          location: 'Makrana, Rajasthan',
          type: 'Full-time',
          description: 'We are looking for a skilled Senior Architect with extensive experience in designing sacred spaces and temple architecture. The ideal candidate should have a deep understanding of traditional Indian architecture and modern design principles.',
          requirements: [
            'Bachelor\'s or Master\'s degree in Architecture',
            'Proficiency in AutoCAD, SketchUp, and Revit',
            'Strong portfolio of temple/sacred space designs',
            'Excellent communication and presentation skills'
          ]
        },
        {
          id: 'architect-2',
          title: 'Junior Architect',
          experience: '1 to 3 years',
          location: 'Makrana, Rajasthan',
          type: 'Full-time',
          description: 'Join our team as a Junior Architect and work on exciting projects involving marble temple design and sacred architecture. Great opportunity for growth and learning.',
          requirements: [
            'Bachelor\'s degree in Architecture',
            'Basic knowledge of design software',
            'Passion for traditional architecture',
            'Willingness to learn and grow'
          ]
        }
      ]
    },
    {
      id: 'creative',
      title: 'Creative',
      icon: '🎨',
      jobs: [
        {
          id: 'video-editor-1',
          title: 'Video Editor',
          experience: '2+ Years',
          location: 'Remote / On-site',
          type: 'Full-time',
          description: 'Join our creative team as a Video Editor to create compelling visual content showcasing our craftsmanship, projects, and brand story. You\'ll work on promotional videos, social media content, and documentary-style pieces.',
          requirements: [
            'Proficiency in Adobe Premiere Pro, After Effects',
            'Strong storytelling and editing skills',
            'Portfolio demonstrating video editing capabilities',
            'Creative mindset and attention to detail'
          ]
        },
        {
          id: 'graphic-designer-1',
          title: 'Graphic Designer',
          experience: '2-4 Years',
          location: 'Makrana, Rajasthan',
          type: 'Full-time',
          description: 'We are seeking a talented Graphic Designer to create visually stunning designs for marketing materials, social media, and brand identity.',
          requirements: [
            'Proficiency in Adobe Creative Suite',
            'Strong portfolio of design work',
            'Understanding of brand identity',
            'Creative and innovative thinking'
          ]
        }
      ]
    },
    {
      id: 'sales',
      title: 'Sales',
      icon: '💼',
      jobs: [
        {
          id: 'sales-rep-1',
          title: 'Online Sales Representative',
          experience: '3+ Years',
          location: 'Remote / On-site',
          type: 'Full-time',
          description: 'We need an experienced Online Sales Representative to help expand our digital presence and customer reach. You\'ll be responsible for managing online sales, customer relationships, and driving revenue growth.',
          requirements: [
            'Proven track record in online sales',
            'Excellent communication skills',
            'Knowledge of CRM systems',
            'Customer-focused approach'
          ]
        },
        {
          id: 'sales-manager-1',
          title: 'Sales Manager',
          experience: '5+ Years',
          location: 'Makrana, Rajasthan',
          type: 'Full-time',
          description: 'Lead our sales team and drive business growth. Manage sales strategies, client relationships, and team performance.',
          requirements: [
            'Strong leadership skills',
            'Experience in B2B sales',
            'Strategic thinking',
            'Results-oriented mindset'
          ]
        }
      ]
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: '⚙️',
      jobs: [
        {
          id: 'production-manager-1',
          title: 'Production Manager',
          experience: '4+ Years',
          location: 'Makrana, Rajasthan',
          type: 'Full-time',
          description: 'Oversee production operations, manage teams, and ensure quality standards in marble processing and temple construction.',
          requirements: [
            'Experience in manufacturing/production',
            'Strong organizational skills',
            'Quality management expertise',
            'Team management experience'
          ]
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {jobCategories.map((category) => (
          <div key={category.id} className="flex flex-col">
            {/* Category Title with Icon */}
            <div className="flex items-center gap-3 mb-4 md:mb-6 pb-3 border-b-2" style={{ borderColor: '#8B7355' }}>
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-xl md:text-2xl font-bold text-black">
                {category.title}
              </h2>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {category.jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8B7355]/30"
                >
                  {/* Job Title */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                    {job.title}
                  </h3>

                  {/* Job Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">Experience:</span>
                      <span>{job.experience}</span>
                    </div>
                    {job.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold">Location:</span>
                        <span>{job.location}</span>
                      </div>
                    )}
                    {job.type && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold">Type:</span>
                        <span className="px-2 py-1 bg-[#8B7355]/10 rounded text-[#8B7355] font-medium">{job.type}</span>
                      </div>
                    )}
                  </div>

                  {/* Expanded Description */}
                  {expandedJobs[job.id] && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                        {job.description}
                      </p>
                      {job.requirements && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            {job.requirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mt-4">
                    <a
                      href="#join-the-team"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('join-the-team')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-center px-4 py-2 rounded-lg text-white text-sm md:text-base font-medium transition-all hover:opacity-90 shadow-md hover:shadow-lg"
                      style={{ backgroundColor: '#8B7355' }}
                    >
                      Apply Now
                    </a>
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className="px-4 py-2 rounded-lg border-2 text-sm md:text-base font-medium transition-all hover:bg-gray-50"
                      style={{ borderColor: '#8B7355', color: '#8B7355' }}
                    >
                      {expandedJobs[job.id] ? 'Show Less' : 'View Details'}
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

