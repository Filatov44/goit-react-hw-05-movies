import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  StyledForm,
  StyledSearchInput,
  StyledSearchBtn,
  StyledSerchText,
} from './SearchForm.style';

export default function SearchForm({onSubmit}) {

    const [query, setQuery] = useState('');

    
  const reset = () => {
    setQuery('');
  };

    const handleChange = e => {
      setQuery(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {
        alert('Please enter a valid request');
        return;
      }
      onSubmit(query);
      reset();
    };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSearchInput
          onChange={handleChange}
          value={query}
          name="query"
          type="text"
          autocomplete="off"
          placeholder="Search movies..."
        ></StyledSearchInput>
        <StyledSearchBtn onClick={handleSubmit} type="submit">
          <BsSearch fill="#0000ff" size={20} />{' '}
          <StyledSerchText>Search</StyledSerchText>
        </StyledSearchBtn>
      </StyledForm>
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
