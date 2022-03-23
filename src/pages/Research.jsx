import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase-config';
import Response from '../components/Questions';

export default function Research() {
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState({});
  const [userId, setUserId] = useState();
  const [index, setIndex] = useState(0);
  const auth = getAuth();
  const navigate = useNavigate();

  const questionCollection = collection(db, 'questions');

  const handleChange = ({ target: { id, value } }) => {
    setData({ ...data, [id]: value });
  };

  const updateUser = async () => {
    const dataDoc = doc(db, 'data', 'resultQuestions');
    const newFields = { [userId]: data };
    await updateDoc(dataDoc, newFields);
  };

  const handleClick = async () => {
    try {
      updateUser();
      return navigate('/resultado');
    } catch (error) {
      return error.message;
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid } = user;
      setUserId(uid);
    } else {
      console.log('not logged');
    }
  });

  useEffect(() => {
    const getUsers = async () => {
      const newData = await getDocs(questionCollection);
      return setQuestions(newData.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);

  if (!questions.length) return 'loading...';
  return (
    <form>
      <Response
        question={questions[index]}
        handleChange={handleChange}
        data={data}
      />
      {
        !index
          ? (
            <button onClick={() => setIndex(index + 1)} type="button">
              Proxima pergunta
            </button>
          )
          : (
            <button onClick={() => setIndex(index - 1)} type="button">
              Pergunta anterior
            </button>
          )
      }
      {
          Object.keys(data).length === questions.length
          && (
          <button onClick={handleClick} type="button">
            Finalizar
          </button>
          )
      }
    </form>
  );
}
