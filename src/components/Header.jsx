import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
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
    <header className="bg-content-bg shadow-md p-4">
      <div className="flex items-center justify-between">
        <button 
          onClick={toggleSidebar} 
          className="text-text-muted focus:outline-none"
        >
          <FaBars size={24} />
        </button>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setDropdownOpen(!isDropdownOpen)} 
            className="flex items-center space-x-2 focus:outline-none"
          >
            <span className="text-text-main font-medium hidden sm:block">Admin</span>
            <FaUserCircle size={32} className="text-text-muted" />
          </button>
          
          <div 
            className={`absolute right-0 mt-2 w-48 bg-content-bg rounded-md shadow-lg overflow-hidden z-20 transition-all duration-200 ease-out ${
              isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transformOrigin: 'top right' }}
          >
            {isDropdownOpen && (
              <div className="py-1">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-semibold text-text-main">Yunif Putra P.</p>
                  <p className="text-xs text-text-muted">Admin</p>
                </div>
                <a
                  href="#logout"
                  className="flex items-center px-4 py-2 text-sm text-text-muted hover:bg-gray-100 hover:text-theme-primary-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Logout clicked');
                  }}
                >
                  <FaSignOutAlt className="mr-3" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;