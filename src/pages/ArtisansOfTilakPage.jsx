import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/house of marble/our artist/Artisan.jpeg'
import artisan1 from '../assets/house of marble/our artist/slide1.jpeg'
import artisan2 from '../assets/house of marble/our artist/slide2.jpeg'
import artisan3 from '../assets/house of marble/our artist/slide3.jpeg'
import artisan4 from '../assets/house of marble/our artist/slide4.webp'
import visitStoreImage from '../assets/house of marble/our artist/visite store.png'

const ArtisansOfTilakPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowServices
}) => {
  const navigate = useNavigate()

  const artisans = [
    { id: 1, image: artisan1 },
    { id: 2, image: artisan2 },
    { id: 3, image: artisan3 },
    { id: 4, image: artisan4 }
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      <Header
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
      />

      {/* OUR ARTIST Heading */}
      <section className="w-full py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-8 md:mb-12">
            OUR ARTIST
          </h1>
        </div>
      </section>

      {/* Horizontal Artisan Image */}
      <section className="w-full px-4 md:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
            <img
              src={heroImage}
              alt="Artisans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Caption */}
      <section className="w-full py-4 md:py-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            The artisans at Aslam Marble Suppliers blend traditional stone-carving heritage with modern precision. Their expert hands and creative vision bring each design to life, ensuring every marble creation is unique, authentic, and beautifully crafted.
          </p>
        </div>
      </section>

      {/* Artisan Images Gallery - Separate Lines with Parallel Layout */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {/* First Line - Left Side: 2 Images + Caption Parallel */}
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 md:gap-8 lg:gap-12">
                {/* Two Images Side by Side */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full h-64 md:h-80 lg:h-[450px] overflow-hidden bg-gray-100">
                      <img
                        src={artisan1}
                        alt="Artisan"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full h-64 md:h-80 lg:h-[450px] overflow-hidden bg-gray-100">
                      <img
                        src={artisan2}
                        alt="Artisan"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Captions Parallel to Images */}
                <div className="flex flex-col items-start justify-center lg:justify-start gap-4 md:gap-6">
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    At Aslam Marble Suppliers, our artisans are involved at every stage of the creative journey. Their deep technical knowledge, combined with artistic intuition, allows them to contribute thoughtfully to the design and development of each masterpiece. Their insights elevate the final product, ensuring every piece is unique, meaningful, and crafted to perfection.
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    Our artisans' incredible commitment to precision, creativity, and excellence has made Aslam Marble Suppliers a trusted name in the world of marble craftsmanship. Their legacy is etched into every sculpture and structure we create, standing as a timeless testament to their skill, passion, and the rich tradition of stone artistry.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Line - Right Side: Caption + 2 Images Parallel */}
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 md:gap-8 lg:gap-12">
                {/* Caption on Left */}
                <div className="flex items-start justify-center lg:justify-start order-2 lg:order-1">
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    A single creation often takes months of patient work — every cut measured, every pattern refined, every detail perfected. Their process is not simply craftsmanship; it is devotion. This dedication reflects in the purity, symmetry, and elegance of each finished marble piece.
                  </p>
                </div>
                
                {/* Two Images Side by Side */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
                  <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full h-64 md:h-80 lg:h-[450px] overflow-hidden bg-gray-100">
                      <img
                        src={artisan3}
                        alt="Artisan"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full h-64 md:h-80 lg:h-[450px] overflow-hidden bg-gray-100">
                      <img
                        src={artisan4}
                        alt="Artisan"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Store Section - Full Width Horizontal Image with Button - Last Section */}
      <section className="w-full py-8 md:py-12">
        <div className="relative w-full h-[220px] md:h-[280px] lg:h-[350px] overflow-hidden">
          <img
            src={visitStoreImage}
            alt="Visit Store"
            className="w-full h-full object-cover"
          />
          {/* Visit Store Button - Center of Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => navigate('/visit-store')}
              className="bg-white text-black font-semibold px-6 md:px-10 lg:px-12 py-2 md:py-3 lg:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base lg:text-lg uppercase tracking-wide"
            >
              Visit Store
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default ArtisansOfTilakPage

