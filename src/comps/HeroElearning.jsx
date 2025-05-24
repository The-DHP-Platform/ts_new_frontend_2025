import React from 'react';
import { ArrowRight } from 'lucide-react';

const RwandanCultureHero = () => {
    return (
        <div className="min-h-[600px] flex items-center py-4">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Learn all about{' '}
                            <span className="">Rwandan</span> &{' '}
                            <span className="">African culture</span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Our purpose is to help people to find the best cultural and
                            heritage courses online and learn with experts anytime,
                            anywhere.
                        </p>

                        <button className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Sign Up Free
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden ">
                            {/* Background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 via-orange-200 to-green-300"></div>

                            {/* Palm Tree */}
                            <div className="absolute w-full h-full">
                                <img src="images/girlslearn.png" alt="" className='w-full h-full'/>
                            </div>

                            {/* Three Women Figures */}
                            <div className="absolute bottom-24 left-8 right-8 flex justify-between items-end">
                                {/* First Woman */}
                                <div className="relative">
                                    {/* Head wrap */}
                                    <div className="w-8 h-8 bg-orange-500 rounded-full mb-1 relative">
                                        <div className="absolute -top-2 -left-1 w-10 h-6 bg-orange-400 rounded-full transform rotate-12"></div>
                                    </div>
                                    {/* Body */}
                                    <div className="w-10 h-24 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-full relative">
                                        {/* Arms */}
                                        <div className="absolute -left-2 top-4 w-3 h-8 bg-orange-500 rounded-full transform -rotate-12"></div>
                                        <div className="absolute -right-2 top-4 w-3 h-8 bg-orange-500 rounded-full transform rotate-45"></div>
                                        {/* Dress pattern */}
                                        <div className="absolute inset-x-1 top-8 space-y-1">
                                            <div className="h-0.5 bg-red-400 rounded"></div>
                                            <div className="h-0.5 bg-red-400 rounded"></div>
                                            <div className="h-0.5 bg-red-400 rounded"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Woman */}
                                <div className="relative">
                                    {/* Head wrap */}
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full mb-1 relative">
                                        <div className="absolute -top-2 -left-1 w-10 h-6 bg-yellow-400 rounded-full transform rotate-12"></div>
                                    </div>
                                    {/* Body */}
                                    <div className="w-10 h-28 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-t-full relative">
                                        {/* Arms */}
                                        <div className="absolute -left-2 top-4 w-3 h-8 bg-yellow-500 rounded-full transform -rotate-45"></div>
                                        <div className="absolute -right-2 top-4 w-3 h-8 bg-yellow-500 rounded-full transform rotate-12"></div>
                                        {/* Dress pattern */}
                                        <div className="absolute inset-x-1 top-8 space-y-1">
                                            <div className="h-0.5 bg-orange-600 rounded"></div>
                                            <div className="h-0.5 bg-orange-600 rounded"></div>
                                            <div className="h-0.5 bg-orange-600 rounded"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Third Woman */}
                                <div className="relative">
                                    {/* Head wrap */}
                                    <div className="w-8 h-8 bg-orange-400 rounded-full mb-1 relative">
                                        <div className="absolute -top-2 -left-1 w-10 h-6 bg-orange-300 rounded-full transform rotate-12"></div>
                                    </div>
                                    {/* Body */}
                                    <div className="w-10 h-32 bg-gradient-to-b from-orange-300 to-orange-600 rounded-t-full relative">
                                        {/* Arms */}
                                        <div className="absolute -left-2 top-4 w-3 h-8 bg-orange-400 rounded-full transform -rotate-12"></div>
                                        <div className="absolute -right-2 top-4 w-3 h-8 bg-orange-400 rounded-full transform rotate-45"></div>
                                        {/* Dress pattern */}
                                        <div className="absolute inset-x-1 top-8 space-y-1">
                                            <div className="h-0.5 bg-red-500 rounded"></div>
                                            <div className="h-0.5 bg-red-500 rounded"></div>
                                            <div className="h-0.5 bg-red-500 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-16 right-16 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
                            <div className="absolute top-24 right-8 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
                            <div className="absolute top-32 right-20 w-4 h-4 bg-yellow-300 rounded-full opacity-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RwandanCultureHero;