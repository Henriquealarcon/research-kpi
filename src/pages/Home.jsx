import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
  return (
    <>
      <h1>Bem vindo(a)  a pesquisa de satisfação da KPI</h1>
      <h2>
        Vamos juntos melhorar e crescer como equipe
      </h2>
      <h4>
        A presente pesquisa foi desenvolvida para ouvir vocês
        e promover melhorias em nosso ambiente de trabalho.
      </h4>
      <form>
        <Link to="/pesquisa">
          <button type="button">
            Começar a pesquisa
          </button>
        </Link>
      </form>
    </>

  );
}
