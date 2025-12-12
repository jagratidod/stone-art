import CreationsNavBar from '../../../components/layout/CreationsNavBar'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import jainTempleImg from '../../../assets/ourcreation/Samavsharana.jpeg'

const JainTemplesPage = ({ onShowCart, onShowLikes }) => {
  return (
    <div className="w-full min-h-screen bg-white">
      <CreationsNavBar onShowCart={onShowCart} onShowLikes={onShowLikes} />

      {/* Horizontal Image */}
      <div className="w-full">
        <img 
          src={jainTempleImg} 
          alt="Jain Temples" 
          className="w-full h-auto object-cover"
        />
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default JainTemplesPage

