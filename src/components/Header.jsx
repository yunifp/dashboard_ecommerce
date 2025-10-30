import React, { useState, useEffect, useRef } from 'react';
import { 
  FaUserCircle, 
  FaSignOutAlt, 
  FaChevronDown, 
  FaBars, 
  FaBell,
  FaSearch
} from 'react-icons/fa';

const Header = ({ isSidebarOpen, setIsOpen }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-content-bg shadow-md p-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center">
          <button 
            onClick={() => setIsOpen(!isSidebarOpen)} 
            className="text-text-muted hover:text-text-main focus:outline-none md:hidden mr-4"
          >
            <FaBars size={24} />
          </button>

          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-text-subtle" />
            </span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full max-w-xs pl-10 pr-4 py-2 rounded-lg border border-border-main bg-app-bg focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          
          <button className="text-text-muted hover:text-text-main focus:outline-none relative">
            <FaBell size={22} />
          </button>

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!isDropdownOpen)} 
              className="flex items-center space-x-2 focus:outline-none text-text-muted hover:text-text-main group"
            >
              <FaUserCircle size={32} className="text-theme-primary group-hover:opacity-80 transition-opacity" />
              <span className="text-text-main font-medium hidden sm:block">Admin</span>
              <FaChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div 
              className={`absolute right-0 mt-3 w-56 bg-content-bg rounded-lg shadow-xl ring-1 ring-border-main ring-opacity-5 overflow-hidden z-20 transition-all duration-200 ease-out ${
                isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ transformOrigin: 'top right' }}
            >
              <div className="py-1">
                <div className="px-4 py-3 border-b border-border-main bg-gray-50">
                  <p className="text-sm font-semibold text-text-main">Yunif Putra P.</p>
                  <p className="text-xs text-text-muted">Admin</p>
                </div>
                <a
                  href="#logout"
                  className="flex items-center px-4 py-3 text-sm text-text-muted hover:bg-theme-primary-light hover:text-theme-primary-dark transition-colors duration-150"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Logout clicked');
                    setDropdownOpen(false);
                  }}
                >
                  <FaSignOutAlt className="mr-3" />
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;