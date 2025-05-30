import React from 'react';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

const ProductShowcase: React.FC = () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'Milking tools',
            price: 'From USD 19',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 2,
            name: 'Made in Rwanda',
            price: 'From USD 19',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 3,
            name: 'Imigongo',
            price: 'From USD 19',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 4,
            name: 'Art ibibindi',
            price: 'From USD 19',
            image: 'https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 5,
            name: 'Amateka',
            price: 'From USD 100',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 6,
            name: 'Ibishushanyo',
            price: 'From USD 39',
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 7,
            name: 'Traditional tools',
            price: 'From USD 19',
            image: 'https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 8,
            name: 'Imitako',
            price: 'From USD 10',
            image: 'https://images.unsplash.com/photo-1586031119227-db3d1f8b5ac9?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 9,
            name: 'Imbehe ziboshye',
            price: 'From USD 19',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 10,
            name: 'Agacuma',
            price: 'From USD 89',
            image: 'https://images.unsplash.com/photo-1586031119227-db3d1f8b5ac9?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 11,
            name: 'Inyambo',
            price: 'From USD 10',
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 12,
            name: 'Ibyibo',
            price: 'From USD 90',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 13,
            name: 'Ibibindi byiza',
            price: 'From USD 35',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 14,
            name: 'Imigongo',
            price: 'From USD 340',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 15,
            name: 'Igishushanyo',
            price: 'From USD 19',
            image: 'https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?w=200&h=200&fit=crop&crop=center'
        },
        {
            id: 16,
            name: 'Igishushanyo',
            price: 'From USD 240',
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=200&h=200&fit=crop&crop=center'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                {/* Left Featured Section - Home Cultural products */}
                <div className="lg:col-span-2 lg:row-span-2">
                    <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-6 h-full flex flex-col justify-between min-h-[320px]">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Home Cultural<br />products
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1463620910506-d0458143143e?w=200&h=150&fit=crop&crop=center"
                                alt="Cultural products"
                                className="w-32 h-24 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid - First Row */}
                {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-xs">{product.price}</p>
                    </div>
                ))}

                {/* Product Grid - Second Row */}
                {products.slice(4, 8).map((product) => (
                    <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-xs">{product.price}</p>
                    </div>
                ))}

                {/* Bottom Featured Section - Hand Made */}
                <div className="lg:col-span-2 lg:row-span-2">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 h-full flex flex-col justify-between min-h-[320px]">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Hand Made
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1586031119227-db3d1f8b5ac9?w=200&h=150&fit=crop&crop=center"
                                alt="Hand made products"
                                className="w-32 h-24 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid - Third Row */}
                {products.slice(8, 12).map((product) => (
                    <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-xs">{product.price}</p>
                    </div>
                ))}

                {/* Product Grid - Fourth Row */}
                {products.slice(12, 16).map((product) => (
                    <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-24 object-cover rounded-lg mb-3"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
                            <p className="text-gray-600 text-xs">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductShowcase;