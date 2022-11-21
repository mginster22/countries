import React from "react";
import styled from "styled-components";

const InputWrapper = styled.label``;
const Input = styled.input``;
const Search = ({ onSearch, search }) => {
  return (
    <InputWrapper>
      <Input value={search} onChange={(e) => onSearch(e.target.value)} />
    </InputWrapper>
  );
};

export default Search;
