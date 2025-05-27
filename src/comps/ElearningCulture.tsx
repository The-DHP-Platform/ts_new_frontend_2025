import { ArrowRight } from 'lucide-react';

export default function CulturalCategorization() {
  const categories = [
    { name: 'Amahuha', courses: '316 PYG Courses', color: 'bg-blue-50 hover:bg-blue-100' },
    { name: 'Ubwami', courses: '32 AKZ Courses', color: 'bg-purple-50 hover:bg-purple-100' },
    { name: 'Ubugeni', courses: '55 EAT Countries', color: 'bg-red-50 hover:bg-red-100' },
    { name: 'Umuco', courses: '27 AFR Courses', color: 'bg-green-50 hover:bg-green-100' },
    { name: 'Ikorihamuryo', courses: '20 DI8 Courses', color: 'bg-yellow-50 hover:bg-yellow-100' },
    { name: 'Ubwiyangantse', courses: '74 SQZ Courses', color: 'bg-indigo-50 hover:bg-indigo-100' },
    { name: 'Imirimo Ngendurango', courses: '45 INT Countries', color: 'bg-pink-50 hover:bg-pink-100' },
    { name: 'Intigenzo', courses: '9 UNK Courses', color: 'bg-orange-50 hover:bg-orange-100' }
  ];

  return (
    <div className="mx-auto p-8 bg-white">
      <div className="max-w-full md:max-w-11/12 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Cultural categorization
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-center transition-all duration-200 hover:shadow-md cursor-pointer ${category.color}`}
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">
                {category.courses}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            We have more category & subcategory.
          </p>
          <button className="inline-flex cursor-pointer items-center space-x-2 text-primary hover:text-green-800 font-medium transition-colors duration-200">
            <span>Browse All</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}