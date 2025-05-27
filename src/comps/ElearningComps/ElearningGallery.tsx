import React from 'react';
import { Users, Heart, Eye } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  duration: string;
  followers: number;
  image: string;
  imageAlt: string;
}

const MostFrequentGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'AMAKURU',
      categoryColor: 'bg-orange-100 text-orange-500',
      title: 'Abakobwa bo Rwanda n Rwandangabo n\'abakinzi...',
      description: 'Historical documentation of Rwandan culture and traditions',
      duration: '12 hrs',
      followers: 265,
      image: 'https://www.paulkagame.rw/wp-content/uploads/2016/09/San-Francisco.jpg',
      imageAlt: 'Group of people in traditional dress'
    },
    {
      id: 2,
      category: 'IMIRAVA',
      categoryColor: 'bg-blue-100 text-blue-500',
      title: 'Guhuramo ibintu bya kimwe mu matongo mula...',
      description: 'Archaeological discoveries and historical artifacts',
      duration: '12 hrs',
      followers: 265,
      image: 'https://primatesafaris.info/wp-content/uploads/2018/07/rwandan-culture-510x340.jpg',
      imageAlt: 'Archaeological excavation site'
    },
    {
      id: 3,
      category: 'UBWOBA BUKABIJE/UBWENGE',
      categoryColor: 'bg-green-100 text-green-500',
      title: 'Ubushingantahe yabagize ruseri abahingantahe yabagize ruseri...',
      description: 'Traditional wisdom and conflict resolution methods',
      duration: '12 hrs',
      followers: 265,
      image: 'https://miro.medium.com/v2/resize:fit:875/1*Mf3bymP1yP8RmBnzip58ig.png',
      imageAlt: 'Traditional pottery and crafts'
    },
    {
      id: 4,
      category: 'UBUHINGANIRE',
      categoryColor: 'bg-green-100 text-green-500',
      title: 'Abahingantahe bavuze ivuze ku abahingantahe ivuze',
      description: 'Traditional leadership and governance systems',
      duration: '12 hrs',
      followers: 265,
      image: 'https://www.gorillatrips.net/wp-content/uploads/2023/01/135135854_978734742655488_208456293643472956_n.jpg',
      imageAlt: 'Pastoral landscape with cattle'
    },
    {
      id: 5,
      category: 'UBUKANGURAMBERE',
      categoryColor: 'bg-purple-100 text-purple-500',
      title: 'Inyoryo iragana migu/rimigani igitsina birawe',
      description: 'Stories and narratives from cultural heritage',
      duration: '12 hrs',
      followers: 265,
      image: 'https://i.ytimg.com/vi/VAUY5uVFrwg/maxresdefault.jpg',
      imageAlt: 'Traditional storytelling scene'
    },
    {
      id: 6,
      category: 'AMAHIRWE',
      categoryColor: 'bg-orange-100 text-orange-500',
      title: 'Uru kware bwa n Rwanda mbere y ubwiyunge y ubwatori...',
      description: 'Pre-colonial history and social structures',
      duration: '12 hrs',
      followers: 265,
      image: 'https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2018/08/16/traditional.jpg',
      imageAlt: 'Traditional cultural gathering'
    },
    {
      id: 7,
      category: 'IMIICO',
      categoryColor: 'bg-blue-100 text-blue-500',
      title: 'Ibanze n\'yavunwa n\'uraprimo rutandukanwa',
      description: 'Traditional ceremonies and rituals',
      duration: '12 hrs',
      followers: 265,
      image: 'https://www.rwandawildlifesafari.com/wp-content/uploads/2024/11/intore-dancers.jpg',
      imageAlt: 'Traditional ceremony'
    },
    {
      id: 8,
      category: 'UBWANGANIRE',
      categoryColor: 'bg-green-100 text-green-500',
      title: 'Ziramu mu migwiranyenge cikurive guhezahewe mu Kinyarwanda',
      description: 'Language preservation and documentation',
      duration: '12 hrs',
      followers: 265,
      image: 'https://visitrwanda.com/wp-content/uploads/fly-images/1238/Visit-Rwanda-Kings-Palace-Nyanza-Front-1-1650x1100.jpg',
      imageAlt: 'Cultural documentation'
    },
    {
      id: 9,
      category: 'UBUSHI',
      categoryColor: 'bg-red-100 text-red-500',
      title: 'Rugero y\'umwami n\'ubira byose byigirize',
      description: 'Royal traditions and historical practices',
      duration: '12 hrs',
      followers: 265,
      image: 'https://www.gorillasafarirwanda.net/wp-content/uploads/2018/10/safaris-rwanda.jpg',
      imageAlt: 'Historical royal traditions'
    },
    {
      id: 10,
      category: 'AMAHORO',
      categoryColor: 'bg-purple-100 text-purple-500',
      title: 'Ku rugero n\'umwami bakiye mu Rwanda rwo ha mbere',
      description: 'Peace-building traditions and reconciliation',
      duration: '12 hrs',
      followers: 265,
      image: 'https://www.chigotours.com/wp-content/uploads/2019/03/Gorillas-and-culture-01-1024x683.jpg',
      imageAlt: 'Traditional peace ceremonies'
    }
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full md:max-w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Most frequent
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the most popular cultural heritage content and historical documentation
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {item.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category */}
                <div className={`mb-3  w-fit px-3 rounded-2xl ${item.categoryColor}`}>
                  <span className={`text-xs uppercase tracking-wider`}>
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users size={14} />
                    <span className="text-xs font-medium">{item.followers}</span>
                    <span className="text-xs">Following</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors duration-200">
                      <Heart size={14} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-green-700 transition-colors duration-200">
                      <Eye size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Content
          </button>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2,650+</div>
              <div className="text-gray-600">Total Followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
              <div className="text-gray-600">Hours of Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10</div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Background Decorations */}
      <div className="fixed top-0 right-0 w-64 h-64 bg-gradient-to-l from-purple-200/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default MostFrequentGallery;