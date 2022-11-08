import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      border: "none",
      outline: "none",
      boxShadow: "var(--shadow)",
      backgroundColor:'var(--bg-color)',
      borderRadius:'var(--radii)'
    }),
    option: (provided, state) => ({
      ...provided,
      color:'var(--color-text)',
      backgroundColor:state.isSelected?'var(--bg-color)':'var(--bg-ui-inp)'
    }),
  },
})`
  max-width: 300px;
  width: 100%;
  
  & * {
    color:var(--color-text) !important;
  }
 
  @media (max-height:768px){
    max-width:220px;
  }
`;
