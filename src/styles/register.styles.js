import styled from 'styled-components';

export const RegisterContainer = styled.div`
border: 1px solid black;
box-shadow: 0 0 1em #00000099;
width: 500px;
height: 500px;
position: absolute;
top: 25%;
left: 0; right: 0;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
   p {
     color: red;
   }
`;

export const TextRegister = styled.h1`
font-size: 20px;
text-align: center;
color: #001427;
`;

export const Selects = styled.option`
  display:flex;
  flex-direction: column;
  width: 60%;
  height: 50px;
  padding: 3px;
  color: black;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
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

export const Option = styled.option`
font-size: 12px;
margin: 1em;
`;
