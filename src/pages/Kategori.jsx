import React from 'react';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';

const dummyCategories = [
  { id: 1, name: 'Tenda', description: 'Perlengkapan untuk berlindung.' },
  { id: 2, name: 'Tas', description: 'Carrier, daypack, dan ransel.' },
  { id: 3, name: 'Alat Tidur', description: 'Sleeping bag, matras, bantal.' },
  { id: 4, name: 'Alat Masak', description: 'Kompor, nesting, dan alat makan.' },
  { id: 5, name: 'Sepatu', description: 'Sepatu hiking dan sandal gunung.' },
];

const Kategori = () => {
  return (
    <div className="bg-content-bg shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-text-main">Kategori Produk</h1>
        <button className="flex items-center bg-theme-primary hover:bg-theme-primary-dark text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          <FaPlus className="mr-2" />
          Tambah Kategori
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Nama Kategori
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-muted uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-content-bg divide-y divide-gray-200">
            {dummyCategories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-text-main">{category.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-text-muted">{category.description}</span>
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

export default Kategori;