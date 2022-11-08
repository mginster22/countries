import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { CustomSelect } from "./CustomSelect";
import Search from "./Search";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Amerika", label: "Amerika" },
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Oceania", label: "Oceania" },
];

const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <Container>
      <Wrapper>
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          value={region}
          onChange={(e)=>setRegion(e.target.value)}
          isClearable
          isSearchable={false}
          placeholder='Filter your region'
        />
      </Wrapper>
    </Container>
  );
};

export default Controls;
