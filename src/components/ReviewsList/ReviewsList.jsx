import propTypes from 'prop-types';
import {
  StyledReviewsList,
  StyledReviewsItem,
  StyledReviewsAuthor,
  StyledReviewsContent,
} from './ReviewsList.styled';

export default function ReviewsList({reviews}) {
    return (
      <>
            <StyledReviewsList>{reviews.map(({ id, author, content }) => {
                return (
                  <StyledReviewsItem key={id}>
                    <StyledReviewsAuthor>Author: {author}</StyledReviewsAuthor>
                    <StyledReviewsContent>{content}</StyledReviewsContent>
                  </StyledReviewsItem>
                );
        })}</StyledReviewsList>
      </>
    );
}

ReviewsList.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      author: propTypes.string,
      content: propTypes.string,
    })
  ),
};
