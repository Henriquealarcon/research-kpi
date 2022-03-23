import { Link } from 'react-router-dom';
import React from 'react';
import {
  ButtonHome, SubSubtitleHome, SubtitleHome, TitleHome,
} from '../styles/home.styles';
import NavBar from '../components/NavBar';
import '../styles/main.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <body
        className="home"
      >
        <TitleHome>Bem vindo(a)  a pesquisa de satisfação da KPI</TitleHome>
        <SubtitleHome>
          Vamos juntos melhorar e crescer como equipe
        </SubtitleHome>
        <SubSubtitleHome>
          A presente pesquisa foi desenvolvida para ouvir vocês
          e promover melhorias em nosso ambiente de trabalho.
        </SubSubtitleHome>
        <Link to="/pesquisa">
          <ButtonHome type="button">
            Começar a pesquisa
          </ButtonHome>
        </Link>
      </body>
    </>
  );
}
