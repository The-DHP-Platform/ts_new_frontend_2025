import  { useState, useMemo } from 'react';
import { Search, Download, Share2, Edit, Trash2, Home, ChevronRight } from 'lucide-react';

interface Painting {
  id: number;
  title: string;
  category: string;
  image: string;
  artist?: string;
  year?: string;
  description?: string;
}

const mockPaintings: Painting[] = [
  {
    id: 1,
    title: "Vases Family",
    category: "Still Life",
    image: "https://visitrwanda.com/wp-content/uploads/fly-images/2029/Visit-Rwanda_-Nyanza-Traditional-Intore-Dancers-1650x1100.jpg",
    artist: "Traditional Potter",
    year: "2023",
    description: "Collection of handcrafted ceramic vases"
  },
  {
    id: 2,
    title: "Artisan at Work",
    category: "Portrait",
    image: "https://turkanawildlifesafaris.com/wp-content/uploads/2024/05/Red-Rocks-Rwanda-Festival-2022-Intore-kids-dancing.jpg",
    artist: "Documentary Series",
    year: "2023",
    description: "Craftsman creating traditional textiles"
  },
  {
    id: 3,
    title: "Street Art Mural",
    category: "Street Art",
    image: "https://vicparkarts.org.au/wp-content/uploads/2024/01/Rwanda-Images-landscape-1.jpg",
    artist: "Urban Artists Collective",
    year: "2023",
    description: "Vibrant street mural with geometric patterns"
  },
  {
    id: 4,
    title: "Woven Basket Art",
    category: "Crafts",
    image: "https://www.wildwhispersafrica.com/wp-content/uploads/rwanda-culture-safaris.jpg",
    artist: "Traditional Weaver",
    year: "2023",
    description: "Intricate basket weaving patterns"
  },
  {
    id: 5,
    title: "Community Wall",
    category: "Street Art",
    image: "https://www.explorerwandatours.com/wp-content/uploads/2017/10/History-of-Rwanda.jpg",
    artist: "Local Community",
    year: "2023",
    description: "Collaborative community art project"
  },
  {
    id: 6,
    title: "Watercolor Abstract",
    category: "Abstract",
    image: "https://www.worldatlas.com/r/w1200/upload/a4/e8/58/shutterstock-1750456022.jpg",
    artist: "Modern Artist",
    year: "2023",
    description: "Blue and green watercolor composition"
  }
];

const categories = ["All", "Paintings", "Sculptures", "Photography", "Exhibition Archives"];

export default function PaintingsGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Paintings");
  const [selectedPaintings, setSelectedPaintings] = useState<number[]>([]);

  const filteredPaintings = useMemo(() => {
    return mockPaintings.filter(painting => {
      const matchesSearch = painting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           painting.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (painting.artist && painting.artist.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesSearch;
    });
  }, [searchTerm]);

  const togglePaintingSelection = (id: number) => {
    setSelectedPaintings(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleBulkAction = (action: string) => {
    console.log(`${action} paintings:`, selectedPaintings);
    setSelectedPaintings([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center py-3 text-sm text-gray-500">
            <Home className="w-4 h-4 mr-2" />
            <span className="hover:text-gray-700 cursor-pointer">Galleries</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Paintings</span>
          </div>

          {/* Main Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Paintings</h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {/* Search */}
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search images in gallery"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full outline-none sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Upload
              </button>
            </div>
          </div>

          {/* Action Bar */}
          {selectedPaintings.length > 0 && (
            <div className="flex items-center justify-between py-3 px-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
              <span className="text-sm font-medium text-blue-900">
                {selectedPaintings.length} item{selectedPaintings.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
                <button
                  onClick={() => handleBulkAction('edit')}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleBulkAction('download')}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => handleBulkAction('share')}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {filteredPaintings.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No paintings found</h3>
                <p className="text-gray-500">Try adjusting your search terms or browse all categories.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPaintings.map((painting) => (
                  <div
                    key={painting.id}
                    className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={painting.image}
                        alt={painting.title}
                        className="w-full h-64 object-cover"
                      />
                      
                      {/* Selection Overlay */}
                      <div className="absolute inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all">
                        <div className="absolute top-3 left-3">
                          <input
                            type="checkbox"
                            checked={selectedPaintings.includes(painting.id)}
                            onChange={() => togglePaintingSelection(painting.id)}
                            className="w-5 h-5 rounded border-2 border-white text-orange-500 focus:ring-orange-500 focus:ring-offset-0"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {painting.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{painting.title}</h3>
                      {painting.artist && (
                        <p className="text-sm text-gray-500 mb-1">by {painting.artist}</p>
                      )}
                      {painting.year && (
                        <p className="text-sm text-gray-400 mb-2">{painting.year}</p>
                      )}
                      {painting.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">{painting.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}