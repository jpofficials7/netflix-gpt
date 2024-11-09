import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
