"use client"; // Obligatoire pour activer le mode client

import { useEffect, useState } from "react";
import axios from "axios";

// Define a type for the student data
interface Student {
  id: number;
  name: string;
  course: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/students/")
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Liste des étudiants</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}