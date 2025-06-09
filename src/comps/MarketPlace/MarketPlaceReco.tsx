import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, Filter, Grid, List } from 'lucide-react';

interface Item {
  id: number;
  name: string;
  creator: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  isLiked: boolean;
}

export default function RecommendedItemsSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const items: Item[] = [
    {
      id: 1,
      name: "Uduseke",
      creator: "Drawing by Trevor",
      price: 10.30,
      image: "/api/placeholder/300/200",
      rating: 4.8,
      category: "Art",
      isLiked: false
    },
    {
      id: 2,
      name: "Guca umugara",
      creator: "Painting by James",
      price: 10.30,
      image: "/api/placeholder/300/200",
      rating: 4.6,
      category: "Art",
      isLiked: true
    },
    {
      id: 3,
      name: "Inanga",
      creator: "Tool by Ingabo Arts",
      price: 12.50,
      image: "/api/placeholder/300/200",
      rating: 4.9,
      category: "Instruments",
      isLiked: false
    },
    {
      id: 4,
      name: "Inyambo",
      creator: "Digital drawing",
      price: 34.00,
      image: "/api/placeholder/300/200",
      rating: 4.7,
      category: "Art",
      isLiked: false
    },
    {
      id: 5,
      name: "Inyambo",
      creator: "Artwork by Ibuye coner",
      price: 99.00,
      image: "/api/placeholder/300/200",
      rating: 4.9,
      category: "Art",
      isLiked: true
    },
    {
      id: 6,
      name: "Multi-sized baskets",
      creator: "Weaving cop",
      price: 9.99,
      image: "/api/placeholder/300/200",
      rating: 4.5,
      category: "Crafts",
      isLiked: false
    },
    {
      id: 7,
      name: "Umukamo",
      creator: "Painting by Nkunga",
      price: 8.99,
      image: "/api/placeholder/300/200",
      rating: 4.4,
      category: "Art",
      isLiked: false
    },
    {
      id: 8,
      name: "Imigongo",
      creator: "T&T sculptures",
      price: 10.30,
      image: "/api/placeholder/300/200",
      rating: 4.6,
      category: "Crafts",
      isLiked: false
    },
    {
      id: 9,
      name: "Uduseke",
      creator: "Drawing by Trevor",
      price: 10.30,
      image: "/api/placeholder/300/200",
      rating: 4.8,
      category: "Art",
      isLiked: false
    },
    {
      id: 10,
      name: "Icyono cy'itabi",
      creator: "T&T sculptures",
      price: 80.95,
      image: "/api/placeholder/300/200",
      rating: 4.7,
      category: "Crafts",
      isLiked: false
    }
  ];

  const categories = ['All', 'Art', 'Crafts', 'Instruments'];
  
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const toggleLike = (id: number) => {
    // Handle like toggle
    console.log('Toggle like for item:', id);
  };

  const addToCart = (item: Item) => {
    console.log('Add to cart:', item);
  };

  return (
    <div className="w-full md:max-w-11/12 mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Recommended Items</h1>
            <p className="text-gray-600">Discover unique handcrafted items from talented artisans</p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                } border border-gray-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' 
          : 'grid-cols-1'
      }`}>
        {filteredItems.map((item) => (
          <div key={item.id} className={`group bg-white rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
            viewMode === 'list' ? 'flex' : ''
          }`}>
            {/* Image Container */}
            <div className={`relative overflow-hidden ${
              viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : ''
            }`}>
              <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${
                viewMode === 'list' ? 'w-full h-full' : 'aspect-square'
              }`}>
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                    <Eye className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Product Image</p>
                </div>
              </div>
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleLike(item.id)}
                    className={`p-2 rounded-full transition-colors ${
                      item.isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${item.isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="p-2 bg-white text-gray-600 rounded-full hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-white bg-opacity-90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
              {viewMode === 'list' ? (
                // List view layout
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">(24 reviews)</span>
                      <span className="ml-auto px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.creator}</p>
                    
                    <div className="text-3xl font-bold text-primary mb-4">RWF {item.price}</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleLike(item.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        item.isLiked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${item.isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="flex-1 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ) : (
                // Grid view layout (original)
                <>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">(24 reviews)</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-1">{item.creator}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">${item.price}</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}