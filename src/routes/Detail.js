/** @format */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id, typeof { id }, typeof id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.background_image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <div>{movie.description_intro}</div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
export default Detail;
