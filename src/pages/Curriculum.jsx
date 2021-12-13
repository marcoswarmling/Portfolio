import React from 'react';
import '../styles/general.css';
import TurnBackButton from '../utils/TurnBackButton';

export default function Curriculum() {
  return (
    <div className="p-2">
      <h1>Currículo</h1>
      <footer className="turnBack">
        <TurnBackButton />
      </footer>
    </div>
  );
}
