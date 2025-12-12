import { createContext, useContext, useState, useEffect } from 'react'

const AdminAuthContext = createContext()

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider')
  }
  return context
}

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if admin is logged in
    const savedAdmin = localStorage.getItem('admin')
    if (savedAdmin) {
      try {
        setAdmin(JSON.parse(savedAdmin))
      } catch (error) {
        localStorage.removeItem('admin')
      }
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // For demo purposes - in production, this would be an API call
    if (email === 'admin@tilakstone.com' && password === 'admin123') {
      const adminData = {
        id: 1,
        email: email,
        name: 'Admin User',
        role: 'super_admin'
      }
      setAdmin(adminData)
      localStorage.setItem('admin', JSON.stringify(adminData))
      return { success: true }
    }
    return { success: false, error: 'Invalid credentials' }
  }

  const logout = () => {
    setAdmin(null)
    localStorage.removeItem('admin')
  }

  const value = {
    admin,
    login,
    logout,
    loading,
    isAuthenticated: !!admin
  }

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  )
}

