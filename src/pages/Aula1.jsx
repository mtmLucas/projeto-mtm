import React from 'react';
import { useNavigate } from 'react-router-dom';

function Aula1() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Aula 1 - Introdução às Tecnologias</h2>
      <p className="mb-6">Conteúdo da Aula 1... (adicione aqui seus materiais)</p>
      <button
        onClick={() => navigate('/')}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        Voltar para Home
      </button>
    </div>
  );
}

export default Aula1;
