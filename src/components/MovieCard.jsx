import PropTypes from 'prop-types';
import './MovieCard.css';

function MovieCard({ movie }) {
  const {
    poster_path,
    original_title,
    vote_average,
    release_date,
  } = movie;

  const posterUrl = poster_path
    ? poster_path
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={original_title} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{original_title}</h2>
        <p className="movie-rating">Rating: ⭐ {vote_average} / 10</p>
        <p className="movie-release-date">Released: {release_date}</p>
      </div>
    </div>
  );
}

// Adding PropTypes for validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
