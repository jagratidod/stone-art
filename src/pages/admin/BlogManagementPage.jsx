import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { blogPosts } from '../../data/blogPosts'

const BlogManagementPage = () => {
  const [blogs, setBlogs] = useState(blogPosts)
  const [showAddModal, setShowAddModal] = useState(false)

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
                    className="flex-1 px-3 py-2 text-sm font-medium text-white rounded-lg transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#8B7355' }}
                  >
                    Edit
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}

export default BlogManagementPage

