import React from 'react';
import { useState, useEffect } from 'react';
import { TrendingMovies } from 'services/api';
import HomeGallery from 'components/HomeGallery/HomeGallery';

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const apiTrendingMovies = async () => {
            try {
                const data = await TrendingMovies();
                // console.log(data);
                setTrendingMovies(data)
            } catch (error) {
                console.log(error)
            }
        }
        apiTrendingMovies();
    }, []);

    
    
  return (
    <>
      <HomeGallery onMovies={trendingMovies} title={'Trending today'} />
    </>
  );
}
