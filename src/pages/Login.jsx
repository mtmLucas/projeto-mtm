import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="card-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://api.dicebear.com/7.x/thumbs/svg?seed=Alaina"
            alt="profile"
            width="100"
            height="100"
          />
        </div>
      </div>

      <div className="lower-container">
        <h3>Lucas Iury C. Schmidt</h3>
        <h4>Licenciatura em Matemática</h4>
        <p>
          Página para publicações das atividades da matéria{" "}
          <b>Tecnologias Digitais no Ensino da Matemática</b>
        </p>

        <Link to="/home">
          <button style={{ marginTop: "20px", padding: "10px 20px" }}>Entrar</button>
        </Link>
      </div>
    </div>
  );
}
