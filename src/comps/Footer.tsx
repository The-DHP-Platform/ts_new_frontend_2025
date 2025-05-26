import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white relative">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Digital Repository */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 relative">
                Digital Repository
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/30"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Galleries
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Libraries
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Museums
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Archives
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Digital Content
                </a></li>
              </ul>
            </div>

            {/* Marketplace */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 relative">
                Marketplace
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/30"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Artifacts
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Clothes
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Paintings
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  More
                </a></li>
              </ul>
            </div>

            {/* E-Learning & Resources */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 relative">
                E-Learning
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/30"></div>
              </h3>
              <ul className="space-y-3 mb-8">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Culture
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Language
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Reading
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Others
                </a></li>
              </ul>

              <h3 className="text-lg font-semibold mb-6 relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/30"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Help Center
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Blog
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Tutorials
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  FAQs
                </a></li>
              </ul>
            </div>

            {/* Support & Company */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 relative">
                Support
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/30"></div>
              </h3>
              <ul className="space-y-3 mb-8">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Contact Us
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Developers
                </a></li>
              </ul>

              <h3 className="text-lg font-semibold mb-6 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/30"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  About
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Press
                </a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Events
                </a></li>
              </ul>
            </div>

            {/* Newsletter & Contact */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 relative">
                Stay Connected
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/30"></div>
              </h3>
              
              {/* Newsletter */}
              <div className="mb-8">
                <p className="text-white/80 mb-4 text-sm">Subscribe to our newsletter for updates</p>
                <div className="flex flex-col lg:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors duration-200 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white/80">
                  <MapPin size={16} className="mr-3 flex-shrink-0" />
                  <span className="text-sm">123 Cultural Street, Art District</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Phone size={16} className="mr-3 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Mail size={16} className="mr-3 flex-shrink-0" />
                  <span className="text-sm">hello@yoursite.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-white/80 text-sm">© 2023 Your Company Name. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
              </div>
            </div>
            
            {/* App Store badges */}
            <div className="flex space-x-3">
              <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">A</span>
                </div>
                <div>
                  <div className="text-xs text-white/80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">G</span>
                </div>
                <div>
                  <div className="text-xs text-white/80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>
    </footer>
  );
};

export default Footer;