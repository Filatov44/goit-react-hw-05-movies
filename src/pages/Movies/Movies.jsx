import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import HomeGallery from 'components/HomeGallery/HomeGallery';
import { SearchMovies } from 'services/api';


export default function Movies() {
  const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useSearchParams();
    
    

  // записываем в переменную значение 'query' из строки поиска
    const query = searchQuery.get('query');
    
    useEffect(() => {
        if (query) {
            const moviesBySerch = async () => {
                try {
                    const data = await SearchMovies(query);
                    setMovies(data)
                } catch (error) {
                    console.log(error);
                }
            }
            moviesBySerch();
        }
        return;
    }, [query]);

    const changeQuery = q => {
        setSearchQuery({ query: q });
    };

    const isPosts = Boolean(movies.length);

    return (
      <>
        <SearchForm onSubmit={changeQuery} />
        {isPosts && <HomeGallery onMovies={movies}  />}
      </>
    );
  
}
