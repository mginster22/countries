import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const HeaderEl = styled.header`
  height: 90px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2``;

const ThemeSwitcher = styled.div`
  cursor: pointer;
`;

const Header = ({ theme, setTheme }) => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where We Go?</Title>
          {theme === "light" ? (
            <ThemeSwitcher onClick={() => setTheme("dark")}>
              <IoMoonOutline />
              <span>Light Mode</span>
            </ThemeSwitcher>
          ) : (
            <ThemeSwitcher onClick={() => setTheme("light")}>
              <IoMoon />
              <span>Dark Mode</span>
            </ThemeSwitcher>
          )}
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
