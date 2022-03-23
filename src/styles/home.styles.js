import styled from 'styled-components';

export const BodyHome = styled.body`
background-image: url('./background.jpg');
background-size: cover;
width: 100%;
height: 100%;
`;

export const TitleHome = styled.h1`
padding: 20px;
margin-top:50px;
font-size: 40px;
color: black;
text-align: center;

`;
export const SubtitleHome = styled(TitleHome)`
font-size: 25px
`;

export const SubSubtitleHome = styled(TitleHome)`
font-size: 20px
`;

export const ButtonHome = styled.button`
border-style: none;
align-items: center;
margin: auto 32em auto;
width: 50%;
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
