import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: () => ({
      display: "flex",
      border:'1px solid black'
    }),

    option: () => ({
      cursor:'pointer'
    }),
  },
})`
  max-width: 200px;
  width: 100%;
`;
