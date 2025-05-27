import CulturalCategorization from "../comps/ElearningComps/ElearningCulture"
import LastDiscoveredSection from "../comps/ElearningComps/ElearningDiscovery"
import MostFrequentGallery from "../comps/ElearningComps/ElearningGallery"
import TopInstructorSection from "../comps/ElearningComps/ElearningTopInstructor"
import RwandanCultureHero from "../comps/ElearningComps/HeroElearning"



const Elearning = () => {
  return (
    <>
      <RwandanCultureHero/>
      <CulturalCategorization/>
      <MostFrequentGallery/>
      <LastDiscoveredSection/>
      <TopInstructorSection/>
    </>
  )
}

export default Elearning
