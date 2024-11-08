import React from 'react';

const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <table className="w-full bg-white shadow-md rounded overflow-hidden border border-gray-200">
      <thead>
        <tr className="bg-gray-200 text-gray-700 text-left">
          <th className="py-2 px-4 border">Nama</th>
          <th className="py-2 px-4 border">NIM</th>
          <th className="py-2 px-4 border">Tanggal Lahir</th>
          <th className="py-2 px-4 border">Fakultas</th>
          <th className="py-2 px-4 border">Program Studi</th>
          <th className="py-2 px-4 border">Semester</th>
          <th className="py-2 px-4 border">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{student.name}</td>
            <td className="border px-4 py-2">{student.nim}</td>
            <td className="border px-4 py-2">{student.dob}</td>
            <td className="border px-4 py-2">{student.faculty}</td>
            <td className="border px-4 py-2">{student.program}</td>
            <td className="border px-4 py-2">{student.semester}</td>
            <td className="border px-4 py-2">
              <button className="text-blue-500 mr-2 hover:underline" onClick={() => onEdit(student)}>Edit</button>
              <button className="text-red-500 hover:underline" onClick={() => onDelete(student.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
