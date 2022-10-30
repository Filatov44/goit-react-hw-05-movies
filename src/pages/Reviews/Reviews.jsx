import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviewsMovies } from 'services/api';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { StyledReviewsError } from 'components/ReviewsList/ReviewsList.styled';


export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        const reviewsMoviesInfo = async () => {
            try {
                const data = await GetReviewsMovies(movieId);
                console.log(data);
                setReviews(data);
            } catch (error) {
                console.log(error);
            }
        };
        reviewsMoviesInfo();
    }, [movieId]);

    return reviews.length > 0 ? (
      <ReviewsList reviews={reviews} />
    ) : (
      <StyledReviewsError>Sorry, there are no reviews for this movie... :( </StyledReviewsError>
    );
    
  
}
