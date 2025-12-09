import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'

const ContentPagesManagementPage = () => {
  const [pages] = useState([
    { id: 1, name: 'About Us', slug: 'about-us', path: '/about-us' },
    { id: 2, name: 'Experience Centre', slug: 'experience-centre', path: '/experience-centre' },
    { id: 3, name: 'TSA International Page', slug: 'tsa-international', path: '/services/tsa-international' },
    { id: 4, name: 'Why Choose Us', slug: 'why-choose-us', path: '/why-choose-us' },
    { id: 5, name: 'FAQ Page', slug: 'faq', path: '/faq' },
    { id: 6, name: 'Terms & Conditions', slug: 'terms', path: '/terms' },
    { id: 7, name: 'Privacy Policy', slug: 'privacy', path: '/privacy' },
    { id: 8, name: 'Careers', slug: 'careers', path: '/careers' }
  ])

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
                      <button className="text-[#8B7355] hover:underline font-medium">Edit</button>
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

export default ContentPagesManagementPage

