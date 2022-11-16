import React, { useState } from "react";
import {  } from '@heroicons/24/react/solid'
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(initialState);
  return (
    <div className="min-h-screen bg-indigo-100 flex justify-end p-4">
      <div className="relative">
        <button
          className="inline-flex justify-center w-full rounded-md border border-gray-300
          shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100
          focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          Options Menu
        </button>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg
          bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100
          focus:outline-none"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
