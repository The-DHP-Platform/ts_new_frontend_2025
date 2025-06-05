import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface Deal {
  id: number;
  discount: string;
  image: string;
  title: string;
  description: string;
  liked: boolean;
}

const DealsAndOffers: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56
  });

  const [deals, setDeals] = useState<Deal[]>([
    {
      id: 1,
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=center',
      title: 'Flute',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      liked: false
    },
    {
      id: 2,
      discount: '-15%',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=150&h=150&fit=crop&crop=center',
      title: 'Painting by Justin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      liked: false
    },
    {
      id: 3,
      discount: '-40%',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=150&h=150&fit=crop&crop=center',
      title: 'Cow paint',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      liked: false
    },
    {
      id: 4,
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center',
      title: 'Agaseke',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      liked: false
    },
    {
      id: 5,
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center',
      title: 'Ikibindi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      liked: false
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleLike = (id: number) => {
    setDeals(prev => prev.map(deal => 
      deal.id === id ? { ...deal, liked: !deal.liked } : deal
    ));
  };

  return (
    <div className="md:max-w-11/12 max-w-full mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Deals and offers</h2>
          <p className="text-gray-600">Cultural decor equipments</p>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex space-x-4">
          <div className="bg-gray-800 text-white px-4 py-3 rounded-lg text-center min-w-[60px]">
            <div className="text-xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-gray-800 text-white px-4 py-3 rounded-lg text-center min-w-[60px]">
            <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wide">Hour</div>
          </div>
          <div className="bg-gray-800 text-white px-4 py-3 rounded-lg text-center min-w-[60px]">
            <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wide">Min</div>
          </div>
          <div className="bg-gray-800 text-white px-4 py-3 rounded-lg text-center min-w-[60px]">
            <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wide">Sec</div>
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold z-10">
                {deal.discount}
              </div>
              
              {/* Heart Icon */}
              <button 
                onClick={() => toggleLike(deal.id)}
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 z-10"
              >
                <Heart 
                  size={18} 
                  className={`${deal.liked ? 'fill-red-500 text-red-500' : 'text-gray-400'} transition-colors duration-200`}
                />
              </button>
              
              {/* Product Image */}
              <div className="p-6 pb-4">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-24 h-24 mx-auto rounded-full object-cover shadow-sm"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="px-6 pb-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{deal.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{deal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsAndOffers;