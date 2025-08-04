// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Projeto React - Aulas</h1>
          <Link to="/" className="underline hover:text-blue-200">Home</Link>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>

      {/* Rodapé */}
      <footer className="bg-blue-100 text-center text-sm text-gray-600 py-4">
        © {new Date().getFullYear()} Projeto para a Faculdade — Lucas
      </footer>
    </div>
  );
}

export default Layout;
