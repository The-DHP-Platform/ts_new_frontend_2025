import { ArrowRight,  ChevronRight } from 'lucide-react';

const BookCategoriesGrid = () => {
    const categories = [
        {
            id: 1,
            title: "Kigeri 2",
            image: "logos/box1.png",
            bookCount: "150+ Books"
        },
        {
            id: 2,
            title: "Rudahirwa",
            image: "logos/box2.png",
            bookCount: "120+ Books"
        },
        {
            id: 3,
            title: "amateka part 2",
            image: "logos/box3.png",
            bookCount: "85+ Books"
        },
        {
            id: 4,
            title: "Yuhu musinga",
            image: "logos/box4.png",
            bookCount: "200+ Books"
        },
        {
            id: 5,
            title: "Rudahirwa",
            image: "logos/box5.png",
            bookCount: "95+ Books"
        }
    ];

    return (
        <div className=" bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-10/12 mx-auto max-sm:w-full">
                {/* Header Section */}
                <div className="flex justify-between items-center gap-3 mb-6 p-2 rounded-2xl border border-white/20 w-full">

                    <h2 className="text-4xl max-md:text-xl font-bold bg-gradient-to-r bg-clip-text text-black">
                        Featured art categories
                    </h2>
                    <button className="inline-flex items-center px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 ml-4">
                        View all Categories
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${index === 2 && categories.length === 5
                                ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1'
                                : ''
                                }`}
                        >
                            {/* Background Image */}
                            <div className="relative h-80 sm:h-96 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300" />

                                {/* Category Content */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6">
                                    {/* Top Badge */}
                                    <div className="flex justify-end">
                                        <div className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {category.bookCount}
                                        </div>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                                            {category.title}
                                        </h3>

                                        {/* Explore Button */}
                                        <div className="flex items-center text-white group-hover:text-primary transition-colors duration-300">
                                            <span className="font-semibold mr-2">Explore</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BookCategoriesGrid;