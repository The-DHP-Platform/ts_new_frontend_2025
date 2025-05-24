import { Home, BookOpen, ShoppingCart, GraduationCap, LogIn, UserPlus, Menu, X } from 'lucide-react';
import { useState, type SetStateAction } from 'react';

import Footer from './Footer';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Elearning from '../pages/Elearning';

export default function DigitalHeritagePlatform() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [viewPage, setViewPAge] = useState(localStorage.getItem("ViewPage") ? localStorage.getItem("ViewPage") : "home")
    const handelNavigation = (link: SetStateAction<string>) => {
        localStorage.setItem("ViewPage", link as string)
        setViewPAge(link as string)
    }
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white cursor-pointer">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo Section - Left */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <img src="logos/logo-circle.png" alt="Digital Heritage" className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-semibold text-gray-900">Digital Heritage</h1>
                                <p className="text-xs text-gray-500">Preservationists Platform</p>
                            </div>
                        </div>

                        {/* Navigation Links - Center (Desktop) */}
                        <div className="hidden xl:flex items-center space-x-8">
                            <a onClick={() => handelNavigation("home")} className="flex items-center space-x-1 text-gray-700 hover:text-green-900 transition-colors duration-200">
                                <Home className="h-4 w-4" />
                                <span className="font-medium">Home</span>
                            </a>
                            <a onClick={() => handelNavigation("about")} className="flex items-center space-x-1 text-gray-700 hover:text-green-900 transition-colors duration-200">
                                <BookOpen className="h-4 w-4" />
                                <span className="font-medium">About Us</span>
                            </a>
                            <a onClick={() => handelNavigation("about")} className="flex items-center space-x-1 text-gray-700 hover:text-green-900 transition-colors duration-200">
                                <ShoppingCart className="h-4 w-4" />
                                <span className="font-medium">Marketplace</span>
                            </a>
                            <a onClick={() => handelNavigation("elearning")} className="flex items-center space-x-1 text-gray-700 hover:text-green-900 transition-colors duration-200">
                                <GraduationCap className="h-4 w-4" />
                                <span className="font-medium">E-Learning</span>
                            </a>
                            <a onClick={() => handelNavigation("about")} className="flex items-center space-x-1 text-gray-700 hover:text-green-900 transition-colors duration-200">
                                <GraduationCap className="h-4 w-4" />
                                <span className="font-medium">Get involved</span>
                            </a>
                        </div>

                        {/* Auth Buttons - Right (Desktop) */}
                        <div className="hidden xl:flex items-center space-x-3">
                            <a href="/login" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-900 transition-colors duration-200">
                                <LogIn className="h-4 w-4" />
                                <span className="font-medium">Log In</span>
                            </a>
                            <a href="/register" className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                <UserPlus className="h-4 w-4" />
                                <span className="font-medium">Sign Up</span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="xl:hidden p-2 rounded-lg text-gray-700 hover:text-green-900 hover:bg-gray-50 transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="xl:hidden border-t border-gray-100 bg-white">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {/* Mobile Navigation Links */}
                                <a onClick={() => handelNavigation("home")} className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-green-900 hover:bg-gray-50 transition-colors duration-200">
                                    <Home className="h-4 w-4" />
                                    <span className="font-medium">Home</span>
                                </a>
                                <a onClick={() => handelNavigation("about")} className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-green-900 hover:bg-gray-50 transition-colors duration-200">
                                    <BookOpen className="h-4 w-4" />
                                    <span className="font-medium">about us</span>
                                </a>
                                <a onClick={() => handelNavigation("about")} className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-green-900 hover:bg-gray-50 transition-colors duration-200">
                                    <ShoppingCart className="h-4 w-4" />
                                    <span className="font-medium">Marketplace</span>
                                </a>
                                <a onClick={() => handelNavigation("elearning")} className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-green-900 hover:bg-gray-50 transition-colors duration-200">
                                    <GraduationCap className="h-4 w-4" />
                                    <span className="font-medium">E-Learning</span>
                                </a>

                                {/* Mobile Auth Buttons */}
                                <div className="pt-4 space-y-2">
                                    <a href="/login" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-green-900 hover:bg-gray-50 transition-colors duration-200">
                                        <LogIn className="h-4 w-4" />
                                        <span className="font-medium">Log In</span>
                                    </a>
                                    <a href="/register" className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                        <UserPlus className="h-4 w-4" />
                                        <span className="font-medium">Sign Up</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            {/** Control the none loged navigation and other navigation that require navbar */}
            <main>
                {viewPage == "home" && <HomePage />}
                {viewPage == "about" && <AboutUs />}
                {viewPage == "elearning" && <Elearning />}
            </main>
            <Footer />
        </div>
    );
}