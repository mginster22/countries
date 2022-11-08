import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesRequest } from "../reducers/countriesSlice";
import { Container } from "./Container";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

const CardsSection = () => {
  const {
    countries: { countries },
  } = useSelector((state) => state);
  console.log(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountriesRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Wrapper>
        {countries.map((el) => (
          <Card el={el} key={el.name} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default CardsSection;
