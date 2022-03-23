import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { ResponsivePie } from '@nivo/pie';
import { db } from '../firebase/firebase-config';
import NavBar from '../components/NavBar';
import { TextResult } from '../styles/result.styles';

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
    <>
      <NavBar />
      <div className="grafico" style={{ width: '40vw', height: '40vh' }}>
        <TextResult>Quantas Pessoas tem a sua equipe?</TextResult>
        <ResponsivePie
          data={data1}
          margin={{
            top: 40, right: 80, bottom: 80, left: 80,
          }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                0.2,
              ],
            ],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                2,
              ],
            ],
          }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(231, 154, 190, 0.88)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'ruby',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'c',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'go',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'python',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'scala',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'lisp',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'elixir',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'javascript',
              },
              id: 'lines',
            },
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
        <TextResult>Qual a sua satisfação com a empresa?</TextResult>
        <ResponsivePie
          data={data2}
          margin={{
            top: 40, right: 80, bottom: 80, left: 80,
          }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                0.2,
              ],
            ],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                2,
              ],
            ],
          }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'ruby',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'c',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'go',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'python',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'scala',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'lisp',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'elixir',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'javascript',
              },
              id: 'lines',
            },
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
