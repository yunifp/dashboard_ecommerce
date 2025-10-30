import React from 'react';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';

const dummyProducts = [
  { id: 1, name: 'Tenda Dome Pro 4P', category: 'Tenda', price: 1200000, stock: 15, status: 'Active' },
  { id: 2, name: 'Carrier Ultralight 60L', category: 'Tas', price: 850000, stock: 25, status: 'Active' },
  { id: 3, name: 'Sleeping Bag Comfort -5°C', category: 'Alat Tidur', price: 350000, stock: 0, status: 'Draft' },
  { id: 4, name: 'Kompor Lipat Portable', category: 'Alat Masak', price: 150000, stock: 60, status: 'Active' },
  { id: 5, name: 'Sepatu Hiking Waterproof', category: 'Sepatu', price: 1500000, stock: 10, status: 'Active' },
];

const ProdukList = () => {
  return (
    <div className="bg-content-bg shadow-xl rounded-xl p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-text-main">List Produk</h1>
        <button className="flex items-center bg-theme-primary hover:bg-theme-primary-dark text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <FaPlus className="mr-2" />
          Tambah Produk
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border-main">
        <table className="min-w-full divide-y divide-border-main">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Nama Produk
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Kategori
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Harga
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Stok
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
            {dummyProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-text-main">{product.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-text-muted">{product.category}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-text-muted">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`text-sm font-medium ${product.stock > 0 ? 'text-text-muted' : 'text-red-600'}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.status}
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

export default ProdukList;