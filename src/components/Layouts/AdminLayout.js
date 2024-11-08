import React from 'react';

const Sider = () => (
  <div className="w-64 bg-gray-800 text-white p-6">
    <h2 className="text-lg font-bold mb-4">Admin Menu</h2>
    <ul>
      <li>Dashboard</li>
      <li>Data Mahasiswa</li>
    </ul>
  </div>
);

const Header = () => (
  <div className="bg-blue-600 text-white p-4 shadow">
    <h1 className="text-2xl font-bold">Halaman Admin</h1>
  </div>
);

const Footer = () => (
  <div className="bg-gray-300 text-center p-4">
    <p>© 2023 Admin Page. All rights reserved.</p>
  </div>
);

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sider />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
