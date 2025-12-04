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
import { useState } from "react";
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
          {/* Desktop Navbar (>= lg) */}
          <ul className="hidden lg:flex items-center justify-center">
            {/* LEFT LINKS */}
            <li>
              <div className="flex items-center gap-4">
                {/* HOUSE OF TILAK */}
                <div 
                  onMouseEnter={() => setHoveredDropdown('house-of-tilak')}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className={linkClass}>
                    HOUSE OF TILAK
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </div>

                {/* PROJECTS */}
                <div 
                  onMouseEnter={() => setHoveredDropdown('projects')}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className={linkClass}>
                    PROJECTS
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </div>

                {/* OUR CREATIONS */}
                <div 
                  onMouseEnter={() => setHoveredDropdown('our-creations')}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className={linkClass}>
                    OUR CREATIONS
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8B8B5C] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </div>

                {/* OUR SERVICES */}
                <div 
                  onMouseEnter={() => setHoveredDropdown('our-services')}
                  onMouseLeave={() => setHoveredDropdown(null)}
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

          {/* Shared Dropdown Container - Full Navbar Width - Outside UL */}
          <div
            onMouseEnter={(e) => {
              // Keep dropdown open when hovering over it
              e.stopPropagation()
            }}
            onMouseLeave={() => setHoveredDropdown(null)}
            className={`absolute left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden z-50 ${
              hoveredDropdown
                ? 'opacity-100 h-[200px] translate-y-0 pointer-events-auto'
                : 'opacity-0 h-0 -translate-y-4 pointer-events-none'
            }`}
            style={{
              top: '100%',
              marginTop: '-2px', // Overlap slightly to prevent gap
              transform: hoveredDropdown ? 'translateY(0)' : 'translateY(-16px)',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, height 0.5s ease-in-out'
            }}
          >
            {hoveredDropdown === 'house-of-tilak' && <HouseOfTilakDropdown />}
            {hoveredDropdown === 'projects' && <ProjectsDropdown />}
            {hoveredDropdown === 'our-creations' && <OurCreationsDropdown />}
            {hoveredDropdown === 'our-services' && <OurServicesDropdown />}
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