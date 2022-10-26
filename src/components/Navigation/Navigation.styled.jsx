import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeaderNav = styled.nav`
  display: flex;
  gap: 25px;
  padding-left: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  
`;
export const StyledHeaderNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  color: blue;
  text-decoration: none;

  &.active {
    color: red;
    box-shadow: 0 0 10px 1px #fcbf30;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;