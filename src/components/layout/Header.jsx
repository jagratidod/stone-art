// import { Link, useLocation } from "react-router-dom";
// import logoImage from "../../assets/logo/download.png";
// import { useState } from "react";

// const Header = ({
//   variant = "default",
//   onShowSidebar,
//   onShowProjects,
//   onShowCreations,
//   onShowServices,
// }) => {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);

//   const isLocationPage =
//     variant === "location" || location.pathname === "/location";

//   const linkClass = `
//     relative pb-[3px] 
//     text-[12px] md:text-[13px] lg:text-[14px] 
//     tracking-wide uppercase text-black 
//     hover:text-[#8B8B5C] transition group
//   `;

//   return (
//     <header
//       className={`sticky top-0 z-[200] w-full ${
//         isLocationPage ? "bg-[#fffbf0]" : "bg-white"
//       } shadow`}
//     >
//       <div className="w-full flex justify-center px-3 md:px-6">
//         <nav className="w-full max-w-[1500px]">
//           {/* Desktop Navbar */}
//           <ul className="hidden lg:flex items-center justify-between py-3">
//             {/* LEFT LINKS */}
//             <li>
//               <div className="flex items-center gap-6">
//                 <button onClick={onShowSidebar} className={linkClass}>
//                   HOUSE OF TILAK
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </button>

//                 <button onClick={onShowProjects} className={linkClass}>
//                   PROJECTS
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </button>

//                 <button onClick={onShowCreations} className={linkClass}>
//                   OUR CREATIONS
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </button>

//                 <button onClick={onShowServices} className={linkClass}>
//                   OUR SERVICES
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </button>
//               </div>
//             </li>

//             {/* LOGO */}
//             <li className="flex-shrink-0 px-4">
//               <Link to="/" className="block hover:opacity-80">
//                 <img
//                   src={logoImage}
//                   alt="Logo"
//                   className="h-24 md:h-28 lg:h-32 xl:h-36 object-contain"
//                 />
//               </Link>
//             </li>

//             {/* RIGHT LINKS */}
//             <li>
//               <div className="flex items-center gap-6">
//                 <Link to="/how-it-works" className={linkClass}>
//                   HOW IT WORKS
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>

//                 <Link to="/location" className={linkClass}>
//                   LOCATION
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>

//                 <Link to="/blog" className={linkClass}>
//                   BLOG
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>

//                 <Link to="/book-appointment" className={linkClass}>
//                   BOOK APPOINTMENT
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>

//                 <Link to="/testimonials" className={linkClass}>
//                   TESTIMONIALS
//                   <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </div>
//             </li>
//           </ul>

//           {/* Mobile Nav Button */}
//           <div className="flex lg:hidden items-center justify-between py-3">
//             <Link to="/">
//               <img src={logoImage} alt="Logo" className="h-16 object-contain" />
//             </Link>

//             <button onClick={() => setOpen(!open)} className="text-3xl">
//               ☰
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {open && (
//             <div className="lg:hidden flex flex-col gap-4 pb-4">
//               <button onClick={onShowSidebar} className={linkClass}>
//                 HOUSE OF TILAK
//               </button>
//               <button onClick={onShowProjects} className={linkClass}>
//                 PROJECTS
//               </button>
//               <button onClick={onShowCreations} className={linkClass}>
//                 OUR CREATIONS
//               </button>
//               <button onClick={onShowServices} className={linkClass}>
//                 OUR SERVICES
//               </button>

//               <Link to="/how-it-works" className={linkClass}>
//                 HOW IT WORKS
//               </Link>
//               <Link to="/location" className={linkClass}>
//                 LOCATION
//               </Link>
//               <Link to="/blog" className={linkClass}>
//                 BLOG
//               </Link>
//               <Link to="/book-appointment" className={linkClass}>
//                 BOOK APPOINTMENT
//               </Link>
//               <Link to="/testimonials" className={linkClass}>
//                 TESTIMONIALS
//               </Link>
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { Link } from "react-router-dom";
import logoImage from "../../assets/logo/download.png";
import { useState, useRef, useEffect } from "react";
import HouseOfTilakDropdown from "./HouseOfTilakDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import OurCreationsDropdown from "./OurCreationsDropdown";
import OurServicesDropdown from "./OurServicesDropdown";

const Header = ({
  variant = "default",
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowServices,
}) => {
  const [open, setOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [pendingDropdown, setPendingDropdown] = useState(null);
  const timeoutRef = useRef(null);

  // Handle dropdown change with fade animation
  const handleDropdownChange = (newDropdown) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // If switching from one dropdown to another (different button)
    if (hoveredDropdown && hoveredDropdown !== newDropdown) {
      // First fade out the entire dropdown div
      setIsFading(true);
      
      // After fade out, change content and fade in
      timeoutRef.current = setTimeout(() => {
        setHoveredDropdown(newDropdown);
        
        // Small delay before fade in to ensure content is rendered
        setTimeout(() => {
          setIsFading(false);
          timeoutRef.current = null;
        }, 50);
      }, 300); // Wait for fade out animation (0.3s)
    } else if (!hoveredDropdown) {
      // Opening from closed state - direct open
      setIsFading(false);
      setHoveredDropdown(newDropdown);
    }
    // If same dropdown, do nothing
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const linkClass = `
    relative 
    text-[12px] md:text-[13px] lg:text-[14px] 
    tracking-wide uppercase text-black 
    hover:text-[#8B8B5C] transition group
  `;

  return (
    <header
      className="sticky top-0 z-[200] w-full bg-white shadow"
    >
      {/* slightly tight vertical padding */}
      <div className="w-full flex justify-center px-3 md:px-6 py-[2px] relative">
        <nav className="w-full max-w-[1500px] relative">
          {/* Hover Wrapper - Wraps buttons and dropdown */}
          <div
            className="relative"
            onMouseLeave={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
              }
              setHoveredDropdown(null);
              setIsFading(false);
            }}
          >
            {/* Desktop Navbar (>= lg) */}
            <ul className="hidden lg:flex items-center justify-center">
              {/* LEFT LINKS */}
              <li>
                <div className="flex items-center gap-4">
                  {/* HOUSE OF TILAK */}
                  <div 
                    onMouseEnter={() => handleDropdownChange('house-of-tilak')}
                  >
                    <button className={linkClass}>
                      HOUSE OF TILAK
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </div>

                  {/* PROJECTS */}
                  <div 
                    onMouseEnter={() => handleDropdownChange('projects')}
                  >
                    <button className={linkClass}>
                      PROJECTS
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </div>

                  {/* OUR CREATIONS */}
                  <div 
                    onMouseEnter={() => handleDropdownChange('our-creations')}
                  >
                    <button className={linkClass}>
                      OUR CREATIONS
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </div>

                  {/* OUR SERVICES */}
                  <div 
                    onMouseEnter={() => handleDropdownChange('our-services')}
                  >
                    <button className={linkClass}>
                      OUR SERVICES
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </div>
                </div>
              </li>

            {/* SPACE BETWEEN LEFT LINKS AND LOGO */}
            <li className="mx-8 xl:mx-10" />

            {/* LOGO */}
            <li className="flex-shrink-0">
              <Link to="/" className="block hover:opacity-80">
                <img
                  src={logoImage}
                  alt="Logo"
                  className="h-20 md:h-24 lg:h-28 xl:h-32 object-contain"
                />
              </Link>
            </li>

            {/* SPACE BETWEEN LOGO AND RIGHT LINKS */}
            <li className="mx-8 xl:mx-10" />

            {/* RIGHT LINKS */}
            <li>
              <div className="flex items-center gap-4">
                <Link to="/how-it-works" className={linkClass}>
                  HOW IT WORKS
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link to="/location" className={linkClass}>
                  LOCATION
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link to="/blog" className={linkClass}>
                  BLOG
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link to="/book-appointment" className={linkClass}>
                  BOOK APPOINTMENT
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link to="/testimonials" className={linkClass}>
                  TESTIMONIALS
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </li>
          </ul>

          {/* Shared Dropdown Container - Full Screen Width - Inside Hover Wrapper */}
          <div
            className={`absolute bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-50 ${
              hoveredDropdown
                ? 'h-[220px] translate-y-0 pointer-events-auto'
                : 'h-0 -translate-y-4 pointer-events-none'
            }`}
            style={{
              left: '50%',
              transform: hoveredDropdown 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-16px)',
              width: '100vw',
              top: 'calc(100% - 2px)',
              opacity: isFading ? 0 : (hoveredDropdown ? 1 : 0),
              transition: 'opacity 0.3s ease-in-out, transform 0.5s ease-in-out, height 0.5s ease-in-out'
            }}
          >
            {/* Dropdown Content */}
            {hoveredDropdown && (
              <>
                {hoveredDropdown === 'house-of-tilak' && <HouseOfTilakDropdown />}
                {hoveredDropdown === 'projects' && <ProjectsDropdown />}
                {hoveredDropdown === 'our-creations' && <OurCreationsDropdown />}
                {hoveredDropdown === 'our-services' && <OurServicesDropdown />}
              </>
            )}
          </div>
          </div>

          {/* Mobile / Tablet Navbar (< lg) */}
          <div className="flex lg:hidden flex-col">
            {/* Top row: centered big logo + menu button on the right */}
            <div className="flex items-center justify-between py-1">
              <div className="flex-1 flex justify-center">
                {/* Make logo bigger on smaller screens */}
                <Link to="/" className="block">
                  <img
                    src={logoImage}
                    alt="Logo"
                    className="h-20 xs:h-24 sm:h-28 object-contain"
                  />
                </Link>
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="text-3xl ml-2 flex-shrink-0"
              >
                ☰
              </button>
            </div>

            {/* Mobile Menu: ALL links centered */}
            {open && (
              <div className="flex flex-col items-center gap-3 pb-3">
                <button
                  onClick={onShowSidebar}
                  className={`${linkClass} text-center`}
                >
                  HOUSE OF TILAK
                </button>
                <button
                  onClick={onShowProjects}
                  className={`${linkClass} text-center`}
                >
                  PROJECTS
                </button>
                <button
                  onClick={onShowCreations}
                  className={`${linkClass} text-center`}
                >
                  OUR CREATIONS
                </button>
                <button
                  onClick={onShowServices}
                  className={`${linkClass} text-center`}
                >
                  OUR SERVICES
                </button>

                <Link to="/how-it-works" className={`${linkClass} text-center`}>
                  HOW IT WORKS
                </Link>
                <Link to="/location" className={`${linkClass} text-center`}>
                  LOCATION
                </Link>
                <Link to="/blog" className={`${linkClass} text-center`}>
                  BLOG
                </Link>
                <Link
                  to="/book-appointment"
                  className={`${linkClass} text-center`}
                >
                  BOOK APPOINTMENT
                </Link>
                <Link
                  to="/testimonials"
                  className={`${linkClass} text-center`}
                >
                  TESTIMONIALS
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;