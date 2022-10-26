import { Route, Routes } from 'react-router-dom';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Container>
    </>
  );
};
