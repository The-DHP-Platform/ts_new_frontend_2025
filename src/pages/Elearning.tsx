import CulturalCategorization from "../comps/ElearningComps/ElearningCulture"
import LastDiscoveredSection from "../comps/ElearningComps/ElearningDiscovery"
import MostFrequentGallery from "../comps/ElearningComps/ElearningGallery"
import TopInstructorSection from "../comps/ElearningComps/ElearningTopInstructor"
import RwandanCultureHero from "../comps/ElearningComps/HeroElearning"
import Footer from "../comps/sharedComps/Footer"
import DigitalHeritagePlatform from "../comps/sharedComps/Navbar"



const Elearning = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <DigitalHeritagePlatform />
        <RwandanCultureHero />
        <CulturalCategorization />
        <MostFrequentGallery />
        <LastDiscoveredSection />
        <TopInstructorSection />
        <Footer />
      </div>
    </>
  )
}

export default Elearning
