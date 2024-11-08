import React, { useState } from 'react';
import Button from '../../Components/Button';
import Table from '../../Components/Table';

const Mahasiswa = () => {
  const [data, setData] = useState([
    { nama: 'Dunialain', nim: '	A11.2021.12393' },
    { nama: 'Ajundan', nim: '	B12.2023.18378' }
  ]);

  const handleAdd = () => {
    setData([...data, { nama: 'New Student', nim: '11112222' }]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Data Mahasiswa</h2>
      <Button
        style="bg-blue-500 text-white hover:bg-blue-600"
        text="Tambah Mahasiswa"
        onClick={handleAdd}
      />
      <div className="mt-4">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Mahasiswa;
