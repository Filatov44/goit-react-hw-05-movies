import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { SearchMoviesDetails } from 'services/api';
import { BiArrowBack } from 'react-icons/bi';
import ButtonGoBack from 'components/Button/Button';
import { BASE_POSTER_IMG_URL } from 'services/api';

import {
    StyledDetailsContainer,
    StyledDetailsContainerInfo,
  StyledOutletContainer,
  StyledDetailsImg,
  StyledDetailsTitle,
  StyledUserScore,
  StyledDetailsSubTitle,
  StyledDetailsGenres,
    StyledDetailsText,
  StyledDetailsTextAdd,
  StyledAddInfoList,
  StyledLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  //получаем id одного фильма через хук useParams() и сразу деструкторизируем параметр что нам нужен
  const { movieId } = useParams();

  //чтоб не было ошибки если переходим на страницу фильма по внешней ссылке
  //задаем главную страницу если в location.state нет свойства from
  const locationState = location.state?.from || '/';

  useEffect(() => {
    const movieById = async () => {
      try {
        const data = await SearchMoviesDetails(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    movieById();
  }, [movieId]);

  const goBack = () => navigate(locationState);

  // для шага назад можно использовать const goBack = () => navigate(-1)

  const allGenres = genres => {
    if (genres) {
      return genres.map(genre => genre.name).join(', ');
    }
  };

  const { original_title, overview, genres, vote_average, poster_path } = movie;

  //переведем в % отзывы
  const userScore = vote_average => {
    return vote_average * 10 + '%';
  };

  const emptyImg =
    'https://www.wikihow.com/images/thumb/f/f7/Be-a-Film-Director-Step-16-Version-2.jpg/aid960853-v4-1200px-Be-a-Film-Director-Step-16-Version-2.jpg';

  return (
    <div>
      <ButtonGoBack
        onClick={goBack}
        label={'Go Back'}
        arrow={<BiArrowBack fill="#FF7F50" size="24" />}
      />
      <StyledDetailsContainer>
        <StyledDetailsImg>
          <img
            src={
              poster_path ? `${BASE_POSTER_IMG_URL}${poster_path}` : emptyImg
            }
            alt={original_title}
            width="300"
          />
              </StyledDetailsImg>
              <StyledDetailsContainerInfo>
        <StyledDetailsTitle>{original_title} </StyledDetailsTitle>
        <StyledUserScore>
          User Score: {`${userScore(vote_average)}`}{' '}
        </StyledUserScore>
        <StyledDetailsSubTitle>Overview</StyledDetailsSubTitle>

        <StyledDetailsText>{overview}</StyledDetailsText>
        <StyledDetailsGenres>Genres:</StyledDetailsGenres>
                  <StyledDetailsText>{`${allGenres(genres)}`}</StyledDetailsText>
                  </StyledDetailsContainerInfo>
      </StyledDetailsContainer>
      <StyledOutletContainer>
        <StyledDetailsTextAdd>Additional information</StyledDetailsTextAdd>
        <StyledAddInfoList>
          <StyledLink state={locationState} to={'cast'}>
            Cast
          </StyledLink>
          <StyledLink state={locationState} to={'reviews'}>
            Rewiews
          </StyledLink>
        </StyledAddInfoList>
      </StyledOutletContainer>
      <Outlet />
    </div>
  );
}
