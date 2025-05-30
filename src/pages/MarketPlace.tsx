
import RwandanEcommerceLayout from '../comps/MarketPlace.tsx/MarketDis';
import EcommerceLayout from '../comps/MarketPlace.tsx/MarketHero';
import ProductCatalog from '../comps/MarketPlace.tsx/MarketProducts';
const MarketPlace = () => {
    return (
        <>
            <EcommerceLayout />
            <RwandanEcommerceLayout/>
            <ProductCatalog/>
        </>
    )
}

export default MarketPlace
