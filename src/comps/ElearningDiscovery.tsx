import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DiscoveryItem {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  author: string;
  authorAvatar: string;
  image: string;
  imageAlt: string;
}

const LastDiscoveredSection: React.FC = () => {
  const discoveryItems: DiscoveryItem[] = [
    {
      id: 1,
      category: 'UBWAMI',
      categoryColor: 'text-blue-600',
      title: 'Inerakaranyabubasha bw\'Ingoma ya Cyami',
      author: 'Sohuvindje Mukamago',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      image: 'https://i0.wp.com/umuco.centreforelites.com/wp-content/uploads/2024/10/Cultural-Ceremonies-in-Rwanda.webp',
      imageAlt: 'Traditional royal ceremony'
    },
    {
      id: 2,
      category: 'UBUKANGURAMBERE',
      categoryColor: 'text-orange-600',
      title: 'Guterekera kubahindwa ryindi nihozogo yako...',
      author: 'Rulanga Rwamutobo',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      image: 'https://www.africatouroperators.org/wp-content/uploads/Rwanda-Dancing.png',
      imageAlt: 'Cultural heritage documentation'
    },
    {
      id: 3,
      category: 'AMATEKA',
      categoryColor: 'text-purple-600',
      title: 'Imyaka 30 u Rwanda rwamanze nta Butegera',
      author: 'Chephas Bazirir',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
      image: 'https://www.africatouroperators.org/wp-content/uploads/Rwanda-Dancing.png',
      imageAlt: 'Historical timeline documentation'
    },
    {
      id: 4,
      category: 'UBWOBA',
      categoryColor: 'text-green-600',
      title: 'Mbambwe Rutarinduwa Amateka ye n\'uko yaje...',
      author: 'Joselm Nzituzye',
      authorAvatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face',
      image: 'https://visitandtourrwanda.com/wp-content/uploads/2019/07/Rwanda-Gorilla-and-Cultural-Tour-800x400.jpg',
      imageAlt: 'Traditional stories and legends'
    }
  ];

  const steps = [
    { number: 1, text: 'Apply to become Instructor', color: 'text-blue-600' },
    { number: 2, text: 'Build & edit your profile', color: 'text-orange-600' },
    { number: 3, text: 'Create your new course', color: 'text-red-600' },
    { number: 4, text: 'Start teaching & earning', color: 'text-green-600' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-10/12 mx-auto">
        {/* Last discovered section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Last discovered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discoveryItems.map((item) => (
              <div
                key={item.id}
                className="bg-blue-50 rounded-lg hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="flex">
                  {/* Image */}
                  <div className="w-32 sm:w-40 h-24 sm:h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    {/* Category */}
                    <div className="mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${item.categoryColor}`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.authorAvatar}
                        alt={item.author}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-600">{item.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section with CTA and steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Become a student CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Become a student
              </h3>
              
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                Instructions from around the world teach millions of students on PHP platform. We provide the tools and skills to teach what you love.
              </p>
              
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2 group">
                <span>Start Following</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            
            {/* Character illustration placeholder */}
            <div className="absolute right-4 bottom-0 w-24 h-32 bg-white/20 rounded-t-full hidden sm:block">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white/30 rounded-full"></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-white/25 rounded-lg"></div>
            </div>
          </div>

          {/* Each step of the way */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Each step of the way
            </h3>
            
            <div className="grid grid-cols-2 gap-2">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm ${step.color}`}>
                    {step.number}
                  </div>
                  <span className="text-gray-700 font-medium">{step.text}</span>
                </div>
              ))}
            </div>
            
            {/* Additional info */}
            {/* <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-start space-x-3">
                <User className="text-blue-600 mt-1" size={16} />
                <div>
                  <p className="text-sm text-blue-800 font-medium">Join thousands of instructors</p>
                  <p className="text-xs text-blue-700 mt-1">Start your teaching journey today and make an impact</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastDiscoveredSection;