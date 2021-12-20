import React from 'react';
import { images } from '../arrays';
import TurnBackButton from '../utils/TurnBackButton';
import '../styles/general.css';
import '../styles/whoIAm.css';

export default function WhoIAm() {
  return (
    <div className='page'>
      <h1 className='title'>Quem sou eu</h1>
      <img
        src="https://avatars.githubusercontent.com/u/48682543?u=025ca245dbffde4c3a02df61aca647e12fffa59c&v=4"
        alt="Foto do Marcos Henrique Warmling. Homem branco, cabelos pretos, olhos castanhos, oculos azul escuro"
        width="250"
        height="250"
        className='avatar'
      />
      <div className='texts'>
        <p>Meu nome é Marcos Warmling</p>
        <p>Eu moro no Brasil, em Santa Catarina 🏖️ :</p>
        <p>Atualmente estudo desenvolvimento WEB na TRYBE 💻</p>
        <p>Meu hobby é jogar 🎮, ler mangá 📖, e assistir filmes 🎬</p>
      </div>
      <div className="learningContainer">
        Conhecimentos:
        {images.map(({ link, Name }, index) => <img key={ index } src={ link } alt={ Name } className='learnings'/>)}
      </div>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
