import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import AulaContainer from '../components/AulaContainer';
import Layout from '../components/Layout';
import AulaCard from '../components/AulaCard';


import "../App.css";
import "../index.css";

function Aula1() {
  const navigate = useNavigate();
  return (
    <Layout>
      <AulaContainer titulo="Aula 1 - Introdução às Tecnologias">
        <div className='flex gap-10'>


          <VideoCard
            titulo="Convergência. A quarta revolução industrial."
            urlDoVideo="https://www.youtube.com/embed/Us6OfvdpKeo"
          />

          <VideoCard
            titulo="Vocês está perdido no mundo, assim como eu? (Animação)"
            urlDoVideo="https://www.youtube.com/watch?v=P48ZB1I6QPc"
          />
          <div className="bg-white rounded-xl shadow-md p-4 w-80 hover:shadow-xl transition">
            <img
              src="https://matec2023.pbworks.com/f/redes.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Extra</h3>
            <p className="text-sm text-gray-700 mb-4">1- O que é a felicidade numa sociedade de consumo?</p>
            <p className="text-sm text-gray-700 mb-4">2- FILME - O DILEMA DAS REDES SOCIAIS (NETFLIX)"</p>
          </div>
        </div>

        <div className='mt-10'>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
            Atividade
          </h3>
          <p>
            1- organizar/criar o próprio espaço de trabalho de vocês.
          </p>
          <p>
            2- Organizar leituras iniciais - Ler capitulo QUESTIONAR Lucas
          </p>
          <a className='text-blue-600' href="https://docs.google.com/presentation/d/16xRzai-oHu9Q98wdl8JRs_AFE1dLn8xyNYjNxeygV_o/edit?usp=sharing">Apresentação</a>
        </div>
      </AulaContainer>
    </Layout>


  );
}

export default Aula1;
