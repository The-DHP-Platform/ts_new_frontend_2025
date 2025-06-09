import { useState } from 'react';
import { Send, Package, Hash, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function SupplierQuoteForm() {
    const [formData, setFormData] = useState({
        item: '',
        details: '',
        quantity: '',
        unit: 'Pcs'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log('Quote request submitted:', formData);
            setIsSubmitting(false);
            // Handle form submission here
        }, 2000);
    };

    const features = [
        { icon: Users, text: "Connect with 500+ verified suppliers" },
        { icon: Clock, text: "Get quotes within 24 hours" },
        { icon: Package, text: "Compare prices & quality easily" }
    ];

    return (
        <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-300/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 container mx-auto px-2 py-8 w-full md:max-w-11/12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
                    {/* Left Side - Content */}
                    <div className="space-y-8 lg:pr-8">
                        {/* Header */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <CheckCircle className="w-4 h-4" />
                                <span>Trusted by 10,000+ businesses</span>
                            </div>
                            
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Get quotes from
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> suppliers</span>
                                <br />instantly
                            </h1>
                            
                            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg">
                                Send your requirements to our network of verified suppliers and receive competitive quotes within hours, not days.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-200">
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-green-600">500+</div>
                                <div className="text-sm text-gray-600">Suppliers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-green-600">24h</div>
                                <div className="text-sm text-gray-600">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-green-600">98%</div>
                                <div className="text-sm text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="relative">
                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20 relative overflow-hidden">
                            {/* Form background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-tr-full"></div>
                            
                            <div className="relative z-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                        Send Quote Request
                                    </h2>
                                    <p className="text-gray-600">
                                        Fill out the form below and get instant quotes
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Item Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="item" className="block text-sm font-semibold text-gray-700">
                                            What item do you need?
                                        </label>
                                        <div className="relative group">
                                            <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors duration-200" />
                                            <input
                                                type="text"
                                                id="item"
                                                name="item"
                                                value={formData.item}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                                                placeholder="e.g., Industrial pumps, Office furniture..."
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Details Textarea */}
                                    <div className="space-y-2">
                                        <label htmlFor="details" className="block text-sm font-semibold text-gray-700">
                                            Additional Details
                                        </label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            value={formData.details}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none bg-gray-50/50 hover:bg-white"
                                            placeholder="Specifications, quality requirements, delivery timeline..."
                                        />
                                    </div>

                                    {/* Quantity and Unit Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700">
                                                Quantity
                                            </label>
                                            <div className="relative group">
                                                <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors duration-200" />
                                                <input
                                                    type="number"
                                                    id="quantity"
                                                    name="quantity"
                                                    value={formData.quantity}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 placeholder-gray-400 bg-gray-50/50 hover:bg-white"
                                                    placeholder="0"
                                                    min="1"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="unit" className="block text-sm font-semibold text-gray-700">
                                                Unit
                                            </label>
                                            <select
                                                id="unit"
                                                name="unit"
                                                value={formData.unit}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 bg-gray-50/50 hover:bg-white cursor-pointer"
                                            >
                                                <option value="Pcs">Pieces</option>
                                                <option value="Kg">Kilograms</option>
                                                <option value="Liters">Liters</option>
                                                <option value="Meters">Meters</option>
                                                <option value="Boxes">Boxes</option>
                                                <option value="Sets">Sets</option>
                                                <option value="Tons">Tons</option>
                                                <option value="Pallets">Pallets</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full bg-primary to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send Inquiry</span>
                                                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Additional Info */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span>Your request will be sent to all relevant suppliers instantly</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg rotate-45 opacity-20 animate-bounce delay-1000"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full opacity-30 animate-pulse delay-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}