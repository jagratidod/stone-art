import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import slateHeroImage from '../../../assets/our products/slatejpg.jpg'

// Import all slate images
import autumnRusticSlate from '../../../assets/our products/slate/autumn-rustic-slate.jpg'
import blackRusticSlate from '../../../assets/our products/slate/black-rustic-slate.jpg'
import californiaGoldSlate from '../../../assets/our products/slate/california-gold-slate.jpg'
import chocolateLimestone from '../../../assets/our products/slate/chocolate-limestone.jpg'
import cobbleStones from '../../../assets/our products/slate/cobble stones.jpg'
import copperSlateNatural from '../../../assets/our products/slate/copper-slate-natural.jpg'
import darkBlackSlateStone from '../../../assets/our products/slate/dark-black-slate-stone.jpg'
import darkBlackSlate from '../../../assets/our products/slate/dark-black-slate.jpg'
import deoliGreenSlate from '../../../assets/our products/slate/deoli-green-slate.jpg'
import goldenSlateSlate from '../../../assets/our products/slate/golden-slate-slate.jpg'
import himachalGreenSlate from '../../../assets/our products/slate/himachal-green-slate.jpg'
import himachalWhiteSlate from '../../../assets/our products/slate/himachal-white-slate.jpg'
import indianAutumnSlate from '../../../assets/our products/slate/indian-autumn-slate.jpg'
import jackBlackSlate from '../../../assets/our products/slate/jack-black-slate.jpg'
import jackKundMultiColor from '../../../assets/our products/slate/jack-kund-multi-color.jpg'
import mGreenRusticSlate from '../../../assets/our products/slate/m-green-rustic-slate.jpg'
import mGreenSlate from '../../../assets/our products/slate/m-green-slate.jpg'
import nGreenSlate from '../../../assets/our products/slate/n-green-slate.jpg'
import oceanGreenSlate from '../../../assets/our products/slate/ocean-green-slate.jpg'
import pinkColorSlate from '../../../assets/our products/slate/pink-color-slate.jpg'
import rajaRedSlateStone from '../../../assets/our products/slate/raja-red-slate-stone.jpg'
import shimlaWhiteSlate from '../../../assets/our products/slate/shimla-white-slate.jpg'
import silverGreySlate from '../../../assets/our products/slate/silver-grey-slate.jpg'
import silverShineGreySlateStone from '../../../assets/our products/slate/silver-shine-grey-slate-stone.jpg'
import silverShineSlate from '../../../assets/our products/slate/silver-shine-slate.jpg'
import terraRedSlate from '../../../assets/our products/slate/terra-red-slate.jpg'
import veneerSlateSheet from '../../../assets/our products/slate/veneer-slate-sheet.jpg'
import vijayaGoldSlate from '../../../assets/our products/slate/vijaya-gold-slate.jpg'
import yellowMultiSlate from '../../../assets/our products/slate/yellow-multi-slate.jpg'
import yellowRusticSlate from '../../../assets/our products/slate/yellow-rustic-slate.jpg'
import zGreySlate from '../../../assets/our products/slate/z-grey-slate.jpg'
import zeeraGreenSlate from '../../../assets/our products/slate/zeera-green-slate.jpg'

const SlatePage = ({ 
  onShowSidebar, 
  onShowProjects, 
  onShowCreations, 
  onShowProducts,
  onShowServices, 
  onShowHowItWorks, 
  onShowLocation, 
  onShowBooking 
}) => {

  const slateImages = [
    { id: 1, name: 'Autumn Rustic Slate', image: autumnRusticSlate },
    { id: 2, name: 'Black Rustic Slate', image: blackRusticSlate },
    { id: 3, name: 'California Gold Slate', image: californiaGoldSlate },
    { id: 4, name: 'Chocolate Limestone', image: chocolateLimestone },
    { id: 5, name: 'Cobble Stones', image: cobbleStones },
    { id: 6, name: 'Copper Slate Natural', image: copperSlateNatural },
    { id: 7, name: 'Dark Black Slate Stone', image: darkBlackSlateStone },
    { id: 8, name: 'Dark Black Slate', image: darkBlackSlate },
    { id: 9, name: 'Deoli Green Slate', image: deoliGreenSlate },
    { id: 10, name: 'Golden Slate', image: goldenSlateSlate },
    { id: 11, name: 'Himachal Green Slate', image: himachalGreenSlate },
    { id: 12, name: 'Himachal White Slate', image: himachalWhiteSlate },
    { id: 13, name: 'Indian Autumn Slate', image: indianAutumnSlate },
    { id: 14, name: 'Jack Black Slate', image: jackBlackSlate },
    { id: 15, name: 'Jack Kund Multi Color', image: jackKundMultiColor },
    { id: 16, name: 'M Green Rustic Slate', image: mGreenRusticSlate },
    { id: 17, name: 'M Green Slate', image: mGreenSlate },
    { id: 18, name: 'N Green Slate', image: nGreenSlate },
    { id: 19, name: 'Ocean Green Slate', image: oceanGreenSlate },
    { id: 20, name: 'Pink Color Slate', image: pinkColorSlate },
    { id: 21, name: 'Raja Red Slate Stone', image: rajaRedSlateStone },
    { id: 22, name: 'Shimla White Slate', image: shimlaWhiteSlate },
    { id: 23, name: 'Silver Grey Slate', image: silverGreySlate },
    { id: 24, name: 'Silver Shine Grey Slate Stone', image: silverShineGreySlateStone },
    { id: 25, name: 'Silver Shine Slate', image: silverShineSlate },
    { id: 26, name: 'Terra Red Slate', image: terraRedSlate },
    { id: 27, name: 'Veneer Slate Sheet', image: veneerSlateSheet },
    { id: 28, name: 'Vijaya Gold Slate', image: vijayaGoldSlate },
    { id: 29, name: 'Yellow Multi Slate', image: yellowMultiSlate },
    { id: 30, name: 'Yellow Rustic Slate', image: yellowRusticSlate },
    { id: 31, name: 'Z Grey Slate', image: zGreySlate },
    { id: 32, name: 'Zeera Green Slate', image: zeeraGreenSlate }
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

      {/* Hero Section with Form */}
      <HeroSectionWithForm
        heroImage={slateHeroImage}
        title="SLATE"
        subtitle="Natural Elegance for Timeless Spaces"
        description="Discover our exquisite collection of slate stones, perfect for creating stunning natural surfaces with unique textures and colors."
      />

      {/* Images Gallery Section */}
      <ImageGallery
        title="OUR SLATE COLLECTION"
        description="Discover our stunning range of slate varieties, perfect for creating elegant and sophisticated spaces with natural beauty."
        images={slateImages}
        stoneType="slate"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default SlatePage

