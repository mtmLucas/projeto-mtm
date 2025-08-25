// src/components/AulaContainer.jsx
import React from 'react';

function AulaContainer({ titulo, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        {titulo}
      </h2>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  );
}

export default AulaContainer;