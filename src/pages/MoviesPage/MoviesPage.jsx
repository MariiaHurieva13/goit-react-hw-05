import API from "../../API/fetchImgs";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(null);

  const {
    data: movies = null,
    isLoading,
    error,
  } = useFetchData(API.fetchMovieByQuery, query);

  useEffect(() => {
    setQuery(searchParams.get("query"));
  }, [searchParams]);

  const updateSearchParams = (key, value) => {
    // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams);
    // 2. Оновлюємо певний ключ
    updatedParams.set(key, value);
    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value === "") return console.log("Enter value");
    updateSearchParams("query", value);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Try to reload page.</p>}

      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
