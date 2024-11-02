import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import './index.css'
function App() {

  return (
    <div className='MoviesContainer'>
      <Navbar/>
      <SearchBar />
      <MovieList />  {/* Display the list of movies */}
    </div>
  )
}

export default App
