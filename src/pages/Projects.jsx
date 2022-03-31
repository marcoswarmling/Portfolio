import React from "react";
import { Backprojects } from "../arrays";

import "../styles/general.css";
import "../styles/projects.css";
import TurnBackButton from "../utils/TurnBackButton";

export default function Projects() {
  document.title = "Projetos";
  return (
    <div className="page">
      <h1 className="title">Projetos</h1>
      <div>
        <div>
          {Backprojects.map(({ Name, Description, link, image }) => (
            <section className="card">
              <h2 className="name">{Name}</h2>
              <text className="description">{Description}</text>
              <div className="linkBox"></div>
              <a className="link" href={link} rel="noreferrer">
                Repositório
              </a>
              <div className="imageBox">
                <img className="img-fluid" src={image} />
              </div>
            </section>
          ))}
        </div>
      </div>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
