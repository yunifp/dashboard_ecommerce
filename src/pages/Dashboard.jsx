import React from 'react';
import { FaDollarSign, FaReceipt, FaBoxOpen, FaTruck } from 'react-icons/fa';

const StatCard = ({ icon, title, value, color }) => {
  const IconComponent = icon;
  return (
    <div className="bg-content-bg p-5 rounded-xl shadow-lg shadow-gray-100/50 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">{title}</h3>
          <p className={`text-3xl font-bold text-text-main mt-1 ${color.text}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color.bg} ${color.text}`}>
          <IconComponent size={22} />
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-text-main mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={FaDollarSign} 
          title="Total Penjualan" 
          value="Rp 12.5jt" 
          color={{ text: 'text-theme-primary', bg: 'bg-theme-primary-light' }}
        />
        <StatCard 
          icon={FaReceipt} 
          title="Transaksi" 
          value="32" 
          color={{ text: 'text-orange-600', bg: 'bg-orange-100' }}
        />
        <StatCard 
          icon={FaBoxOpen} 
          title="Total Produk" 
          value="124" 
          color={{ text: 'text-teal-600', bg: 'bg-teal-100' }}
        />
        <StatCard 
          icon={FaTruck} 
          title="Pengiriman" 
          value="78" 
          color={{ text: 'text-sky-600', bg: 'bg-sky-100' }}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-content-bg p-6 rounded-xl shadow-lg shadow-gray-100/50 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Grafik Penjualan</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-text-muted">
            Chart akan tampil di sini
          </div>
        </div>
        <div className="bg-content-bg p-6 rounded-xl shadow-lg shadow-gray-100/50 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Produk Terlaris</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span className="text-text-main">Tenda Dome</span>
              <span className="font-medium text-text-muted">25x</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-text-main">Sepatu Gunung</span>
              <span className="font-medium text-text-muted">18x</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-text-main">Carrier 60L</span>
              <span className="font-medium text-text-muted">12x</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;