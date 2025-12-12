import { useState, useEffect } from 'react'
import AdminLayout from '../components/AdminLayout'

const HeroSectionManagementPage = () => {
  const [heroData, setHeroData] = useState({
    mainHeading: 'Crafting Divine Spaces',
    subHeading: 'Where Faith Meets Fine Marble',
    supplierText: '– Aslam Marble Suppliers',
    videoUrl: '/hero-video-new.mp4',
    videoFile: null
  })
  const [showEditModal, setShowEditModal] = useState(false)
  const [previewVideo, setPreviewVideo] = useState(null)

  useEffect(() => {
    // In production, fetch from API
    // For now, using default values
  }, [])

  const handleInputChange = (field, value) => {
    setHeroData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleVideoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setHeroData(prev => ({
        ...prev,
        videoFile: file,
        videoUrl: URL.createObjectURL(file)
      }))
      setPreviewVideo(URL.createObjectURL(file))
    }
  }

  const handleSave = () => {
    // In production, save to API
    console.log('Saving hero section data:', heroData)
    alert('Hero section updated successfully!')
    setShowEditModal(false)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Hero Section Management</h1>
          <button
            onClick={() => setShowEditModal(true)}
            className="px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            Edit Hero Section
          </button>
        </div>

        {/* Current Content Preview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Content</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Main Heading</label>
              <p className="text-xl font-bold text-gray-800">{heroData.mainHeading}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Sub Heading</label>
              <p className="text-lg text-gray-700">{heroData.subHeading}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Supplier Text</label>
              <p className="text-base text-gray-700">{heroData.supplierText}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Video</label>
              <div className="mt-2">
                {previewVideo ? (
                  <video 
                    src={previewVideo} 
                    controls 
                    className="w-full max-w-md rounded-lg"
                  />
                ) : (
                  <p className="text-sm text-gray-500">Current video: {heroData.videoUrl}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Edit Hero Section</h2>
                  <button
                    onClick={() => {
                      setShowEditModal(false)
                      setPreviewVideo(null)
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Main Heading
                    </label>
                    <input
                      type="text"
                      value={heroData.mainHeading}
                      onChange={(e) => handleInputChange('mainHeading', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                      placeholder="Enter main heading"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sub Heading
                    </label>
                    <input
                      type="text"
                      value={heroData.subHeading}
                      onChange={(e) => handleInputChange('subHeading', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                      placeholder="Enter sub heading"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Supplier Text (Aslam Marble Suppliers)
                    </label>
                    <input
                      type="text"
                      value={heroData.supplierText}
                      onChange={(e) => handleInputChange('supplierText', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                      placeholder="Enter supplier text"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hero Video
                    </label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                    />
                    {previewVideo && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">Preview:</p>
                        <video 
                          src={previewVideo} 
                          controls 
                          className="w-full max-w-md rounded-lg"
                        />
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      Current video: {heroData.videoUrl}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleSave}
                      className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
                      style={{ backgroundColor: '#8B7355' }}
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setShowEditModal(false)
                        setPreviewVideo(null)
                      }}
                      className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default HeroSectionManagementPage

