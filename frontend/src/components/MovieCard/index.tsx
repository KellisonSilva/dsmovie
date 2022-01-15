import MovieScore from "components/MovieScore";
import { Movie } from "movie";
import { Link } from "react-router-dom";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score} />
                
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default MovieCard;