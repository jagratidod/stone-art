const Logo = () => (
  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 flex items-center justify-center shadow-lg">
    <svg 
      className="w-12 h-12 md:w-16 md:h-16" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" stroke="#78350f" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="50" r="35" stroke="#78350f" strokeWidth="1.5" fill="none"/>
      <circle cx="50" cy="50" r="20" stroke="#78350f" strokeWidth="1.5" fill="none"/>
      <circle cx="50" cy="50" r="8" fill="#78350f"/>
      <path d="M 50 2 L 50 12 M 50 88 L 50 98 M 2 50 L 12 50 M 88 50 L 98 50" stroke="#78350f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 35 15 L 40 20 M 65 15 L 60 20 M 35 85 L 40 80 M 65 85 L 60 80" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M 15 35 L 20 40 M 85 35 L 80 40 M 15 65 L 20 60 M 85 65 L 80 60" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M 50 25 Q 45 30 50 35 Q 55 30 50 25" stroke="#78350f" strokeWidth="1.5" fill="none"/>
      <path d="M 50 65 Q 45 70 50 75 Q 55 70 50 65" stroke="#78350f" strokeWidth="1.5" fill="none"/>
      <path d="M 25 50 Q 30 45 35 50 Q 30 55 25 50" stroke="#78350f" strokeWidth="1.5" fill="none"/>
      <path d="M 75 50 Q 70 45 65 50 Q 70 55 75 50" stroke="#78350f" strokeWidth="1.5" fill="none"/>
    </svg>
  </div>
)

export default Logo

