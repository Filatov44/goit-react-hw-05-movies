import { Route, Routes } from 'react-router-dom';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails/>} />
        </Routes>
      </Container>
    </>
  );
};
