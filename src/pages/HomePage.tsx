import RwandaHeritageHero from '../comps/HeroPage';
import BrandSlider from '../comps/SliderTab';
import HistoricalEventsGrid from '../comps/Historical';
import BooksProductView from '../comps/BestOfBest';
import BookCategoriesGrid from '../comps/FuturedHome1';
import BookSlider from '../comps/masterPice';
import ContributeSection from '../comps/contributeHome1';
import ExploreMuseums from '../comps/Mesasus';
import StoryCard from '../comps/VideoTest';
import ArticlesSection from '../comps/Artciles';

const HomePage = () => {
    return (
        <>
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
        </>
    )
}

export default HomePage
