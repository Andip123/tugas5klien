import React from 'react';
import Sider from './components/Sider';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AdminLayout from './components/Layouts/AdminLayout';
import Mahasiswa from './components/Pages/Admin/Mahasiswa';

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-200">
    <Sider />
    <div className="flex-1 flex flex-col">
    <Header />
    <Main />
    <Footer />
    <AdminLayout>
      <Mahasiswa /> 
    </AdminLayout>
     </div>
     </div>
  );
};
export default App;