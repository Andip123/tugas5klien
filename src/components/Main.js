import React, { useState } from 'react';
import StudentTable from './StudentTable';
import StudentModal from './StudentModal';
import Swal from 'sweetalert2';

const Main = () => {
  const [students, setStudents] = useState([
    { 
      id: 1, 
      name: 'Dunialain', 
      nim: 'A11.2021.12393', 
      dob: '2000-01-01', 
      faculty: 'Teknik', 
      program: 'Informatika', 
      semester: 7 
    },
    { 
      id: 2, 
      name: 'Ajundan', 
      nim: 'B12.2023.18378', 
      dob: '2004-02-02', 
      faculty: 'Ekonomi', 
      program: 'Manajemen', 
      semester: 3 
    },
      { 
      id: 3, 
      name: 'Jainab', 
      nim: 'A11.2021.12873', 
      dob: '2001-07-06', 
      faculty: 'Ilmu Komputer', 
      program: 'Teknik Iformatika', 
      semester: 7 
    },
    { 
      id: 4, 
      name: 'Anggoro', 
      nim: 'A12.2020.11233', 
      dob: '2001-03-20', 
      faculty: 'Ilmu Komputer', 
      program: 'Sistem Informasi', 
      semester: 9 
    },
    { 
      id: 5, 
      name: 'Yuhuu', 
      nim: 'A11.2021.14564', 
      dob: '2002-02-02', 
      faculty: 'Ilmu Komputer', 
      program: 'Teknik Informatika', 
      semester: 7
    },
  
  ]);
  const [modalData, setModalData] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s)));
  };

  const deleteStudent = (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Data mahasiswa akan dihapus!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents(students.filter((s) => s.id !== id));
        Swal.fire('Terhapus!', 'Data mahasiswa telah dihapus.', 'success');
      }
    });
  };

  return (
    <div className="p-6 flex-1 bg-white shadow-md rounded-lg m-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded hover:bg-blue-600 shadow"
        onClick={() => setModalData({})}
      >
        Tambah Mahasiswa
      </button>
      <StudentTable students={students} onEdit={setModalData} onDelete={deleteStudent} />
      {modalData && (
        <StudentModal
          data={modalData}
          onClose={() => setModalData(null)}
          onSave={(student) => {
            if (student.id) updateStudent(student);
            else addStudent(student);
            setModalData(null);
          }}
        />
      )}
    </div>
  );
};

export default Main;
