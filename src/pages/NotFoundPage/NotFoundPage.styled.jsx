import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNotFoundContainer = styled.div`
  width: 75vw;
  height: 90vh;
  margin: auto;
  text-align: center;
  background: url(https://png.pngtree.com/png-vector/20210827/ourlarge/pngtree-error-404-page-not-found-png-image_3832696.jpg)
    no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
export const StyledNotFoundText = styled.p`
    font-size: 20px;
    text-align: center;
`;

export const StyledNotFoundLink = styled(Link)`
  display: inline-block;
  font-size: 28px;
  text-align: center;
  color: red;
  text-decoration: none;
  padding: 10px;
  border: 1px dotted #ff7f50;
`;