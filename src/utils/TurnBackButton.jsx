import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/utils.css';

export default function TurnBackButton() {
  const history = useHistory();
  return (
    <div className="turnBackButton">
      <Button variant="outline-secondary" onClick={ () => history.push('/') }>Sair</Button>
    </div>
  );
}
