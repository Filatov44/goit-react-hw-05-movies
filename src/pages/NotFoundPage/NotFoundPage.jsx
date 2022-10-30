import React from 'react';
// import { Link } from 'react-router-dom';
import {
  StyledNotFoundContainer,
  StyledNotFoundText,
  StyledNotFoundLink,
} from './NotFoundPage.styled';

export default function NotFoundPage() {
    return (
      <StyledNotFoundContainer>
        <StyledNotFoundText>
          Page not found... Try to access the main page using the link below.
            </StyledNotFoundText>
            <StyledNotFoundLink to="/">Click mе :) </StyledNotFoundLink>
      </StyledNotFoundContainer>
    );
}
