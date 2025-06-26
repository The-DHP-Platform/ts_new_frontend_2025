import { ArrowRight, X, Calendar, BookOpen, Users, Award } from "lucide-react";
import { useMemo, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
interface Category {
  id: number;
  title: string;
  image: string;
  bookCount: string;
  description: string;
  yearReigned: string;
  achievements: string[];
  historicalContext: string;
  totalBooks: number;
}

/* -------------------------------------------------------------------------- */
/*                        Component: BookCategoriesGrid                       */
/* -------------------------------------------------------------------------- */
const BookCategoriesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [filter, setFilter] = useState<"ALL" | "OVER_100" | "UNDER_100">("ALL");

  const categories: Category[] = [
    {
      id: 1,
      title: "Kigeri II Nyamuheshera",
      image: "https://pbs.twimg.com/media/F2HjaQxaYAEqK4d.jpg:large",
      bookCount: "150+ Books",
      description:
        "Known as Kigeri II Nyamuheshera, he was a significant ruler in Rwandan history, remembered for his military prowess and expansion of the kingdom.",
      yearReigned: "1477-1510",
      achievements: [
        "Expanded the kingdom's territory significantly",
        "Established important military reforms",
        "Strengthened the monarchy's power structure",
        "Promoted cultural development",
      ],
      historicalContext:
        "Ruled during a period of territorial expansion and consolidation of royal power. His reign marked important developments in Rwandan political organization.",
      totalBooks: 156,
    },
    {
      id: 2,
      title: "Amateka – Part II",
      image: "https://i.ytimg.com/vi/QtJHAM1jchw/hqdefault.jpg",
      bookCount: "85+ Books",
      description:
        "The second part of comprehensive historical chronicles documenting Rwanda's rich cultural heritage and historical narratives.",
      yearReigned: "Historical Period",
      achievements: [
        "Comprehensive historical documentation",
        "Preservation of oral traditions",
        "Cultural heritage conservation",
        "Educational resource development",
      ],
      historicalContext:
        "This collection represents crucial historical documentation efforts to preserve Rwanda's cultural memory and traditional knowledge.",
      totalBooks: 89,
    },
    {
      id: 3,
      title: "Yuhi V Musinga",
      image: "https://i0.wp.com/umuco.centreforelites.com/wp-content/uploads/2025/02/Yuhi-Musinga.jpg?resize=201%2C250&ssl=1",
      bookCount: "200+ Books",
      description:
        "The last traditional king of Rwanda before colonial influence, known for his resistance to colonial rule and preservation of Rwandan traditions.",
      yearReigned: "1896-1931",
      achievements: [
        "Maintained traditional governance systems",
        "Resisted early colonial pressures",
        "Preserved cultural traditions",
        "Strengthened religious institutions",
      ],
      historicalContext:
        "His reign bridged the pre-colonial and colonial periods, representing the last era of independent Rwandan monarchy.",
      totalBooks: 203,
    },
    {
      id: 4,
      title: "Umwami Mutara III Rudahigwa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukeBXLuX2y7N9Veh-h9CMhbW-pcNHah6StQ&s",
      bookCount: "95+ Books",
      description:
        "King Mutara III Rudahigwa, a modernizing monarch who worked to prepare Rwanda for independence and promoted education.",
      yearReigned: "1931-1959",
      achievements: [
        "Modernized the kingdom's institutions",
        "Promoted education and literacy",
        "Supported independence movements",
        "Fostered national unity",
      ],
      historicalContext:
        "Ruled during the colonial period and worked towards modernization while maintaining Rwandan identity and preparing for future independence.",
      totalBooks: 98,
    },
    {
      id: 5,
      title: "Kigeli V Ndahindurwa",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kigeli_V_Ndahindurwa.jpg/250px-Kigeli_V_Ndahindurwa.jpg",
      bookCount: "110+ Books",
      description:
        "The last reigning monarch of Rwanda, exiled during the transition to a republic yet remembered for his advocacy for Rwandan unity abroad.",
      yearReigned: "1959-1961",
      achievements: [
        "Advocated for peaceful solutions in exile",
        "Maintained royal heritage internationally",
        "Promoted Rwandan culture across the diaspora",
        "Supported humanitarian initiatives for refugees",
      ],
      historicalContext:
        "His short reign coincided with the turbulent end of Rwanda's monarchy and the onset of a republican government.",
      totalBooks: 113,
    },
    // {
    //   id: 6,
    //   title: "Ibisigo Collection",
    //   image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80",
    //   bookCount: "120+ Books",
    //   description:
    //     "A curated anthology of Rwanda's epic poems (Ibisigo) capturing ancestral lore, heroic deeds, and moral teachings.",
    //   yearReigned: "Traditional Period",
    //   achievements: [
    //     "Compilation of ancient oral poetry",
    //     "Linguistic preservation of Kinyarwanda",
    //     "Educational materials for literature studies",
    //     "Cultural revival projects",
    //   ],
    //   historicalContext:
    //     "These works are foundational to Rwanda's oral literature, reflecting socio-political structures and value systems of early kingdoms.",
    //   totalBooks: 125,
    // },
    // {
    //   id: 7,
    //   title: "Gihanga I Ngomijana",
    //   image: "https://images.unsplash.com/photo-1496182491797-24eec2b3f95d?w=800&q=80",
    //   bookCount: "130+ Books",
    //   description:
    //     "Legendary founder of the Rwandan kingdom, credited with introducing iron-working, cattle-breeding, and social institutions.",
    //   yearReigned: "c. 11th Century",
    //   achievements: [
    //     "Founding of the Nyiginya dynasty",
    //     "Introduction of metallurgy and agriculture",
    //     "Establishment of land and cattle rituals",
    //     "Formation of clan-based governance",
    //   ],
    //   historicalContext:
    //     "Gihanga's mythic reign symbolizes the genesis of Rwandan civilization and continues to inspire national identity narratives.",
    //   totalBooks: 134,
    // },
  ];

  /* ----------------------------- Derived State ----------------------------- */
  const filteredCategories = useMemo(() => {
    switch (filter) {
      case "OVER_100":
        return categories.filter((c) => c.totalBooks > 100);
      case "UNDER_100":
        return categories.filter((c) => c.totalBooks <= 100);
      default:
        return categories;
    }
  }, [filter, categories]);

  /* ------------------------------ Handlers ------------------------------ */
  const handleBrowseCollection = (categoryTitle: string) => {
    alert(`Opening ${categoryTitle} collection...`);
    setSelectedCategory(null);
  };

  const handleLearnMore = (categoryTitle: string) => {
    alert(`Opening detailed information about ${categoryTitle}...`);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category: Category) => setSelectedCategory(category);

  const closeModal = () => setSelectedCategory(null);

  /* -------------------------------- Render -------------------------------- */
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-screen-xl">
          {/* ------------------------------ Header ------------------------------ */}
          <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/20 p-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="bg-gradient-to-r bg-clip-text text-4xl font-bold text-black max-md:text-2xl">
              Featured Historical Categories
            </h2>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <label htmlFor="filter" className="text-sm font-medium text-gray-700">
                Filter:
              </label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value as typeof filter)}
                className="rounded-xl border border-green-700 bg-white px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700"
              >
                <option value="ALL">All</option>
                <option value="OVER_100">Over 100 Books</option>
                <option value="UNDER_100">100 Books & Under</option>
              </select>
            </div>
          </header>

          {/* ------------------------------ Grid ------------------------------- */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredCategories.map((category) => (
              <article
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image wrapper */}
                <figure className="relative h-80 overflow-hidden sm:h-96">
                  {/* Photo */}
                  <img
                    src={category.image}
                    alt={`${category.title} category illustration`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      // show fallback layer
                      target.nextElementSibling?.classList.remove("hidden");
                    }}
                    onLoad={(e) => {
                      // if it loads correctly ensure fallback is hidden (defensive)
                      const next = (e.target as HTMLImageElement).nextElementSibling;
                      if (next && !next.classList.contains("hidden")) next.classList.add("hidden");
                    }}
                  />

                  {/* Fallback gradient (initially hidden) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 hidden  items-center justify-center bg-gradient-to-br from-green-700 to-green-900"
                  >
                    <div className="p-4 text-center text-white">
                      <BookOpen className="mx-auto mb-4 h-16 w-16 opacity-80" />
                      <div className="text-sm font-medium opacity-90">Historical Collection</div>
                    </div>
                  </div>

                  {/* Caption overlay */}
                  <figcaption className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/40 to-black/20 p-6 transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50">
                    {/* Badge */}
                    <div className="flex justify-end">
                      <span className="rounded-full bg-green-700/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                        {category.bookCount}
                      </span>
                    </div>

                    {/* Title + CTA */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-green-500 sm:text-2xl">
                        {category.title}
                      </h3>

                      <div className="flex items-center text-white transition-colors duration-300 group-hover:text-green-500">
                        <span className="mr-2 font-semibold">Explore</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </figcaption>
                </figure>

                {/* Hover border */}
                <span className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-green-700/50" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- Modal -------------------------------- */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="m-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto transform rounded-2xl bg-white shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-green-700 to-green-900 px-6 py-4 text-white">
              <h2 className="text-2xl font-bold">{selectedCategory.title}</h2>
              <button
                onClick={closeModal}
                className="rounded-full p-2 transition-colors hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 p-6">
              {/* Info grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-center space-x-3 rounded-lg bg-green-50 p-4">
                  <Calendar className="h-8 w-8 text-green-700" />
                  <div>
                    <div className="text-sm text-gray-600">Period</div>
                    <div className="font-semibold">
                      {selectedCategory.yearReigned}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-green-50 p-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Total Books</div>
                    <div className="font-semibold">
                      {selectedCategory.totalBooks}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rounded-lg bg-green-50 p-4">
                  <Award className="h-8 w-8 text-green-900" />
                  <div>
                    <div className="text-sm text-gray-600">Collection</div>
                    <div className="font-semibold">Premium</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">Description</h3>
                <p className="leading-relaxed text-gray-600">
                  {selectedCategory.description}
                </p>
              </section>

              {/* Historical Context */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Historical Context
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {selectedCategory.historicalContext}
                </p>
              </section>

              {/* Achievements */}
              <section>
                <h3 className="mb-3 text-lg font-semibold text-gray-800">Key Achievements</h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {selectedCategory.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 rounded-lg bg-gray-50 p-3"
                    >
                      <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-700" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row">
                <button
                  onClick={() => handleBrowseCollection(selectedCategory.title)}
                  className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Browse Collection</span>
                </button>
                <button
                  onClick={() => handleLearnMore(selectedCategory.title)}
                  className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-200"
                >
                  <Users className="h-5 w-5" />
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCategoriesGrid;
