import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledGalleryList,
  StyledGalleryItem,
  StyledGalleryTitle,
  StyledGalleryLink,
  StyledGalleryMovieTitle,
} from './HomeGallery.styled';

import { BASE_IMG_URL } from 'services/api';

export default function HomeGallery({ onMovies, title }) {
    const location = useLocation();

  const emptyImg =
    'https://www.wikihow.com/images/thumb/f/f7/Be-a-Film-Director-Step-16-Version-2.jpg/aid960853-v4-1200px-Be-a-Film-Director-Step-16-Version-2.jpg';

  return (
    <>
      <StyledGalleryTitle>{title}</StyledGalleryTitle>
      <StyledGalleryList>
        {onMovies.map(({ id, original_title, poster_path }) => {
          return (
            <StyledGalleryItem key={id}>
              <StyledGalleryLink
                state={{ from: location }}
                to={`/movies/${id}`}
              >
                <img
                  src={poster_path ? `${BASE_IMG_URL}${poster_path}` : emptyImg}
                  alt={original_title}
                />
                <StyledGalleryMovieTitle>
                  {original_title}
                </StyledGalleryMovieTitle>
              </StyledGalleryLink>
            </StyledGalleryItem>
          );
        })}
      </StyledGalleryList>
    </>
  );
}

HomeGallery.propTypes = {
    movies: PropTypes.array
};
