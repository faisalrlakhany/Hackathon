import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/home" className="inline-flex items-center space-x-2 mb-4 group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">HM</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HealthMate
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md text-left">
              Your trusted companion in health management. Track vitals, upload reports, 
              and monitor your health journey with ease and precision.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links with Health Icons */}
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 hover:scale-110 transition-all duration-300 group">
                <span className="text-blue-600 group-hover:text-blue-700 text-lg">❤️</span>
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-green-50 hover:scale-110 transition-all duration-300 group">
                <span className="text-green-600 group-hover:text-green-700 text-lg">💊</span>
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-red-50 hover:scale-110 transition-all duration-300 group">
                <span className="text-red-600 group-hover:text-red-700 text-lg">🏥</span>
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-purple-50 hover:scale-110 transition-all duration-300 group">
                <span className="text-purple-600 group-hover:text-purple-700 text-lg">🩺</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/add-vital" 
                  className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span className="text-blue-500">📊</span>
                  <span>Add Vital Report</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/upload-report" 
                  className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span className="text-green-500">📁</span>
                  <span>Upload Report</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/view-report" 
                  className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span className="text-purple-500">👁️</span>
                  <span>View Reports</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/ai-assistant" 
                  className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span className="text-pink-500">🤖</span>
                  <span>AI Assistant</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2">
                  <span className="text-orange-500">🩹</span>
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2">
                  <span className="text-teal-500">📞</span>
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2">
                  <span className="text-yellow-500">⭐</span>
                  <span>Feedback</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2">
                  <span className="text-red-500">🔒</span>
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Health Tips Subscription */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">Stay Healthy, Stay Updated</h3>
            <p className="text-gray-600 mb-4 text-sm">Subscribe to get health tips and updates</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm flex items-center space-x-2">
              <span>© {currentYear}</span>
              <span className="font-semibold text-blue-600">HealthMate</span>
              <span>All rights reserved.</span>
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1">
                <span>📄</span>
                <span>Terms</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1">
                <span>🛡️</span>
                <span>Privacy</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-1">
                <span>🍪</span>
                <span>Cookies</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Health Tip */}
      <div className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer z-40">
        <span className="flex items-center space-x-2 text-sm font-medium">
          <span className="text-lg">💡</span>
          <span>Health Tip</span>
        </span>
      </div>

      {/* Emergency Help Button */}
      <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer z-40">
        <span className="flex items-center space-x-2 text-sm font-medium">
          <span className="text-lg">🆘</span>
          <span>Emergency</span>
        </span>
      </div>
    </footer>
  );
}