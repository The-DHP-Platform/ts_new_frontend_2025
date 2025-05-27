import React from 'react';
import { Database, ShoppingBag, GraduationCap, Shield, Megaphone, BookOpen, Users, DollarSign, Lightbulb, Handshake, Zap } from 'lucide-react';

const DHPFeaturesObjectives: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Digital Repository",
      description: "Explore a vast digital repository housing a diverse collection of African cultural heritage assets. From ancient artifacts to contemporary artworks, discover and immersively interact with rich cultural treasures from across the continent.",
      icon: Database,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 2,
      title: "Marketplace",
      description: "Engage in a vibrant marketplace where users can buy, sell, or exchange digital cultural heritage assets. Connect with collectors, institutions, and enthusiasts to expand your digital collection or find unique pieces to enhance your understanding of African heritage.",
      icon: ShoppingBag,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      id: 3,
      title: "E-learning",
      description: "Dive into an engaging e-learning platform with gamified courses, resources, and workshops on heritage preservation, cultural education, and community engagement. Learn from experts, join discussions, and gain the skills to champion African heritage preservation.",
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  const objectives = [
    { 
      label: "Preserve", 
      text: "Safeguard African heritage with our digital repository.",
      icon: Shield,
      color: "text-green-600"
    },
    { 
      label: "Promote", 
      text: "Share and celebrate African culture worldwide.",
      icon: Megaphone,
      color: "text-blue-600"
    },
    { 
      label: "Educate", 
      text: "Learn about heritage preservation and cultural education.",
      icon: BookOpen,
      color: "text-purple-600"
    },
    { 
      label: "Engage", 
      text: "Connect with a vibrant community of enthusiasts.",
      icon: Users,
      color: "text-indigo-600"
    },
    { 
      label: "Empower", 
      text: "Explore economic opportunities in our marketplace.",
      icon: DollarSign,
      color: "text-emerald-600"
    },
    { 
      label: "Innovate", 
      text: "Evolve with us to meet digital preservation needs.",
      icon: Lightbulb,
      color: "text-orange-600"
    }
  ];

  const additionalObjectives = [
    "Collaborate with cultural institutions and communities for heritage awareness.",
    "Harness digital decolonialized storytelling and education for heritage preservation."
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Features Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    index === 1 ? 'lg:mt-8' : index === 2 ? 'lg:mt-16' : ''
                  }`}
                >
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Gradient Border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Objectives Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our objectives
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to the heart of our mission. At Digital Heritage Preservationists (DHP) platform, we are driven by a set of clear objectives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The initiative aims to digitize and preserve cultural artifacts, historical sites, and intangible heritage for accessibility by scholars and the public. 
              It seeks to innovate tools for digital documentation and conservation, advancing heritage preservation practices.
            </p>
            <p className="text-lg font-medium text-gray-800">
              Discover, Learn, and Join us in preserving African Heritage for future generations
            </p>
          </div>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder for images - using gradient backgrounds */}
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl"></div>
                <div className="h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl"></div>
                <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute bottom-8 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-70 animate-bounce"></div>
          </div>

          {/* Right: Objectives List */}
          <div className="space-y-6">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div key={index} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className={`w-5 h-5 ${objective.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <span className={`font-bold text-sm ${objective.color}`}>
                        {objective.label}:
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {objective.text}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Additional Objectives */}
            <div className="pt-6 border-t border-gray-200">
              {additionalObjectives.map((text, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {index === 0 ? (
                      <Handshake className="w-5 h-5 text-teal-600" />
                    ) : (
                      <Zap className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to preserve African heritage?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our mission to digitize, preserve, and celebrate the rich cultural heritage of Africa for future generations.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DHPFeaturesObjectives;