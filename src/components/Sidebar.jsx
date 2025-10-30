import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaTachometerAlt, FaBox, FaList, FaTags, 
  FaTicketAlt, FaTruck, FaChevronDown 
} from 'react-icons/fa';

const SidebarLink = ({ to, icon, text, isOpen }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-theme-primary text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      } ${!isOpen ? 'justify-center' : ''}`
    }
  >
    {icon}
    <span className={`transition-all duration-300 ${isOpen ? 'ml-4 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>{text}</span>
  </NavLink>
);

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isProdukOpen, setProdukOpen] = useState(false);
  const location = useLocation();

  const isProdukActive = location.pathname.startsWith('/produk') || location.pathname.startsWith('/kategori');

  useState(() => {
    if (isProdukActive) {
      setProdukOpen(true);
    }
  }, [isProdukActive]);

  const renderNavContent = (isOpen) => (
    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
      <SidebarLink to="/" icon={<FaTachometerAlt size={20} />} text="Dashboard" isOpen={isOpen} />
      
      <div>
        <button
          onClick={() => setProdukOpen(!isProdukOpen)}
          className={`flex items-center justify-between w-full p-3 my-1 rounded-lg transition-colors duration-200 ${
            isProdukActive && !isProdukOpen ? 'bg-theme-primary text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          } ${!isOpen ? 'justify-center' : ''}`}
        >
          <div className="flex items-center">
            <FaBox size={20} />
            <span className={`transition-all duration-300 ${isOpen ? 'ml-4 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>Produk</span>
          </div>
          {isOpen && (
            <FaChevronDown
              size={16}
              className={`transition-transform duration-300 ${isProdukOpen ? 'rotate-180' : ''}`}
            />
          )}
        </button>
        
        <div className={`transition-all duration-300 overflow-hidden ${isProdukOpen && isOpen ? 'max-h-40' : 'max-h-0'}`}>
          {isOpen && (
            <div className="pl-8">
              <SidebarLink to="/produk" icon={<FaList size={18} />} text="List Produk" isOpen={isOpen} />
              <SidebarLink to="/kategori" icon={<FaTags size={18} />} text="Kategori" isOpen={isOpen} />
            </div>
          )}
        </div>
      </div>
      
      <SidebarLink to="/voucher" icon={<FaTicketAlt size={20} />} text="Voucher" isOpen={isOpen} />
      <SidebarLink to="/pengiriman" icon={<FaTruck size={20} />} text="Pengiriman" isOpen={isOpen} />
    </nav>
  );

  return (
    <>
      <div 
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden ${isOpen ? 'block' : 'hidden'}`} 
        onClick={() => setIsOpen(false)}
      ></div>
      
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-gray-800 text-white transform transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 md:w-20'
        }`}
      >
        <div className={`flex items-center justify-center h-20 shadow-md ${isOpen ? 'px-6' : 'px-0'}`}>
          <span className={`text-white text-2xl font-semibold transition-all duration-300 ${isOpen ? 'opacity-100' : 'md:opacity-0 md:w-0'}`}>
            Outdoor
          </span>
          <span className={`text-theme-primary text-3xl font-bold transition-all duration-300 ${!isOpen ? 'md:opacity-100' : 'opacity-0 w-0'}`}>
            O
          </span>
        </div>
        {renderNavContent(isOpen)}
      </aside>
    </>
  );
};

export default Sidebar;