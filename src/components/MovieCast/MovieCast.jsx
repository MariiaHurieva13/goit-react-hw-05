import API from "../../API/fetchImgs";
import { useParams } from "react-router-dom";
import paleceholder from "../../assets/placeholder.svg";
import useFetchData from "../../hooks/useFetchData";

const MovieCast = () => {
  const { movieId } = useParams();

  const {
    data: movieCast = [],
    isLoading,
    error,
  } = useFetchData(API.fetchMovieCast, movieId);

  return (
    <>
      <h2>Cast</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Try to reload page.</p>}
      {!movieCast?.length ? (
        <p>We don't have any cast for this movie.</p>
      ) : (
        <ul>
          {movieCast.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                    : `${paleceholder}`
                }
                alt={actor.name}
                width="100"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
