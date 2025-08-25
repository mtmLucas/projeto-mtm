import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Aula1 from "./pages/Aula1";
import Aula2 from "./pages/Aula2";
import "./index.css"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aula1" element={<Aula1 />} />
      <Route path="/aula2" element={<Aula2 />} />
    </Routes>
  );
}

export default App;
