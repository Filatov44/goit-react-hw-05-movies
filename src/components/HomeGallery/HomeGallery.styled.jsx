import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
 
  /* gap: 20px; */
`;

export const StyledGalleryItem = styled.li`
  text-align: center;
  margin-bottom: 25px;
  list-style: none;
  overflow: hidden;
  border: 1px solid #df7710;
  border-radius: 15px;
  box-shadow: 0px 5px 5px black;
  &:hover {
    color: red;
    scale: 1.05;
  }
`;

export const StyledGalleryTitle = styled.h3`
    font-size: 24px;
    font-weight: 500;
    color: black;
    text-align: center;
`;

export const StyledGalleryLink = styled(Link)`
    text-decoration:none;
    
`;

export const StyledGalleryMovieTitle = styled.p`
    font-size: 20px;
    max-width: 342px;
    color: black;
    padding-top:15px;
    padding-bottom: 15px;
`
