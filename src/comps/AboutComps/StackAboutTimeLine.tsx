

const HeritageTimeline = () => {
  const timelineItems = [
    {
      title: "Preserve & Safeguard",
      description: "Digital repository for African heritage protection.",
      color: "text-primary"
    },
    {
      title: "Promote & Celebrate",
      description: "Share African culture worldwide through community.",
      color: "text-primary"
    },
    {
      title: "Educate & Learn",
      description: "Heritage preservation and cultural education resources.",
      color: "text-primary"
    },
    {
      title: "Engage & Connect",
      description: "Vibrant community of cultural enthusiasts and experts.",
      color: "text-primary"
    },
    {
      title: "Empower & Explore",
      description: "Economic opportunities through our cultural marketplace.",
      color: "text-primary"
    },
    {
      title: "Innovate & Evolve",
      description: "Digital preservation meets sustainable cultural management.",
      color: "text-primary"
    }
  ];

  // Placeholder images with different aspect ratios
  const images = [
    { id: 1, aspect: "aspect-[4/4]", bg: "https://www.explorerwandatours.com/wp-content/uploads/2023/05/caption-17-720x450.jpg" },
    { id: 2, aspect: "aspect-square", bg: "https://visitrwanda.com/wp-content/uploads/fly-images/4516/Amasunzu-Collage-web-v2-1650x1004.jpg" },
    { id: 3, aspect: "aspect-[3/2]", bg: "https://www.safarisrwandasafari.com/wp-content/uploads/2018/10/rwanda-culture.jpg" },
    { id: 4, aspect: "aspect-[3/3]", bg: "https://miro.medium.com/v2/resize:fit:875/1*Mf3bymP1yP8RmBnzip58ig.png" }
  ];

  return (
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full md:max-w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Image Stack */}
          <div className="order-2 lg:order-1 w-11/12">
            <div className="grid grid-cols-2 gap-3 h-fit">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`
                    rounded-xl hover:scale-105 transform transition-all duration-300
                    ${index % 2 === 0 ? 'mt-0' : 'mt-6'}
                  `}
                >
                  <div className="w-full h-full rounded-xl flex items-center justify-center">
                    <img src={`${image.bg}`} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="order-1 lg:order-2 relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary"></div>
            
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-10 h-10 bg-white border-3 border-green-800 rounded-full flex items-center justify-center group-hover:border-green-800 transition-colors duration-300 z-10">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:bg-green-600 transition-colors duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-5 flex-1 pb-6">
                    <div className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 p-4 border border-gray-200 hover:border-green-300">
                      <h3 className={`text-lg font-semibold ${item.color} mb-1`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritageTimeline;