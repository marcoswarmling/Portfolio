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
      <div className="ButtonsSet">
        <Button variant="outline-secondary" className="button" onClick={ () => history.push('/WhoIAm') }>Quem sou eu</Button>
        <Button variant="outline-secondary" className="button" onClick={ () => history.push('/Projects') }>Projetos</Button>
        <Button variant="outline-secondary" className="button" onClick={ () => history.push('/Formation') }>Formações</Button>
        <Button variant="outline-secondary" className="button" onClick={ () => history.push('/Curriculum') }>Currículo</Button>
        <Button variant="outline-secondary" className="button" onClick={ () => history.push('/Contacts') }>Contato</Button>        
      </div>
    </div>
  );
}
