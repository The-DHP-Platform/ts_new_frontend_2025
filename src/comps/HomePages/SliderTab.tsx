import { useState, useEffect, type SetStateAction } from 'react';
interface Shareholder {
  name: string;
  logo: string; // path or imported asset
}

export default function ShareholdersRow() {
  /* ----------------------------- Partner data ----------------------------- */
  const shareholders: Shareholder[] = [
     { name: 'Nexventures Ltd',    logo: 'https://lh3.googleusercontent.com/p/AF1QipNNz74oBjb_DykwEVNER-ham7qBSMNHCI4i9Yp8=s680-w680-h510-rw' },
    { name: 'Rwanda Development Bank',    logo: 'https://www.greenclimate.fund/sites/default/files/organisation/logo-dbr.png' },
    { name: 'Digital Heritage Corp',      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyK98uRyCNi-1xvAoEd79DEOqVkUr8SkKRxQ&s' },
    { name: 'Legacy Partners',            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpJAwlYGeq3llaWO28YqUMThWXapoOGzKgA&s' },
    { name: 'Cultural Innovation Hub',    logo: 'https://static.wixstatic.com/media/a4bc0d_0409493f6b34488baae25c393cf1e71c~mv2.png' },
    { name: 'Heritage Tech Solutions',    logo: 'https://www.htspc.net/wp-content/uploads/2020/03/logo-hts-r1-1.png' },
    { name: 'Rwanda Cultural Fund',       logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIlo6mw547bfvBHeMkykEm9FFE8HafiIppg&s' },
    { name: 'Digital Legacy Inc',         logo: 'https://digitallegacyassociation.org/wp-content/uploads/2016/05/Digital-Legacy-Association-Crest-e1601547481137.png' },
    { name: 'Heritage Ventures',          logo: 'https://heritage-ventures.com/wp-content/uploads/2021/05/header-new-logo.png' },
    { name: 'Cultural Bridge Partners',   logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCw4nm7jpn1f65r7sKigG9SYBTEnsXqPQfA&s' },
    { name: 'Rwanda Heritage Group',      logo: 'https://lh3.googleusercontent.com/ci/AL18g_Q4vCh7-nfgf7bMyCNGVbPyyF0jMErZ5xjB_OffJ4Cz-yXgGN4ZOJW-gmrtirv1sDCaSNAS' },
  ];

  /* ------------------------------ State ----------------------------------- */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const totalSlides = Math.ceil(shareholders.length / itemsPerView);

  /* --------- Adjust items per view on viewport size change ---------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* --------- Reset index if itemsPerView changes (avoid OOB) -------------- */
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  /* --------------------- Autoplay every 4 s ------------------------------- */
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex(prev => (prev + 1) % totalSlides),
      4000,
    );
    return () => clearInterval(interval);
  }, [totalSlides]);

  /* ------------------- Helpers: nav & dots -------------------------------- */
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: SetStateAction<number>) => setCurrentIndex(index);

  /* ------------------------------------------------------------------------ */
  return (
    <div className="relative w-full py-8 bg-gradient-to-b from-slate-50/50 to-gray-300/10">
      {/* ◄ prev */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ► next */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ---------------------- Slider ---------------------- */}
      <div className="overflow-hidden mx-4 sm:mx-8 md:mx-12 lg:mx-16">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-3 md:px-4">
                {shareholders
                  .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                  .map(({ name, logo }, idx) => (
                    <div
                      key={slideIndex * itemsPerView + idx}
                      className="group relative flex-1 bg-white/70 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                    >
                      {/* Logo */}
                      <div className="relative mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                        <img
                          src={logo}
                          alt={`${name} logo`}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Text */}
                      <h3 className="relative text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors duration-300 leading-snug mb-1 sm:mb-2">
                        {name}
                      </h3>
                      <p className="relative text-xs text-slate-500 opacity-60 group-hover:opacity-100 group-hover:text-slate-600 transition-all duration-300">
                        Strategic Partner
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------- Dots ------------------- */}
      <div className="flex justify-center mt-6 sm:mt-7 md:mt-8 gap-1 sm:gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-4 sm:w-6 md:w-8'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
