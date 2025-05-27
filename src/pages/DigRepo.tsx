
import DigitalRepository from '../comps/DigReposHero'
import WhereToStartSection from '../comps/DigRepos'
import { useState } from 'react'

const DigRepo = () => {
    const [showThings, setShowThings] = useState<boolean>(true);
    const [viewDig, setViewDig] = useState<string>("");
    return (
        <>
            <DigitalRepository setViewDig={setViewDig} setShowThings={setShowThings} showThings={showThings} viewDig={viewDig}/>
            {showThings &&
                <WhereToStartSection />
            }

        </>
    )
}

export default DigRepo
