import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledDetailsContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

export const StyledDetailsContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledOutletContainer = styled.div`
    
`

export const StyledDetailsImg = styled.div`
    margin-right: 25px;
`;

export const StyledDetailsTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    color: blue;
`;

export const StyledUserScore = styled.p`
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 0;
`;

export const StyledDetailsSubTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const StyledDetailsGenres = styled.p`
    font-size: 20px;
    font-weight: 500;
`;
export const StyledDetailsText = styled.p`
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;
`;

export const StyledDetailsTextAdd = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  margin-left: 50px;
  padding-bottom: 20px;
  color: blue;

  &.active {
    color: red;
    /* box-shadow: 0 0 10px 1px #fcbf30; */
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;

export const StyledAddInfoList =styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    
`