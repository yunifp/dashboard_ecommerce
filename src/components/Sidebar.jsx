import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  BsGrid,
  BsBoxSeam,
  BsListUl,
  BsTag,
  BsTicketPerforated,
  BsTruck,
  BsChevronDown,
  BsList as FaBars,
  BsPeople,
  BsClockHistory
} from 'react-icons/bs';
import logo from '../assets/logo.jpg';

const SidebarLink = ({ to, icon, text, isOpen, setIsOpen, isChild = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = (e) => {
    if (!isOpen) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={`relative flex items-center p-3 my-1 rounded-lg transition-all duration-300 group ${isActive
        ? 'bg-theme-primary text-white font-medium shadow-sm'
        : 'text-text-muted hover:bg-gray-100 hover:text-text-main'
        } ${!isOpen ? 'justify-center' : ''} ${isChild ? (isOpen ? 'pl-8' : 'pl-0') : ''}`}
    >
      {icon}
      <span className={`transition-opacity duration-200 ${isOpen ? 'ml-4 opacity-100' : 'opacity-0 w-0 h-0 overflow-hidden'}`}>{text}</span>

      {!isOpen && (
        <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
          {text}
        </span>
      )}
    </NavLink>
  );
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isProdukOpen, setProdukOpen] = useState(false);
  const location = useLocation();
  const isProdukActive = location.pathname.startsWith('/produk') || location.pathname.startsWith('/kategori');

  useEffect(() => {
    if (isProdukActive && isOpen) {
      setProdukOpen(true);
    }
  }, [isProdukActive, location.pathname, isOpen]);

  const handleProdukClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setProdukOpen(true);
    } else {
      setProdukOpen(!isProdukOpen);
    }
  };

  const renderNavContent = () => (
    <nav className={`flex-1 px-3 py-4 space-y-2 overflow-x-hidden ${isOpen ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>
      <SidebarLink to="/" icon={<BsGrid size={20} />} text="Dashboard" isOpen={isOpen} setIsOpen={setIsOpen} />

      <div>
        <button
          onClick={handleProdukClick}
          className={`relative flex items-center justify-between w-full p-3 my-1 rounded-lg transition-all duration-300 group ${isProdukActive && !isOpen
            ? 'bg-theme-primary text-white font-medium'
            : isProdukActive && isOpen
              ? 'text-theme-primary-dark font-medium'
              : 'text-text-muted hover:bg-gray-100 hover:text-text-main'
            } ${!isOpen ? 'justify-center' : ''}`}
        >
          <div className="flex items-center">
            <BsBoxSeam size={20} />
            <span className={`transition-opacity duration-200 ${isOpen ? 'ml-4 opacity-100' : 'opacity-0 w-0 h-0 overflow-hidden'}`}>Produk</span>
          </div>
          {isOpen && (
            <BsChevronDown
              size={16}
              className={`transition-transform duration-300 ${isProdukOpen ? 'rotate-180' : ''}`}
            />
          )}

          {!isOpen && (
            <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Produk
            </span>
          )}
        </button>

        <div className={`transition-all duration-300 overflow-hidden ${isProdukOpen && isOpen ? 'max-h-40' : 'max-h-0'}`}>
          {isOpen && (
            <div className="pl-4 border-l-2 border-gray-200 ml-5">
              <SidebarLink to="/produk" icon={<BsListUl size={18} />} text="List Produk" isOpen={isOpen} setIsOpen={setIsOpen} isChild={true} />
              <SidebarLink to="/kategori" icon={<BsTag size={18} />} text="Kategori" isOpen={isOpen} setIsOpen={setIsOpen} isChild={true} />
            </div>
          )}
        </div>
      </div>

      <SidebarLink to="/voucher" icon={<BsTicketPerforated size={20} />} text="Voucher" isOpen={isOpen} setIsOpen={setIsOpen} />
      <SidebarLink to="/pengiriman" icon={<BsTruck size={20} />} text="Pengiriman" isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <hr className="my-2 border-border-main" />
      <SidebarLink to="/transaksi" icon={<BsClockHistory size={20} />} text="Riwayat Transaksi" isOpen={isOpen} setIsOpen={setIsOpen} />
      <SidebarLink to="/users" icon={<BsPeople size={20} />} text="Manajemen User" isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-30 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-content-bg text-text-main shadow-lg transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 md:translate-x-0 md:w-20'
          }`}
      >
        <div className={`relative flex items-center justify-between h-20 ${isOpen ? 'px-6' : 'px-0 justify-center'}`}>
          <img 
            src={logo} 
            alt="Dashboard Logo" 
            className={`transition-all duration-300 ${isOpen ? 'h-10 opacity-100' : 'h-0 opacity-0'}`} 
          />

          <button
            onClick={() => setIsOpen(false)}
            className="text-text-muted hover:text-text-main md:hidden absolute top-7 right-4"
          >
            <FaBars size={24} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hidden md:block absolute top-6 text-theme-primary hover:text-theme-primary-dark transition-all duration-300
              ${isOpen ? 'right-4' : 'left-1/2 -translate-x-1/2'}
            `}
          >
            <FaBars size={20} />
          </button>
        </div>

        {renderNavContent()}
      </aside>
    </>
  );
};

export default Sidebar;