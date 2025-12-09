import { Link } from 'react-router-dom'

const DreamMurtisDropdown = () => {
  // Gods list matching the image order
  const gods = [
    'Krishna ji',
    'Natraja',
    'Shiva',
    'Ganesha',
    'Buddha',
    'Sai Baba',
    'Balaji',
    'Hanuman ji',
    'Vishnu ji',
    'Nandi',
    'Jain Gods',
    'Laddu Gopal'
  ]

  // Helper function to get route for each god
  const getGodRoute = (godName) => {
    const routeMap = {
      'Krishna ji': '/murti/krishna-ji',
      'Natraja': '/murti/natraja',
      'Shiva': '/murti/shiva',
      'Ganesha': '/murti/ganesha',
      'Buddha': '/murti/buddha',
      'Sai Baba': '/murti/sai-baba',
      'Balaji': '/murti/balaji',
      'Hanuman ji': '/murti/hanuman',
      'Vishnu ji': '/murti/vishnu-ji',
      'Nandi': '/murti/nandi',
      'Jain Gods': '/murti/jain-gods',
      'Laddu Gopal': '/murti/laddu-gopal'
    }
    return routeMap[godName] || `/murti/${godName.toLowerCase().replace(/\s+/g, '-')}`
  }

  const goddesses = [
    'Durga',
    'Kali',
    'Laxmi',
    'Saraswati',
    'Radha'
  ]

  const pairs = [
    'Ram Darbar',
    'Shiv Parivar',
    'Ganesh Laxmi',
    'Ganesh Laxmi Saraswati',
    'Radha Krishna',
    'Vishnu Laxmi',
    'Jugal Jodi'
  ]

  const holyCow = [
    'NANDI'
  ]

  return (
    <div className="w-full h-full flex items-start py-4">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Gods Column */}
          <div>
            <h3 className="font-semibold text-black mb-3 text-sm md:text-base uppercase tracking-wide">Gods</h3>
            <ul className="space-y-2">
              {gods.map((god, index) => (
                <li key={index}>
                  <Link
                    to={getGodRoute(god)}
                    className="text-gray-700 hover:text-[#8B7355] transition-colors text-xs md:text-sm"
                  >
                    {god}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Goddesses Column */}
          <div>
            <h3 className="font-semibold text-black mb-3 text-sm md:text-base uppercase tracking-wide">Goddesses</h3>
            <ul className="space-y-2">
              {goddesses.map((goddess, index) => (
                <li key={index}>
                  <Link
                    to={`/murti/${goddess.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-[#8B7355] transition-colors text-xs md:text-sm"
                  >
                    {goddess}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pairs Column */}
          <div>
            <h3 className="font-semibold text-black mb-3 text-sm md:text-base uppercase tracking-wide">Pairs</h3>
            <ul className="space-y-2">
              {pairs.map((pair, index) => (
                <li key={index}>
                  <Link
                    to={`/murti/${pair.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-[#8B7355] transition-colors text-xs md:text-sm"
                  >
                    {pair}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Holy Cow Column */}
          <div>
            <h3 className="font-semibold text-black mb-3 text-sm md:text-base uppercase tracking-wide">Holy Cow</h3>
            <ul className="space-y-2">
              {holyCow.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/murti/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-[#8B7355] transition-colors text-xs md:text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamMurtisDropdown

