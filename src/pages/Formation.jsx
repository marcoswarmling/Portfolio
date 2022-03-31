import React from "react";
import "../styles/formation.css";
import "../styles/general.css";
import { education, company } from "../arrays";
import TurnBackButton from "../utils/TurnBackButton";

export default function Formation() {
  document.title = "Formacoes";
  return (
    <div className="page">
      <header>
        <h1 className="title">Formações</h1>
      </header>
      <div>
      <br />
        <h2 className="subTitle">Experiência profissional</h2>
        {company.map(
          ({
            image,
            imageName,
            office,
            institution,
            duration,
            description,
          }) => (
            <div className="card">
              <section className="information">
                <div className="imageContainer">
                  <img className="img-fluid" src={image} alt={imageName} />
                </div>
                <h3>{office}</h3>
                <h5>{institution}</h5>
                <p>{duration}</p>
                <p>{description}</p>
              </section>
            </div>
          )
        )}
        <br />
        <h2 className="subTitle">Formação acadêmica</h2>
        {education.map(
          ({
            image,
            imageName,
            institution,
            courseName,
            duration,
            description,
          }) => (
            <div className="card">
              <section className="information">
                <div className="imageContainer">
                  <img className="img-fluid" src={image} alt={imageName} />
                </div>
                <h3>{institution}</h3>
                <h5>{courseName}</h5>
                <p>{duration}</p>
                <p>{description}</p>
              </section>
            </div>
          )
        )}
      </div>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
