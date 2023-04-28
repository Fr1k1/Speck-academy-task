import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

export const CourseWrapper = styled.div`
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }`;

export const CourseFigure = styled.figure`

overflow: hidden;
    border-radius: 6px;
    width: 100%;
    height: 180px;
    margin-bottom: 24px;
  `

export const CourseImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

export const CourseTitle = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  `

export const CourseSubtitle = styled.p`

color: ${colors.textSecondary};
font-size: 16px;
line-height: 150%;
margin-bottom: 16px;
  
  `

export const CourseTime = styled.p`
        font-size: 14px;
        font-weight: 700;
        color: ${colors.primary};
  `


