import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

export const Hero = styled.section`

    position: relative;
    height: 570px;

`;

export const HeroFigure = styled.figure`

    width: 100%;
    height: 100%;
`;

export const HeroImg = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;

`;

export const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

`;

export const HeroContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

`

export const HeroContentInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;

`

export const HeroTextCard = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);


`

export const HeroTitle = styled.div`
    color: ${colors.secondary};
    font-weight: 700;
    font-size: 38px;
    line-height: 130%;
    letter-spacing: 1px;
    max-width: 450px;
    margin-bottom: 24px;

`


export const HeroSubtitle = styled.div`
    color: ${colors.secondary};
  
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.4px;
    max-width: 550px;
    margin-bottom: 32px;

`



