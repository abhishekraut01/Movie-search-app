import './MovieCard.css';

function MovieCard() {
  return (
    <div className="movie-card">
      <img src='https://image.tmdb.org/t/p/original//oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg' alt={"movie"} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">The Almighty God</h2>
        <p className="movie-rating">Rating: ⭐ {8.7} / 10</p>
        <p className="movie-release-date">Released: 21/2/2003</p>
      </div>
    </div>
  );
}

export default MovieCard;
