import React from 'react';
import styled from 'styled-components';
const MainEl = styled.div`
margin:40px 0;
`

const Main = ({children}) => {
  return (
    <MainEl>
      {children}
    </MainEl>
  );
}

export default Main;
