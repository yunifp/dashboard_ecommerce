import React from 'react';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';

const dummyVouchers = [
  { id: 1, code: 'OUTDOOR10', type: 'Persentase', value: '10%', status: 'Aktif' },
  { id: 2, code: 'HEMAT50K', type: 'Potongan Tetap', value: 'Rp 50.000', status: 'Aktif' },
  { id: 3, code: 'NEWUSER', type: 'Persentase', value: '15%', status: 'Tidak Aktif' },
  { id: 4, code: 'FREEOKE', type: 'Gratis Ongkir', value: 'Rp 20.000', status: 'Aktif' },
];

const Voucher = () => {
  return (
    <div className="bg-content-bg shadow-xl rounded-xl p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-text-main">Manajemen Voucher</h1>
        <button className="flex items-center bg-theme-primary hover:bg-theme-primary-dark text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <FaPlus className="mr-2" />
          Tambah Voucher
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border-main">
        <table className="min-w-full divide-y divide-border-main">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Kode Voucher
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Tipe
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Nilai
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-content-bg divide-y divide-border-main">
            {dummyVouchers.map((voucher) => (
              <tr key={voucher.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-text-main">{voucher.code}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-text-muted">{voucher.type}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-text-muted">{voucher.value}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    voucher.status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {voucher.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button className="text-blue-600 hover:text-blue-800 transition-colors duration-150 p-2 rounded-full hover:bg-blue-100" title="Edit">
                    <FaPencilAlt size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition-colors duration-150 p-2 rounded-full hover:bg-red-100" title="Delete">
                    <FaTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Voucher;