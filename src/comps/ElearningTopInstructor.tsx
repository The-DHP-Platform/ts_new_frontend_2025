import { ArrowRight } from 'lucide-react';

interface instructors {
    name: string,
    role: string,
    image: string
}
export default function TopInstructorSection() {
    const instructors: instructors[] = [
        {
            name: "Alexis Kagame",
            role: "Umasa nyamibwa",
            image: "https://npr.brightspotcdn.com/dims4/default/d0fb4af/2147483647/strip/true/crop/3713x2753+0+0/resize/880x652!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwkar%2Ffiles%2F201303%2FEmmanuel_photo.jpg"
        },
        {
            name: "Cleophas Barone",
            role: "Author",
            image: "https://mobile.igihe.com/local/cache-vignettes/L1000xH667/fozdoh7xsae0gec-923c2.jpg?1713668302"
        },
        {
            name: "Merlyn Yohana",
            role: "Artist",
            image: "https://i.ytimg.com/vi/YUUmHf7kho4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgTChCMA8=&rs=AOn4CLAzIGCprV8su_UQCr2zhRPVYczP_w"
        },
        {
            name: "Charles Rutanga",
            role: "University Professor",
            image: "https://umuseke.rw/wp-content/uploads/2022/03/IMG_20220322_102429-scaled-1.jpeg"
        },
        {
            name: "Agnes Binagwaho",
            role: "Abanyamatiku",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizOTp-ffwh1E08igdseeWQFwJDWpunOJUq-Vj6HGDPxZ_hAd0BUWuA7k1VeNC7d33lpQ&usqp=CAU"
        }
    ];

    return (
        <div className="bg-slate-100 py-16 px-6">
            <div className="max-w-full md:max-w-11/12 mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Top instructor of the month
                    </h2>
                </div>

                {/* Instructor Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
                    {instructors.map((instructor, index) => (
                        <div key={index} className="text-center group cursor-pointer">
                            <div className="relative mb-4 h-42 overflow-hidden">
                                <img
                                    src={instructor.image}
                                    alt={instructor.name}
                                    className="w-full h-full object-cover mx-auto rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                                />
                                <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                {instructor.name}
                            </h3>
                            <p className="text-gray-600 text-xs">
                                {instructor.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <p className="text-gray-600 text-sm mb-4">
                        Thousands of students waiting for a instructor. Start teaching & earning now!
                    </p>
                    <button className="inline-flex items-center cursor-pointer gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 group">
                        Become Instructor
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </div>
            </div>
        </div>
    );
}