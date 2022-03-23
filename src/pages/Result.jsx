import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { ResponsivePie } from '@nivo/pie';
import { db } from '../firebase/firebase-config';

export default function Result() {
  const [question, setQuestion] = useState();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const dataCollection = collection(db, 'data');

  useEffect(() => {
    const getData = async () => {
      const newData = await getDocs(dataCollection);
      return setQuestion(newData.docs.map((docs) => ({ ...docs.data(), id: docs.id }))[0]);
    };
    getData();
  }, []);

  if (question && !data1.length && !data2.length) {
    const chartKeys = Object.keys(question);
    chartKeys.pop();

    const idQuestion1 = 'LNF4wCmhSCVQRezGypj6';

    const idQuestion2 = 'ZotBth1vccQXDD9aoAfB';

    const customChart1 = {
      '1 a 3': 0,
      '4 a 6': 0,
      '7 a 10': 0,
      'Mais que 10': 0,
    };

    const customChart2 = {
      Insatisfeito: 0,
      'Pouco Satisfeito': 0,
      Satisfeito: 0,
      'Muito Satisfeito': 0,
    };

    chartKeys.forEach((key) => {
      customChart1[question[key][idQuestion1]] += 1;
      customChart2[question[key][idQuestion2]] += 1;
    });
    const prepareData1 = Object.keys(customChart1).map((key) => ({
      id: key,
      label: key,
      value: customChart1[key],
      color: 'hsl(90, 70%, 50%)',
    }));
    const prepareData2 = Object.keys(customChart2).map((key) => ({
      id: key,
      label: key,
      value: customChart2[key],
      color: 'hsl(90, 70%, 50%)',
    }));
    setData1(prepareData1);
    setData2(prepareData2);
  }

  if (!data1.length || !data2.length) return 'loading...';
  return (
    <div className="grafico" style={{ width: '35vw', height: '35vh' }}>
      <ResponsivePie
        data={data1}
      />
      <ResponsivePie
        data={data2}
      />
    </div>
  );
}
