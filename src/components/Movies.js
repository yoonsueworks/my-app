/** @format */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movies({ coverImg, title, year, synopsis, genres, id }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/Movie/${id}`}>{title}</Link>({year}
        )
      </h2>
      <p>{synopsis}</p>
      <ul>
        {genres.map((genre, id) => (
          <li key={id}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  synopsis: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
