import { useState } from 'react';
import { Home, MapPin, ArrowRight, Search, Filter } from 'lucide-react';
import MuseumDetailView from './DigMuseumDetails';

interface Museum {
    id: number;
    name: string;
    location: string;
    description: string;
    longDescription: string;
    image: string;
    category: string;
}

const museums: Museum[] = [
    {
        id: 1,
        name: "KING'S PALACE",
        location: "Nyanza",
        description: "A reconstruction of the traditional royal residence, the King's Palace is a beautifully-crafted thatched dwelling shaped like a beehive.",
        longDescription: "At the back live a few long-horned Inyambo cattle, descended from the king's herd, whose keepers carefully tend and sing to them, keeping alive a unique tradition.",
        image: "https://www.rwandawildlifesafari.com/wp-content/uploads/2022/10/Kings-Palace-Nyanza.jpg",
        category: "Historical"
    },
    {
        id: 2,
        name: "ETHNOGRAPHIC MUSEUM",
        location: "Butare",
        description: "A gift from Belgium's King Baudouin in the late 1980s, the Ethnographic Museum now houses one of Africa's finest ethnographic collections.",
        longDescription: "The museum showcases traditional Rwandan culture, arts, and crafts through carefully curated exhibitions.",
        image: "https://www.rwandawildlifesafari.com/wp-content/uploads/2024/10/Visit-Rwanda-Ethnographic-Museum-1650x1097-1-1170x450.jpg",
        category: "Cultural"
    },
    {
        id: 3,
        name: "KIGALI GENOCIDE MEMORIAL",
        location: "Gisozi",
        description: "Commemorating the 1994 Rwandan genocide against the Tutsi, the Kigali Genocide Memorial at Gisozi is where 250,000 victims have been buried.",
        longDescription: "It serves as a place of remembrance to educate about how the Genocide against the Tutsi took shape and examines genocide in the 20th century.",
        image: "https://away2uganda.com/wp-content/uploads/2024/05/rwanda-genocidal-memorial.jpg",
        category: "Memorial"
    },
    {
        id: 4,
        name: "RWANDA ART MUSEUM",
        location: "Kigali",
        description: "Formerly the Presidential Palace Museum, this new museum displays contemporary artworks from Rwanda as well as abroad.",
        longDescription: "The museum seeks to provide an insight into the originality of Rwandan creativity and contemporary artistic expression.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Outside_Presidential_Palace_Museum_Kigali_Rwanda_29.jpg/1200px-Outside_Presidential_Palace_Museum_Kigali_Rwanda_29.jpg",
        category: "Art"
    },
    {
        id: 5,
        name: "Kandt House Museum",
        location: "Kigali",
        description: "Richard Kandt was the first colonial governor of Rwanda, on behalf of Germany, until the early 1900s. His old house in Kigali is now a museum examining life in Rwanda before, during and after the colonial period.",
        longDescription: "Richard Kandt was the first colonial governor of Rwanda, on behalf of Germany, until the early 1900s. His old house in Kigali is now a museum examining life in Rwanda before, during and after the colonial period.",
        image: "https://ugandarwandagorillatours.com/wp-content/uploads/2024/03/image.jpg",
        category: "History"
    }
];

const categories = ["All", "Historical", "Cultural", "History", "Memorial", "Art"];

export default function MuseumsGallery() {
    const [selectedMuseum, setSelectedMuseum] = useState<Museum | null>(null);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMuseums = museums.filter(museum => {
        const matchesCategory = selectedCategory === "All" || museum.category === selectedCategory;
        const matchesSearch = museum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            museum.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            museum.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {!selectedMuseum ?
                (
                    <div className="min-h-screen bg-gray-50">
                        {/* Header */}
                        <div className="bg-white border-b border-gray-200">
                            <div className="max-w-full md:max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
                                {/* Breadcrumb */}
                                <div className="flex items-center py-4 text-sm text-gray-500">
                                    <Home className="w-4 h-4 mr-2" />
                                    <span className="text-primary font-medium">Museums</span>
                                    <span className='px-1 flex'>/</span>
                                    <span className="text-primary font-medium">{selectedCategory}</span>
                                </div>

                                {/* Main Header */}
                                <div className="pb-6">
                                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Museums</h1>

                                    {/* Search and Filter Bar */}
                                    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                                        {/* Search */}
                                        <div className="relative flex-1 max-w-md">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                placeholder="Search museums..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>

                                        {/* Category Filter */}
                                        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                                            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            {categories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                                        ? 'bg-primary text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="max-w-full md:max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {filteredMuseums.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="text-gray-400 mb-4">
                                        <Search className="w-12 h-12 mx-auto" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No museums found</h3>
                                    <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {filteredMuseums.map((museum, index) => (
                                        <div
                                            key={museum.id}
                                            className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                                } flex flex-col lg:flex`}
                                        >
                                            {/* Image Section */}
                                            <div className="lg:w-1/2 relative overflow-hidden min-h-72">
                                                <img
                                                    src={museum.image}
                                                    alt={museum.name}
                                                    className="w-full h-full lg:h-full object-cover"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                                        {museum.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                                                <div>
                                                    {/* Location */}
                                                    <div className="flex items-center text-primary mb-3">
                                                        <MapPin className="w-4 h-4 mr-2" />
                                                        <span className="text-sm font-medium">{museum.location}</span>
                                                    </div>

                                                    {/* Museum Name */}
                                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                                                        {museum.name}
                                                    </h2>

                                                    {/* Description */}
                                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                                        {museum.description}
                                                    </p>

                                                    {/* Long Description */}
                                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                                        {museum.longDescription}
                                                    </p>
                                                </div>

                                                {/* Visit Button */}
                                                <div className="flex justify-start">
                                                    <button onClick={() => setSelectedMuseum(museum as Museum)} className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors group">
                                                        Visit
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                )
                :
                (
                    <MuseumDetailView
                        museum={selectedMuseum}
                        onBack={() => setSelectedMuseum(null)}
                    />
                )
            }
        </>
    );
}