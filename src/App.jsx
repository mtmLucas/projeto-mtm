import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Aula1 from './pages/Aula1.jsx';
import Aula2 from './pages/Aula2.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/aula1" element={<Layout><Aula1 /></Layout>} />
      <Route path="/aula2" element={<Layout><Aula2 /></Layout>} />
    </Routes>
  );
}

export default App;
