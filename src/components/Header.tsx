"use client";

import React from "react";
import { useState } from "react";

const Header = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Логотип */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Med Yordam Logo" className="h-8 mr-2" />
          <span className="font-bold text-xl text-blue-700">Med Yordam</span>
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-6">
          <a href="#doctors" className="text-gray-700 hover:text-blue-700">
            Врачи
          </a>
          <a href="#clinics" className="text-gray-700 hover:text-blue-700">
            Клиники
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-700">
            Услуги
          </a>
        </nav>

        {/* Управляющие кнопки */}
        <div className="flex items-center space-x-4">
          {/* Кнопка "Поиск по карте" */}
          <button className="hidden md:inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200">
            Поиск по карте
          </button>

          {/* Dropdown для выбора языка */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdown(!languageDropdown)}
              className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg font-medium hover:bg-gray-200"
            >
              <span>Рус</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {languageDropdown && (
              <ul className="absolute right-0 mt-2 w-24 bg-white border rounded-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Рус
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Узб
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Eng
                </li>
              </ul>
            )}
          </div>

          {/* Кнопка "Регистрация" */}
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
            Регистрация
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
