import propTypes from 'prop-types';
import { BASE_IMG_URL_CAST, NO_IMG_ACTOR } from 'services/api';

export default function CastList({cast}) {
  return (
      <div>
          <ul>
              {cast.map(({ id, character, name, profile_path }) => {
                  return (
                    <li key={id}>
                      <img
                        src={profile_path ? `${BASE_IMG_URL_CAST}${profile_path}` : `${NO_IMG_ACTOR}`}
                        alt={name}
                        width="185px"
                      />
                      <p>{name}</p>
                      <p>Character: {character ? character : "No information"}</p>
                    </li>
                  );
              })}
          </ul>
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
