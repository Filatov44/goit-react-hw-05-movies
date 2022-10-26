import React from 'react';
import { useState, useEffect } from 'react';
import { TrendingMovies } from 'services/api';

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const apiTrendingMovies = async () => {
            try {
                const data = await TrendingMovies();
                console.log(data);
                setTrendingMovies(data)
            } catch (error) {
                console.log(error)
            }
        }
        apiTrendingMovies();
    }, []);

    
    console.log(trendingMovies);
  return (
  
      <div>Home</div>
   
  );
}
