import { ArrowRight } from 'lucide-react';

export default function CultureHeritageHero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('logos/Video.png')`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-pulse delay-700" />
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-md animate-pulse delay-1000" />

            <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Animated Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
                        🌍 Preserving Heritage for Future Generations
                    </div>

                    {/* Title with Enhanced Typography */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Culture & Heritage in
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-white drop-shadow-lg">
                            Rwanda.
                        </span>
                    </h1>

                    {/* Enhanced Subtitle */}
                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                        The only platform ensuring that culture and heritage in every way ,shape or form  reaches the later generations in an efficient way.
                    </p>

                    {/* Modern Email Signup Form */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto sm:max-w-2xl mb-12">
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-300 text-lg"
                            />
                        </div>
                        <button className="bg-primary  text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-lg group">
                            Sign Up Free
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm mb-16">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span>Shop now</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                            <span>Start small</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500" />
                            <span>Join 10,000+ Users</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
        </section>
    );
}