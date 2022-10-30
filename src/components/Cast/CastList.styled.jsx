import styled from 'styled-components';
export const StyledCastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
 `;

export const StyledCastListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
 `;

export const StyledCastListName = styled.p`
  font-size: 20px;
  text-align: center;
  color: blue;
`;

 export const StyledCastListCharacter = styled.p`
    font-size: 16px;
    text-align: center;
 `