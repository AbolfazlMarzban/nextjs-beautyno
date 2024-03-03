import React from "react";

export default function ServiceItems({}) {
  return (
    <div className="mt-4">
      <ul className="flex gap-x-4 items-center font-bold border border-1 py-1 px-4 justify-between rounded-xl max-sm:text-xs max-sm:gap-1">
        <li>Service Name</li>
        <li>Service Time</li>
        <li>Service Days</li>
        <li>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded-xl shadow flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            Fast Order
          </button>
        </li>
      </ul>
    </div>
  );
}
