import React, { useState, useEffect } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Star,
    Heart,
    ShoppingBag,
    Palette,
    Hammer,
    Music,
    Home,
    Award,
    Sparkles,
    TrendingUp,
    Shield,
    Crown,
    Plus,
    Eye
} from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    rating: number;
}

const ProductShowcase: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentBottomSlide, setCurrentBottomSlide] = useState(0);

    const products: Product[] = [
        {
            id: 1,
            name: 'Milking tools',
            price: '19',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center',
            rating: 4.8
        },
        {
            id: 2,
            name: 'Made in Rwanda',
            price: '19',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
            rating: 4.6
        },
        {
            id: 3,
            name: 'Imigongo',
            price: '19',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop&crop=center',
            rating: 4.9
        },
        {
            id: 4,
            name: 'Art ibibindi',
            price: '19',
            image: 'https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=300&h=200&fit=crop&crop=center',
            rating: 4.7
        },
        {
            id: 5,
            name: 'Amateka',
            price: '100',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center',
            rating: 4.5
        },
        {
            id: 6,
            name: 'Ibishushanyo',
            price: '39',
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=300&h=200&fit=crop&crop=center',
            rating: 4.8
        },
        {
            id: 7,
            name: 'Traditional tools',
            price: '19',
            image: 'https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=300&h=200&fit=crop&crop=center',
            rating: 4.6
        },
        {
            id: 8,
            name: 'Imitako',
            price: '10',
            image: 'https://images.unsplash.com/photo-1586031119227-db3d1f8b5ac9?w=300&h=200&fit=crop&crop=center',
            rating: 4.4
        },
        {
            id: 9,
            name: 'Imbehe ziboshye',
            price: '19',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
            rating: 4.7
        },
        {
            id: 10,
            name: 'Agacuma',
            price: '89',
            image: 'https://images.unsplash.com/photo-1586031119227-db3d1f8b5ac9?w=300&h=200&fit=crop&crop=center',
            rating: 4.9
        },
        {
            id: 11,
            name: 'Inyambo',
            price: '10',
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=300&h=200&fit=crop&crop=center',
            rating: 4.5
        },
        {
            id: 12,
            name: 'Ibyibo',
            price: '90',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
            rating: 4.8
        },
        {
            id: 13,
            name: 'Ibibindi byiza',
            price: '35',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center',
            rating: 4.6
        },
        {
            id: 14,
            name: 'Imigongo',
            price: '340',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop&crop=center',
            rating: 4.9
        },
        {
            id: 15,
            name: 'Igishushanyo',
            price: '19',
            image: 'https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=300&h=200&fit=crop&crop=center',
            rating: 4.7
        },
        {
            id: 16,
            name: 'Igishushanyo',
            price: '240',
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=300&h=200&fit=crop&crop=center',
            rating: 4.8
        }
    ];

    const topFeaturedSections = [
        {
            id: 1,
            title: "Home Cultural",
            subtitle: "products",
            description: "Authentic Rwandan heritage items for your home",
            bgColor: "from-amber-100 via-amber-50 to-orange-100",
            textColor: "text-amber-900",
            icon: <Home className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />,
            image: "https://images.unsplash.com/photo-1463620910506-d0458143143e?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
        },
        {
            id: 2,
            title: "Hand Made",
            subtitle: "Craftsmanship",
            description: "Skillfully crafted by local artisans",
            bgColor: "from-blue-100 via-blue-50 to-indigo-100",
            textColor: "text-blue-900",
            icon: <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />,
            image: "https://images.unsplash.com/photo-1586031119227-db3d1f8b5ac9?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
        },
        {
            id: 3,
            title: "Art Collection",
            subtitle: "Gallery",
            description: "Traditional and contemporary Rwandan art",
            bgColor: "from-purple-100 via-purple-50 to-pink-100",
            textColor: "text-purple-900",
            icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-700" />,
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        },
        {
            id: 4,
            title: "Music Heritage",
            subtitle: "Instruments",
            description: "Traditional musical instruments and tools",
            bgColor: "from-green-100 via-green-50 to-emerald-100",
            textColor: "text-green-900",
            icon: <Music className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" />,
            image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
        }
    ];

    const bottomFeaturedSections = [
        {
            id: 1,
            title: "Premium",
            subtitle: "Collection",
            description: "Exclusive handpicked cultural treasures",
            bgColor: "from-rose-100 via-rose-50 to-pink-100",
            textColor: "text-rose-900",
            icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-rose-700" />,
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
        },
        {
            id: 2,
            title: "Trending",
            subtitle: "Now",
            description: "Most popular items this month",
            bgColor: "from-teal-100 via-teal-50 to-cyan-100",
            textColor: "text-teal-900",
            icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-teal-700" />,
            image: "https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
        },
        {
            id: 3,
            title: "Authentic",
            subtitle: "Verified",
            description: "Certified authentic Rwandan heritage",
            bgColor: "from-slate-100 via-slate-50 to-gray-100",
            textColor: "text-slate-900",
            icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-slate-500 to-gray-500 hover:from-slate-600 hover:to-gray-600"
        },
        {
            id: 4,
            title: "Limited",
            subtitle: "Edition",
            description: "Rare collectibles and unique pieces",
            bgColor: "from-yellow-100 via-yellow-50 to-amber-100",
            textColor: "text-yellow-900",
            icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-700" />,
            image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=250&h=180&fit=crop&crop=center",
            buttonColor: "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % topFeaturedSections.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + topFeaturedSections.length) % topFeaturedSections.length);
    };

    const nextBottomSlide = () => {
        setCurrentBottomSlide((prev) => (prev + 1) % bottomFeaturedSections.length);
    };

    const prevBottomSlide = () => {
        setCurrentBottomSlide((prev) => (prev - 1 + bottomFeaturedSections.length) % bottomFeaturedSections.length);
    };

    // Auto-advance sliders
    useEffect(() => {
        const timer1 = setInterval(nextSlide, 5000);
        const timer2 = setInterval(nextBottomSlide, 6000);
        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
        };
    }, []);

    const currentTopFeatured = topFeaturedSections[currentSlide];
    const currentBottomFeatured = bottomFeaturedSections[currentBottomSlide];

    const ProductCard = ({ product }: { product: Product }) => (
        <div className="bg-white rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-gray-200 h-full">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 h-full p-3 sm:pr-4">
                <div className="relative overflow-hidden rounded-xl flex-shrink-0 w-full sm:w-20 md:w-24 lg:w-28 h-32 sm:h-20 md:h-24 lg:h-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
                            <Heart className="w-3 h-3 text-gray-600 hover:text-red-500" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                        <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-200 truncate">
                            {product.name}
                        </h3>
                        <p className="text-primary text-md font-bold">{product.price}</p>
                        <p className="text-gray-600 text-xs font-medium">From RWF</p>
                        
                        {/* Responsive buttons */}
                        <div className="flex flex-col xs:flex-row gap-2 mt-3">
                            <button className="bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-primary px-3 py-2 rounded-md text-xs font-semibold transition-all duration-200 flex-1 xs:flex-none">
                                <Eye className="w-3 h-3 mr-1" />
                                <span>View</span>
                            </button>
                            <button className="bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-500 px-3 py-2 rounded-md text-xs font-semibold transition-all duration-200 flex-1 xs:flex-none">
                                <Plus className="w-3 h-3 mr-1" />
                                <span>Add</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <ShoppingBag className="w-4 h-4 text-blue-500 hover:text-blue-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const FeaturedCard = ({
        featured,
        onNext,
        onPrev,
        currentIndex,
        totalSlides,
        onDotClick
    }: {
        featured: any;
        onNext: () => void;
        onPrev: () => void;
        currentIndex: number;
        totalSlides: number;
        onDotClick: (index: number) => void;
    }) => (
        <div className={`bg-gradient-to-br ${featured.bgColor} rounded-2xl p-4 sm:p-6 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px] transition-all duration-500 relative overflow-hidden hover:shadow-xl border border-white/50`}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12" />

            {/* Navigation Arrows */}
            <button
                onClick={onPrev}
                className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white p-2 sm:p-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
            </button>
            <button
                onClick={onNext}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white p-2 sm:p-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
            </button>

            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                        {featured.icon}
                    </div>
                    <div>
                        <h2 className={`text-lg sm:text-2xl font-bold ${featured.textColor}`}>
                            {featured.title}
                        </h2>
                        <h3 className={`text-md sm:text-xl font-semibold ${featured.textColor} opacity-80`}>
                            {featured.subtitle}
                        </h3>
                    </div>
                </div>
                <p className={`text-xs sm:text-sm ${featured.textColor} opacity-70 mb-3 sm:mb-4 leading-relaxed`}>
                    {featured.description}
                </p>
            </div>

            <div className="flex flex-col items-center space-y-3 sm:space-y-4 relative z-10">
                <div className="relative group">
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-28 h-20 sm:w-36 sm:h-28 object-cover rounded-xl shadow-md transition-all duration-300 group-hover:scale-105 border-2 border-white/50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <button className={`${featured.buttonColor} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm`}>
                    <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Explore Collection</span>
                    <span className="xs:hidden">Explore</span>
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onDotClick(index)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white w-4 sm:w-6 shadow-md'
                            : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/70'
                            }`}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="mx-auto p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-full md:max-w-11/12 mx-auto">
                {/* Mobile Layout - Stack everything vertically */}
                <div className="block lg:hidden space-y-4 sm:space-y-6">
                    {/* Top Featured Section */}
                    <div>
                        <FeaturedCard
                            featured={currentTopFeatured}
                            onNext={nextSlide}
                            onPrev={prevSlide}
                            currentIndex={currentSlide}
                            totalSlides={topFeaturedSections.length}
                            onDotClick={setCurrentSlide}
                        />
                    </div>
                    
                    {/* Products Grid - Mobile responsive */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                        {products.slice(0, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    
                    {/* Bottom Featured Section */}
                    <div>
                        <FeaturedCard
                            featured={currentBottomFeatured}
                            onNext={nextBottomSlide}
                            onPrev={prevBottomSlide}
                            currentIndex={currentBottomSlide}
                            totalSlides={bottomFeaturedSections.length}
                            onDotClick={setCurrentBottomSlide}
                        />
                    </div>
                    
                    {/* More Products */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                        {products.slice(8, 16).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Desktop Layout - Grid system for larger screens */}
                <div className="hidden lg:grid lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 xl:gap-6">
                    {/* Top Featured Section - Slider */}
                    <div className="lg:col-span-2 lg:row-span-2">
                        <FeaturedCard
                            featured={currentTopFeatured}
                            onNext={nextSlide}
                            onPrev={prevSlide}
                            currentIndex={currentSlide}
                            totalSlides={topFeaturedSections.length}
                            onDotClick={setCurrentSlide}
                        />
                    </div>

                    {/* Product Grid - First Row */}
                    <div className="lg:col-span-4 grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-4">
                        {products.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Product Grid - Second Row */}
                    <div className="lg:col-span-4 grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-4">
                        {products.slice(4, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Bottom Featured Section - Slider */}
                    <div className="lg:col-span-2 lg:row-span-2">
                        <FeaturedCard
                            featured={currentBottomFeatured}
                            onNext={nextBottomSlide}
                            onPrev={prevBottomSlide}
                            currentIndex={currentBottomSlide}
                            totalSlides={bottomFeaturedSections.length}
                            onDotClick={setCurrentBottomSlide}
                        />
                    </div>

                    {/* Product Grid - Third Row */}
                    <div className="lg:col-span-4 grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-4">
                        {products.slice(8, 12).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Product Grid - Fourth Row */}
                    <div className="lg:col-span-4 grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-4">
                        {products.slice(12, 16).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;