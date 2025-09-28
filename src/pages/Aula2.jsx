import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import AulaContainer from '../components/AulaContainer';
import Layout from '../components/Layout';
import AulaCard from '../components/AulaCard';

function Aula2() {
  const navigate = useNavigate();
  return (
    <Layout>
      <AulaContainer titulo="Aula 2 - Animação no GeoGebra">
        <div className='mt-10'>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
            Atividade
          </h3>
          <p>
            Um observador vê um prédio, construído em terreno plano, segundo um ângulo α de 45°. Afastando-se do edifício x metros, passa a ver o mesmo segundo um ângulo β. Desloque o observador movimentando o seletor laranja. Observe ângulos, calcule a altura do prédio e a distância entre o observador e o prédio!
          </p>
          
          </div>

        <div className='flex gap-10 mt-10'>
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

      </AulaContainer>
    </Layout>
  );
}

export default Aula2;
