import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingButtons from '../components/common/FloatingButtons'
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from '../utils/constants'

// Import hero image
import graniteHeroImage from '../assets/our products/granite.jpg'

// Import all granite images
import alaskaGold from '../assets/our products/granite/ALASKA GOLD.jpeg'
import alaskaRed from '../assets/our products/granite/ALASKA RED.jpeg'
import alaskaWhite from '../assets/our products/granite/ALASKA WHITE.png'
import anglo from '../assets/our products/granite/Anglo.jpeg'
import anticoCream from '../assets/our products/granite/ANTICO CREAM.jpg'
import arawaliLeatherBrown from '../assets/our products/granite/Arawali Leather Brown.jpeg'
import articPearl from '../assets/our products/granite/ARTIC PEARL.jpeg'
import avalonWhite from '../assets/our products/granite/AVALON WHITE.jpg'
import azulCeleste from '../assets/our products/granite/AZUL CELESTE.jpg'
import balaFlower from '../assets/our products/granite/BALA FLOWER.jpeg'
import balticBrown from '../assets/our products/granite/baltic brown.jpeg'
import bangalBrown from '../assets/our products/granite/BANGAL BROWN.jpeg'
import bangalGreen from '../assets/our products/granite/BANGAL GREEN.jpg'
import biancaRosa from '../assets/our products/granite/BIANCA ROSA.jpeg'
import biscottiWhite from '../assets/our products/granite/BISCOTTI WHITE.jpeg'
import blackMarkino from '../assets/our products/granite/black-markino.jpeg'
import blueDunes from '../assets/our products/granite/BLUE DUNES.jpg'
import blueFlower from '../assets/our products/granite/BLUE FLOWER.jpeg'
import brazilBrown from '../assets/our products/granite/brazil brown.jpeg'
import brunoRed from '../assets/our products/granite/Bruno Red.jpeg'
import cWhite from '../assets/our products/granite/C WHITE.jpeg'
import cheemaBlue from '../assets/our products/granite/Cheema Blue.jpeg'
import cherryBrown from '../assets/our products/granite/Cherry Brown.jpeg'
import chesnutBrown from '../assets/our products/granite/Chesnut Brown.jpeg'
import chimaPink from '../assets/our products/granite/Chima Pink.png'
import chinaWhite from '../assets/our products/granite/China White.jpeg'
import commando from '../assets/our products/granite/Commando.jpeg'
import copperSilk from '../assets/our products/granite/Copper Silk.jpeg'
import coralBlack from '../assets/our products/granite/CORAL BLACK.jpeg'
import crystalBrown from '../assets/our products/granite/CRYSTAL BROWN.jpeg'
import crystalBue from '../assets/our products/granite/Crystal Bue.jpeg'
import crystalYellow from '../assets/our products/granite/CRYSTAL YELLOW.jpeg'
import crystalYellowJpg from '../assets/our products/granite/Crystal Yellow.jpg'
import delicatusWhite from '../assets/our products/granite/DELICATUS WHITE.jpg'
import dessertBrown from '../assets/our products/granite/DESSERT BROWN.jpeg'
import dessertGold from '../assets/our products/granite/DESSERT GOLD.jpeg'
import dessertGreen from '../assets/our products/granite/DESSERT GREEN.jpeg'
import dessertPink from '../assets/our products/granite/Dessert Pink.jpeg'
import espenWhite from '../assets/our products/granite/ESPEN WHITE.png'
import fishBlack from '../assets/our products/granite/fish-black.jpeg'
import forrestGreen from '../assets/our products/granite/FORREST GREEN.jpeg'
import ganpatiMarquino from '../assets/our products/granite/GANPATI MARQUINO.jpeg'
import greenPeal from '../assets/our products/granite/GREEN PEAL.jpeg'
import jirawalWhite from '../assets/our products/granite/Jirawal White.jpeg'
import korana from '../assets/our products/granite/KORANA.jpeg'
import kotkasta from '../assets/our products/granite/KOTKASTA.jpg'
import meralBlack from '../assets/our products/granite/Meral-Black.jpeg'
import metallica from '../assets/our products/granite/Metallica.jpeg'
import monteCristo from '../assets/our products/granite/MONTE CRISTO.jpeg'
import nasoli from '../assets/our products/granite/Nasoli.jpeg'
import newParadiseBlack from '../assets/our products/granite/New Paradise Black.jpeg'
import nosraGold from '../assets/our products/granite/NOSRA GOLD.jpeg'
import nosraGreen from '../assets/our products/granite/NOSRA GREEN.jpeg'
import oysterWhite from '../assets/our products/granite/OYSTER WHITE.jpeg'
import pWhite from '../assets/our products/granite/P-White.jpeg'
import pentharYellow from '../assets/our products/granite/PENTHAR YELLOW.jpeg'
import petrousCream from '../assets/our products/granite/PETROUS CREAM.jpg'
import rBlack from '../assets/our products/granite/R Black.jpeg'
import raniwara from '../assets/our products/granite/RANIWARA.jpeg'
import rosyPink from '../assets/our products/granite/Rosy Pink.png'
import royalCream from '../assets/our products/granite/ROYAL CREAM.jpeg'
import silkyRed from '../assets/our products/granite/Silky Red.jpeg'
import silverStar from '../assets/our products/granite/Silver Star.jpeg'
import siraGrey from '../assets/our products/granite/SIRA GREY.jpeg'
import swhiteBig from '../assets/our products/granite/swhite-big-480x640.jpeg'
import tBrown from '../assets/our products/granite/T Brown.jpeg'
import tiger from '../assets/our products/granite/Tiger.jpeg'
import tropicalBrown from '../assets/our products/granite/TROPICAL BROWN.jpeg'
import veniceCream from '../assets/our products/granite/VENICE CREAM.jpg'
import whisperWhite from '../assets/our products/granite/WHISPER WHITE.jpeg'
import wineRed from '../assets/our products/granite/Wine Red.jpeg'

const GranitePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowProducts,
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {
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

  const graniteImages = [
    { id: 1, name: 'Alaska Gold', image: alaskaGold },
    { id: 2, name: 'Alaska Red', image: alaskaRed },
    { id: 3, name: 'Alaska White', image: alaskaWhite },
    { id: 4, name: 'Anglo', image: anglo },
    { id: 5, name: 'Antico Cream', image: anticoCream },
    { id: 6, name: 'Arawali Leather Brown', image: arawaliLeatherBrown },
    { id: 7, name: 'Artic Pearl', image: articPearl },
    { id: 8, name: 'Avalon White', image: avalonWhite },
    { id: 9, name: 'Azul Celeste', image: azulCeleste },
    { id: 10, name: 'Bala Flower', image: balaFlower },
    { id: 11, name: 'Baltic Brown', image: balticBrown },
    { id: 12, name: 'Bangal Brown', image: bangalBrown },
    { id: 13, name: 'Bangal Green', image: bangalGreen },
    { id: 14, name: 'Bianca Rosa', image: biancaRosa },
    { id: 15, name: 'Biscotti White', image: biscottiWhite },
    { id: 16, name: 'Black Markino', image: blackMarkino },
    { id: 17, name: 'Blue Dunes', image: blueDunes },
    { id: 18, name: 'Blue Flower', image: blueFlower },
    { id: 19, name: 'Brazil Brown', image: brazilBrown },
    { id: 20, name: 'Bruno Red', image: brunoRed },
    { id: 21, name: 'C White', image: cWhite },
    { id: 22, name: 'Cheema Blue', image: cheemaBlue },
    { id: 23, name: 'Cherry Brown', image: cherryBrown },
    { id: 24, name: 'Chesnut Brown', image: chesnutBrown },
    { id: 25, name: 'Chima Pink', image: chimaPink },
    { id: 26, name: 'China White', image: chinaWhite },
    { id: 27, name: 'Commando', image: commando },
    { id: 28, name: 'Copper Silk', image: copperSilk },
    { id: 29, name: 'Coral Black', image: coralBlack },
    { id: 30, name: 'Crystal Brown', image: crystalBrown },
    { id: 31, name: 'Crystal Blue', image: crystalBue },
    { id: 32, name: 'Crystal Yellow', image: crystalYellow },
    { id: 33, name: 'Crystal Yellow', image: crystalYellowJpg },
    { id: 34, name: 'Delicatus White', image: delicatusWhite },
    { id: 35, name: 'Dessert Brown', image: dessertBrown },
    { id: 36, name: 'Dessert Gold', image: dessertGold },
    { id: 37, name: 'Dessert Green', image: dessertGreen },
    { id: 38, name: 'Dessert Pink', image: dessertPink },
    { id: 39, name: 'Espen White', image: espenWhite },
    { id: 40, name: 'Fish Black', image: fishBlack },
    { id: 41, name: 'Forrest Green', image: forrestGreen },
    { id: 42, name: 'Ganpati Marquino', image: ganpatiMarquino },
    { id: 43, name: 'Green Peal', image: greenPeal },
    { id: 44, name: 'Jirawal White', image: jirawalWhite },
    { id: 45, name: 'Korana', image: korana },
    { id: 46, name: 'Kotkasta', image: kotkasta },
    { id: 47, name: 'Meral Black', image: meralBlack },
    { id: 48, name: 'Metallica', image: metallica },
    { id: 49, name: 'Monte Cristo', image: monteCristo },
    { id: 50, name: 'Nasoli', image: nasoli },
    { id: 51, name: 'New Paradise Black', image: newParadiseBlack },
    { id: 52, name: 'Nosra Gold', image: nosraGold },
    { id: 53, name: 'Nosra Green', image: nosraGreen },
    { id: 54, name: 'Oyster White', image: oysterWhite },
    { id: 55, name: 'P White', image: pWhite },
    { id: 56, name: 'Penthar Yellow', image: pentharYellow },
    { id: 57, name: 'Petrous Cream', image: petrousCream },
    { id: 58, name: 'R Black', image: rBlack },
    { id: 59, name: 'Raniwara', image: raniwara },
    { id: 60, name: 'Rosy Pink', image: rosyPink },
    { id: 61, name: 'Royal Cream', image: royalCream },
    { id: 62, name: 'Silky Red', image: silkyRed },
    { id: 63, name: 'Silver Star', image: silverStar },
    { id: 64, name: 'Sira Grey', image: siraGrey },
    { id: 65, name: 'S White Big', image: swhiteBig },
    { id: 66, name: 'T Brown', image: tBrown },
    { id: 67, name: 'Tiger', image: tiger },
    { id: 68, name: 'Tropical Brown', image: tropicalBrown },
    { id: 69, name: 'Venice Cream', image: veniceCream },
    { id: 70, name: 'Whisper White', image: whisperWhite },
    { id: 71, name: 'Wine Red', image: wineRed }
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
          src={graniteHeroImage} 
          alt="Granite Background" 
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Hero Text Overlay - Left Side */}
        <div className="absolute top-16 md:top-24 lg:top-32 left-4 md:left-6 lg:left-8 xl:left-12 z-10 max-w-xl md:max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight uppercase tracking-wide drop-shadow-lg">
            GRANITE
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white font-light mb-2 drop-shadow-md">
            Timeless Strength and Natural Beauty
          </p>
          <p className="text-xs md:text-sm text-white/90 font-light leading-relaxed drop-shadow-md">
            Explore our extensive collection of granite varieties, offering exceptional durability and stunning aesthetics for countertops, flooring, and architectural applications.
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
              OUR GRANITE COLLECTION
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our extensive collection of granite varieties, offering exceptional durability and stunning aesthetics for countertops, flooring, and architectural applications.
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
          </div>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {graniteImages.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#8B7355] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
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

export default GranitePage

