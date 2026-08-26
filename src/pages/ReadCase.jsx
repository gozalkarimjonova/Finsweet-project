import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../assets/home/Main image.png'
import projectMainImg from '../assets/home/project-main.png'

function ReadCase() {
  // Dark/Light mode holati
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Bosilgan (active) kalit so'z holati
  const [activeKeyword, setActiveKeyword] = useState('Wireframing')

  const keywords = ['Design', 'UI/UX', 'Wireframing', 'Branding', 'Development', 'webflow']

  return (
    <div className={`w-full transition-colors duration-500 pt-10 ${isDarkMode ? 'bg-[#1C1E53] text-white' : 'bg-[#F4F6FC] text-[#282938]'}`}>
      
      {/* Dark / Light Mode Switcher Toggle */}
      <div className="max-w-4xl mx-auto px-4 md:px-12 flex justify-end mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300 shadow-sm border ${
            isDarkMode 
              ? 'bg-[#282938] border-gray-600 text-[#FCD980] hover:bg-gray-800' 
              : 'bg-white border-gray-200 text-[#1C1E53] hover:bg-gray-100'
          }`}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        
        {/* Header Title */}
        <div className="text-center">
          <p className={`font-medium text-base mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#FCD980]' : 'text-[#282938]'}`}>
            Web design and development
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl mx-auto leading-tight mb-6">
            Finsweet Design case studies
          </h1>
          <p className={`text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-[#282938]/70'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Main Image */}
        <div className="w-full rounded-lg overflow-hidden mb-8 shadow-sm">
          <img 
            src={mainImg} 
            alt="Finsweet Case Study" 
            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* Client, Service, Deliverable Block */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-b transition-colors duration-300 text-left mb-16 ${isDarkMode ? 'border-gray-700' : 'border-[#282938]/10'}`}>
          <div className="p-2 rounded hover:bg-black/5 transition-colors duration-200">
            <span className={`text-xs font-medium block mb-1 ${isDarkMode ? 'text-gray-400' : 'text-[#282938]/60'}`}>Client</span>
            <p className="text-base md:text-lg font-semibold">facebook.com</p>
          </div>
          <div className="p-2 rounded hover:bg-black/5 transition-colors duration-200">
            <span className={`text-xs font-medium block mb-1 ${isDarkMode ? 'text-gray-400' : 'text-[#282938]/60'}`}>Service</span>
            <p className="text-base md:text-lg font-semibold">Product Design</p>
          </div>
          <div className="p-2 rounded hover:bg-black/5 transition-colors duration-200">
            <span className={`text-xs font-medium block mb-1 ${isDarkMode ? 'text-gray-400' : 'text-[#282938]/60'}`}>Deliverable</span>
            <p className="text-base md:text-lg font-semibold">UI Screens, UX Flow & Prototype</p>
          </div>
        </div>

        {/* About the project section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-semibold">About the project</h2>
          <p className={`leading-relaxed text-sm md:text-base transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-[#282938]/70'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul className={`list-disc list-inside space-y-2 text-sm md:text-base pt-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-[#282938]/70'}`}>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
        </div>

        {/* Project Main Image */}
        <div className="my-12 w-full rounded-lg overflow-hidden shadow-sm">
          <img 
            src={projectMainImg} 
            alt="Project Preview" 
            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* How we do it section */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold">How we do it</h2>
          <p className={`leading-relaxed text-sm md:text-base transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-[#282938]/70'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul className={`list-disc list-inside space-y-2 text-sm md:text-base pt-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-[#282938]/70'}`}>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li className="hover:opacity-80 transition-opacity duration-200 cursor-pointer">Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
        </div>

        {/* Keywords Bar (Active state + Dark Mode) */}
        <div className={`flex flex-wrap items-center gap-3 md:gap-4 py-6 border-t border-b transition-colors duration-300 text-sm font-medium ${isDarkMode ? 'border-gray-700' : 'border-[#282938]/10'}`}>
          <span className="text-[#2405F0] font-semibold text-lg mr-2">Keywords</span>
          {keywords.map((word, idx) => {
            const isActive = activeKeyword === word
            return (
              <button
                key={idx}
                onClick={() => setActiveKeyword(word)}
                className={`px-5 py-2 rounded-full transition-all duration-300 text-sm ${
                  isActive
                    ? 'bg-[#2405F0] text-white shadow-sm'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:text-[#2405F0] hover:bg-gray-700'
                      : 'bg-white text-[#282938]/70 hover:text-[#2405F0] hover:bg-gray-50 border border-gray-100'
                }`}
              >
                {word}
              </button>
            )
          })}
        </div>

      </div>

      {/* CTA Section */}
      <div className={`py-20 px-4 text-center mt-20 transition-colors duration-500 ${isDarkMode ? 'bg-[#0F1035]' : 'bg-white'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Let's build something great together
          </h2>
          <p className={`text-sm md:text-base mb-8 max-w-lg mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-[#282938]/70'}`}>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#FCD980] hover:bg-[#f5c956] text-[#1C1E53] font-semibold px-12 py-4 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ReadCase