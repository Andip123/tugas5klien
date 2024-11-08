import React, { useState, useEffect } from 'react';

const StudentModal = ({ data, onClose, onSave }) => {
  const [student, setStudent] = useState({
    name: '',
    nim: '',
    dob: '',
    faculty: '',
    program: '',
    semester: '',
  });

  useEffect(() => {
    if (data) setStudent(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">{data?.id ? "Edit" : "Tambah"} Mahasiswa</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(student);
          }}
        >
          <input type="text" name="name" placeholder="Nama" value={student.name} onChange={handleChange} className="w-full p-2 mb-2 border" />
          <input type="text" name="nim" placeholder="NIM" value={student.nim} onChange={handleChange} className="w-full p-2 mb-2 border" />
          <input type="date" name="dob" value={student.dob} onChange={handleChange} className="w-full p-2 mb-2 border" />
          <input type="text" name="faculty" placeholder="Fakultas" value={student.faculty} onChange={handleChange} className="w-full p-2 mb-2 border" />
          <input type="text" name="program" placeholder="Program Studi" value={student.program} onChange={handleChange} className="w-full p-2 mb-2 border" />
          <input type="number" name="semester" placeholder="Semester" value={student.semester} onChange={handleChange} className="w-full p-2 mb-2 border" />
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 mr-2 rounded">Batal</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentModal;
