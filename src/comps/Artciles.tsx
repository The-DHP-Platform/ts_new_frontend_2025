import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  readTime?: string;
}

const ArticlesSection: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Belgians in Rwanda",
      description: "The 1916-1925 Belgian colonial rule and its main periods",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=faces",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Kunda inka",
      description: "Significance of cow in ancient Rwanda showcased at Inyambo Parade",
      image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=300&fit=crop&crop=center",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Iyimikwa ry'umwami",
      description: "The rules, regulations and rituals that governed the process of becoming a king",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=top",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Rwandan clans",
      description: "Rwanda's clans were approximately 20. Each clan with its totem and beliefs",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop&crop=center",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-10/12 w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Articles
          </h2>
          <button className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
            <span className="hidden sm:inline">More Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              className={`group bg-white rounded-xl cursor-pointer overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {article.readTime && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {article.readTime}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-900 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.description}
                </p>
                
                {/* Read More Button */}
                <button className="group/btn flex items-center gap-2 text-primary hover:text-green-700 font-medium text-sm transition-colors duration-200">
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile More Articles Button */}
        <div className="mt-12 text-center sm:hidden">
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium">
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;