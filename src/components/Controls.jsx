import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { CustomSelect } from "./CustomSelect";
import Search from "./Search";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const options = [
  {value:'Africa',label:'Africa'},
  {value:'Europe',label:'Europe'},
  {value:'America',label:'America'},
  {value:'Asia',label:'Asia'},
  {value:'Oceania',label:'Oceania'},
]

const Controls = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    handleSearch(search, regionValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region]);

  return (
    <Container>
      <Wrapper>
        <Search search={search} onSearch={setSearch} />
        <CustomSelect value={region} onChange={setRegion} options={options} />
      </Wrapper>
    </Container>
  );
};

export default Controls;
