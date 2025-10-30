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
    <div className="bg-content-bg shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-text-main">Manajemen Voucher</h1>
        <button className="flex items-center bg-theme-primary hover:bg-theme-primary-dark text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          <FaPlus className="mr-2" />
          Tambah Voucher
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Kode Voucher
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Tipe
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Nilai
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-muted uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-content-bg divide-y divide-gray-200">
            {dummyVouchers.map((voucher) => (
              <tr key={voucher.id} className="hover:bg-gray-50">
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
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    voucher.status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {voucher.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900" title="Edit">
                    <FaPencilAlt />
                  </button>
                  <button className="text-red-600 hover:text-red-900" title="Delete">
                    <FaTrash />
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