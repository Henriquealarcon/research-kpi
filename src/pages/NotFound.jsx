import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonNotFound, TextNotFound } from '../styles/notFound.styles';
import '../styles/main.css';
import NavBar from '../components/NavBar';

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <body className="home">
        <TextNotFound>PÁGINA NÃO ENCONTRDA</TextNotFound>
        <Link to="/login">
          <ButtonNotFound type="button">
            Voltar
          </ButtonNotFound>
        </Link>
      </body>
    </div>
  );
}
