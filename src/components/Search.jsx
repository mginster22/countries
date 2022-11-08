import React from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  max-width: 300px;
  padding: 6px 6px;
  width: 100%;
  border-radius: var(--radii);
  background-color: var(--bg-color);
`;
const Input = styled.input.attrs({
  type: "search",
  placeholder: "enter your county",
})`
  outline: none;
  border: none;
  padding: 6px;
  width: 100%;
  color: var(--color-text);
  background-color: var(--bg-ui-base);
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch style={{ fontSize: "18px" }} />
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
    </InputContainer>
  );
};

export default Search;
