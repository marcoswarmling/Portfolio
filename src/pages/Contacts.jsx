import React from 'react';
import '../styles/general.css';
import '../styles/contacts.css';
import TurnBackButton from '../utils/TurnBackButton';

export default function Contacts() {
    document.title = "Contatos";
    return (
        <div className="page">
            <h1 className="title">Contatos</h1>
            <h2>marcoswarmling15@gmail.com</h2>
            <h2>+55 (48)99605-9968 </h2>
            <a href="https://www.linkedin.com/in/marcos-henrique-warmling/">
                <button className="btn btn-primary">Linkedin</button>
            </a>
            <br />
            <footer className="turnBack">
        <TurnBackButton />
      </footer>
        </div>
    )
}
