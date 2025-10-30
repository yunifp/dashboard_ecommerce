import React from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const UserManagement = () => {
  const users = [
    { id: 1, name: 'Yunif Putra P.', email: 'admin@example.com', role: 'Admin' },
    { id: 2, name: 'Budi Santoso', email: 'budi@example.com', role: 'User' },
    { id: 3, name: 'Citra Lestari', email: 'citra@example.com', role: 'User' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-text-main">
          Manajemen User
        </h1>
        <button className="flex items-center bg-theme-primary hover:bg-theme-primary-dark text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg">
          <FaPlus className="mr-2" />
          Tambah User
        </button>
      </div>

      <div className="bg-content-bg shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-border-main">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">Nama</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-muted uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-border-main">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-text-main">{user.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-text-muted">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'Admin' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button className="text-theme-primary hover:text-theme-primary-dark p-1 rounded-full hover:bg-theme-primary-light">
                    <FaEdit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50">
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

export default UserManagement;