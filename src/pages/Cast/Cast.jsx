import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetCastMovies } from "services/api";
import CastList from "components/Cast/CastList";


export default function Cast() {
    const [cast, setCast] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
      const castMoviesInfo = async () => {
        try {
            const data = await GetCastMovies(movieId);
            console.log(data);
          setCast(data);
        } catch (error) {
          console.log(error);
        }
      };
      castMoviesInfo();
    }, [movieId]);

    return cast && <CastList cast={cast} />;
}