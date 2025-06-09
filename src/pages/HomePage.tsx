import RwandaHeritageHero from '../comps/HomePages/HeroPage';
import BrandSlider from '../comps/HomePages/SliderTab';
import HistoricalEventsGrid from '../comps/HomePages/Historical';
import BooksProductView from '../comps/HomePages/BestOfBest';
import BookCategoriesGrid from '../comps/HomePages/FuturedHome1';
import BookSlider from '../comps/HomePages/masterPice';
import ContributeSection from '../comps/HomePages/contributeHome1';
import ExploreMuseums from '../comps/HomePages/Mesasus';
import StoryCard from '../comps/HomePages/VideoTest';
import ArticlesSection from '../comps/HomePages/Artciles';
import DigitalHeritagePlatform from '../comps/sharedComps/Navbar';
import Footer from '../comps/sharedComps/Footer';

const HomePage = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <DigitalHeritagePlatform />
                <RwandaHeritageHero />
                <BrandSlider />
                <HistoricalEventsGrid />
                <BooksProductView />
                <BookCategoriesGrid />
                <BookSlider />
                <ContributeSection />
                <ExploreMuseums />
                <StoryCard />
                <ArticlesSection />
                <Footer />
            </div>
        </>
    )
}

export default HomePage
