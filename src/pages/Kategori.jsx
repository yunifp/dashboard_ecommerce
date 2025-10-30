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
    <div className="bg-content-bg shadow-xl rounded-xl p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-text-main">Kategori Produk</h1>
        <button className="flex items-center bg-theme-primary hover:bg-theme-primary-dark text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <FaPlus className="mr-2" />
          Tambah Kategori
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border-main">
        <table className="min-w-full divide-y divide-border-main">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Nama Kategori
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-text-muted uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-content-bg divide-y divide-border-main">
            {dummyCategories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-text-main">{category.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-text-muted">{category.description}</span>
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

export default Kategori;