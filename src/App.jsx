import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import './index.css';
import { useEffect, useState } from 'react';
import MOCK_DATA from './components/MOCK_DATA.json';


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMobies = () =>{
    setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())));
  }

  useEffect(() => {
    function getMovies() {
      setMovies(MOCK_DATA); // Replace with API call for real data
    }
    getMovies();
   
  }, []); // Runs only once on component mount

  useEffect(()=>{
    filterMobies()
  },[movies, search]);

  return (
    <div className="MoviesContainer">
      <Navbar />
      <SearchBar search={search} onChange={setSearch} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
