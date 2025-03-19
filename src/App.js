import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './icons8-search.svg';
import Moviecard from './component/Moviecard';

const APIURL = 'http://www.omdbapi.com/?apikey=fb876f8e';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('superman');

  const searchMovies = async (title) => {
    const response = await fetch(`${APIURL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
          placeholder='Search for movie'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img
          src={searchIcon}
          className='searchi'
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
