import React from 'react';
import '../styles/general.css';
import { education, company } from '../arrays';
import TurnBackButton from '../utils/TurnBackButton';

export default function Formation() {
  return (
    <div className="p-2">
      <header>
        <h1>Formações</h1>
      </header>
      <div>
        <h2>Formação acadêmica</h2>

        {education.map(({ image, imageName, institution, courseName, duration, description }) => (<div>
          <section className="pt-5">
            <img src={ image } alt={ imageName } />
            <h3>{institution}</h3>
            <h5>{courseName}</h5>
            <p>{duration}</p>
            <p>{description}</p>
          </section>
        </div>))}
        <h2 className="pt-5">Experiência</h2>

        {company.map(({ image, imageName, office, institution, duration, description }) => (<div>
          <section className="pt-4">
            <img src={ image } alt={ imageName } />
            <h3>{office}</h3>
            <h5>{institution}</h5>
            <p>{duration}</p>
            <p>{description}</p>
          </section>
        </div>))}

      </div>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
