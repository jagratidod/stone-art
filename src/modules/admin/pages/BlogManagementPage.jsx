import { useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { blogPosts } from '../../../data/blogPosts'

const BlogManagementPage = () => {
  const [blogs, setBlogs] = useState(blogPosts)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [blogToDelete, setBlogToDelete] = useState(null)

  const handleAddBlog = (newBlog) => {
    const newId = Math.max(...blogs.map(b => b.id), 0) + 1
    const blogWithId = { ...newBlog, id: newId, date: new Date().toLocaleDateString() }
    setBlogs([...blogs, blogWithId])
    setShowAddModal(false)
  }

  const handleEditBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog))
    setShowEditModal(false)
    setSelectedBlog(null)
  }

  const handleDeleteBlog = (blog) => {
    setBlogToDelete(blog)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (blogToDelete) {
      setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id))
      setShowDeleteConfirm(false)
      setBlogToDelete(null)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            + Add New Blog
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{blog.category}</span>
                  <span className="text-xs text-gray-500">{blog.date}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedBlog(blog)
                      setShowEditModal(true)
                    }}
                    className="flex-1 px-3 py-2 text-sm font-medium text-white rounded-lg transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#8B7355' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog)}
                    className="px-3 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Blog Modal */}
        {showAddModal && (
          <BlogFormModal
            onSave={handleAddBlog}
            onClose={() => setShowAddModal(false)}
          />
        )}

        {/* Edit Blog Modal */}
        {showEditModal && selectedBlog && (
          <BlogFormModal
            blog={selectedBlog}
            onSave={handleEditBlog}
            onClose={() => {
              setShowEditModal(false)
              setSelectedBlog(null)
            }}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && blogToDelete && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete <strong>{blogToDelete.title}</strong>? This action cannot be undone.
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
                      setBlogToDelete(null)
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

// Blog Form Modal Component
const BlogFormModal = ({ blog, onSave, onClose }) => {
  const [formData, setFormData] = useState(blog || {
    title: '',
    description: '',
    content: '',
    category: '',
    image: '',
    author: '',
    date: new Date().toLocaleDateString()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {blog ? 'Edit Blog Post' : 'Add New Blog Post'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author || ''}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Image *</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0]
                  if (file) {
                    const reader = new FileReader()
                    reader.onloadend = () => {
                      setFormData({ ...formData, image: reader.result })
                    }
                    reader.readAsDataURL(file)
                  }
                }}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required={!formData.image}
              />
              {formData.image && (
                <img src={formData.image} alt="Preview" className="mt-2 w-full h-48 object-cover rounded" />
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
              <textarea
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows="8"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#8B7355' }}
              >
                {blog ? 'Update Blog' : 'Add Blog'}
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

export default BlogManagementPage

