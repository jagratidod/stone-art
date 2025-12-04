import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'

const ProjectsModal = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]?.id || null)

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[102] transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="fixed inset-0 flex items-center justify-center z-[105] p-4 pointer-events-none">
        <div 
          className="bg-white rounded-lg shadow-2xl max-w-6xl w-full pointer-events-auto transform transition-all duration-300 ease-out animate-in"
          style={{ animation: 'slideUp 0.3s ease-out' }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-3xl font-bold transition-colors w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <div className="px-4 md:px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left Side: Menu Sidebar */}
              <div className="w-full md:w-64 lg:w-72 bg-gray-50 rounded-lg p-4 md:p-6">
                <nav className="space-y-2">
                  {projects.map((project) => {
                    const isSelected = selectedProject === project.id
                    const ItemContent = (
                      <div
                        className={`px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-[#8B7355] text-white font-semibold shadow-md'
                            : 'text-gray-700 hover:bg-gray-200 font-medium'
                        }`}
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <h3 className="text-base md:text-lg uppercase">{project.name}</h3>
                      </div>
                    )

                    if (project.path) {
                      return (
                        <Link
                          key={project.id}
                          to={project.path}
                          onClick={onClose}
                        >
                          {ItemContent}
                        </Link>
                      )
                    }

                    return <div key={project.id}>{ItemContent}</div>
                  })}
                </nav>
              </div>

              {/* Right Side: Images */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="flex flex-col items-center">
                      <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-3">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-black">{project.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsModal

