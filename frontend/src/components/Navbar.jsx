import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineHome, AiOutlineFileAdd, AiOutlineUpload, AiOutlineEye } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { FiLogIn, FiUserPlus } from "react-icons/fi";




export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (path) => {
    return location.pathname === path ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-700";
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/home" 
            className="flex items-center space-x-2 group"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">HM</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HealthMate
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/home" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-sm flex items-center space-x-2 ${isActiveLink("/home")}`}
            >
  <AiOutlineHome className="w-5 h-5"/>
              <span>Home</span>
            </Link>
            
            <Link 
              to="/add-vital" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-sm flex items-center space-x-2 ${isActiveLink("/add-vital")}`}
            >
              <AiOutlineFileAdd className="w-5 h-5"/>
              <span>Add Vital Report</span>
            </Link>
            
            <Link 
              to="/upload-report" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-sm flex items-center space-x-2 ${isActiveLink("/upload-report")}`}
            >
              <AiOutlineUpload className="w-5 h-5"/>
              <span>Upload Report</span>
            </Link>
            
            <Link 
              to="/view-report" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-sm flex items-center space-x-2 ${isActiveLink("/view-report")}`}
            >
              <AiOutlineEye className="w-5 h-5"/>
              <span>View Report</span>
            </Link>

            {/* AI Assistant Link */}
            <Link 
              to="/ai-assistant" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:scale-105 hover:shadow-sm flex items-center space-x-2 ${isActiveLink("/ai-assistant")}`}
            >
              <BsRobot className="w-5 h-5"/>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                AI Assistant
              </span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/"
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
             <FiLogIn className="w-5 h-5"/>
              <span>Sign In</span>
            </Link>
            
            <Link
              to="/signup"
              className="px-5 py-2.5 text-sm font-medium border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <FiUserPlus className="w-5 h-5"/>
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-3 border-t border-gray-200 mt-3">
            {/* Home Link */}
            <Link 
              to="/home" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 ${isActiveLink("/home")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">🏠</span>
                <span>Home</span>
              </div>
            </Link>
            
            <Link 
              to="/add-vital" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 ${isActiveLink("/add-vital")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <AiOutlineHome className="w-5 h-5"/>  
                <span>Add Vital Report</span>
              </div>
            </Link>
            
            <Link 
              to="/upload-report" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 ${isActiveLink("/upload-report")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <AiOutlineFileAdd className="w-5 h-5"/>
                <span>Upload Report</span>
              </div>
            </Link>
            
            <Link 
              to="/view-report" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 ${isActiveLink("/view-report")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                 <AiOutlineEye className="w-5 h-5"/>
                <span>View Report</span>
              </div>
            </Link>

            {/* AI Assistant Mobile Link */}
            <Link 
              to="/ai-assistant" 
              className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:translate-x-2 ${isActiveLink("/ai-assistant")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                  <BsRobot className="w-5 h-5"/>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                  AI Assistant
                </span>
              </div>
            </Link>

            <div className="pt-3 space-y-2 border-t border-gray-200">
              <Link
                to="/"
                className="block px-4 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              
              <Link
                to="/signup"
                className="block px-4 py-3 text-center border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}