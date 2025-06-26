import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Star, ShoppingCart, Share2, BookOpen, User } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  avatar: string;
  rating: number;
  price: string;
  isNew: boolean;
  description: string;
  genre: string;
  pages: number;
  publishedYear: number;
  isbn: string;
}

const BookSlider = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [itemsPerSlide, setItemsPerSlide] = useState<number>(5);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const sliderRef = useRef<HTMLDivElement>(null);

    // Sample book data with enhanced information
    const books: Book[] = [
    {
        id: 1,
        title: "Igisigo cy'Umwami",
        author: "Yolande Mukagasana",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhUjT8kUy13OY2zsgUWUHLaMuqheUQJXn3Q&s",
        rating: 4.8,
        price: "$29.99",
        isNew: true,
        description: "A historical novel about the reign of Rwandan kings, exploring their wisdom and the traditional governance system.",
        genre: "Historical Fiction",
        pages: 320,
        publishedYear: 2023,
        isbn: "978-99977-1-123-4"
    },
    {
        id: 2,
        title: "Le Passé Simple",
        author: "Scholastique Mukasonga",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhUjT8kUy13OY2zsgUWUHLaMuqheUQJXn3Q&s",
        rating: 4.9,
        price: "$34.99",
        isNew: false,
        description: "A poignant memoir about growing up in Rwanda before the genocide, blending personal and national history.",
        genre: "Memoir",
        pages: 280,
        publishedYear: 2022,
        isbn: "978-99977-1-124-1"
    },
    {
        id: 3,
        title: "Notre-Dame du Nil",
        author: "Scholastique Mukasonga",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhUjT8kUy13OY2zsgUWUHLaMuqheUQJXn3Q&s",
        rating: 4.7,
        price: "$27.99",
        isNew: true,
        description: "A novel set in a Rwandan Catholic girls' boarding school that foreshadows the coming genocide.",
        genre: "Fiction",
        pages: 350,
        publishedYear: 2023,
        isbn: "978-99977-1-125-8"
    },
    {
        id: 4,
        title: "Inteko z'Abami",
        author: "Alexis Kagame",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhUjT8kUy13OY2zsgUWUHLaMuqheUQJXn3Q&s",
        rating: 4.6,
        price: "$32.99",
        isNew: false,
        description: "A classic work on the political and judicial organization of pre-colonial Rwanda.",
        genre: "History",
        pages: 420,
        publishedYear: 2021,
        isbn: "978-99977-1-126-5"
    },
    {
        id: 5,
        title: "Ubucurabwenge",
        author: "Benjamin Sehene",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhUjT8kUy13OY2zsgUWUHLaMuqheUQJXn3Q&s",
        rating: 4.8,
        price: "$26.99",
        isNew: true,
        description: "A novel exploring Rwandan history through the lens of traditional wisdom and philosophy.",
        genre: "Philosophical Fiction",
        pages: 310,
        publishedYear: 2023,
        isbn: "978-99977-1-127-2"
    }
    // {
    //     id: 6,
    //     title: "Rwanda: Les Racines de mon Existence",
    //     author: "Esther Mujawayo",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
    //  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhUjT8kUy13OY2zsgUWUHLaMuqheUQJXn3Q&s   //     rating: 4.9,
    //     price: "$38.99",
    //     isNew: false,
    //     description: "A personal account of Rwandan identity, trauma, and resilience after the genocide.",
    //     genre: "Memoir",
    //     pages: 280,
    //     publishedYear: 2020,
    //     isbn: "978-99977-1-128-9"
    // },
    // {
    //     id: 7,
    //     title: "La Chanson de l'aube",
    //     author: "Beata Umubyeyi Mairesse",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
    // vatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    //     rating: 4.5,
    //     price: "$31.99",
    //     isNew: false,
    //     description: "A collection of short stories exploring Rwandan life before, during and after the genocide.",
    //     genre: "Short Stories",
    //     pages: 240,
    //     publishedYear: 2022,
    //     isbn: "978-99977-1-129-6"
    // },
    // {
    //     id: 8,
    //     title: "L'Iguifou",
    //     author: "Scholastique Mukasonga",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO-Y9uapsLLg_d6om6EOVDswn4DpsUwjNjg&s",
    // avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    //     rating: 4.7,
    //     price: "$42.99",
    //     isNew: true,
    //     description: "A powerful collection of autobiographical stories about exile and memory.",
    //     genre: "Autobiography",
    //     pages: 360,
    //     publishedYear: 2023,
    //     isbn: "978-99977-1-130-2"
    // }
];

    const handleDiscoverMore = () => {
        navigate('/market');
    };

    const handleBookClick = (book: Book) => {
        setSelectedBook(book);
    };

    const handleAddToCart = (book: Book) => {
        alert(`"${book.title}" added to cart!`);
        // Replace with actual cart logic
    };

    const handleToggleFavorite = (bookId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(bookId)) {
                newFavorites.delete(bookId);
            } else {
                newFavorites.add(bookId);
            }
            return newFavorites;
        });
    };

    const handleShare = (book: Book) => {
        if (navigator.share) {
            navigator.share({
                title: book.title,
                text: `Check out this amazing book: ${book.title} by ${book.author}`,
                url: window.location.href,
            }).catch(err => {
                console.error('Error sharing:', err);
            });
        } else {
            navigator.clipboard.writeText(`${book.title} by ${book.author} - ${window.location.href}`)
                .then(() => {
                    alert('Book details copied to clipboard!');
                })
                .catch(err => {
                    console.error('Error copying to clipboard:', err);
                });
        }
    };

    const handleReadMore = (book: Book) => {
        alert(`Opening "${book.title}" for reading...`);
        // Replace with actual reading interface
        setSelectedBook(null);
    };

    const handleViewAuthor = (author: string) => {
        alert(`Viewing ${author}'s profile...`);
        // Replace with actual author profile page
        setSelectedBook(null);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

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

    // Render star rating
    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                ))}
                <span className="text-sm text-gray-600 ml-1">({rating})</span>
            </div>
        );
    };

    return (
        <>
            <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-full md:max-w-11/12 mx-auto">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text text-black">
                            Latest Masterpieces
                        </h2>
                        <button 
                            onClick={handleDiscoverMore}
                            className="inline-flex items-center px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 text-sm sm:text-base hover:bg-green-90 hover:text-green-900 hover:shadow-md"
                        >
                            <span className="hidden sm:inline">Discover more masterpieces</span>
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
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-green-900 hover:text-white text-gray-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 -ml-3 sm:-ml-6"
                                    disabled={currentSlide === 0}
                                >
                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-green-900 hover:text-white text-gray-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 -mr-3 sm:-mr-6"
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
                                                    className="group bg-white rounded-lg sm:rounded-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                                                    onClick={() => handleBookClick(book)}
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
                                                                <span className="bg-green-900 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                                    New
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Wishlist Button */}
                                                        <button 
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleToggleFavorite(book.id);
                                                            }}
                                                            className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                                                                favorites.has(book.id) ? 'text-red-500' : 'hover:bg-red-500 hover:text-white'
                                                            }`}
                                                        >
                                                            <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${favorites.has(book.id) ? 'fill-current' : ''}`} />
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
                                                                <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight line-clamp-2 group-hover:text-green-900 transition-colors duration-200">
                                                                    {book.title}
                                                                </h3>
                                                                <p className="text-xs sm:text-sm text-gray-600 truncate">by {book.author}</p>
                                                            </div>
                                                        </div>

                                                        {/* Rating and Price */}
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-1">
                                                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                                                <span className="text-xs text-gray-600">{book.rating}</span>
                                                            </div>
                                                            <span className="font-bold text-green-900 text-sm">{book.price}</span>
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
                                            ? 'bg-green-900 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Book Details Modal */}
            {selectedBook && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
                    onClick={closeModal}
                >
                    <div 
                        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl m-4 transform transition-all duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 z-10 bg-gradient-to-r from-green-900 to-green-700 px-6 py-4 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">{selectedBook.title}</h2>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleShare(selectedBook)}
                                        className="rounded-full p-2 transition-colors hover:bg-white/20"
                                        title="Share"
                                    >
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={() => handleToggleFavorite(selectedBook.id)}
                                        className="rounded-full p-2 transition-colors hover:bg-white/20"
                                        title="Add to Favorites"
                                    >
                                        <Heart className={`h-5 w-5 ${favorites.has(selectedBook.id) ? 'fill-current text-red-300' : ''}`} />
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="rounded-full p-2 transition-colors hover:bg-white/20"
                                        title="Close"
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Book Cover and Basic Info */}
                                <div className="space-y-4">
                                    <img
                                        src={selectedBook.image}
                                        alt={selectedBook.title}
                                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                                    />
                                    <div className="text-center space-y-2">
                                        <h3 className="text-xl font-bold text-gray-800">{selectedBook.title}</h3>
                                        <div className="flex items-center justify-center space-x-2">
                                            <img
                                                src={selectedBook.avatar}
                                                alt={selectedBook.author}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <span className="text-gray-600">by {selectedBook.author}</span>
                                        </div>
                                        {renderStars(selectedBook.rating)}
                                        <div className="text-2xl font-bold text-green-900">{selectedBook.price}</div>
                                    </div>
                                </div>

                                {/* Book Details */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2 text-gray-800">Description</h4>
                                        <p className="text-gray-600 leading-relaxed">{selectedBook.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <div className="text-sm text-gray-600">Genre</div>
                                            <div className="font-semibold">{selectedBook.genre}</div>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <div className="text-sm text-gray-600">Pages</div>
                                            <div className="font-semibold">{selectedBook.pages}</div>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <div className="text-sm text-gray-600">Published</div>
                                            <div className="font-semibold">{selectedBook.publishedYear}</div>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <div className="text-sm text-gray-600">ISBN</div>
                                            <div className="font-semibold text-xs">{selectedBook.isbn}</div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => handleReadMore(selectedBook)}
                                            className="w-full bg-green-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-900 active:bg-green-900 transition-colors duration-200 flex items-center justify-center space-x-2"
                                        >
                                            <BookOpen className="h-5 w-5" />
                                            <span>Read Now</span>
                                        </button>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                onClick={() => handleAddToCart(selectedBook)}
                                                className="bg-green-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                                            >
                                                <ShoppingCart className="h-4 w-4" />
                                                <span>Add to Cart</span>
                                            </button>
                                            <button
                                                onClick={() => handleViewAuthor(selectedBook.author)}
                                                className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                                            >
                                                <User className="h-4 w-4" />
                                                <span>View Author</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookSlider;