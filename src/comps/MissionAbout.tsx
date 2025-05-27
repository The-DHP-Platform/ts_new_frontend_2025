import { Archive, ShoppingBag, GraduationCap } from 'lucide-react';

const HeritagePlatform = () => {
  return (
    <div className=" bg-white">
      {/* Main Content Section */}
      <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {/* Digital Repository Card */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Archive className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 mx-auto border-2 border-red-300 border-dashed rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Digital Repository</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore a vast digital repository housing a diverse collection of African cultural heritage assets. 
              From ancient artifacts to contemporary artworks, discover and immersively interact with rich 
              cultural treasures from across the continent
            </p>
          </div>

          {/* Marketplace Card */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 mx-auto border-2 border-yellow-300 border-dashed rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Marketplace</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Engage in a vibrant marketplace where users can buy, sell, or exchange digital cultural heritage 
              assets. Connect with collectors, institutions, and enthusiasts to expand your digital collection or 
              find unique pieces to enhance your understanding of African heritage.
            </p>
          </div>

          {/* E-learning Card */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 mx-auto border-2 border-green-300 border-dashed rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">E-learning</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Dive into an engaging e-learning platform with gamified courses, resources, and workshops on 
              heritage preservation, cultural education, and community engagement. Learn from experts, join 
              discussions, and gain the skills to champion African heritage preservation
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">
            Our objectives
          </h2>
          
          <div className="space-y-2 lg:space-y-3 text-gray-700">
            <p className="text-baseleading-relaxed">
              Welcome to the heart of our mission. At Digital Heritage Preservationists (DHP) platform, we are driven by a set of clear objectives
            </p>
            
            <p className="text-baseleading-relaxed">
              The initiative aims to digitize and preserve cultural artifacts, historical sites, and intangible heritage for accessibility by scholars and the public. 
              It seeks to innovate tools for digital documentation and conservation, advancing heritage preservation practices.
            </p>
            
            <p className="text-baseleading-relaxed font-medium">
              Discover, Learn, and Join us in preserving African Heritage for future generations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritagePlatform;