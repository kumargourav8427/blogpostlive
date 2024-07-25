import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Pagignation({
  postPerPage,
  totalPosts,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
   
    <>
    <div className="flex gap-4 justify-center p-3 bg-gray-600">
      {pageNumbers.map(number => (
        <span className="bg-white py-2 px-4 cursor-pointer rounded-full hover:bg-blue-600 hover:text-white" key={number} onClick={() => paginate(number)}>
          {number}
        </span>
      ))}
      </div>
    </>
  );
}

export default Pagignation;
