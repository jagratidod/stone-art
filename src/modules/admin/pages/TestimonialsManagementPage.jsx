import { useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { testimonials } from '../../../data/testimonials'

const TestimonialsManagementPage = () => {
  const [testimonialList, setTestimonialList] = useState(testimonials)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [testimonialToDelete, setTestimonialToDelete] = useState(null)

  const handleAddTestimonial = (newTestimonial) => {
    const newId = Math.max(...testimonialList.map(t => t.id), 0) + 1
    const testimonialWithId = { ...newTestimonial, id: newId }
    setTestimonialList([...testimonialList, testimonialWithId])
    setShowAddModal(false)
  }

  const handleEditTestimonial = (updatedTestimonial) => {
    setTestimonialList(testimonialList.map(t => t.id === updatedTestimonial.id ? updatedTestimonial : t))
    setShowEditModal(false)
    setSelectedTestimonial(null)
  }

  const handleDeleteTestimonial = (testimonial) => {
    setTestimonialToDelete(testimonial)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (testimonialToDelete) {
      setTestimonialList(testimonialList.filter(t => t.id !== testimonialToDelete.id))
      setShowDeleteConfirm(false)
      setTestimonialToDelete(null)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Testimonials Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            + Add New Testimonial
          </button>
        </div>

        {/* Testimonials List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: '#8B7355' }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Review</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {testimonialList.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                      No testimonials found
                    </td>
                  </tr>
                ) : (
                  testimonialList.map((testimonial) => (
                    <tr key={testimonial.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{testimonial.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{testimonial.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{testimonial.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">{testimonial.review}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedTestimonial(testimonial)
                              setShowEditModal(true)
                            }}
                            className="text-[#8B7355] hover:underline font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTestimonial(testimonial)}
                            className="text-red-600 hover:underline font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Testimonial Modal */}
        {showAddModal && (
          <TestimonialFormModal
            onSave={handleAddTestimonial}
            onClose={() => setShowAddModal(false)}
          />
        )}

        {/* Edit Testimonial Modal */}
        {showEditModal && selectedTestimonial && (
          <TestimonialFormModal
            testimonial={selectedTestimonial}
            onSave={handleEditTestimonial}
            onClose={() => {
              setShowEditModal(false)
              setSelectedTestimonial(null)
            }}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && testimonialToDelete && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete testimonial from <strong>{testimonialToDelete.name}</strong>? This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={confirmDelete}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setShowDeleteConfirm(false)
                      setTestimonialToDelete(null)
                    }}
                    className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

// Testimonial Form Modal Component
const TestimonialFormModal = ({ testimonial, onSave, onClose }) => {
  const [formData, setFormData] = useState(testimonial || {
    name: '',
    location: '',
    review: '',
    rating: 5
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Rating *</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating })}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      formData.rating >= rating
                        ? 'bg-yellow-400 text-white'
                        : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                    }`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-600">({formData.rating} stars)</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Review *</label>
              <textarea
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                rows="5"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#8B7355' }}
              >
                {testimonial ? 'Update Testimonial' : 'Add Testimonial'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsManagementPage
