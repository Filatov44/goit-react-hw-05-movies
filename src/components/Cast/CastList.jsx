import propTypes from 'prop-types';
import { BASE_IMG_URL_CAST, NO_IMG_ACTOR } from 'services/api';
import {
  StyledCastList,
  StyledCastListItem,
  StyledCastListName,
  StyledCastListCharacter,
} from './CastList.styled';

export default function CastList({cast}) {
  return (
      <div>
          <StyledCastList>
              {cast.map(({ id, character, name, profile_path }) => {
                  return (
                    <StyledCastListItem key={id}>
                      <img
                        src={profile_path ? `${BASE_IMG_URL_CAST}${profile_path}` : `${NO_IMG_ACTOR}`}
                        alt={name}
                        width="185px"
                        height="250px"
                      />
                      <StyledCastListName>{name}</StyledCastListName>
                      <StyledCastListCharacter>Character: {character ? character : "No information"}</StyledCastListCharacter>
                    </StyledCastListItem>
                  );
              })}
          </StyledCastList>
   </div>
  )
};

CastList.propTypes = {
  cast: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
        profile_path: propTypes.string,
      character: propTypes.string,
    })
  ),
};
