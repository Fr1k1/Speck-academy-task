import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

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