import { useNavigate } from "react-router";
import { MovieItemProbs } from "../types/type";

function MovieResult({ movie }: MovieItemProbs) {
  const navigate = useNavigate();

  return (
    <div className="  py-10 text-white text-center flex px-10 md:px-0 gap-3  w-full flex-col ">
      <img
        onClick={() => navigate(`/movieDetails/${movie.imdbID}`)}
        className="cursor-pointer"
        src={movie.Poster}
        alt={`${movie.Title}img`}
      />
      <h2 className=" text-lg font-semibold">{movie.Title}</h2>
    </div>
  );
}

export default MovieResult
