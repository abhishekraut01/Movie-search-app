import PropTypes from 'prop-types';
import './SearchBar.css';


function SearchBar({ search , onChange}) {

  const handleSearch = (e) =>{
    onChange(e.target.value);
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}
// Adding PropTypes for validation
SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,  
};

export default SearchBar;
