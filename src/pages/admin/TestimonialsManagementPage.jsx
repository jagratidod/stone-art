import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { testimonials } from '../../data/testimonials'

const TestimonialsManagementPage = () => {
  const [testimonialList, setTestimonialList] = useState(testimonials)
  const [showAddModal, setShowAddModal] = useState(false)

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
                {testimonialList.map((testimonial) => (
                  <tr key={testimonial.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{testimonial.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{testimonial.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{testimonial.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">{testimonial.review}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex gap-2">
                        <button className="text-[#8B7355] hover:underline font-medium">Edit</button>
                        <button className="text-red-600 hover:underline font-medium">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default TestimonialsManagementPage

