import { ShoppingCart, } from 'lucide-react';

const BooksProductView = () => {
    const books = [
        {
            id: 1,
            title: "Port Set",
            author: "Sarah Johnson",
            price: "$29.99",
            rating: 4.8,
            image: "logos/img1.png",
            description: "Master the fundamentals of writing maintainable, readable, and efficient code with practical examples and best practices."
        },
        {
            id: 2,
            title: "Woven-material plates",
            author: "Alex Chen",
            price: "$34.99",
            rating: 4.9,
            image: "logos/img2.png",
            description: "A comprehensive guide to building responsive, fast, and scalable web applications using the latest technologies."
        },
        {
            id: 3,
            title: "imigongo",
            author: "Maria Rodriguez",
            price: "$27.99",
            rating: 4.7,
            image: "logos/img3.png",
            description: "Learn how to create and maintain consistent, scalable design systems that enhance user experience across products."
        }
    ];

    return (
        <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-10/12 mx-auto max-sm:w-full">
                {/* Header Section */}
                <div className="text-center flex justify-between items-center py-3 mb-3">
                    <h1 className="text-4xl max-md:text-xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        The Best Of Best
                    </h1>
                    <button className='border-2 border-white text-white px-6 font-bold py-2 rounded-md'>Sign Up Now</button>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="group bg-white rounded-md shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            {/* Book Image */}
                            <div className="relative overflow-hidden bg-gray-50">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Book Content */}
                            <div className="p-6 space-y-4">
                                {/* Rating */}
                                {/* <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(book.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-2">
                                        {book.rating}
                                    </span>
                                </div> */}

                                {/* Title and Author */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-200">
                                        {book.title}
                                    </h3>
                                    {/* <p className="text-gray-600 font-medium">
                                        by {book.author}
                                    </p> */}
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                    {book.description}
                                </p>

                                {/* Price and Purchase Button */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="text-2xl font-bold text-primary">
                                        {book.price}
                                    </div>
                                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold flex items-center space-x-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>Purchase</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BooksProductView;