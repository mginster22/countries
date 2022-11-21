import React from "react";
import styled from "styled-components";

const CardCountry = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 220px;
  width:100%;
  border: 1px solid;
`;
const Title = styled.p`
  margin-top: auto;
`;
const Flag = styled.img`
  height: 150px;
  object-fit: cover;
  width: 100%;
`;
const Wrapper = styled.div``;

const Card = ({ name, info, img }) => {
  return (
    <CardCountry>
      <Flag src={img} />
      <Wrapper>
        {info.map(({ title, description }) => (
          <Title key={title}>
            {title}:{description}
          </Title>
        ))}
      </Wrapper>
    </CardCountry>
  );
};

export default Card;
