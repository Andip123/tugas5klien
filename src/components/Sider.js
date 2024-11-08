import React from 'react';

const Sider = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 min-h-screen">
      <h2 className="text-lg font-bold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
        <li className="hover:bg-gray-700 p-2 rounded">Data Mahasiswa</li>
      </ul>
    </div>
  );
};

export default Sider;
