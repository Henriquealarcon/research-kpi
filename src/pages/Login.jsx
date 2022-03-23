import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  TextField, FormControl,
} from '@mui/material/';
import { auth } from '../firebase/firebase-config';
import { LoginContainer, Button, TextLogin } from '../styles/login.styles';
import Navbar from '../components/NavBar';

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
    <>
      <Navbar />
      <LoginContainer
        container
        justifyContent="space-evenly"
        alignItems="center"
        display="flex"
        spacing={1}
        margin="auto"
      >
        {' '}
        <FormControl id="kpiform" align="center">
          <TextLogin>Login</TextLogin>
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
            type="button"
            variant="contained"
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
        </FormControl>
      </LoginContainer>
    </>
  );
}
