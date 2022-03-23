import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { TextField } from '@mui/material';
import { addDoc, collection } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer, Button, TextRegister } from '../styles/register.styles';
import { db } from '../firebase/firebase-config';
import NavBar from '../components/NavBar';
import '../styles/main.css';

export default function Register() {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newGender, setNewGender] = useState('Não binário');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const usersCollection = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollection, {
      name: newName,
      email: newEmail,
      password: newPassword,
      age: newAge,
      gender: newGender,
      id: userId,
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid } = user;
      setUserId(uid);
    } else {
      console.log('not logged');
    }
  });

  function genderSelect() {
    const selectGender = document.getElementById('genderLabel');
    const valueGender = selectGender.options[selectGender.selectedIndex].value;
    setNewGender(valueGender);
  }

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, newEmail, newPassword);
      setNewGender();
      createUser();
      navigate('/login');
      return user;
    } catch (error) {
      return alert('Campos preenchidos incorretamente');
    }
  };

  return (
    <>
      <NavBar />
      <body
        className="home"
      >
        <RegisterContainer>
          <TextRegister>Cadastro</TextRegister>
          {/* <form id="kpiform"> */}
          <TextField
            name="email"
            onChange={(event) => setNewEmail(event.target.value)}
            type="text"
            placeholder="Insira seu e-mail"
          />
          <TextField
            name="password"
            onChange={(event) => setNewPassword(event.target.value)}
            type="password"
            placeholder="Insira sua senha"
          />
          <TextField
            name="name"
            onChange={(event) => setNewName(event.target.value)}
            type="text"
            placeholder="Insira seu nome"
          />
          <TextField
            name="age"
            onChange={(event) => setNewAge(event.target.value)}
            type="text"
            placeholder="Insira sua idade"
          />
          <select
            id="genderLabel"
            onChange={genderSelect}
          >
            <option
              className="select-item"
              value="Homem cis"
            >
              Homem cis
            </option>
            <option
              className="select-item"
              value="Homem trans"
            >
              Homem trans
            </option>
            <option
              className="select-item"
              value="Mulher cis"
            >
              Mulher cis
            </option>
            <option
              className="select-item"
              value="Mulher trans"
            >
              Mulher trans
            </option>
            <option
              className="select-item"
              value="Não binário"
              selected
            >
              Não binário
            </option>
          </select>
          <Button
            type="button"
            onClick={register}
          >
            Cadastrar
          </Button>
          {/* </form> */}
        </RegisterContainer>
      </body>
    </>
  );
}
