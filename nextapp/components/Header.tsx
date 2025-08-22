'use client'
import React, { useState } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white h-16 flex items-center px-6 shadow-md z-50 select-none">
      {/* Logo */}
      <div className="text-indigo-600 font-bold text-xl cursor-default flex-shrink-0">
        ChatApp
      </div>

      {/* Search */}
      <div className="flex-1 mx-6 hidden md:block">
        <input
          type="text"
          placeholder="Tìm kiếm hoặc bắt đầu cuộc trò chuyện..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 placeholder-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <button
          aria-label="Thông báo"
          className="text-gray-500 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>

        {/* Messages */}
        <button
          aria-label="Tin nhắn"
          className="text-gray-500 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>

        {/* Avatar + Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="focus:outline-none"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-transparent hover:border-indigo-600 transition-shadow shadow-sm"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition"
              >
                Tài khoản
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition"
              >
                Cài đặt
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition"
              >
                Đăng xuất
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
