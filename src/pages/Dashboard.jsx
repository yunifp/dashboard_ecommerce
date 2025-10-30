import React from 'react';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-text-main mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-content-bg p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-text-muted">Total Penjualan</h3>
          <p className="text-3xl font-bold text-theme-primary-dark mt-2">Rp 12.500.000</p>
        </div>
        <div className="bg-content-bg p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-text-muted">Pesanan Baru</h3>
          <p className="text-3xl font-bold text-theme-primary-dark mt-2">32</p>
        </div>
        <div className="bg-content-bg p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-text-muted">Total Produk</h3>
          <p className="text-3xl font-bold text-theme-primary-dark mt-2">124</p>
        </div>
        <div className="bg-content-bg p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-text-muted">Pengguna</h3>
          <p className="text-3xl font-bold text-theme-primary-dark mt-2">78</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;