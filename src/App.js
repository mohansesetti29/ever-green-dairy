import React, { useState, useEffect } from 'react';
import { Download, Droplet, TrendingUp, Users, Award, ChevronDown } from 'lucide-react';

// src/App.js
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate(); // <-- this fixes the error

  const goToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Welcome</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={goToPayment}
      >
        Go to Payment
      </button>
    </div>
  );
}


const MilkFranchise = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const apkUrl = "https://github.com/yourusername/yourrepo/raw/main/myapp.apk";

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download-section');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
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
      alert('Please fill in all fields');
      return;
    }
    alert('Payment gateway integration goes here. Order details saved!');
    console.log('Order:', { product: selectedProduct, customer: formData });
  };

  const products = [
    { id: 1, name: "Milk", price: "₹28", quantity: "500ml", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop" },
    { id: 2, name: "Curd", price: "₹30", quantity: "500g", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop" },
    { id: 3, name: "Curd", price: "₹15", quantity: "200g", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop" },
    { id: 4, name: "Butter Milk", price: "₹12", quantity: "200ml", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=300&fit=crop" },
    { id: 5, name: "Butter Milk", price: "₹30", quantity: "500ml", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=300&fit=crop" },
    { id: 6, name: "Butter Milk", price: "₹55", quantity: "1L", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=300&fit=crop" },
    { id: 7, name: "Lassi", price: "₹40", quantity: "200ml", image: "https://images.unsplash.com/photo-1598538090637-70e5c5f975b9?w=300&h=300&fit=crop" },
    { id: 8, name: "Lassi", price: "₹100", quantity: "500ml", image: "https://images.unsplash.com/photo-1598538090637-70e5c5f975b9?w=300&h=300&fit=crop" },
    { id: 9, name: "Lassi", price: "₹180", quantity: "1L", image: "https://images.unsplash.com/photo-1598538090637-70e5c5f975b9?w=300&h=300&fit=crop" },
    { id: 10, name: "Paneer", price: "₹60", quantity: "100g", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop" },
    { id: 11, name: "Paneer", price: "₹115", quantity: "200g", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop" },
    { id: 12, name: "Paneer", price: "₹285", quantity: "500g", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop" },
    { id: 13, name: "Ghee", price: "₹130", quantity: "100ml", image: "https://images.unsplash.com/photo-1628776395890-7c6f5e6a0b2e?w=300&h=300&fit=crop" },
    { id: 14, name: "Ghee", price: "₹320", quantity: "250ml", image: "https://images.unsplash.com/photo-1628776395890-7c6f5e6a0b2e?w=300&h=300&fit=crop" },
    { id: 15, name: "Ghee", price: "₹630", quantity: "500ml", image: "https://images.unsplash.com/photo-1628776395890-7c6f5e6a0b2e?w=300&h=300&fit=crop" },
    { id: 16, name: "Ghee", price: "₹1240", quantity: "1L", image: "https://images.unsplash.com/photo-1628776395890-7c6f5e6a0b2e?w=300&h=300&fit=crop" },
    { id: 17, name: "Product 17", price: "₹50", quantity: "250g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop" },
    { id: 18, name: "Product 18", price: "₹75", quantity: "500g", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop" },
    { id: 19, name: "Product 19", price: "₹90", quantity: "300ml", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=300&fit=crop" },
    { id: 20, name: "Product 20", price: "₹120", quantity: "1L", image: "https://images.unsplash.com/photo-1598538090637-70e5c5f975b9?w=300&h=300&fit=crop" },
    { id: 21, name: "Product 21", price: "₹85", quantity: "150g", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop" },
    { id: 22, name: "Product 22", price: "₹95", quantity: "200ml", image: "https://images.unsplash.com/photo-1628776395890-7c6f5e6a0b2e?w=300&h=300&fit=crop" },
    { id: 23, name: "Product 23", price: "₹110", quantity: "400g", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop" },
    { id: 24, name: "Product 24", price: "₹140", quantity: "600ml", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop" },
    { id: 25, name: "Product 25", price: "₹160", quantity: "750g", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=300&fit=crop" },
    { id: 26, name: "Product 26", price: "₹180", quantity: "350ml", image: "https://images.unsplash.com/photo-1598538090637-70e5c5f975b9?w=300&h=300&fit=crop" },
    { id: 27, name: "Product 27", price: "₹200", quantity: "450g", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop" },
    { id: 28, name: "Product 28", price: "₹220", quantity: "800ml", image: "https://images.unsplash.com/photo-1628776395890-7c6f5e6a0b2e?w=300&h=300&fit=crop" },
  ];

  const features = [
    { icon: TrendingUp, title: "Proven Business Model", desc: "Join a successful franchise with established market presence" },
    { icon: Users, title: "Full Support", desc: "Complete training and ongoing operational support" },
    { icon: Award, title: "Premium Quality", desc: "Only the finest milk products from trusted sources" },
  ];

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
      
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Droplet className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Pure Dairy</span>
          </div>
          {currentPage === 'home' ? (
            <button
              onClick={scrollToDownload}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download
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

      {currentPage === 'home' ? (
        <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20">
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

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                Why Choose Our Franchise?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We offer a complete franchise package that includes everything you need to start and grow a successful dairy products business. From product supply to marketing support, we're with you every step of the way.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our franchise partners benefit from our established brand reputation, quality products, competitive pricing, and a proven distribution model that ensures consistent profitability.
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

      <section className="py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh, pure, and carefully crafted dairy products delivered daily
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-blue-50 to-blue-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors truncate">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{product.quantity}</p>
                  <p className="text-lg font-bold text-blue-600 mb-2">{product.price}</p>
                  <button
                    onClick={() => handleBuyClick(product)}
                    className="w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-white">
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Droplet className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Pure Dairy</span>
          </div>
          <p className="text-gray-400">
            Premium milk products franchise • Established 2020
          </p>
        </div>
      </footer>
      </>
      ) : (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                  <img 
                    src={selectedProduct?.image} 
                    alt={selectedProduct?.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">{selectedProduct?.name}</h1>
                    <p className="text-2xl text-gray-600 mb-6">Quantity: {selectedProduct?.quantity}</p>
                    <p className="text-6xl font-bold text-blue-600 mb-8">{selectedProduct?.price}</p>
                    
                    <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Product Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ 100% Pure and Fresh</li>
                        <li>✓ Delivered Daily</li>
                        <li>✓ Premium Quality</li>
                        <li>✓ No Preservatives</li>
                        <li>✓ Farm to Table Freshness</li>
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {showPaymentModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Payment Details</h2>
                    <button
                      onClick={() => setShowPaymentModal(false)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">{selectedProduct?.name} ({selectedProduct?.quantity})</span>
                      <span className="font-bold text-gray-900">{selectedProduct?.price}</span>
                    </div>
                    <div className="border-t border-blue-200 mt-4 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-blue-600">{selectedProduct?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Details</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <textarea
                        name="address"
                        placeholder="Delivery Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      />
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
