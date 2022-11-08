import React from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
import { Container } from "./Container";

const HeaderEl = styled.header`
  background-color: var(--bg-color);
  box-shadow: var(--shadow);
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding:2rem 2rem;
`;

const Title = styled.h2`
  font-size: 30px;
  color: var(--color-text);
`;

const ThemeSwitcher=styled.div`{
  display:flex;
  align-items:center;
  gap:4px;
  cursor:pointer;
}`

const Header = ({ theme, setTheme }) => {
  const toogleTheme =()=>setTheme(theme==='light'?'dark':'light')
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where we are going?</Title>
          {theme === "light" ? (
            <ThemeSwitcher onClick={toogleTheme}>
              <IoMoonOutline style={{fontSize:'22px'}}/>
              <span>Light Mode</span>
            </ThemeSwitcher>
          ) : (
            <ThemeSwitcher onClick={toogleTheme}>
              <IoMoon style={{fontSize:'22px'}}/>
              <span>Dark Mode</span>
            </ThemeSwitcher>
          )}
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
