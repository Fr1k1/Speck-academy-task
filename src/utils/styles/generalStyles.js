import styled, { css } from "styled-components";
import { colors, breakpoints, fonts } from "./theme";
import { Form as FormFormik, Field as FieldFormik, ErrorMessage as ErrorMessageFormik } from "formik";


export const Button = styled.button`
  display: inline-block;
  padding: 12px 20px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  transition: background-color 0.3s ease-out;
  border: none;
  outline: none;
  margin-left: 20px;

  ${(props) =>
    props.isSecondary && `
    padding: 16px 20px;
  `}

  ${(props) =>
    props.isOutline && `
    background-color: ${colors.secondary};
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    
  `}

  &:hover {
    background-color: ${colors.primaryDark}; 

    ${(props) =>
    props.isOutline &&
    `
      background-color: ${colors.primary};
      color: ${colors.secondary};
    `}
  }

  ${(props) =>
    props.mobitel &&
    `
      margin:15px;
    `}



  
`

export const Grid = styled.div`

display: grid;
  gap: 32px;

  @media screen and (${breakpoints.tabletMedium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Form = styled(FormFormik)`
  @media screen and (${breakpoints.tabletSmall}) {
    max-width:400px;
    margin: 0 auto;
  }

`

export const FormRow = styled.div`


    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
`

const FieldStyle = css`


border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border: 1px solid ${colors.textPrimary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }

`

export const Field = styled(FieldFormik)`

${FieldStyle};

`

export const Select = styled.select`
${FieldStyle};


`

export const ErrorMessage = styled(ErrorMessageFormik)`
font-size: 14px;
color:${colors.primary};
padding-top: 8px;

`

export const Option = styled.option`

`

