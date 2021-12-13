import React from 'react';
import { Backprojects, images } from '../arrays';
import '../styles/general.css';
import TurnBackButton from '../utils/TurnBackButton';

function getTecnologyImages(name) {
  return images.find(({ Name }) => Name === name);
}

export default function Projects() {
  return (

    <div className="p-2">

      <h1>Projetos</h1>
      <div>
        {Backprojects.map(({ Name, Description, link }) => (<section>
          <h3>{Name}</h3>
          <text>{Description}</text>
          ,
          <a href={ link } rel="noreferrer">
            Repositorio
          </a>
          <div>
            <img src={ getTecnologyImages('Mysql').link } alt={ getTecnologyImages('Mysql').name } />
          </div>
                                                            </section>))}
      </div>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
