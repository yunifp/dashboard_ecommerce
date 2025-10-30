import React, { useState } from 'react';
import TransactionDetailModal from '../components/TransactionDetailModal';

const mockTransactions = {
  sukses: [
    { id: 'TRX-1001', date: '25 Okt 2025', customer: { name: 'Andi Wijaya' }, total: 1500000, resi: 'JNT-001122', status: 'sukses', items: [{ id: 1, name: 'Tenda Dome', qty: 1, price: 1500000 }], address: { street: 'Jl. Merdeka 10', city: 'Jakarta', zip: '10110' }, customer: {name: 'Andi Wijaya', email: 'andi@example.com'} },
    { id: 'TRX-1003', date: '24 Okt 2025', customer: { name: 'Siti Aminah' }, total: 850000, resi: 'JNE-554433', status: 'sukses', items: [{ id: 2, name: 'Sepatu Gunung', qty: 1, price: 850000 }], address: { street: 'Jl. Kembang 2', city: 'Bandung', zip: '40111' }, customer: {name: 'Siti Aminah', email: 'siti@example.com'} },
  ],
  gagal: [
    { id: 'TRX-1002', date: '24 Okt 2025', customer: { name: 'Budi Hartono' }, total: 300000, resi: 'N/A', status: 'gagal', items: [{ id: 3, name: 'Cooking Set', qty: 1, price: 300000 }], address: { street: 'Jl. Mawar 5', city: 'Surabaya', zip: '60111' }, customer: {name: 'Budi Hartono', email: 'budi@example.com'} },
  ],
  dikirim: [
    { id: 'TRX-1004', date: '26 Okt 2025', customer: { name: 'Citra Lestari' }, total: 2200000, resi: 'SICEPAT-998877', status: 'dikirim', items: [{ id: 4, name: 'Carrier 60L', qty: 1, price: 2200000 }], address: { street: 'Jl. Anggrek 1', city: 'Medan', zip: '20111' }, customer: {name: 'Citra Lestari', email: 'citra@example.com'} },
  ],
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const RiwayatTransaksi = () => {
  const [activeTab, setActiveTab] = useState('sukses');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const tabs = [
    { key: 'sukses', label: 'Sukses' },
    { key: 'dikirim', label: 'Dalam Pengiriman' },
    { key: 'gagal', label: 'Gagal' },
  ];

  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction);
    setModalOpen(true);
  };

  const renderTable = (status) => {
    const data = mockTransactions[status];
    if (data.length === 0) {
      return <p className="p-6 text-text-muted">Tidak ada transaksi.</p>;
    }
    
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-main">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">Pelanggan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">No. Resi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-border-main">
            {data.map((tx) => (
              <tr 
                key={tx.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(tx)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-theme-primary">{tx.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted">{tx.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-main">{tx.customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-main">{formatCurrency(tx.total)}</td>
                <td className="px-6 py-4 whitespace-nowMrap text-sm text-text-muted">{tx.resi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-text-main mb-6">
        Riwayat Transaksi
      </h1>

      <div className="bg-content-bg shadow-md rounded-lg">
        <div className="border-b border-border-main">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-theme-primary text-theme-primary'
                    : 'border-transparent text-text-muted hover:text-text-main hover:border-gray-300'
                }`}
              >
                {tab.label} ({mockTransactions[tab.key].length})
              </button>
            ))}
          </nav>
        </div>
        
        <div>
          {renderTable(activeTab)}
        </div>
      </div>

      <TransactionDetailModal 
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        transaction={selectedTransaction}
      />
    </>
  );
};

export default RiwayatTransaksi;