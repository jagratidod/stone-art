import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'

const FAQsManagementPage = () => {
  const [faqs, setFaqs] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)

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
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center text-gray-500 py-12">
            <p>No FAQs found. Click "Add New FAQ" to get started.</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default FAQsManagementPage

