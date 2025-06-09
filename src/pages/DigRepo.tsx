
import DigitalRepository from '../comps/DigrepoComps/DigReposHero'
import WhereToStartSection from '../comps/DigrepoComps/DigRepos'
import { useState } from 'react'
import DigitalHeritagePlatform from '../comps/sharedComps/Navbar';
import Footer from '../comps/sharedComps/Footer';

const DigRepo = () => {
    const [showThings, setShowThings] = useState<boolean>(true);
    const [viewDig, setViewDig] = useState<string>("");
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <DigitalHeritagePlatform />
                <DigitalRepository setViewDig={setViewDig} setShowThings={setShowThings} showThings={showThings} viewDig={viewDig} />
                {showThings &&
                    <WhereToStartSection />
                }
                <Footer />
            </div>
        </>
    )
}

export default DigRepo
