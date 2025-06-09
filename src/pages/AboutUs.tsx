
import CEOProfileSlider from '../comps/AboutComps/AboutUsCEO'
import MissionVision from '../comps/AboutComps/Aboutvision'
import DHPHeroSection from '../comps/AboutComps/HeroAbout'
import DHPServicesSection from '../comps/AboutComps/MissionAbout'
import HeritageTimeline from '../comps/AboutComps/StackAboutTimeLine'
import Footer from '../comps/sharedComps/Footer'
import DigitalHeritagePlatform from '../comps/sharedComps/Navbar'

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <DigitalHeritagePlatform />
        <DHPHeroSection />
        <DHPServicesSection />
        <HeritageTimeline />
        <MissionVision />
        <CEOProfileSlider />
        <Footer />
      </div>
    </>
  )
}

export default AboutUs
