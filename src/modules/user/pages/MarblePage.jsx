import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from '../../../utils/constants'

// Import all marble images
import blackGoldMarble from '../../../assets/our products/marble/black-gold-marble.jpg'
import brunoWhiteMarble from '../../../assets/our products/marble/bruno-white-marble.jpg'
import cappuccinoBrownMarble from '../../../assets/our products/marble/cappuccino-brown-marble.jpg'
import carbonBlackMarble from '../../../assets/our products/marble/carbon-black-marble.jpg'
import cherryGoldMarble from '../../../assets/our products/marble/cherry-gold-marble.jpg'
import chocoBrownMarble from '../../../assets/our products/marble/choco-brown-marble.jpg'
import crocodileGreenMarble from '../../../assets/our products/marble/crocodile-green-marble.jpg'
import fantasyBlackMarble from '../../../assets/our products/marble/fantasy-black-marble.jpg'
import fantasyBrownMarble from '../../../assets/our products/marble/fantasy-brown-marble.jpg'
import fantasyGreyMarble from '../../../assets/our products/marble/fantasy-grey-marble.jpg'
import indianTorontoMarble from '../../../assets/our products/marble/indian-toronto-marblejpg.jpg'
import indianWhiteMarble from '../../../assets/our products/marble/indian-white-marble.jpg'
import katniBeigeMarble from '../../../assets/our products/marble/katni-beige-marble.jpg'
import levantoRedMarble from '../../../assets/our products/marble/levanto-red-marble.jpg'
import linerBlackMarble from '../../../assets/our products/marble/liner-black-marble.jpg'
import linerGreyMarble from '../../../assets/our products/marble/liner-grey-marble.jpg'
import majesticGoldMarble from '../../../assets/our products/marble/majestic-gold-marble.jpg'
import makranaWhiteMarble from '../../../assets/our products/marble/makrana-white-marble.jpg'
import marineBlackMarble from '../../../assets/our products/marble/marine-black-marble.jpg'
import moltenBlackMarble from '../../../assets/our products/marble/molten-black-marble.jpg'
import omanRedMarble from '../../../assets/our products/marble/oman-red-marble.jpg'
import onyxGreenMarble from '../../../assets/our products/marble/onyx-green-marble.jpg'
import onyxPinkMarble from '../../../assets/our products/marble/onyx-pink-marble-stone.jpg'
import opelWhiteMarble from '../../../assets/our products/marble/opel-white-marble.jpg'
import pantherBrownMarble from '../../../assets/our products/marble/panther-brown-marble.jpg'
import pantherIndianWhiteMarble from '../../../assets/our products/marble/panther-indian-white-marble.jpg'
import pantherYellowIndianMarble from '../../../assets/our products/marble/panther-yellow-indian-marble.jpg'
import perlatoBeigeMarble from '../../../assets/our products/marble/perlato-beige-marble.jpg'
import pistaWhiteMarble from '../../../assets/our products/marble/pista-white-marble.jpg'
import purpleWhiteMarble from '../../../assets/our products/marble/purple-white-marble.jpg'
import rainforestBrownMarble from '../../../assets/our products/marble/rainforest-brown-marble.jpg'
import rainforestGoldMarble from '../../../assets/our products/marble/rainforest-gold-marble.jpg'
import rainforestGreenMarble from '../../../assets/our products/marble/rainforest-green-marble.jpg'
import rajnagarWhiteMarble from '../../../assets/our products/marble/rajnagar-white-marble.jpg'
import roseWoodMarble from '../../../assets/our products/marble/rose-wood-marble.jpg'
import silverGreyMarble from '../../../assets/our products/marble/silver-grey-marble.jpg'
import smokeGreyMarble from '../../../assets/our products/marble/smoke-grey-marble.jpg'
import spiderGreenMarble from '../../../assets/our products/marble/spider-green-marble.jpg'
import teakBrownMarble from '../../../assets/our products/marble/teak-brown-marble.jpg'
import udaipurGreenMarble from '../../../assets/our products/marble/udaipur-green-marble.jpg'
import udaipurPinkMarble from '../../../assets/our products/marble/udaipur-pink-marble.jpg'
import wonderBeigeMarble from '../../../assets/our products/marble/wonder-beige-marble.jpg'
import wonderPinkMarble from '../../../assets/our products/marble/wonder-pink-marble.jpg'
import marbleHeroImg from '../../../assets/our products/marble .jpg'

const MarblePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowProducts,
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
  const navigate = useNavigate()
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    type: 'DOMESTIC',
    fullName: '',
    email: '',
    phone: '',
    city: '',
    aboutYourself: '',
    lookingFor: '',
    budget: '',
    timeline: '',
    additionalInfo: '',
    designReferences: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! Your form has been submitted.')
    setFormStep(1)
    setFormData({
      type: 'DOMESTIC',
      fullName: '',
      email: '',
      phone: '',
      city: '',
      aboutYourself: '',
      lookingFor: '',
      budget: '',
      timeline: '',
      additionalInfo: '',
      designReferences: null
    })
  }

  const marbleImages = [
    { id: 1, name: 'Black Gold Marble', image: blackGoldMarble },
    { id: 2, name: 'Bruno White Marble', image: brunoWhiteMarble },
    { id: 3, name: 'Cappuccino Brown Marble', image: cappuccinoBrownMarble },
    { id: 4, name: 'Carbon Black Marble', image: carbonBlackMarble },
    { id: 5, name: 'Cherry Gold Marble', image: cherryGoldMarble },
    { id: 6, name: 'Choco Brown Marble', image: chocoBrownMarble },
    { id: 7, name: 'Crocodile Green Marble', image: crocodileGreenMarble },
    { id: 8, name: 'Fantasy Black Marble', image: fantasyBlackMarble },
    { id: 9, name: 'Fantasy Brown Marble', image: fantasyBrownMarble },
    { id: 10, name: 'Fantasy Grey Marble', image: fantasyGreyMarble },
    { id: 11, name: 'Indian Toronto Marble', image: indianTorontoMarble },
    { id: 12, name: 'Indian White Marble', image: indianWhiteMarble },
    { id: 13, name: 'Katni Beige Marble', image: katniBeigeMarble },
    { id: 14, name: 'Levanto Red Marble', image: levantoRedMarble },
    { id: 15, name: 'Liner Black Marble', image: linerBlackMarble },
    { id: 16, name: 'Liner Grey Marble', image: linerGreyMarble },
    { id: 17, name: 'Majestic Gold Marble', image: majesticGoldMarble },
    { id: 18, name: 'Makrana White Marble', image: makranaWhiteMarble },
    { id: 19, name: 'Marine Black Marble', image: marineBlackMarble },
    { id: 20, name: 'Molten Black Marble', image: moltenBlackMarble },
    { id: 21, name: 'Oman Red Marble', image: omanRedMarble },
    { id: 22, name: 'Onyx Green Marble', image: onyxGreenMarble },
    { id: 23, name: 'Onyx Pink Marble', image: onyxPinkMarble },
    { id: 24, name: 'Opel White Marble', image: opelWhiteMarble },
    { id: 25, name: 'Panther Brown Marble', image: pantherBrownMarble },
    { id: 26, name: 'Panther Indian White Marble', image: pantherIndianWhiteMarble },
    { id: 27, name: 'Panther Yellow Indian Marble', image: pantherYellowIndianMarble },
    { id: 28, name: 'Perlato Beige Marble', image: perlatoBeigeMarble },
    { id: 29, name: 'Pista White Marble', image: pistaWhiteMarble },
    { id: 30, name: 'Purple White Marble', image: purpleWhiteMarble },
    { id: 31, name: 'Rainforest Brown Marble', image: rainforestBrownMarble },
    { id: 32, name: 'Rainforest Gold Marble', image: rainforestGoldMarble },
    { id: 33, name: 'Rainforest Green Marble', image: rainforestGreenMarble },
    { id: 34, name: 'Rajnagar White Marble', image: rajnagarWhiteMarble },
    { id: 35, name: 'Rose Wood Marble', image: roseWoodMarble },
    { id: 36, name: 'Silver Grey Marble', image: silverGreyMarble },
    { id: 37, name: 'Smoke Grey Marble', image: smokeGreyMarble },
    { id: 38, name: 'Spider Green Marble', image: spiderGreenMarble },
    { id: 39, name: 'Teak Brown Marble', image: teakBrownMarble },
    { id: 40, name: 'Udaipur Green Marble', image: udaipurGreenMarble },
    { id: 41, name: 'Udaipur Pink Marble', image: udaipurPinkMarble },
    { id: 42, name: 'Wonder Beige Marble', image: wonderBeigeMarble },
    { id: 43, name: 'Wonder Pink Marble', image: wonderPinkMarble }
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      <Header 
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowProducts={onShowProducts}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
        onShowLocation={onShowLocation}
        onShowBooking={onShowBooking}
      />

      {/* Hero Image Container with Form Overlay */}
      <div className="relative w-full overflow-hidden" style={{ height: '75vh', minHeight: '600px' }}>
        {/* Background Image */}
        <img 
          src={marbleHeroImg} 
          alt="Marble Background" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Hero Text Overlay - Left Side */}
        <div className="absolute top-16 md:top-24 lg:top-32 left-4 md:left-6 lg:left-8 xl:left-12 z-10 max-w-xl md:max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight uppercase tracking-wide drop-shadow-lg">
            MARBLE
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white font-light mb-2 drop-shadow-md">
            Luxury and Elegance in Every Slab
          </p>
          <p className="text-xs md:text-sm text-white/90 font-light leading-relaxed drop-shadow-md">
            Explore our premium collection of marble varieties, showcasing timeless beauty and sophistication for your architectural and design needs.
          </p>
        </div>

        {/* Form Container - Overlay on Right Side, Fits Image Height */}
        <div id="expert-form-container" className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-[85%] sm:w-[320px] md:w-[340px] max-w-[calc(100%-32px)] bg-white rounded-xl md:rounded-2xl shadow-2xl z-20 flex flex-col backdrop-blur-sm bg-white/95">
          {/* Header */}
          <div className="flex items-center justify-between p-3 md:p-4 border-b-2 border-gray-200 bg-gradient-to-r from-[#8B7355]/10 to-transparent flex-shrink-0 rounded-t-xl md:rounded-t-2xl">
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wide" style={{ color: '#8B7355' }}>Talk to Our Expert</h3>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#8B7355]/10" style={{ color: '#8B7355' }}>{formStep}/2</span>
          </div>

          <div className="px-3 pt-3 pb-4 md:px-4 md:pt-4 md:pb-4 bg-white overflow-y-auto flex-1 rounded-b-xl md:rounded-b-2xl">
            {formStep === 1 ? (
              <form className="space-y-2.5" onSubmit={(e) => { e.preventDefault(); setFormStep(2); }}>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="DOMESTIC"
                      checked={formData.type === 'DOMESTIC'}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-3 h-3 accent-amber-600"
                    />
                    <span className="text-xs font-medium" style={{ color: formData.type === 'DOMESTIC' ? '#8B7355' : '#333' }}>DOMESTIC</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="INTERNATIONAL"
                      checked={formData.type === 'INTERNATIONAL'}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-3 h-3 accent-amber-600"
                    />
                    <span className="text-xs font-medium" style={{ color: formData.type === 'INTERNATIONAL' ? '#8B7355' : '#333' }}>INTERNATIONAL</span>
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />

                <div>
                  <label className="block text-xs font-medium mb-1">Phone number</label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-1 px-2 bg-gray-50 border-r">
                      <span className="text-sm">🇮🇳</span>
                      <span className="text-xs">+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="City *"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />

                <div>
                  <label className="block text-xs font-medium mb-1.5">Tell us about yourself *</label>
                  <div className="space-y-1.5">
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="aboutYourself"
                        value="homeowner"
                        checked={formData.aboutYourself === 'homeowner'}
                        onChange={(e) => setFormData({...formData, aboutYourself: e.target.value})}
                        className="mt-0.5 w-3 h-3 accent-amber-600 flex-shrink-0"
                        required
                      />
                      <span className="text-xs leading-relaxed">I am a homeowner looking for a pooja unit or pooja room</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="aboutYourself"
                        value="designer"
                        checked={formData.aboutYourself === 'designer'}
                        onChange={(e) => setFormData({...formData, aboutYourself: e.target.value})}
                        className="mt-0.5 w-3 h-3 accent-amber-600 flex-shrink-0"
                        required
                      />
                      <span className="text-xs leading-relaxed">I am an interior designer/consultant seeking solutions for my client</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  style={{ backgroundColor: '#8B7355' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                >
                  NEXT →
                </button>
              </form>
            ) : (
              <form className="space-y-2.5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold mb-1.5">What are you looking for? *</label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="lookingFor"
                        value="singular"
                        checked={formData.lookingFor === 'singular'}
                        onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                        className="w-3 h-3 accent-amber-600"
                        required
                      />
                      <span className="text-xs">Singular Marble Mandir Unit</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="lookingFor"
                        value="complete"
                        checked={formData.lookingFor === 'complete'}
                        onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                        className="w-3 h-3 accent-amber-600"
                        required
                      />
                      <span className="text-xs">Complete Pooja Room Solution</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5">What is your estimated budget? *</label>
                  <div className="space-y-1.5">
                    {BUDGET_OPTIONS.map((budget) => (
                      <label key={budget} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          checked={formData.budget === budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-3 h-3 accent-amber-600"
                          required
                        />
                        <span className="text-xs">{budget}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5">What is your timeline for the project? *</label>
                  <div className="space-y-1.5">
                    {TIMELINE_OPTIONS.map((timeline) => (
                      <label key={timeline} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline}
                          checked={formData.timeline === timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="w-3 h-3 accent-amber-600"
                          required
                        />
                        <span className="text-xs">{timeline}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  placeholder="Please share a bit more about your needs"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
                />

                <div>
                  <input
                    type="file"
                    id="designReferences"
                    accept="image/*,.pdf"
                    multiple
                    onChange={(e) => setFormData({...formData, designReferences: e.target.files})}
                    className="hidden"
                  />
                  <label
                    htmlFor="designReferences"
                    className="block w-full text-white py-2 rounded-lg text-xs text-center font-medium cursor-pointer transition-colors shadow-md"
                    style={{ backgroundColor: '#8B7355' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                  >
                    UPLOAD DESIGN REFERENCES
                  </label>
                  {formData.designReferences && formData.designReferences.length > 0 && (
                    <p className="text-xs text-gray-600 mt-1">
                      {formData.designReferences.length} file(s) selected
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="flex-1 bg-white py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors shadow-md border-2"
                    style={{ color: '#8B7355', borderColor: '#8B7355' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f9f9f9'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white'
                    }}
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="flex-1 text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#8B7355' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#7a6349'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8B7355'}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Images Gallery Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 uppercase tracking-wide">
              OUR MARBLE COLLECTION
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our premium collection of marble varieties, showcasing timeless beauty and sophistication for your architectural and design needs.
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {marbleImages.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const productData = {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    specifications: {
                      'Origin': 'North India',
                      'Color': 'Various',
                      'Finish': 'Honed, Brushed, Natural, Tumbled',
                      'Offered In': 'Tiles, Pavers, Crazy, Mosaic',
                      'Tiles Size': '30 X 30, 30 X 60, 60 X 60 CM',
                      'Price': '₹45 - ₹65 per sq.ft'
                    }
                  }
                  sessionStorage.setItem(`stoneProduct_marble_${item.id}`, JSON.stringify(productData))
                  navigate(`/products/marble/${item.id}`)
                }}
                className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#8B7355] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      filter: 'contrast(1.25) saturate(1.1) brightness(1.02)',
                      WebkitFilter: 'contrast(1.25) saturate(1.1) brightness(1.02)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg uppercase">{item.name}</h3>
                  </div>
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

export default MarblePage

