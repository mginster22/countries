import React from 'react';
import styled from 'styled-components';

const CardEl=styled.article`
display:flex;
flex-direction:column;
justify-content:space-between;
max-width:230px;
width:100%;
border:1px solid black;
`
const Title=styled.h4`
font-size:var(--fs-s);
color:var(--color-text);
`

const Avatar =styled.img.attrs({
  
})`

`

const Card = ({el}) => {
  return (
    <CardEl>
      <Avatar src={el.flag}/>
      <Title>{el.name}</Title>
      <Title>{el.region}</Title>
      <Title>Area {el.area}</Title>
    </CardEl>
  );
}

export default Card;
