import React from 'react';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';

const dummyProducts = [
  { id: 1, name: 'Tenda Dome Pro 4P', category: 'Tenda', price: 1200000, stock: 15 },
  { id: 2, name: 'Carrier Ultralight 60L', category: 'Tas', price: 850000, stock: 25 },
  { id: 3, name: 'Sleeping Bag Comfort -5°C', category: 'Alat Tidur', price: 350000, stock: 40 },
  { id: 4, name: 'Kompor Lipat Portable', category: 'Alat Masak', price: 150000, stock: 60 },
  { id: 5, name: 'Sepatu Hiking Waterproof', category: 'Sepatu', price: 1500000, stock: 10 },
];

const ProdukList = () => {
  return (
    <div className="bg-content-bg shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-text-main">List Produk</h1>
        <button className="flex items-center bg-theme-primary hover:bg-theme-primary-dark text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          <FaPlus className="mr-2" />
          Tambah Produk
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Nama Produk
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Harga
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Stok
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-muted uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-content-bg divide-y divide-gray-200">
            {dummyProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-text-main">{product.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-text-muted">{product.category}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-text-muted">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.stock > 20 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock}
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

export default ProdukList;