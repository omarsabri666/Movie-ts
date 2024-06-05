import { useNavigate } from "react-router";
import { MovieItemProbs2 } from "../types/type";

function MovieItem({ movie }: MovieItemProbs2) {
  const navigate = useNavigate();
  function hanldeNavigate() {
  return  navigate(`/movieDetails/${movie.imdbid}`);
  }
  return (
    <div className=" text-white flex justify-center items-center gap-1 px-10 md:px-0 flex-col ">
      <div className=" ">
        <img
          className="  rounded-lg cursor-pointer"
          onClick={hanldeNavigate}
          src={movie.image}
          alt={`${movie.title}img`}
        />
      </div>
      <div className=" text-white text-center">
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
}

export default MovieItem
