import API from "../../API/fetchImgs";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

const MovieReviews = () => {
  const { movieId } = useParams();
  const {
    data: movieReviews = [],
    isLoading,
    error,
  } = useFetchData(API.fetchMovieReviews, movieId);

  return (
    <>
      <h2>Reviews</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Try to reload page.</p>}
      {!movieReviews?.length ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
