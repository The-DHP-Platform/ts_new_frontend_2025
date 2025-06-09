
import RwandanEcommerceLayout from '../comps/MarketPlace/MarketDis';
import EcommerceLayout from '../comps/MarketPlace/MarketHero';
import RecommendedItemsSection from '../comps/MarketPlace/MarketPlaceReco';
import SupplierInquiryForm from '../comps/MarketPlace/MarketPlacetrust';
import ProductCatalog from '../comps/MarketPlace/MarketProducts';
import Footer from '../comps/sharedComps/Footer';
const MarketPlace = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <EcommerceLayout />
                <RwandanEcommerceLayout />
                <ProductCatalog />
                <SupplierInquiryForm/>
                <RecommendedItemsSection/>
                <Footer />
            </div>
        </>
    )
}

export default MarketPlace
