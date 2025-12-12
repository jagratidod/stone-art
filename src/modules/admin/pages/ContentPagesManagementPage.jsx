import { useState } from 'react'
import AdminLayout from '../components/AdminLayout'

const ContentPagesManagementPage = () => {
  const [pages, setPages] = useState([
    { id: 1, name: 'About Us', slug: 'about-us', path: '/about-us' },
    { id: 2, name: 'Experience Centre', slug: 'experience-centre', path: '/experience-centre' },
    { id: 3, name: 'AMS International Page', slug: 'tsa-international', path: '/services/tsa-international' },
    { id: 4, name: 'Why Choose Us', slug: 'why-choose-us', path: '/why-choose-us' },
    { id: 5, name: 'FAQ Page', slug: 'faq', path: '/faq' },
    { id: 6, name: 'Terms & Conditions', slug: 'terms', path: '/terms' },
    { id: 7, name: 'Privacy Policy', slug: 'privacy', path: '/privacy' },
    { id: 8, name: 'Careers', slug: 'careers', path: '/careers' }
  ])
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedPage, setSelectedPage] = useState(null)

  const handleEditPage = (updatedPage) => {
    setPages(pages.map(p => p.id === updatedPage.id ? updatedPage : p))
    setShowEditModal(false)
    setSelectedPage(null)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Content Pages Management</h1>

        {/* Pages List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: '#8B7355' }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Page Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Slug</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Path</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{page.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{page.slug}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{page.path}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => {
                          setSelectedPage(page)
                          setShowEditModal(true)
                        }}
                        className="text-[#8B7355] hover:underline font-medium"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Page Modal */}
        {showEditModal && selectedPage && (
          <PageEditModal
            page={selectedPage}
            onSave={handleEditPage}
            onClose={() => {
              setShowEditModal(false)
              setSelectedPage(null)
            }}
          />
        )}
      </div>
    </AdminLayout>
  )
}

// Page Edit Modal Component
const PageEditModal = ({ page, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    ...page,
    content: page.content || '',
    metaTitle: page.metaTitle || '',
    metaDescription: page.metaDescription || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Edit Page: {page.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Page Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Path</label>
              <input
                type="text"
                value={formData.path}
                onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Title</label>
              <input
                type="text"
                value={formData.metaTitle}
                onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
              <textarea
                value={formData.metaDescription}
                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                rows="3"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Page Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows="10"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="Enter page content (HTML supported)"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#8B7355' }}
              >
                Save Changes
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

export default ContentPagesManagementPage

