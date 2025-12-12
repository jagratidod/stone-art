import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminLayout from '../components/AdminLayout'
import { ganeshaProducts } from '../../../data/ganeshaProducts'
import { durgaProducts } from '../../../data/durgaProducts'

const ProductsManagementPage = () => {
  const { category } = useParams()
  const [products, setProducts] = useState({})
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productToDelete, setProductToDelete] = useState(null)

  const getPageTitle = () => {
    return category === 'murti' ? 'Murti Products' : 'Stone Products'
  }

  const getMurtiCategories = () => {
    return ['Ganesha', 'Durga', 'Saraswati', 'Shiv Parvati', 'Sai Baba', 'Vishnu Laxmi']
  }

  const getStoneCategories = () => {
    return ['Sandstone', 'Limestone', 'Marble', 'Granite', 'Slate', 'Quartzite', 'Pebble Stones', 'Cobble Stones', 'Stone Chips', 'Basalt', 'Soap Stone', 'Travertine']
  }

  useEffect(() => {
    // Initialize products from data files
    const initialProducts = {}
    if (category === 'murti') {
      getMurtiCategories().forEach(cat => {
        switch(cat) {
          case 'Ganesha': initialProducts[cat] = [...(ganeshaProducts || [])]; break
          case 'Durga': initialProducts[cat] = [...(durgaProducts || [])]; break
          default: initialProducts[cat] = []
        }
      })
    } else {
      getStoneCategories().forEach(cat => {
        initialProducts[cat] = []
      })
    }
    setProducts(initialProducts)
  }, [category])

  const getProductsByCategory = (cat) => {
    return products[cat] || []
  }

  const categories = category === 'murti' ? getMurtiCategories() : getStoneCategories()

  const handleAddProduct = (newProduct) => {
    if (selectedCategory) {
      const newId = Math.max(...(getProductsByCategory(selectedCategory).map(p => p.id) || [0]), 0) + 1
      const productWithId = { ...newProduct, id: newId, category: selectedCategory }
      setProducts({
        ...products,
        [selectedCategory]: [...getProductsByCategory(selectedCategory), productWithId]
      })
      setShowAddModal(false)
    }
  }

  const handleEditProduct = (updatedProduct) => {
    if (selectedCategory) {
      setProducts({
        ...products,
        [selectedCategory]: getProductsByCategory(selectedCategory).map(p =>
          p.id === updatedProduct.id ? updatedProduct : p
        )
      })
      setShowEditModal(false)
      setSelectedProduct(null)
    }
  }

  const handleDeleteProduct = (product) => {
    setProductToDelete(product)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (productToDelete && selectedCategory) {
      setProducts({
        ...products,
        [selectedCategory]: getProductsByCategory(selectedCategory).filter(p => p.id !== productToDelete.id)
      })
      setShowDeleteConfirm(false)
      setProductToDelete(null)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{getPageTitle()}</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#8B7355' }}
          >
            + Add New Product
          </button>
        </div>

        {/* Categories Filter */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'text-white border-[#8B7355]'
                    : 'border-gray-300 text-gray-700 hover:border-[#8B7355] hover:text-[#8B7355]'
                }`}
                style={selectedCategory === cat ? { backgroundColor: '#8B7355' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products List */}
        {selectedCategory && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">{selectedCategory} Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getProductsByCategory(selectedCategory).map((product) => (
                <div key={product.id} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={product.images?.[0] || product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">SKU: {product.sku || 'N/A'}</p>
                    <p className="text-lg font-bold text-[#8B7355] mb-4">₹{product.price?.toLocaleString() || 'N/A'}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(product)
                          setShowEditModal(true)
                        }}
                        className="flex-1 px-3 py-2 text-sm font-medium text-white rounded-lg transition-colors hover:opacity-90"
                        style={{ backgroundColor: '#8B7355' }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product)}
                        className="px-3 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {getProductsByCategory(selectedCategory).length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-12">
                  No products found in this category. Click "Add New Product" to get started.
                </div>
              )}
            </div>
          </div>
        )}

        {!selectedCategory && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500">Please select a category to view products</p>
          </div>
        )}

        {/* Add Product Modal */}
        {showAddModal && (
          <ProductFormModal
            category={selectedCategory}
            onSave={handleAddProduct}
            onClose={() => setShowAddModal(false)}
          />
        )}

        {/* Edit Product Modal */}
        {showEditModal && selectedProduct && (
          <ProductFormModal
            product={selectedProduct}
            category={selectedCategory}
            onSave={handleEditProduct}
            onClose={() => {
              setShowEditModal(false)
              setSelectedProduct(null)
            }}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && productToDelete && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete <strong>{productToDelete.name}</strong>? This action cannot be undone.
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
                      setProductToDelete(null)
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

// Product Form Modal Component
const ProductFormModal = ({ product, category, onSave, onClose }) => {
  const [formData, setFormData] = useState(product || {
    name: '',
    sku: '',
    price: '',
    description: '',
    images: [],
    category: category || '',
    material: '',
    dimensions: '',
    weight: '',
    inStock: true
  })
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({
          ...formData,
          images: [...formData.images, reader.result]
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productData = {
      ...formData,
      price: parseFloat(formData.price) || 0
    }
    if (product) {
      productData.id = product.id
    }
    onSave(productData)
  }

  const removeImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {product ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">SKU</label>
                <input
                  type="text"
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₹) *</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Material</label>
                <input
                  type="text"
                  value={formData.material || ''}
                  onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Dimensions</label>
                <input
                  type="text"
                  value={formData.dimensions || ''}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  placeholder="e.g., 12x8x6 inches"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Weight</label>
                <input
                  type="text"
                  value={formData.weight || ''}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  placeholder="e.g., 5 kg"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Images</label>
                <div className="mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {formData.images.map((img, index) => (
                      <div key={index} className="relative">
                        <img src={img} alt={`Product ${index + 1}`} className="w-full h-24 object-cover rounded" />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">In Stock</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#8B7355' }}
              >
                {product ? 'Update Product' : 'Add Product'}
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

export default ProductsManagementPage

