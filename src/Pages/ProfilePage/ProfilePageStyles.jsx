import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";

export const Button = styled.button`
  //display: inline-block;
  padding: 12px 20px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  transition: background-color 0.3s ease-out;
  outline: none;
  border: none;
  float:right;
`

export const Section = styled.section`

`

export const FlexContainer = styled.div`

display:flex;
flex-direction: column;
justify-content: unset;
gap:50px;



@media screen and (${breakpoints.tablet}) {
  flex-direction: row;
}

`

export const FormWrapper = styled.div`
  display:flex;
  flex-direction:column;


`

