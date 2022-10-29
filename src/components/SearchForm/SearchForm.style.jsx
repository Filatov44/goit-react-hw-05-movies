import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const StyledSearchBtn = styled.button`
  display: flex;
  border: none;
  border-radius: 15px;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in-out;

  :focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
export const StyledSearchInput = styled.input`
  padding: 10px;
  max-width: 400px;
  box-sizing: border-box;
  border-radius: 15px;
  border: solid 2px red;
  outline: none;
  transition: box-shadow 0.4s ease-in-out;
  :focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
