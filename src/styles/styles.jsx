import styled from 'styled-components';

export const LoginDiv = styled.div`
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
   p {
     color: red;
   }
`;

export const RegisterDiv = styled.div`
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
   p {
     color: red;
   }
`;

export const Inputs = styled.input`
  display:flex;
  flex-direction: column;
  width: 95%;
  height: 50px;
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
`;

export const Selects = styled.select`
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

export const ButtonSend = styled.button`
border-style: none;
margin: 10px;
width: 179px;
height: 40px;
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

export const ButtonRegister = styled.button`
border-style: none;
border: 2px solid #001427;
width: 100%;
height: 50px;
border-radius: 10px;
font-size: 30px;
color: white;
background-color: #001427;
:hover {
  background-color: white;
  color: #001427;
  border: 2px solid #001427;
}
`;
