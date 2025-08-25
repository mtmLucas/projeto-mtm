// src/pages/Home.jsx
import React from 'react';
import AulaCard from '../components/AulaCard.jsx';
import { aulas } from '../data/aulas.js';
import Layout from '../components/Layout.jsx'; // Importe o componente Layout
import "../App.css";
import "../index.css";

function Home() {
  return (
    // Envolva o conteúdo da página com o componente <Layout>
    <Layout>
      <div>
        <h2 className="text-2xl font-bold mb-6">Selecione uma Aula</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aulas.map((aula) => (
            <AulaCard
              key={aula.id}
              imagem={aula.imagem}
              titulo={aula.titulo}
              resumo={aula.resumo}
              rota={aula.rota}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;