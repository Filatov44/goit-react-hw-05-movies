import PropTypes from 'prop-types';
import { StyledGoBackButton, StyledBtnLabel } from './Button.styled';

import React from 'react'

export default function ButtonGoBack({onClick, label, arrow}) {
  return (
      <StyledGoBackButton type="button" onClick={onClick}>
          {arrow}
          <StyledBtnLabel>{label}</StyledBtnLabel>
    </StyledGoBackButton>
  )
}

ButtonGoBack.propTypes = {
    onClick: PropTypes.func.isRequired,
}
