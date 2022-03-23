import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField } from '@mui/material/';
import { auth } from '../firebase/firebase-config';
import { LoginDiv } from '../styles/styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return navigate('/home');
    } catch (error) {
      return navigate('/notFound');
    }
  };

  return (
    <LoginDiv>
      <body>
        <h1>Login</h1>
        <form id="kpiform">
          <TextField
            name="email"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Insira seu e-mail"
          />
          <TextField
            name="password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Insira sua senha"
          />
          <Button
            variant="contained"
            type="button"
            onClick={login}
          >
            Entrar

          </Button>
          <Link to="/register">
            <Button
              type="button"
              variant="contained"
            >
              Cadastrar
            </Button>
          </Link>
        </form>
      </body>
    </LoginDiv>
  );
}
