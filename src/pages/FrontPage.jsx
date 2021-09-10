import React from 'react'
import { useHistory, Link } from 'react-router-dom';

export default function FrontPage() {
    const history = useHistory();
    return (
    <div className="App">
    <h1>Oi! meu nome é Marcos Henrique Warmling</h1>
    <div>
      <button onClick={ () => history.push('/WhoIAm') }>Quem sou eu</button>
      <button onClick={ () => history.push('/Projects') }>Projetos</button>
      <button onClick={ () => history.push('/Formation') }>Formações</button>
      <button onClick={ () => history.push('/Contacts') }>Contatos</button>
      <button onClick={ () => history.push('/Curriculum') }>currículo</button>
    </div>
    </div>
    )
}
