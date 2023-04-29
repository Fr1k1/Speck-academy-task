import styled from "styled-components";
import { breakpoints } from "../../utils/styles/theme";


export const SinglePage = styled.article`
@media screen and (${breakpoints.tablet}) {
    padding-top: 48px;
    display: flex;
    justify-content: space-between;
  }

`

export const SinglePageFigure = styled.figure`
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 32px;

    @media screen and (${breakpoints.tabletMedium}) {
      height: 300px;
    }

    @media screen and (${breakpoints.tablet}) {
      flex-shrink: 0;
      width: 350px;
      height: 350px;
      margin-right: 48px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
      width: 500px;
      height: 450px;
      margin-right: 120px;
    }

`

export const SinglePageImg=styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;

`

export const SinglePageContent=styled.p`
    font-size: 16px;
    line-height: 150%;

`

