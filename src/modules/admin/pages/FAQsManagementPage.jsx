import { useState } from 'react'
import AdminLayout from '../components/AdminLayout'

const FAQsManagementPage = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What materials do you use for your products?',
      answer: 'We use premium natural stones including sandstone, limestone, marble, and granite.',
      category: 'General'
    },
    {
      id: 2,
      question: 'How long does it take to complete a custom project?',
      answer: 'Custom projects typically take 4-8 weeks depending on complexity and size.',
      category: 'Projects'
    }
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [selectedFAQ, setSelectedFAQ] = useState(null)
  const [faqToDelete, setFaqToDelete] = useState(null)

  const handleAddFAQ = (newFAQ) => {
    const newId = Math.max(...faqs.map(f => f.id), 0) + 1
    const faqWithId = { ...newFAQ, id: newId }
    setFaqs([...faqs, faqWithId])
    setShowAddModal(false)
  }

  const handleEditFAQ = (updatedFAQ) => {
    setFaqs(faqs.map(f => f.id === updatedFAQ.id ? updatedFAQ : f))
    setShowEditModal(false)
    setSelectedFAQ(null)
  }

  const handleDeleteFAQ = (faq) => {
    setFaqToDelete(faq)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (faqToDelete) {
      setFaqs(faqs.filter(f => f.id !== faqToDelete.id))
      setShowDeleteConfirm(false)
      setFaqToDelete(null)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">FAQs Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            + Add New FAQ
          </button>
        </div>

        {/* FAQs List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {faqs.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p>No FAQs found. Click "Add New FAQ" to get started.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{faq.category}</span>
                        <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => {
                          setSelectedFAQ(faq)
                          setShowEditModal(true)
                        }}
                        className="px-3 py-1 text-sm text-[#8B7355] hover:underline font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteFAQ(faq)}
                        className="px-3 py-1 text-sm text-red-600 hover:underline font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add FAQ Modal */}
        {showAddModal && (
          <FAQFormModal
            onSave={handleAddFAQ}
            onClose={() => setShowAddModal(false)}
          />
        )}

        {/* Edit FAQ Modal */}
        {showEditModal && selectedFAQ && (
          <FAQFormModal
            faq={selectedFAQ}
            onSave={handleEditFAQ}
            onClose={() => {
              setShowEditModal(false)
              setSelectedFAQ(null)
            }}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && faqToDelete && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this FAQ? This action cannot be undone.
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
                      setFaqToDelete(null)
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

// FAQ Form Modal Component
const FAQFormModal = ({ faq, onSave, onClose }) => {
  const [formData, setFormData] = useState(faq || {
    question: '',
    answer: '',
    category: 'General'
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
              {faq ? 'Edit FAQ' : 'Add New FAQ'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
              >
                <option value="General">General</option>
                <option value="Products">Products</option>
                <option value="Projects">Projects</option>
                <option value="Services">Services</option>
                <option value="Pricing">Pricing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Question *</label>
              <input
                type="text"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Answer *</label>
              <textarea
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
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
                {faq ? 'Update FAQ' : 'Add FAQ'}
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

export default FAQsManagementPage
