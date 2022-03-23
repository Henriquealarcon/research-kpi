import styled from 'styled-components';

export const ResearchContainer = styled.div`
width: 500px;
height: 500px;
position: absolute;
top: 10%;
left: 0; right: 0;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
`;

export const DivContainer = styled.div`
border: 1px solid black;
box-shadow: 0 0 1em #00000099;
width: 400px;
height: 400px;
position: absolute;
top: 25%;
left: 0; right: 0;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

export const ButtonContainer = styled.div`
border: 1px solid black;
box-shadow: 0 0 1em #00000099;
width: 400px;
height: 400px;
position: absolute;
top: 10%;
left: 0; right: 0;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`;

export const TextResearch = styled.h1`
margin-top: 3em;
font-size: 40px;
text-align: center;
color: #001427;
`;

export const Button = styled.button`
border-style: none;
margin: 2em 3em 2em;
width: 80%;
height: 50px;
border-radius: 10px;
font-size: 15px;
color: white;
background-color: #001427;
:hover {
  background-color: white;
  color: #001427;
  border: 2px solid #001427;
}
`;

export const ButtonResearch = styled.button`
border-style: none;
margin: 6em 2em 20em 5em;
margin-left: 26em;
width: 20%;
height: 40px;
border-radius: 10px;
font-size: 14px;
color: white;
background-color: #001427;
:hover {
  background-color: white;
  color: #001427;
  border: 2px solid #001427;
}
`;
