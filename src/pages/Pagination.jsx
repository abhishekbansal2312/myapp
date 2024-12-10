import React, { useEffect, useState } from "react";

export default function Pagination({ students }) {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageStudents, setPageStudents] = useState([]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pagedStudents = students.slice(start, end);
    setPageStudents(pagedStudents);
  }, [currentPage, students]);

  const handleIncrease = () => {
    if (currentPage < Math.ceil(students.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDecrease = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {pageStudents.map((student, index) => (
          <li
            key={index}
            className="p-4 bg-gray-100 rounded shadow-md text-gray-700 text-center"
          >
            {student}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <button
          onClick={handleDecrease}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleIncrease}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${
            currentPage >= Math.ceil(students.length / itemsPerPage) &&
            "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentPage >= Math.ceil(students.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
