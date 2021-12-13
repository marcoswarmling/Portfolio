import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function TurnBackButton() {
  const history = useHistory();
  return (
    <div className="turnBackButton">
      <Button variant="outline-secondary" className="col-md-2 p-2" onClick={ () => history.push('/') }>Sair</Button>
    </div>
  );
}
