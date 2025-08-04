import React from 'react';
import { useNavigate } from 'react-router-dom';

function AulaCard({ imagem, titulo, resumo, rota }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-80 hover:shadow-xl transition">
      <img
        src={imagem}
        alt={titulo}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
      <p className="text-sm text-gray-700 mb-4">{resumo}</p>
      <button
        onClick={() => navigate(rota)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </div>
  );
}

export default AulaCard;
