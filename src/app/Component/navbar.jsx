"use client";

import React, { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container max-h-full max-w-full px-4 py-5 justify-center flex items-center shadow-lg space-x-64">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">Telasia.</div>

        {/* Navigation (Desktop) */}
        <nav className="hidden lg:flex space-x-6">
          <a
            href={'/'}
            className="relative text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out font-medium group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href={'/About'}
            className="relative text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out font-medium group">
            Tentang kami
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href={'/Mitra'}
            className="relative text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out font-medium group">
            Mitra
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href={'/Blog'}
            className="relative text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out font-medium group">
            Blog
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex space-x-4">
          <a href={''}><i className="fas fa-search hover:text-gray-700 text-purple-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"></i></a>
          <a href={'/Login'}><i className="fas fa-user hover:text-gray-700 text-purple-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"></i></a>
          <a href={'/Daftarproduk'}><i className="fas fa-shopping-cart hover:text-gray-700 text-purple-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"></i></a>
        </div>

        {/* Burger Menu (Mobile & Sidebar Toggle) */}
        <button
          className="burger-menu block lg:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          <span className="burger-line block w-6 h-1 bg-purple-600 my-1"></span>
          <span className="burger-line block w-6 h-1 bg-purple-600 my-1"></span>
          <span className="burger-line block w-6 h-1 bg-purple-600 my-1"></span>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-purple-600"
          onClick={toggleSidebar}
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {/* Sidebar Content */}
        <div className="p-6">
          <div className="text-2xl font-bold text-purple-600 mb-6">Telasia.</div>
          <nav className="flex flex-col space-y-4">
            <a href={'/'} className="text-gray-700 hover:text-purple-600">
              Home
            </a>
            <a href={'/About'} className="text-gray-700 hover:text-purple-600">
              Tentang kami
            </a>
            <a href={'/Mitra'} className="text-gray-700 hover:text-purple-600">
              Gabung Mitra
            </a>
            <a href={'/Blog'} className="text-gray-700 hover:text-purple-600">
              Blog
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
}