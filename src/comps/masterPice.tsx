import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const BookSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [itemsPerSlide, setItemsPerSlide] = useState(5);
    const sliderRef = useRef(null);

    // Sample book data - you can replace with your actual data
    const books = [
        {
            id: 1,
            title: "Rwanda Thousand",
            author: "Sarah karinda",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            rating: 4.8,
            price: "$29.99",
            isNew: true
        },
        {
            id: 2,
            title: "abami burwanda",
            author: "Alex Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            rating: 4.9,
            price: "$34.99",
            isNew: false
        },
        {
            id: 3,
            title: "amateka",
            author: "Maria Rodriguez",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            rating: 4.7,
            price: "$27.99",
            isNew: true
        },
        {
            id: 4,
            title: "igihugu cyawe",
            author: "David Kim",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            rating: 4.6,
            price: "$32.99",
            isNew: false
        },
        {
            id: 5,
            title: "umwami wacu",
            author: "Emma Wilson",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
            rating: 4.8,
            price: "$26.99",
            isNew: true
        },
        {
            id: 6,
            title: "ibisigo nibisukuzo",
            author: "John Smith",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
            rating: 4.9,
            price: "$38.99",
            isNew: false
        },
        {
            id: 7,
            title: "ubuhanuzi bwa bami",
            author: "Lisa Park",
            image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
            rating: 4.5,
            price: "$31.99",
            isNew: false
        },
        {
            id: 8,
            title: "abasizi ",
            author: "Michael Brown",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=400&fit=crop&crop=center",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
            rating: 4.7,
            price: "$42.99",
            isNew: true
        }
    ];

    // Function to determine items per slide based on screen width
    const updateItemsPerSlide = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setItemsPerSlide(1); // mobile
        } else if (width < 768) {
            setItemsPerSlide(2); // small tablet
        } else if (width < 1024) {
            setItemsPerSlide(3); // tablet
        } else if (width < 1280) {
            setItemsPerSlide(4); // small desktop
        } else {
            setItemsPerSlide(5); // large desktop
        }
    };

    // Update items per slide on mount and resize
    useEffect(() => {
        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);
        return () => window.removeEventListener('resize', updateItemsPerSlide);
    }, []);

    // Reset slide when items per slide changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [itemsPerSlide]);

    const totalSlides = Math.ceil(books.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };



    // Auto-slide functionality
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(nextSlide, 4000);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentSlide, totalSlides]);

    // Get grid columns class based on items per slide
    const getGridClass = () => {
        switch (itemsPerSlide) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-2';
            case 3:
                return 'grid-cols-3';
            case 4:
                return 'grid-cols-4';
            case 5:
                return 'grid-cols-5';
            default:
                return 'grid-cols-1';
        }
    };

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-full md:max-w-11/12 mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text text-black">
                        Latest masterPieces
                    </h2>
                    <button className="inline-flex items-center px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 text-sm sm:text-base">
                        <span className="hidden sm:inline">Discover more masterPieces</span>
                        <span className="sm:hidden">Discover more</span>
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                </div>

                {/* Slider Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons - Hide on mobile if only 1 slide */}
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-gray-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 -ml-3 sm:-ml-6"
                                disabled={currentSlide === 0}
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-gray-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 -mr-3 sm:-mr-6"
                                disabled={currentSlide === totalSlides - 1}
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </>
                    )}

                    {/* Books Grid */}
                    <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                        <div
                            ref={sliderRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0">
                                    <div className={`grid ${getGridClass()} gap-3 sm:gap-4 lg:gap-6 px-1 sm:px-2`}>
                                        {books.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((book) => (
                                            <div
                                                key={book.id}
                                                className="group bg-white rounded-lg sm:rounded-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
                                            >
                                                {/* Book Cover */}
                                                <div className="relative overflow-hidden">
                                                    <img
                                                        src={book.image}
                                                        alt={book.title}
                                                        className="w-full h-40 xs:h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />

                                                    {/* Badges */}
                                                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-2">
                                                        {book.isNew && (
                                                            <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                                New
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Wishlist Button */}
                                                    <button className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white">
                                                        <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    </button>
                                                </div>

                                                {/* Book Info */}
                                                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                                                    {/* Author Info */}
                                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                                        <img
                                                            src={book.avatar}
                                                            alt={book.author}
                                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-gray-200"
                                                        />
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
                                                                {book.title}
                                                            </h3>
                                                            <p className="text-xs sm:text-sm text-gray-600 truncate">by {book.author}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slide Indicators - Only show if more than 1 slide */}
                    {totalSlides > 1 && (
                        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                        ? 'bg-primary scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookSlider;