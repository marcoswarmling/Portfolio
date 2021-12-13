import React from 'react';
import { images } from '../arrays';
import TurnBackButton from '../utils/TurnBackButton';
import '../styles/general.css';

export default function WhoIAm() {
  return (
    <div className="p-2">
      <h1>Quem sou eu</h1>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQE2NcBtSGLGJg/profile-displayphoto-shrink_800_800/0/1615327451133?e=1637798400&v=beta&t=hGwJo_-tuAo5IIanG1Ys6i_UZayrEG5j0Pb-H4y3KCg"
        alt="Foto do Marcos Henrique Warmling. Homem branco, cabelos pretos, olhos castanhos, oculos azul escuro"
        width="250"
        height="250"
      />
      <div>
        <p>Meu nome é Marcos Warmling</p>
        <p>Atualmente moro no brasil, em Santa Catarina 🏖️ :</p>
        <p>Atualmente eu estudo desenvolvimento WEB na TRYBE 💻</p>
        <p>Meu hobby é jogar 🎮, ler mangá 📖, e assistir filmes 🎬</p>
      </div>
      <div>
        Conhecimentos:
        {images.map(({ link, Name }, index) => <img key={ index } src={ link } alt={ Name } width="40" height="40" />)}
      </div>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
