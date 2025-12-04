import { COMPANY_INFO, FOOTER_LINKS, INDIAN_CITIES, INTERNATIONAL_CITIES } from '../../utils/constants'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-auto">
      {/* Upper Section */}
      <div className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-8">
            {/* Leftmost Column - Logo and Contact */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo />
              </div>
              <h3 className="text-base md:text-lg font-bold uppercase mb-3">{COMPANY_INFO.name}</h3>
              <p className="text-sm md:text-base mb-3 leading-relaxed">
                Address: {COMPANY_INFO.address}
              </p>
              <p className="text-sm md:text-base mb-2">
                Call: {COMPANY_INFO.phone}
              </p>
              <p className="text-sm md:text-base">
                Email: {COMPANY_INFO.email}
              </p>
            </div>

            {/* HOUSE OF TILAK Column */}
            <div>
              <h3 className="text-base md:text-lg font-bold uppercase mb-4">{COMPANY_INFO.name}</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.houseOfTilak.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm md:text-base hover:opacity-70 transition-opacity">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK LINKS Column */}
            <div>
              <h3 className="text-base md:text-lg font-bold uppercase mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm md:text-base hover:opacity-70 transition-opacity">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL Column */}
            <div>
              <h3 className="text-base md:text-lg font-bold uppercase mb-4">LEGAL</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm md:text-base hover:opacity-70 transition-opacity">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEED HELP Column with Social Media */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base md:text-lg font-bold uppercase">NEED HELP</h3>
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" className="w-5 h-5 hover:opacity-70 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <ul className="space-y-2">
                {FOOTER_LINKS.needHelp.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm md:text-base hover:opacity-70 transition-opacity">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="w-full px-4 md:px-8 lg:px-12 py-6 md:py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* LOCATIONS Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-base md:text-lg font-bold uppercase">LOCATIONS</h3>
            </div>
            <p className="text-sm md:text-base mb-2">Marble Temple Across India:</p>
            <div className="text-xs md:text-sm text-gray-300 flex flex-wrap gap-2">
              {INDIAN_CITIES.map((city, index) => (
                <span key={index}>
                  {city}
                  {index < INDIAN_CITIES.length - 1 && <span className="text-white">|</span>}
                </span>
              ))}
            </div>
            <p className="text-sm md:text-base mb-2 mt-4">Marble Temple Across The Globe:</p>
            <div className="text-xs md:text-sm text-gray-300 flex flex-wrap gap-2">
              {INTERNATIONAL_CITIES.map((city, index) => (
                <span key={index}>
                  {city}
                  {index < INTERNATIONAL_CITIES.length - 1 && <span className="text-white">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* INTERESTS Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16c-1.777 0-3.374-.61-4.668-1.973z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-base md:text-lg font-bold uppercase">INTERESTS</h3>
            </div>
            <a href="#" className="text-sm md:text-base hover:opacity-70 transition-opacity">Jain Temple</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full px-4 md:px-8 lg:px-12 py-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs md:text-sm text-center text-gray-400">
            All Rights Reserved @2025 Tilak Stone Arts India
          </p>
        </div>
      </div>

      {/* Content Section - Footer SEO Content */}
      <FooterContent />
    </footer>
  )
}

const FooterContent = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-white">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Marble Temples for Home – Welcome to Tilak Stone Arts
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Here at Tilak Stone Arts, we provide an astonishing selection of Hindu temples for home designed with modern craftsmanship to enhance the aesthetic appeal of traditional furniture.
          </p>
        </div>

        {/* Temple Types */}
        <div className="space-y-6 mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Big Marble Temple for Home</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Our big marble temple for home selection serves as an elaborate spiritual centerpiece fitting for these types of spaces. These temples serve as grand shrines for your home.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Stone Temple for Home</h2>
            <p className="text-base md:text-lg leading-relaxed">
              This carefully crafted big temple for home brings out the aesthetic quality along with the durability, providing a much-needed touch of classic hindering craftsmanship to your home.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Custom Marble Temple for Home</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Specifically crafted to serve a unique purpose, our customized hindu temple designs for home for home enables designers to personalize the prayer area according to their spatial and kink'd preference, offering a one-of-a-kind experience for the user.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Jain Marble Temple for Home</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Elegance and devotion in one design, the Jain Marble Temple seamlessly integrates traditional Jains architecture, while fulfilling the distinctly necessary religious virtue at home.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Readymade Temple for Home</h2>
            <p className="text-base md:text-lg leading-relaxed">
              The convenience offered by this readymade pooja temple for home has stunning beauty allowing for effortless creation of a sacred environment.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Features of Our Temples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Spiritual Ambiance:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Exceptional care enables us to deliver an inspiring feeling of solace, ideal for prayer and meditation, something we try to inspire in each marble temple for home big size.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Customization:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                We provide both simple temple designs and intricate, sophisticated Hindu temple designs for customization to fulfill your requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Choices */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Choices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">White Marble Mandir for Home:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                The white on white piece exudes fullness and understatement calming grace making this marble mandir for home a perfect fit in any styled dwelling.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Big Mandir for Home:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                A statement alternative for a big, marble pooja mandir for home style adds a significant joyful playfulness for slightly more lighthearted spaces.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Mandir for Home Marble:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Traditional and modern decors blend together seamlessly, so a white marble temple for home is a great place for easy, everyday worship.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Luxury Marble Mandir for Home:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Perfect for anyone in pursuit of magnificence, big stone mandir for home are an impactful piece for creating an unrivaled meditative space.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Tilak Stone Arts */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Tilak Stone Arts?</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Quality Craftsmanship:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Our temples are crafted with the utmost precision and care to offer the best simple temple design for home because we strive to exceed customer expectations with our detailed work.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Comprehensive Range:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                From stone mandirs, simple home temple marble design, to premium marble temple for home, we have everything that you need.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Blend of Traditional and Contemporary:</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Our stone temple design for home is modern and elegant but also captures the essence of traditional spirituality, hence making each temple beautiful and significant.
              </p>
            </div>
          </div>
        </div>

        {/* Find Your Ideal Temple */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Ideal Temple</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Tilak Stone Arts aims to provide the widest possible selection of marble pooja mandir designs for home, starting from stone temple design for home to grand home temple marble design. Whether you are looking for a simple temple design for home or something as grand as a marble mandir for home, we have the perfect temple for your needs. Check our collection of temple mandir for home today and help transform your home into a place of spirituality and elegance.
          </p>
        </div>

        {/* Discover Timeless Elegance */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Discover Timeless Elegance: Handcrafted Marble Temples for Your Sacred Space
          </h2>
        </div>

        {/* Finding the Perfect Marble Mandir Online */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Finding the Perfect Marble Mandir Online</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Searching for a marble mandir online can feel overwhelming. There are countless options, but not all offer the quality craftsmanship your sacred space deserves.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            When looking for a luxury marble mandir, details matter. The precision of carving work, the purity of the stone, and the thoughtfulness of design for a marble temple all contribute to creating a truly divine atmosphere in your home.
          </p>
        </div>

        {/* Why Choose the Best Marble Temple Manufacturer */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose the Best Marble Temple Manufacturer</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Not all marble temple manufacturers in India deliver the same quality. The difference lies in expertise, material selection, and dedication to preserving ancient craftsmanship while embracing innovative techniques.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            The best marble temple manufacturer combines centuries-old carving traditions with modern design sensibilities, creating pieces that honour spiritual heritage while complementing contemporary homes.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Each marble temple undergoes meticulous crafting by artisans who have honed their skills through years of practice, ensuring every curve and detail meets exacting standards.
          </p>
        </div>

        {/* Convenient Pooja Mandir with Online Shopping */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Convenient Pooja Mandir with Online Shopping Experience</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            The journey of selecting a marble temple for your home should be as meaningful as the temple itself. Pooja mandir online shopping allows you to explore various designs from the comfort of your home.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            With detailed images and comprehensive specifications, you can make an informed decision about which marble temple best suits your space and spiritual needs.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Online purchase options make it simple to bring home a masterpiece crafted in India, whether you live in Mumbai, Delhi, Bangalore, Chennai, Hyderabad, or anywhere across the globe.
          </p>
        </div>

        {/* Bringing Sacred Artistry to Your Doorstep */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Bringing Sacred Artistry to Your Doorstep</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Every marble mandir represents more than just craftsmanship—it embodies devotion transformed into art. The marble temple manufacturer tradition in India spans generations, with skills passed down through families dedicated to this sacred craft.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            From compact designs for apartments to grand temples for spacious homes, there's a marble temple perfectly suited to create your ideal sacred space, bringing peace and spiritual focus to your daily worship practices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

