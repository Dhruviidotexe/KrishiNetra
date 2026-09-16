import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Home, TrendingUp, ShoppingCart, User, Info, Phone, Wallet, FileText, LogOut, Menu, X } from 'lucide-react';

export default function OilseedMarketplace() {
  const [currentPage, setCurrentPage] = useState('login');
  const [userType, setUserType] = useState('');
  const [loginStep, setLoginStep] = useState('details');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOilseed, setSelectedOilseed] = useState('soybean');
  
  const [loginData, setLoginData] = useState({
    name: '',
    company: '',
    mobile: '',
    otp: ''
  });

  const priceData = {
    soybean: [
      { month: 'Apr', price: 4200, predicted: null },
      { month: 'May', price: 4350, predicted: null },
      { month: 'Jun', price: 4180, predicted: null },
      { month: 'Jul', price: 4500, predicted: null },
      { month: 'Aug', price: 4650, predicted: null },
      { month: 'Sep', price: 4720, predicted: null },
      { month: 'Oct', price: null, predicted: 4850 },
      { month: 'Nov', price: null, predicted: 4920 },
      { month: 'Dec', price: null, predicted: 5100 }
    ],
    groundnut: [
      { month: 'Apr', price: 5800, predicted: null },
      { month: 'May', price: 5950, predicted: null },
      { month: 'Jun', price: 5720, predicted: null },
      { month: 'Jul', price: 6100, predicted: null },
      { month: 'Aug', price: 6280, predicted: null },
      { month: 'Sep', price: 6350, predicted: null },
      { month: 'Oct', price: null, predicted: 6480 },
      { month: 'Nov', price: null, predicted: 6550 },
      { month: 'Dec', price: null, predicted: 6720 }
    ],
    mustard: [
      { month: 'Apr', price: 5200, predicted: null },
      { month: 'May', price: 5350, predicted: null },
      { month: 'Jun', price: 5180, predicted: null },
      { month: 'Jul', price: 5450, predicted: null },
      { month: 'Aug', price: 5580, predicted: null },
      { month: 'Sep', price: 5650, predicted: null },
      { month: 'Oct', price: null, predicted: 5780 },
      { month: 'Nov', price: null, predicted: 5850 },
      { month: 'Dec', price: null, predicted: 5980 }
    ],
    sunflower: [
      { month: 'Apr', price: 6200, predicted: null },
      { month: 'May', price: 6380, predicted: null },
      { month: 'Jun', price: 6150, predicted: null },
      { month: 'Jul', price: 6520, predicted: null },
      { month: 'Aug', price: 6680, predicted: null },
      { month: 'Sep', price: 6750, predicted: null },
      { month: 'Oct', price: null, predicted: 6880 },
      { month: 'Nov', price: null, predicted: 6950 },
      { month: 'Dec', price: null, predicted: 7120 }
    ]
  };

  const products = [
    { id: 1, name: 'Soybean De-oiled Cake', seller: 'Ram Agri Processors', price: 2800, quantity: '50 Tons', location: 'Indore, MP', quality: 'Grade A' },
    { id: 2, name: 'Groundnut Oil Cake', seller: 'Gujarat Processors Ltd', price: 3500, quantity: '30 Tons', location: 'Rajkot, Gujarat', quality: 'Premium' },
    { id: 3, name: 'Mustard De-oiled Cake', seller: 'Punjab Agro Mills', price: 3200, quantity: '40 Tons', location: 'Ludhiana, Punjab', quality: 'Grade A' },
    { id: 4, name: 'Sunflower Meal', seller: 'Karnataka Oils', price: 2900, quantity: '25 Tons', location: 'Bangalore, Karnataka', quality: 'Export Grade' },
    { id: 5, name: 'Soybean Husk', seller: 'MP Farmers Collective', price: 1800, quantity: '100 Tons', location: 'Bhopal, MP', quality: 'Standard' },
    { id: 6, name: 'Groundnut Husk', seller: 'Andhra Mills Co', price: 2100, quantity: '60 Tons', location: 'Guntur, AP', quality: 'Grade B' }
  ];

  const userOrders = [
    { id: 'ORD001', product: 'Soybean De-oiled Cake', quantity: '10 Tons', amount: 28000, date: '2025-10-15', status: 'Delivered' },
    { id: 'ORD002', product: 'Groundnut Oil Cake', quantity: '5 Tons', amount: 17500, date: '2025-10-20', status: 'In Transit' },
    { id: 'ORD003', product: 'Mustard Cake', quantity: '8 Tons', amount: 25600, date: '2025-10-22', status: 'Processing' }
  ];

  const handleLogin = () => {
    if (loginStep === 'details' && loginData.name && loginData.mobile.length === 10) {
      setLoginStep('otp');
    } else if (loginStep === 'otp' && loginData.otp.length === 6) {
      setCurrentPage('home');
      setLoginStep('details');
    }
  };

  const Navigation = () => (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <TrendingUp size={28} />
            <span className="text-xl font-bold">Oilseed Market</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button onClick={() => setCurrentPage('home')} className="hover:text-green-200 flex items-center space-x-1">
              <Home size={18} />
              <span>Home</span>
            </button>
            <button onClick={() => setCurrentPage('marketplace')} className="hover:text-green-200 flex items-center space-x-1">
              <ShoppingCart size={18} />
              <span>Marketplace</span>
            </button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-green-200 flex items-center space-x-1">
              <Info size={18} />
              <span>About</span>
            </button>
            <button onClick={() => setCurrentPage('profile')} className="hover:text-green-200 flex items-center space-x-1">
              <User size={18} />
              <span>Profile</span>
            </button>
          </div>

          <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {showMenu && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setShowMenu(false); }} className="block w-full text-left py-2 hover:bg-green-600 px-2 rounded">Home</button>
            <button onClick={() => { setCurrentPage('marketplace'); setShowMenu(false); }} className="block w-full text-left py-2 hover:bg-green-600 px-2 rounded">Marketplace</button>
            <button onClick={() => { setCurrentPage('about'); setShowMenu(false); }} className="block w-full text-left py-2 hover:bg-green-600 px-2 rounded">About</button>
            <button onClick={() => { setCurrentPage('profile'); setShowMenu(false); }} className="block w-full text-left py-2 hover:bg-green-600 px-2 rounded">Profile</button>
          </div>
        )}
      </div>
    </nav>
  );

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Oilseed Marketplace</h1>
            <p className="text-gray-600 mt-2">Value Chain Integration Platform</p>
          </div>

          {!userType ? (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Select User Type</h3>
              <button
                onClick={() => setUserType('farmer')}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Farmer
              </button>
              <button
                onClick={() => setUserType('processor')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Processor
              </button>
              <button
                onClick={() => setUserType('exporter')}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium"
              >
                Exporter or Buyer
              </button>
            </div>
          ) : loginStep === 'details' ? (
            <div className="space-y-4">
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-sm font-medium text-green-800 capitalize">{userType} Login</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={loginData.name}
                  onChange={(e) => setLoginData({...loginData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  value={loginData.company}
                  onChange={(e) => setLoginData({...loginData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  value={loginData.mobile}
                  onChange={(e) => setLoginData({...loginData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter 10-digit mobile number"
                />
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium mt-6"
              >
                Send OTP
              </button>

              <button
                onClick={() => setUserType('')}
                className="w-full text-gray-600 py-2 text-sm hover:text-gray-800"
              >
                Change User Type
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-800">OTP sent to {loginData.mobile}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                <input
                  type="text"
                  value={loginData.otp}
                  onChange={(e) => setLoginData({...loginData, otp: e.target.value.replace(/\D/g, '').slice(0, 6)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-2xl tracking-widest"
                  placeholder="000000"
                />
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium mt-6"
              >
                Verify and Login
              </button>

              <button
                onClick={() => setLoginStep('details')}
                className="w-full text-gray-600 py-2 text-sm hover:text-gray-800"
              >
                Back to Details
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome, {loginData.name}!</h1>
            <p className="text-green-100">Track prices, buy and sell oilseed by-products, and grow your business</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="mr-2 text-green-600" />
              Price Analysis and Prediction
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Oilseed</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['soybean', 'groundnut', 'mustard', 'sunflower'].map(seed => (
                  <button
                    key={seed}
                    onClick={() => setSelectedOilseed(seed)}
                    className={`py-2 px-4 rounded-lg font-medium capitalize transition ${
                      selectedOilseed === seed
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {seed}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 capitalize">
                {selectedOilseed} Price Trend and Forecast
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceData[selectedOilseed]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="price" stroke="#059669" strokeWidth={3} name="Actual Price" />
                  <Line type="monotone" dataKey="predicted" stroke="#f59e0b" strokeWidth={3} strokeDasharray="5 5" name="Predicted Price" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Current Price</p>
                <p className="text-2xl font-bold text-green-700">₹{priceData[selectedOilseed][5].price}</p>
                <p className="text-xs text-green-600 mt-1">Per Quintal</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Predicted (Dec 2025)</p>
                <p className="text-2xl font-bold text-orange-700">₹{priceData[selectedOilseed][8].predicted}</p>
                <p className="text-xs text-orange-600 mt-1">AI Forecast</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Expected Growth</p>
                <p className="text-2xl font-bold text-blue-700">
                  +{Math.round(((priceData[selectedOilseed][8].predicted - priceData[selectedOilseed][5].price) / priceData[selectedOilseed][5].price) * 100)}%
                </p>
                <p className="text-xs text-blue-600 mt-1">Next 3 Months</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer" onClick={() => setCurrentPage('marketplace')}>
              <ShoppingCart className="text-green-600 mb-3" size={32} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Browse Market</h3>
              <p className="text-gray-600 text-sm">Explore products from verified sellers</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <FileText className="text-blue-600 mb-3" size={32} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Export Assist</h3>
              <p className="text-gray-600 text-sm">Documentation and buyer connections</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <TrendingUp className="text-purple-600 mb-3" size={32} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Market Insights</h3>
              <p className="text-gray-600 text-sm">AI-powered demand forecasts</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'marketplace') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Marketplace</h1>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium">
              + List Product
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {product.quality}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-2">Seller: {product.seller}</p>
                <p className="text-gray-600 text-sm mb-3">Location: {product.location}</p>
                
                <div className="border-t pt-3 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-green-700">₹{product.price}</p>
                      <p className="text-xs text-gray-500">Per Ton</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-700">{product.quantity}</p>
                      <p className="text-xs text-gray-500">Available</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-medium">
                    Buy Now
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 font-medium">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Value Chain Integration System for Oilseed By-Products is designed to empower farmers, processors, and exporters by creating a transparent, efficient, and technology-driven marketplace for oilseed by-products.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We aim to increase farmer income by 12-35% and reduce middlemen intervention by at least 40% through direct market linkages and AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Direct marketplace for trade</li>
                <li>AI-based price forecasting</li>
                <li>Blockchain smart contracts</li>
                <li>Export matchmaking support</li>
                <li>Real-time market insights</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Fair pricing for farmers</li>
                <li>Direct buyer linkages</li>
                <li>Export capability boost</li>
                <li>Reduced intermediaries</li>
                <li>Market transparency</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold mb-3">Contact Support</h3>
            <p className="mb-4">Have questions? We are here to help!</p>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={18} className="mr-2" />
                Support Hotline
              </p>
              <p>Email: support@oilseedmarket.in</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'profile') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {loginData.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{loginData.name}</h2>
                  {loginData.company && <p className="text-gray-600">{loginData.company}</p>}
                  <p className="text-gray-500 text-sm">{loginData.mobile}</p>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium capitalize mt-2 inline-block">
                    {userType}
                  </span>
                </div>
              </div>
              <button onClick={() => { setCurrentPage('login'); setUserType(''); }} className="text-red-600 hover:text-red-700 flex items-center">
                <LogOut size={18} className="mr-1" />
                Logout
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <Wallet className="text-green-600 mb-2" size={28} />
              <p className="text-sm text-gray-600">Wallet Balance</p>
              <p className="text-2xl font-bold text-gray-800">₹45,250</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <ShoppingCart className="text-blue-600 mb-2" size={28} />
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <FileText className="text-purple-600 mb-2" size={28} />
              <p className="text-sm text-gray-600">Active Listings</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {userOrders.map(order => (
                <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-800">{order.product}</p>
                      <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{order.quantity}</span>
                    <span className="font-semibold text-gray-800">₹{order.amount.toLocaleString()}</span>
                    <span className="text-gray-500">{order.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Payment History</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Credit</span>
                  <span className="text-green-600 font-semibold">+₹17,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Debit</span>
                  <span className="text-red-600 font-semibold">-₹28,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Credit</span>
                  <span className="text-green-600 font-semibold">+₹25,600</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Support</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-50 text-green-700 py-3 rounded-lg hover:bg-green-100 transition font-medium flex items-center justify-center">
                  <Phone size={18} className="mr-2" />
                  Contact Support
                </button>
                <button className="w-full bg-blue-50 text-blue-700 py-3 rounded-lg hover:bg-blue-100 transition font-medium flex items-center justify-center">
                  <Info size={18} className="mr-2" />
                  Help Center
                </button>
                <button className="w-full bg-purple-50 text-purple-700 py-3 rounded-lg hover:bg-purple-100 transition font-medium flex items-center justify-center">
                  <FileText size={18} className="mr-2" />
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}