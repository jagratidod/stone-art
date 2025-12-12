import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import { useNavigate } from 'react-router-dom'
import blogImg from '../../../assets/blog/blog.png'
import { blogPosts } from '../../../data/blogPosts'

const BlogPage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen bg-white">
      <Header 
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
        onShowLocation={() => navigate('/location')}
        onShowBooking={() => navigate('/book-appointment')}
      />

      {/* Horizontal Full Width Image with Heading */}
      <section className="w-full relative">
        <div className="relative w-full">
          <img
            src={blogImg}
            alt="Our Blog"
            className="w-full h-auto object-contain"
            style={{ display: 'block', width: '100%' }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-wide text-center px-4 drop-shadow-2xl">
              OUR BLOG
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs md:text-sm font-semibold text-[#8B7355] uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#8B7355] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default BlogPage

