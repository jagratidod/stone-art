import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import { ganeshaProducts } from '../../data/ganeshaProducts'
import { durgaProducts } from '../../data/durgaProducts'

const ProductsManagementPage = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const getPageTitle = () => {
    return category === 'murti' ? 'Murti Products' : 'Stone Products'
  }

  const getMurtiCategories = () => {
    return ['Ganesha', 'Durga', 'Saraswati', 'Shiv Parvati', 'Sai Baba', 'Vishnu Laxmi']
  }

  const getStoneCategories = () => {
    return ['Sandstone', 'Limestone', 'Marble', 'Granite', 'Slate', 'Quartzite', 'Pebble Stones', 'Cobble Stones', 'Stone Chips', 'Basalt', 'Soap Stone', 'Travertine']
  }

  const getProductsByCategory = (cat) => {
    if (category === 'murti') {
      switch(cat) {
        case 'Ganesha': return ganeshaProducts || []
        case 'Durga': return durgaProducts || []
        default: return []
      }
    }
    return []
  }

  const categories = category === 'murti' ? getMurtiCategories() : getStoneCategories()

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
      </div>
    </AdminLayout>
  )
}

export default ProductsManagementPage

