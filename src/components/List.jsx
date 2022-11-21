import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap:30px;
`;

const List = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default List;
