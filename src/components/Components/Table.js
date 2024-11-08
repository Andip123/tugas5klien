import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Nama</th>
          <th className="py-2 px-4 border">NIM</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border">{item.nama}</td>
            <td className="py-2 px-4 border">{item.nim}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;