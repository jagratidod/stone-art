import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import { blogPosts } from '../../../data/blogPosts'

const BlogDetailPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const blogId = parseInt(id)
  const currentPost = blogPosts.find(post => post.id === blogId)
  
  if (!currentPost) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <p className="text-xl text-gray-600">Blog post not found</p>
      </div>
    )
  }

  const currentIndex = blogPosts.findIndex(post => post.id === blogId)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const handlePrevious = () => {
    if (previousPost) {
      navigate(`/blog/${previousPost.id}`)
    }
  }

  const handleNext = () => {
    if (nextPost) {
      navigate(`/blog/${nextPost.id}`)
    }
  }

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

      {/* Blog Detail Section */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Horizontal Full Width Image with Navigation Buttons */}
          <div className="relative w-full mb-8 md:mb-12">
            <div className="relative w-full">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-auto object-contain"
                style={{ display: 'block', width: '100%' }}
              />
              
              {/* Previous Blog Button - Left Side */}
              {previousPost && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#8B7355] p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 flex items-center justify-center"
                  aria-label="Previous Blog"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {/* Next Blog Button - Right Side */}
              {nextPost && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#8B7355] p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 flex items-center justify-center"
                  aria-label="Next Blog"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Blog Details Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm md:text-base font-semibold text-[#8B7355] uppercase tracking-wide">
                {currentPost.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500">{currentPost.date}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              {currentPost.title}
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                {currentPost.description}
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Vietnam White Marble has long been revered for its pristine beauty and spiritual significance. 
                In contemporary home design, incorporating marble temples and pooja rooms brings together 
                traditional craftsmanship with modern aesthetics, creating spaces that honor both heritage and innovation.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                The intricate carvings and meticulous attention to detail in marble temple design reflect not just 
                artistic excellence but also a deep understanding of spiritual architecture. Each element, from the 
                placement of the mandir to the selection of materials, plays a crucial role in creating an environment 
                that promotes peace, devotion, and positive energy flow throughout your home.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Whether you're designing a compact mandir for an apartment or a spacious pooja room for a traditional 
                home, the versatility of Vietnam White Marble ensures that your sacred space will be both functional 
                and beautiful, standing as a testament to timeless design and spiritual devotion for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default BlogDetailPage

