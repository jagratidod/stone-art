import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminLayout from '../components/AdminLayout'

const CategoryManagementPage = () => {
  const { type } = useParams()
  const [categories, setCategories] = useState([])
  const [mainCategories, setMainCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showAddMainCategoryModal, setShowAddMainCategoryModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoryToDelete, setCategoryToDelete] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  // Main category options from image and stone products
  const mainCategoryOptions = [
    'DREAM TEMPLE',
    'DREAM MURTIS',
    'HOME DECOR',
    'SHOP BY',
    'LIMITED EDITION',
    'ON SALE',
    'GUIDES',
    'Sandstone',
    'Limestone',
    'Slate',
    'Marble',
    'Quartzite',
    'Pebble Stones',
    'Cobble Stones',
    'Stone Chips',
    'Granite',
    'Natural Indian Stones'
  ]

  // Load main categories from localStorage
  useEffect(() => {
    const storedMainCategories = localStorage.getItem('main_categories')
    if (storedMainCategories) {
      setMainCategories(JSON.parse(storedMainCategories))
    }
  }, [])

  // Save main categories to localStorage
  useEffect(() => {
    if (mainCategories.length > 0) {
      localStorage.setItem('main_categories', JSON.stringify(mainCategories))
    }
  }, [mainCategories])

  // Load categories from localStorage on mount
  useEffect(() => {
    const storedCategories = localStorage.getItem(`categories_${type}`)
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories))
    }
  }, [type])

  // Save categories to localStorage whenever they change
  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem(`categories_${type}`, JSON.stringify(categories))
    }
  }, [categories, type])

  // Filter categories based on search query
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get all main categories for dropdown (saved + default options)
  const getAllMainCategories = () => {
    const savedMainCats = mainCategories.map(cat => ({ id: cat.id, name: cat.name, isSaved: true }))
    const defaultCats = mainCategoryOptions
      .filter(opt => !mainCategories.some(mc => mc.name === opt))
      .map((name, index) => ({ id: `default_${index}`, name, isSaved: false }))
    return [...savedMainCats, ...defaultCats]
  }

  const handleAddMainCategory = (newMainCategory) => {
    const newId = Math.max(...mainCategories.map(c => c.id || 0), 0) + 1
    const categoryWithId = { ...newMainCategory, id: newId }
    setMainCategories([...mainCategories, categoryWithId])
    setShowAddMainCategoryModal(false)
  }

  const handleQuickAddMainCategory = (categoryName) => {
    // Check if category already exists
    const exists = mainCategories.some(cat => cat.name === categoryName)
    if (!exists) {
      const newId = Math.max(...mainCategories.map(c => c.id || 0), 0) + 1
      const newCategory = {
        id: newId,
        name: categoryName,
        description: '',
        image: ''
      }
      setMainCategories([...mainCategories, newCategory])
    }
  }

  const handleAddCategory = (newCategory) => {
    const newId = Math.max(...categories.map(c => c.id || 0), 0) + 1
    const categoryWithId = { ...newCategory, id: newId, type }
    setCategories([...categories, categoryWithId])
    setShowAddModal(false)
  }

  const handleEditCategory = (updatedCategory) => {
    setCategories(categories.map(cat =>
      cat.id === updatedCategory.id ? updatedCategory : cat
    ))
    setShowEditModal(false)
    setSelectedCategory(null)
  }

  const handleDeleteCategory = (category) => {
    setCategoryToDelete(category)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (categoryToDelete) {
      setCategories(categories.filter(cat => cat.id !== categoryToDelete.id))
      setShowDeleteConfirm(false)
      setCategoryToDelete(null)
    }
  }

  const getPageTitle = () => {
    const titles = {
      'murti': 'Murti Categories',
      'home-decor': 'Home Decor Categories',
      'stones': 'Stone Categories',
      'live': 'Live Inventory Categories'
    }
    return titles[type] || 'Categories'
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{getPageTitle()}</h1>
        </div>

        {/* Add Main Category Section */}
        <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <h2 className="text-lg lg:text-xl font-bold text-gray-800">Main Categories</h2>
            <button
              onClick={() => setShowAddMainCategoryModal(true)}
              className="w-full sm:w-auto px-3 lg:px-4 py-2 text-sm lg:text-base border-2 border-[#8B7355] text-[#8B7355] rounded-lg font-medium transition-colors hover:bg-[#8B7355] hover:text-white flex items-center justify-center gap-2"
            >
              + Add Main Category
            </button>
          </div>
          
          {/* Display All Main Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-4">
            {/* Show saved main categories */}
            {mainCategories.map((mainCat) => (
              <div
                key={mainCat.id}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#8B7355] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{mainCat.name}</h3>
                    {mainCat.description && (
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{mainCat.description}</p>
                    )}
                  </div>
                  {mainCat.image && (
                    <img
                      src={mainCat.image}
                      alt={mainCat.name}
                      className="w-16 h-16 object-cover rounded ml-3"
                    />
                  )}
                </div>
              </div>
            ))}
            
            {/* Show default options that aren't saved yet */}
            {mainCategoryOptions
              .filter(opt => !mainCategories.some(mc => mc.name === opt))
              .map((option, index) => (
                <div
                  key={`default_${index}`}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#8B7355] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{option}</h3>
                      <p className="text-xs text-gray-400 mt-1">Default Option</p>
                    </div>
                    <button
                      onClick={() => handleQuickAddMainCategory(option)}
                      className="ml-3 px-3 py-1 text-sm border border-[#8B7355] text-[#8B7355] rounded hover:bg-[#8B7355] hover:text-white transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            
            {/* Show message if no categories */}
            {mainCategories.length === 0 && mainCategoryOptions.length === 0 && (
              <div className="col-span-full text-center py-8 text-gray-500">
                No main categories found. Click "Add Main Category" to get started.
              </div>
            )}
          </div>
        </div>

        {/* Add Category Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowAddModal(true)}
            className="w-full sm:w-auto px-4 py-2 text-sm lg:text-base text-white rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            + Add Category
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-3 lg:p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Categories List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 px-4">
              <p className="text-sm lg:text-base text-gray-500">
                {searchQuery ? 'No categories found matching your search.' : 'No categories found. Click "Add Category" to get started.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead style={{ backgroundColor: '#8B7355' }}>
                  <tr>
                    <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-semibold text-white uppercase">Image</th>
                    <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-semibold text-white uppercase">Name</th>
                    <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-semibold text-white uppercase hidden md:table-cell">Description</th>
                    <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-semibold text-white uppercase">Main Category</th>
                    <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-semibold text-white uppercase hidden sm:table-cell">Price</th>
                    <th className="px-3 lg:px-6 py-2 lg:py-3 text-left text-xs font-semibold text-white uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCategories.map((category) => (
                    <tr key={category.id} className="hover:bg-gray-50">
                      <td className="px-3 lg:px-6 py-3 lg:py-4 whitespace-nowrap">
                        {category.image ? (
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-12 h-12 lg:w-16 lg:h-16 object-cover rounded"
                          />
                        ) : (
                          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">No Image</span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 lg:px-6 py-3 lg:py-4 whitespace-nowrap">
                        <div className="text-xs lg:text-sm font-medium text-gray-900">{category.name}</div>
                      </td>
                      <td className="px-3 lg:px-6 py-3 lg:py-4 hidden md:table-cell">
                        <div className="text-xs lg:text-sm text-gray-500 max-w-md truncate">
                          {category.description || 'N/A'}
                        </div>
                      </td>
                      <td className="px-3 lg:px-6 py-3 lg:py-4 whitespace-nowrap">
                        <div className="text-xs lg:text-sm font-medium text-gray-700">
                          {category.mainCategory || 'N/A'}
                        </div>
                      </td>
                      <td className="px-3 lg:px-6 py-3 lg:py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-xs lg:text-sm font-medium text-gray-900">
                          {category.price ? `₹${category.price.toLocaleString('en-IN')}` : 'N/A'}
                        </div>
                      </td>
                      <td className="px-3 lg:px-6 py-3 lg:py-4 whitespace-nowrap text-xs lg:text-sm">
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                          <button
                            onClick={() => {
                              setSelectedCategory(category)
                              setImagePreview(category.image)
                              setShowEditModal(true)
                            }}
                            className="text-[#8B7355] hover:underline font-medium text-left sm:text-center"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteCategory(category)}
                            className="text-red-600 hover:underline font-medium text-left sm:text-center"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Add Category Modal */}
        {showAddModal && (
          <CategoryFormModal
            onSave={handleAddCategory}
            onClose={() => {
              setShowAddModal(false)
              setImagePreview(null)
            }}
            mainCategories={getAllMainCategories()}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
        )}

        {/* Edit Category Modal */}
        {showEditModal && selectedCategory && (
          <CategoryFormModal
            category={selectedCategory}
            onSave={handleEditCategory}
            onClose={() => {
              setShowEditModal(false)
              setSelectedCategory(null)
              setImagePreview(null)
            }}
            mainCategories={getAllMainCategories()}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
        )}

        {/* Add Main Category Modal */}
        {showAddMainCategoryModal && (
          <MainCategoryFormModal
            onSave={handleAddMainCategory}
            onClose={() => {
              setShowAddMainCategoryModal(false)
              setImagePreview(null)
            }}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && categoryToDelete && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete <strong>{categoryToDelete.name}</strong>? This action cannot be undone.
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
                      setCategoryToDelete(null)
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

// Category Form Modal Component
const CategoryFormModal = ({ category, onSave, onClose, mainCategories = [], imagePreview, setImagePreview }) => {
  const [formData, setFormData] = useState(category || {
    name: '',
    description: '',
    mainCategory: '',
    price: '',
    image: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const categoryData = {
      ...formData,
      price: formData.price ? parseFloat(formData.price) : null
    }
    onSave(categoryData)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result
        setFormData({ ...formData, image: imageDataUrl })
        setImagePreview(imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-800">
              {category ? 'Edit Category' : 'Add New Category'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="Enter category description..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Main Category *</label>
              <select
                value={formData.mainCategory || ''}
                onChange={(e) => setFormData({ ...formData, mainCategory: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              >
                <option value="">Select Main Category</option>
                {mainCategories.map((mainCat) => (
                  <option key={mainCat.id} value={mainCat.name}>
                    {mainCat.name}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Select the main category under which this category will be added</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₹)</label>
              <input
                type="number"
                value={formData.price || ''}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="Enter price (optional)"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category Image</label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              {(imagePreview || formData.image) && (
                <img
                  src={imagePreview || formData.image}
                  alt="Preview"
                  className="mt-2 w-full h-48 object-cover rounded"
                />
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-sm lg:text-base text-white rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#8B7355' }}
              >
                {category ? 'Update Category' : 'Add Category'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm lg:text-base border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
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

// Main Category Form Modal Component
const MainCategoryFormModal = ({ onSave, onClose, imagePreview, setImagePreview }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result
        setFormData({ ...formData, image: imageDataUrl })
        setImagePreview(imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-800">
              Add New Main Category
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Main Category Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="Enter main category description..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category Image</label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              {(imagePreview || formData.image) && (
                <img
                  src={imagePreview || formData.image}
                  alt="Preview"
                  className="mt-2 w-full h-48 object-cover rounded"
                />
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#8B7355' }}
              >
                Add Main Category
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

export default CategoryManagementPage

