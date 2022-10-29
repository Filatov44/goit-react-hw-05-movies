import axios from "axios";
// const axios = require('axios').default;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b2e346a99b15e55caecd14435e9b588f';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w342/';
export const BASE_POSTER_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
export const NO_IMG_ACTOR =
  'https://www.wikihow.com/images/thumb/f/fb/Become-an-Actor-Step-23.jpg/aid117991-v4-1200px-Become-an-Actor-Step-23.jpg';

const TRENDING_BASE_URL = `${BASE_URL}/trending/movie/day`;
const SERCH_BASE_URL = `${BASE_URL}/search/movie`;
const DETAILS_BASE_URL = `${BASE_URL}/movie/`;
const CAST_BASE_URL = `${BASE_URL}/movie`;
const REVIEWS_BASE_URL = `${BASE_URL}/movie`;


// трендовые фильмы
export async function TrendingMovies() {
  try {
    const  results  = await axios.get(`${TRENDING_BASE_URL}?api_key=${API_KEY}`);
    console.log( results );
    return results.data.results;
  } catch (error) {
    console.log(error);
  }
}
// 'https://api.themoviedb.org/3/trending/movie/day?api_key=b2e346a99b15e55caecd14435e9b588f'

//по слову
export async function SearchMovies(query) {
  try {
    const data = await axios.get(
      `${SERCH_BASE_URL}?api_key=${API_KEY}&query=${query}&include_adult=false`
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
}

// по id полная инфа фильма
export async function SearchMoviesDetails(id) {
  try {
    const data  = await axios.get(
      `${DETAILS_BASE_URL}${id}?api_key=${API_KEY}&language=en-US`
    );
     console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// https://image.tmdb.org/t/p/w342/532870?api_key=b2e346a99b15e55caecd14435e9b588f&language=en-US

//актерский состав
export async function GetCastMovies(id) {
  try {
    const data = await axios.get(
      `${CAST_BASE_URL}${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//обзоры
export async function GetReviewsMovies(id) {
    try {
      const data = await axios.get(
        `${REVIEWS_BASE_URL}${id}/reviews?api_key=${API_KEY}&language=en-US`
      );
      return data;
    } catch (error) {
      console.log(error);
    }   
}

// export const TrendingMovies = async () => {
//     try {
//         const data = await axios.get(`${TRENDING_BASE_URL}?api_key=${API_KEY}`);
//         return data;

//     } catch (error) {
//         console.log(error);
//     }

// }
