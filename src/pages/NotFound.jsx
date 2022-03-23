import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonNotFound, TextNotFound } from '../styles/notFound.styles';

export default function NotFound() {
  return (
    <div>
      <TextNotFound>PÁGINA NÃO ENCONTRDA</TextNotFound>
      <Link to="/login">
        <ButtonNotFound type="button">
          Voltar
        </ButtonNotFound>
      </Link>
    </div>
  );
}
