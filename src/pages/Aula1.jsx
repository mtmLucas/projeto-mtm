import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import AulaContainer from '../components/AulaContainer';
import Layout from '../components/Layout';  

import "../App.css";
import "../index.css";

function Aula1() {
  const navigate = useNavigate();
  return (
    <Layout>
 <AulaContainer titulo="Aula 1 - Introdução às Tecnologias">
 <div>

      
      <VideoCard 
      titulo="Convergência. A quarta revolução industrial."
      urlDoVideo="https://www.youtube.com/embed/Us6OfvdpKeo"
      />   


      <button
        onClick={() => navigate('/home')}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        Voltar para Home
      </button>
    </div>
    </AulaContainer>
    </Layout>
   
   
  );
}

export default Aula1;
