import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/general.css';
import '../styles/frontPage.css';

export default function FrontPage() {
  const history = useHistory();
  return (
    <div className="App">
      <h1 className="title">Oi! meu nome é Marcos Henrique Warmling</h1>
      <h2 className="subTitle">abaixo há algumas informaçoes sobre mim</h2>
      <div fluid>
        <Button variant="outline-secondary" className="col-md-2 p-2 " onClick={ () => history.push('/WhoIAm') }>Quem sou eu</Button>
        <Button variant="outline-secondary" className="col-md-2 p-2" onClick={ () => history.push('/Projects') }>Projetos</Button>
        <Button variant="outline-secondary" className="col-md-2 p-2" onClick={ () => history.push('/Formation') }>Formações</Button>
        <Button variant="outline-secondary" className="col-md-2 p-2" onClick={ () => history.push('/Curriculum') }>Currículo</Button>
        <a href="https://www.linkedin.com/in/marcos-henrique-warmling/" rel="noreferrer">
          <Button className="col-md-2 p-2" variant="outline-secondary">Contato</Button>
        </a>
      </div>
    </div>
  );
}
