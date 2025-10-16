import ShippingPolicy from './ShippingPolicy'; 
import React, { useState, useEffect } from 'react';
import { Download, Droplet, TrendingUp, Users, Award, ChevronDown } from 'lucide-react';

// --- Consolidated Product Data ---
// Grouped data structure: Product types hold an array of variants (quantities/prices)
const GROUPED_PRODUCTS = [
    {
        slug: 'milk',
        name: "Pure Milk",
        baseImage: "https://thumbs.dreamstime.com/b/milk-21098718.jpg",
        description: "Farm-fresh, pasteurized milk, rich in calcium and vitamins. Perfect for daily consumption.",
        variants: [
            { id: 101, quantity: "500ml", price: 28 },
            { id: 102, quantity: "1L", price: 55 },
            { id: 103, quantity: "2L (Value Pack)", price: 105 },
        ]
    },
    {
        slug: 'curd',
        name: "Fresh Curd (Dahi)",
        baseImage: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop",
        description: "Thick, creamy, and probiotic-rich curd, made from 100% pure milk.",
        variants: [
            { id: 201, quantity: "200g", price: 15 },
            { id: 202, quantity: "500g", price: 30 },
            { id: 203, quantity: "1kg (Family Pack)", price: 58 },
        ]
    },
    {
        slug: 'butter-milk',
        name: "Spiced Buttermilk (Chaas)",
        baseImage: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop",
        description: "Refreshing, naturally flavored buttermilk. Great for digestion.",
        variants: [
            { id: 301, quantity: "200ml", price: 12 },
            { id: 302, quantity: "500ml", price: 30 },
            { id: 303, quantity: "1L", price: 55 },
        ]
    },
    {
        slug: 'lassi',
        name: "Sweet Lassi",
        baseImage: "https://www.sharmispassions.com/wp-content/uploads/2023/08/sweet-lassi3.jpg",
        description: "Traditional sweet yogurt drink, a perfect summer coolant.",
        variants: [
            { id: 401, quantity: "200ml", price: 40 },
            { id: 402, quantity: "500ml", price: 100 },
            { id: 403, quantity: "1L", price: 180 },
        ]
    },
    {
        slug: 'paneer',
        name: "Cottage Cheese (Paneer)",
        baseImage: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
        description: "Soft and fresh paneer, ideal for cooking delicious Indian dishes.",
        variants: [
            { id: 501, quantity: "100g", price: 60 },
            { id: 502, quantity: "200g", price: 115 },
            { id: 503, quantity: "500g", price: 285 },
        ]
    },
    {
        slug: 'ghee',
        name: "Desi Ghee",
        baseImage: "https://www.thestatesman.com/wp-content/uploads/2022/08/iStock-1187181045.jpg",
        description: "Clarified butter, rich aroma, and traditional granulation.",
        variants: [
            { id: 601, quantity: "100ml", price: 130 },
            { id: 602, quantity: "250ml", price: 320 },
            { id: 603, quantity: "500ml", price: 630 },
            { id: 604, quantity: "1L", price: 1240 },
        ]
    },
    {
        slug: 'butter',
        name: "Salted Butter",
        baseImage: "https://tse1.mm.bing.net/th/id/OIP.eTK40g88luhlrZTo2zO-nQHaLH?pid=Api",
        description: "Smooth, rich salted butter for spreading and cooking.",
        variants: [
            { id: 701, quantity: "100g", price: 45 },
            { id: 702, quantity: "250g", price: 110 },
        ]
    },
    {
        slug: 'cream',
        name: "Dairy Cream",
        baseImage: "https://tse2.mm.bing.net/th/id/OIP.0lSBziVrH2KvoeLJ9ATNZQHaJr?pid=Api&P=0&h=180",
        description: "High-fat dairy cream, perfect for desserts and cooking sauces.",
        variants: [
            { id: 801, quantity: "200ml", price: 70 },
            { id: 802, quantity: "500ml", price: 170 },
        ]
    },
    {
        slug: 'khova',
        name: "Khova ",
        baseImage: "https://1.bp.blogspot.com/-B-RnWpLsXp0/XabGbINp95I/AAAAAAAA1Js/C76piodWLcsbe1gSC0NwDHI9cake1MPRwCLcBGAsYHQ/s1600/MilkSweet.jpg",
        description: "Traditional evaporated milk solids used in Indian sweets.",
        variants: [
            { id: 901, quantity: "200g", price: 150 },
            { id: 902, quantity: "500g", price: 350 },
        ]
    },
    {
        slug: 'yogurt',
        name: "Fruit Yogurt",
        baseImage: "https://static.vecteezy.com/system/resources/previews/030/627/139/large_2x/yogurt-image-hd-free-photo.jpg",
        description: "Flavored yogurt with real fruit chunks. Healthy snack.",
        variants: [
            { id: 1001, quantity: "150g (Strawberry)", price: 40 },
            { id: 1002, quantity: "150g (Mango)", price: 40 },
        ]
    },
];


const MilkFranchise = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // Holds the entire product group (e.g., Milk object)
    const [selectedVariant, setSelectedVariant] = useState(null); // Holds the specific variant (quantity/price)
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    // Ensure variant is selected when the product page loads
    useEffect(() => {
        if (currentPage === 'product' && selectedProduct && !selectedVariant) {
            // Automatically select the first variant by default
            setSelectedVariant(selectedProduct.variants[0]);
        }
    }, [currentPage, selectedProduct, selectedVariant]);


    const apkUrl = "https://github.com/yourusername/yourrepo/raw/main/myapp.apk";

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBuyClick = (product) => {
        setSelectedProduct(product);
        setSelectedVariant(product.variants[0]); // Select the default variant
        setCurrentPage('product');
        window.scrollTo(0, 0);
    };

    const handleBackToHome = () => {
        setCurrentPage('home');
        setSelectedProduct(null);
        setSelectedVariant(null);
        setShowPaymentModal(false);
        window.scrollTo(0, 0);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            alert('Please fill in all delivery details.');
            return;
        }
        if (!selectedVariant) {
            alert('Please select a product variant before proceeding.');
            return;
        }
        alert('Payment Gateway Placed here and It Is Under Progress , Please Kindly Visit Again');

        // Reset state and return home after simulated payment
        setShowPaymentModal(false);
        handleBackToHome();
    };

    const features = [
        { icon: TrendingUp, title: "Proven Business Model", desc: "Join a successful franchise with established market presence" },
        { icon: Users, title: "Full Support", desc: "Complete training and ongoing operational support" },
        { icon: Award, title: "Premium Quality", desc: "Only the finest milk products from trusted sources" },
    ];

    const PolicySection = ({ id, title, children }) => (
        <section id={id} className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">{title}</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                    {children}
                </div>
            </div>
        </section>
    );

    return (
        <div className="bg-white">
            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Droplet className="w-8 h-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">Pure Dairy</span>
                    </div>
                    {currentPage === 'home' ? (
                        <button
                            onClick={() => scrollToSection('download-section')}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download Pack
                        </button>
                    ) : (
                        <button
                            onClick={handleBackToHome}
                            className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-full hover:bg-gray-700 transition-all duration-300"
                        >
                            ← Back to Home
                        </button>
                    )}
                </div>
            </nav>

            {/* --- HOME PAGE CONTENT --- */}
            {currentPage === 'home' ? (
                <>
                    {/* Hero Section */}
                    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20">
                        {/* Background Blobs */}
                        <div className="absolute inset-0 overflow-hidden opacity-30">
                            <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob top-10 left-10"></div>
                            <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 top-10 right-10"></div>
                            <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 bottom-10 left-1/2"></div>
                        </div>

                        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                            <div className="mb-8 inline-block">
                                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500">
                                    <Droplet className="w-16 h-16 text-white" />
                                </div>
                            </div>

                            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-800 to-purple-600 bg-clip-text text-transparent leading-tight">
                                Pure Dairy
                            </h1>
                            <p className="text-3xl md:text-4xl text-gray-700 font-light mb-8">
                                Franchise Opportunity
                            </p>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Partner with us to bring premium quality milk products to your community.
                                A trusted franchise model with proven success and comprehensive support.
                            </p>

                            <ChevronDown className="w-12 h-12 text-blue-600 mx-auto animate-bounce" />
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-32 bg-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                                        Why Choose Our Franchise?
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                        We offer a complete franchise package that includes everything you need to start and grow a successful dairy products business.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                        >
                                            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                            <p className="text-gray-600 text-lg">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Product Gallery Section */}
                    <section className="py-32 bg-gradient-to-b from-white to-blue-50">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-20">
                                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                                    Our Premium Products
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Discover our range of 10 distinct, fresh, and pure dairy products.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                                {GROUPED_PRODUCTS.map((product) => (
                                    <div
                                        key={product.slug}
                                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                                    >
                                        <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-blue-50 to-blue-100">
                                            <img
                                                src={product.baseImage}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4 text-center">
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors truncate">{product.name}</h3>
                                            <p className="text-sm text-gray-500 mb-3">
                                                Starts from:
                                                <span className="font-bold text-blue-600 ml-1">₹{product.variants[0].price}</span>
                                            </p>
                                            <button
                                                onClick={() => handleBuyClick(product)}
                                                className="w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
                                            >
                                                View & Buy
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Download Section */}
                    <section id="download-section" className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute w-full h-full" style={{
                                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                backgroundSize: '50px 50px'
                            }}></div>
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
                                Download our franchise information pack and discover how you can become part of our growing family
                            </p>

                            <a href={apkUrl} download>
                                <button
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="group relative px-12 py-6 bg-white text-blue-700 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-4 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        <Download className={`w-7 h-7 transition-transform duration-300 ${isHovered ? 'animate-bounce' : ''}`} />
                                        Download Franchise Pack
                                    </span>
                                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </a>

                            <p className="text-blue-100 mt-8 text-lg">
                                Free download • Complete business information
                            </p>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                                    Get in Touch
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Have questions? We're here to help you start your franchise journey
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
                                <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">Contact 1</h3>
                                            <p className="text-sm text-gray-600">Primary Contact</p>
                                        </div>
                                    </div>
                                    <a href="tel:+918367675552" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors block">
                                        +91 8367675552
                                    </a>
                                </div>

                                <div className="flex-1 bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">Contact 2</h3>
                                            <p className="text-sm text-gray-600">Secondary Contact</p>
                                        </div>
                                    </div>
                                    <a href="tel:+917675895116" className="text-xl font-bold text-purple-600 hover:text-purple-800 transition-colors block">
                                        +91 7675895116
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Policy Sections (New) */}
                    <PolicySection id="privacy-policy" title="Privacy Policy">
                        <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information when you use our services or purchase products.</p>
                        <p>We only collect data necessary for processing your orders (Name, Address, Phone, Email) and do not share this information with third parties for marketing purposes without your explicit consent.</p>
                    </PolicySection>

                    <PolicySection id="terms-and-conditions" title="Terms and Conditions">
                        <p>By placing an order with Pure Dairy, you agree to the following terms: All products are sold 'as is' and are guaranteed fresh upon delivery. You must provide accurate delivery details for successful fulfillment.</p>
                        <p>Pure Dairy reserves the right to cancel or refuse any order at our sole discretion.</p>
                    </PolicySection>

                    {/* UPDATED: Wrapped ShippingPolicy */}
                    <PolicySection id="shipping-policy" title="Shipping Policy">
                        <ShippingPolicy />
                    </PolicySection>

                    <PolicySection id="refunds-exchange" title="Refunds and Exchange Policy">
                        <p><strong>Exchange Policy: NO EXCHANGE.</strong> Due to the perishable nature of our products, we strictly adhere to a no-exchange policy once the product has been delivered and accepted.</p>
                        <p><strong>Refund Policy:</strong> Refunds will only be processed if the product is delivered damaged, spoiled, or if the wrong item was delivered. Claims must be raised within 2 hours of delivery with photographic proof. We do not offer refunds for change of mind or subjective taste preferences.</p>
                    </PolicySection>


                    {/* UPDATED: Footer with new links */}
                    <footer className="bg-gray-900 text-white py-12">
                        <div className="max-w-7xl mx-auto px-6 text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Droplet className="w-8 h-8 text-blue-400" />
                                <span className="text-2xl font-bold">Pure Dairy</span>
                            </div>
                            <div className="flex justify-center space-x-6 text-sm mb-4">
                                <a href="#privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
                                {/* NEW: Shipping Policy */}
                                <a href="#shipping-policy" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a>
                                <a href="#refunds-exchange" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
                                {/* NEW: Contact */}
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                            </div>
                            <p className="text-gray-400">
                                Premium milk products franchise • Established 2020 | All Rights Reserved.
                            </p>
                        </div>
                    </footer>
                </>
            ) : (
                /* --- PRODUCT DETAIL PAGE --- */
                <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-6xl mx-auto px-6 py-16">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Product Image & Description */}
                                <div className="relative p-8 flex flex-col justify-start">
                                    <h1 className="text-5xl font-bold text-gray-900 mb-4">{selectedProduct?.name}</h1>
                                    <p className="text-xl text-gray-600 mb-8">{selectedProduct?.description}</p>

                                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
                                        <img
                                            src={selectedProduct?.baseImage}
                                            alt={selectedProduct?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Variant Selection & Purchase */}
                                <div className="p-8 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Quantity / Variant</h2>

                                        {/* Quantity Selector */}
                                        <div className="space-y-3 mb-10">
                                            {selectedProduct?.variants.map(variant => (
                                                <button
                                                    key={variant.id}
                                                    onClick={() => setSelectedVariant(variant)}
                                                    className={`w-full p-4 border-2 rounded-xl text-left transition-all duration-200 flex justify-between items-center ${
                                                        selectedVariant?.id === variant.id
                                                            ? 'border-blue-600 bg-blue-50 shadow-md'
                                                            : 'border-gray-200 hover:border-blue-300'
                                                        }`}
                                                >
                                                    <span className="text-xl font-semibold text-gray-800">{variant.quantity}</span>
                                                    <span className={`text-2xl font-bold ${selectedVariant?.id === variant.id ? 'text-blue-700' : 'text-gray-600'}`}>
                                                        ₹{variant.price}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>

                                        {/* Final Price Display */}
                                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl mb-8 border border-blue-200">
                                            <p className="text-xl text-gray-700 mb-2">Selected Price:</p>
                                            <p className="text-5xl font-extrabold text-blue-800">
                                                {selectedVariant ? `₹${selectedVariant.price}` : 'Select Variant'}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (selectedVariant) {
                                                setShowPaymentModal(true);
                                            } else {
                                                alert('Please select a quantity/variant first.');
                                            }
                                        }}
                                        disabled={!selectedVariant}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                                    >
                                        Proceed to Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Modal */}
                    {showPaymentModal && selectedVariant && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Confirm Order & Pay</h2>
                                        <button
                                            onClick={() => setShowPaymentModal(false)}
                                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    {/* Order Summary */}
                                    <div className="bg-blue-50 p-6 rounded-2xl mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700">{selectedProduct?.name}</span>
                                            <span className="font-bold text-gray-900">{selectedVariant.quantity}</span>
                                        </div>
                                        <div className="border-t border-blue-200 mt-4 pt-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xl font-bold text-gray-900">Total Amount</span>
                                                <span className="text-2xl font-bold text-blue-600">₹{selectedVariant.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Delivery Details Form */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Details</h3>
                                        <div className="space-y-4">
                                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors" required />
                                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors" required />
                                            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors" required />
                                            <textarea name="address" placeholder="Delivery Address" value={formData.address} onChange={handleInputChange} rows="3" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none" required />
                                        </div>
                                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                            <button
                                                onClick={handlePayment}
                                                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                                            >
                                                Confirm & Pay
                                            </button>
                                            <button
                                                onClick={() => setShowPaymentModal(false)}
                                                className="flex-1 py-4 bg-gray-200 text-gray-800 text-lg font-bold rounded-full hover:bg-gray-300 hover:scale-105 transition-all duration-300"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MilkFranchise;