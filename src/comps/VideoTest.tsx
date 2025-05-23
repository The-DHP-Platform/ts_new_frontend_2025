import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const StorySlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const stories = [
        {
            id: 1,
            name: "Albert Nsegimana",
            title: "Ma mère m'a tue",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            content: "Alors que sa mère, une Hutue, a orchestré et accompagné la tuerie de ses propres enfants, qu'elle a pour certains d'entre eux livrés elle-même à des miliciens hutus qui perfétraient les massacres, Albert échappe miraculeusement à la mort"
        },
        {
            id: 2,
            name: "Marie Uwimana",
            title: "Survivante du génocide",
            image: "https://images.unsplash.com/photo-1494790108755-2616c2ab78b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            content: "Son témoignage bouleversant nous rappelle l'importance de préserver la mémoire collective et de transmettre ces histoires aux générations futures pour que plus jamais de telles atrocités ne se reproduisent."
        },
        {
            id: 3,
            name: "Jean Baptiste Mugabo",
            title: "Témoin de l'histoire",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            content: "À travers son récit poignant, il nous fait découvrir les événements tragiques qu'il a vécus et comment la résilience humaine peut triompher même dans les moments les plus sombres de l'histoire."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % stories.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const currentStory = stories[currentSlide];

    return (
        <div className="max-w-10/12 w-full mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

                    {/* Image Section */}
                    <div className="relative bg-gray-100 overflow-hidden h-[500px]">
                        <img
                            src={currentStory.image}
                            alt={currentStory.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-20 h-20 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all duration-200 group">
                                <Play size={28} className="text-white ml-1 group-hover:scale-110 transition-transform duration-200" />
                            </button>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
                        >
                            <ChevronLeft size={20} className="text-gray-700" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
                        >
                            <ChevronRight size={20} className="text-gray-700" />
                        </button>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">

                            {/* Title */}
                            <div>
                                <h3 className="text-bg-primary text-sm font-medium mb-2 uppercase tracking-wide">
                                    {currentStory.title}
                                </h3>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                                    {currentStory.name}
                                </h2>
                            </div>

                            {/* Story Content */}
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {currentStory.content}
                            </p>

                            {/* Slide Indicators */}
                            <div className="flex space-x-2 pt-4">
                                {stories.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide
                                            ? 'bg-bg-primary w-8'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center space-x-4 mt-6 lg:hidden">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default StorySlider;