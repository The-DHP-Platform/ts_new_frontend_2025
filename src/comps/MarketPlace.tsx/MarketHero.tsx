import  { useState } from 'react';
import {
    Search,
    ShoppingCart,
    User,
    Settings,
    Home,
    ChevronDown,
    Menu,
    X
} from 'lucide-react';

const RwandanEcommerceLayout = () => {
    const [selectedCategory, setSelectedCategory] = useState('All category');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Rwanda, RWF');

    const categories = [
        'All category',
        'Traditional Paintings',
        'Wood Sculptures',
        'Imigongo Art',
        'Cultural Instruments',
        'Musical Instruments',
        'Traditional Utensils',
        'Handcrafted Tools'
    ];

    const sidebarCategories = [
        'Paintings',
        'Sculptures',
        'Drawings',
        'Cultural tools, equipments',
        'Music tools',
        'Utensils',
        'Traditional tools'
    ];

    const countries = [
        'Rwanda, RWF',
        'Kenya, KES',
        'Uganda, UGX',
        'Tanzania, TZS'
    ];

    const handleSearch = () => {
        console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
    };

    return (
        <div className=" bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <img src="logos/logo-circle.png" alt="Digital Heritage" className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-semibold text-gray-900">Digital Heritage</h1>
                                <p className="text-xs text-gray-500">Preservationists Platform</p>
                            </div>
                        </div>

                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                            <div className="flex w-full">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                                />
                                <div className="relative">
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="appearance-none bg-white border-t border-b border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                </div>
                                <button
                                    onClick={handleSearch}
                                    className="bg-primary hover:bg-primary text-white px-6 py-2 rounded-r-md transition-colors duration-200"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex items-center space-x-4">
                                <div className="text-center cursor-pointer">
                                    <User className="w-5 h-5 mx-auto text-gray-500" />
                                    <span className="text-xs text-gray-500">Profile</span>
                                </div>
                                <div className="text-center cursor-pointer">
                                    <Settings className="w-5 h-5 mx-auto text-gray-500" />
                                    <span className="text-xs text-gray-500">Settings</span>
                                </div>
                                <div className="text-center cursor-pointer">
                                    <ShoppingCart className="w-5 h-5 mx-auto text-gray-500" />
                                    <span className="text-xs text-gray-500">My cart</span>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-4 space-y-4">
                            {/* Mobile Search */}
                            <div className="flex">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none bg-gray-100 border border-r-0 border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 px-3 py-2 border border-l-0 border-r-0 border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="bg-green-600 text-white px-4 py-2 rounded-r-md"
                                >
                                    <Search className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Mobile Navigation */}
                            <div className="flex justify-around pt-4 border-t">
                                <div className="text-center">
                                    <User className="w-5 h-5 mx-auto text-gray-600" />
                                    <span className="text-xs text-gray-600">Profile</span>
                                </div>
                                <div className="text-center">
                                    <Settings className="w-5 h-5 mx-auto text-gray-600" />
                                    <span className="text-xs text-gray-600">Settings</span>
                                </div>
                                <div className="text-center">
                                    <ShoppingCart className="w-5 h-5 mx-auto text-gray-600" />
                                    <span className="text-xs text-gray-600">My cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Secondary Navigation */}
            <nav className="bg-white border-b">
                <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <Home className="w-4 h-4 text-gray-600" />
                                <span className="text-gray-800">Home</span>
                            </div>
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <span className="text-gray-800">Help</span>
                                <ChevronDown className="w-4 h-4 text-gray-600" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <button
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className="flex items-center space-x-2 text-gray-800"
                                >
                                    <span>{selectedCountry}</span>
                                    <ChevronDown className="w-4 h-4 text-gray-600" />
                                </button>
                                {isCountryDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                        {countries.map((country) => (
                                            <button
                                                key={country}
                                                onClick={() => {
                                                    setSelectedCountry(country);
                                                    setIsCountryDropdownOpen(false);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {country}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center space-x-2">
                                <span className="text-gray-800">Ship to</span>
                                <div className="w-6 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                                    <div className="w-4 h-2 bg-yellow-400 rounded-sm"></div>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar */}
                    <aside className="lg:w-80 w-full">
                        <div className="bg-green-100 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h3>
                            <ul className="space-y-3">
                                {sidebarCategories.map((category, index) => (
                                    <li key={index}>
                                        <button className="text-gray-700 hover:text-green-700 transition-colors duration-200 text-left">
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <button className="text-blue-600 hover:text-blue-800 mt-4 font-medium">
                                See all
                            </button>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Hero Section with Rwandan Cultural Item */}
                            <div className="lg:col-span-2">
                                <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-300 rounded-lg p-8 h-80 flex items-center relative overflow-hidden">
                                    <div className="flex-1 z-10">
                                        <h2 className="text-sm text-gray-700 mb-2">Latest trending</h2>
                                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                                            Artifact items
                                        </h1>
                                        <div className="flex flex-wrap gap-4">
                                            <button className="bg-white text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                                                Learn more
                                            </button>
                                            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-sm">
                                                Publish
                                            </button>
                                        </div>
                                    </div>

                                    {/* Traditional Rwandan Bowl Image Area */}
                                    <div className="flex-1 flex items-center justify-center relative">
                                        {/* Decorative flowers in background */}
                                        <div className="absolute top-4 right-4 w-16 h-12">
                                            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-white rounded-full mt-1 ml-2"></div>
                                            <div className="w-2 h-2 bg-yellow-300 rounded-full mt-1 ml-4"></div>
                                        </div>
                                        
                                        {/* Traditional Rwandan Bowl */}
                                        <div className="relative">
                                            {/* Main bowl */}
                                            <div className="w-48 h-24 bg-white rounded-full border-4 border-gray-200 shadow-lg relative">
                                                {/* Traditional pattern on rim */}
                                                <div className="absolute top-0 right-8 w-16 h-4 bg-gray-800 rounded-full opacity-20"></div>
                                                <div className="absolute top-1 right-9 w-14 h-2 bg-gray-600 rounded-full opacity-30"></div>
                                                
                                                {/* Bowl interior shadow */}
                                                <div className="absolute inset-2 bg-gray-100 rounded-full"></div>
                                            </div>
                                            
                                            {/* Traditional wooden spoon */}
                                            <div className="absolute -bottom-2 left-12 transform rotate-12">
                                                {/* Spoon handle */}
                                                <div className="w-20 h-3 bg-green-600 rounded-full"></div>
                                                {/* Spoon bowl */}
                                                <div className="w-8 h-6 bg-green-700 rounded-full -mt-1 ml-16 transform -rotate-12"></div>
                                                {/* Spoon detail */}
                                                <div className="w-1 h-1 bg-red-500 rounded-full absolute top-1 right-4"></div>
                                            </div>
                                        </div>
                                        
                                        {/* Additional decorative elements */}
                                        <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
                                        <div className="absolute top-12 left-4 w-6 h-6 bg-white rounded-full opacity-80"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Cards */}
                            <div className="space-y-4">
                                <div className="bg-orange-400 text-white p-6 rounded-lg">
                                    <h3 className="font-semibold mb-2">Get US $10 off</h3>
                                    <p className="text-sm opacity-90">with a new supplier</p>
                                </div>

                                <div className="bg-teal-400 text-white p-6 rounded-lg">
                                    <h3 className="font-semibold mb-2">Send quotes with</h3>
                                    <p className="text-sm opacity-90">supplier preferences</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default RwandanEcommerceLayout;