import styled from 'styled-components';

export const LoginContainer = styled.div`
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

export const TextLogin = styled.h1`
font-size: 20px;
text-align: center;
color: #001427;
`;

export const Button = styled.button`
border-style: none;
margin: 1em auto 1em;
width: 80%;
height: 50px;
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
