import React from "react";
import "../styles/general.css";
import "../styles/curriculum.css";
import TurnBackButton from "../utils/TurnBackButton";

export default function Curriculum() {
  return (
    
    <div className="page">
      <h1 className="title">Currículo</h1>
      <br />
      <div >
        <img src="https://imagensbrasil.org/images/2022/03/31/Captura-de-tela-de-2022-03-31-15-35-48.md.png" className="img-fluid" alt="curriculo parte 1" />
        <img src="https://imagensbrasil.org/images/2022/03/31/Captura-de-tela-de-2022-03-31-15-53-48.md.png" className="img-fluid" alt="curriculo parte 2" />
      </div>
      <a href="https://drive.google.com/u/0/uc?id=1LqAky7hKZ1XFeF-7rbialmz3gO9T8M4O&export=download" download>
        <button className="btn btn-primary">Baixar</button>
      </a>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
