import { Home, BookOpen, ShoppingCart, GraduationCap, LogIn, UserPlus, Menu, X, User } from 'lucide-react';
import { useState, type SetStateAction } from 'react';

import Footer from './Footer';
import HomePage from '../../pages/HomePage';
import AboutUs from '../../pages/AboutUs';
import Elearning from '../../pages/Elearning';
import DigRepo from '../../pages/DigRepo';

export default function DigitalHeritagePlatform() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [viewPage, setViewPAge] = useState(localStorage.getItem("ViewPage") ? localStorage.getItem("ViewPage") : "home")

    const handelNavigation = (link: SetStateAction<string>) => {
        localStorage.setItem("ViewPage", link as string)
        setViewPAge(link as string)
        setIsMenuOpen(false) // Close mobile menu when navigating
        viewPage == link ? window.location.href = "" : ""
    }

    // Helper function to get active classes
    const getNavClasses = (page: string) => {
        const baseClasses = "flex items-center space-x-1 transition-colors duration-200";
        const activeClasses = "text-green-900 bg-green-50 px-3 py-2 rounded-lg";
        const inactiveClasses = "text-gray-700 hover:text-green-900";

        return viewPage === page
            ? `${baseClasses} ${activeClasses}`
            : `${baseClasses} ${inactiveClasses}`;
    }

    // Helper function for mobile nav classes
    const getMobileNavClasses = (page: string) => {
        const baseClasses = "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200";
        const activeClasses = "text-green-900 bg-green-50";
        const inactiveClasses = "text-gray-700 hover:text-green-900 hover:bg-gray-50";

        return viewPage === page
            ? `${baseClasses} ${activeClasses}`
            : `${baseClasses} ${inactiveClasses}`;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white cursor-pointer sticky top-0 z-50">
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
                        <div className="hidden xl:flex items-center space-x-8 ">
                            <a onClick={() => { handelNavigation("home") }} className={getNavClasses("home")}>
                                <Home className="h-4 w-4" />
                                <span className="font-bold">Home</span>
                            </a>
                            <a onClick={() => { handelNavigation("about") }} className={getNavClasses("about")}>
                                <BookOpen className="h-4 w-4" />
                                <span className="font-bold">About Us</span>
                            </a>
                            <a onClick={() => { handelNavigation("marketplace") }} className={getNavClasses("marketplace")}>
                                <ShoppingCart className="h-4 w-4" />
                                <span className="font-bold">Marketplace</span>
                            </a>
                            <a onClick={() => { handelNavigation("elearning") }} className={getNavClasses("elearning")}>
                                <GraduationCap className="h-4 w-4" />
                                <span className="font-bold">E-Learning</span>
                            </a>
                            <a onClick={() => { handelNavigation("resources") }} className={getNavClasses("resources")}>
                                <GraduationCap className="h-4 w-4" />
                                <span className="font-bold">Resources</span>
                            </a>
                            <a onClick={() => { handelNavigation("involved") }} className={getNavClasses("involved")}>
                                <User className="h-4 w-4" />
                                <span className="font-bold">Get involved</span>
                            </a>
                        </div>

                        {/* Auth Buttons - Right (Desktop) */}
                        <div className="hidden xl:flex items-center space-x-3">
                            <a href="/login" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-900 transition-colors duration-200">
                                <LogIn className="h-4 w-4" />
                                <span className="font-bold">Log In</span>
                            </a>
                            <a href="/register" className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                <UserPlus className="h-4 w-4" />
                                <span className="font-bold">Sign Up</span>
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
                                <a onClick={() => { handelNavigation("home") }} className={getMobileNavClasses("home")}>
                                    <Home className="h-4 w-4" />
                                    <span className="font-bold">Home</span>
                                </a>
                                <a onClick={() => { handelNavigation("about") }} className={getMobileNavClasses("about")}>
                                    <BookOpen className="h-4 w-4" />
                                    <span className="font-bold">About Us</span>
                                </a>
                                <a onClick={() => { handelNavigation("marketplace") }} className={getMobileNavClasses("marketplace")}>
                                    <ShoppingCart className="h-4 w-4" />
                                    <span className="font-bold">Marketplace</span>
                                </a>
                                <a onClick={() => { handelNavigation("elearning") }} className={getMobileNavClasses("elearning")}>
                                    <GraduationCap className="h-4 w-4" />
                                    <span className="font-bold">E-Learning</span>
                                </a>
                                <a onClick={() => { handelNavigation("resources") }} className={getMobileNavClasses("resources")}>
                                    <GraduationCap className="h-4 w-4" />
                                    <span className="font-bold">Resources</span>
                                </a>
                                <a onClick={() => { handelNavigation("involved") }} className={getMobileNavClasses("involved")}>
                                    <User className="h-4 w-4" />
                                    <span className="font-bold">Get involved</span>
                                </a>

                                {/* Mobile Auth Buttons */}
                                <div className="pt-4 space-y-2">
                                    <a href="/login" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-green-900 hover:bg-gray-50 transition-colors duration-200">
                                        <LogIn className="h-4 w-4" />
                                        <span className="font-bold">Log In</span>
                                    </a>
                                    <a href="/register" className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                        <UserPlus className="h-4 w-4" />
                                        <span className="font-bold">Sign Up</span>
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
                {viewPage == "resources" && <DigRepo />}
            </main>
            <Footer />
        </div>
    );
}