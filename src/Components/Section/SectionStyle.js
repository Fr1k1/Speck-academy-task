import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";


export const Section = styled.section`
  background-color: ${colors.bgPrimary};

`

export const SectionInner = styled.div`
   padding: 64px 24px;

@media screen and (${breakpoints.tablet}) {
  padding: 72px 32px;
}

@media screen and (${breakpoints.desktop}) {
  padding: 90px 0;
  max-width: 930px;
  margin: 0 auto;
}

@media screen and (${breakpoints.desktopLarge}) {
  max-width: 1280px;
}

`

export const SectionTitle = styled.h2`
  max-width: 550px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 32px;
    font-size: 28px;

    @media screen and (${breakpoints.tablet}) {
      font-size: 32px;
    }

    @media screen and (${breakpoints.desktop}) {
      font-size: 36px;
    }

`

export const SectionSubtitle = styled.p`
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    color: ${colors.textSecondary};
    font-size: 16px;
    margin-bottom: 48px;

`