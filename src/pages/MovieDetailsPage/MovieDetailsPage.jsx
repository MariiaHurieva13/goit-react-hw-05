import API from "../../API/fetchImgs";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import paleceholder from "../../assets/placeholder.svg";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useRef } from "react";

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const prewLocation = useRef(location.state || "/movies");

  const {
    data: movieInfo = null,
    isLoading,
    error,
  } = useFetchData(API.fetchMovieById, movieId);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Try to reload page.</p>}
      {movieInfo && (
        <section>
          <div>
            <Link to={prewLocation.current}>Go back</Link>

            <img
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
                  : `${paleceholder}`
              }
              alt={movieInfo.title}
            />

            <h2>{`${movieInfo.title} (${movieInfo.release_date.slice(
              0,
              4
            )})`}</h2>
            <p>User score: {Math.round(movieInfo.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <p>{movieInfo.genres.map((genre) => genre.name).join(", ")}</p>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">cast</Link>
              </li>
              <li>
                <Link to="reviews">reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetailsPage;
