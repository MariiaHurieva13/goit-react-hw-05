import API from "../../API/fetchImgs";
import MovieList from "../../components/MovieList/MovieList";
import useFetchData from "../../hooks/useFetchData";
const HomePage = () => {
  const {
    data: popularMovies = [],
    isLoading,
    error,
  } = useFetchData(API.fetchTrendingMovies);

  return (
    <section>
      <h1>HomePage</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Try to reload page.</p>}
      {popularMovies?.length && <MovieList movies={popularMovies} />}
    </section>
  );
};

export default HomePage;
