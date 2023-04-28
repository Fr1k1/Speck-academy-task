import styled from 'styled-components';
import { breakpoints } from '../../utils/styles/theme';

export const GridWrapper = styled.div`

display: grid;
  gap: 32px;

  @media ${breakpoints.tabletMedium} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${breakpoints.desktopLarge} {
    grid-template-columns: repeat(4, 1fr);
  }

`;


