import { AiFillStar } from "react-icons/ai";
import { formatTime } from "../helper/helper";
import { BsPlay } from "react-icons/bs";
import { UseData } from "../context/ContextP";
import { MdDelete } from "react-icons/md";

type listMovieItemProbs = {
  movie: {
    id: string; // Assuming id is of type number
    title: string;
    poster: string;
    runtime: number;
    year: number;
    rating: string;
    votes: string;
    trailer: string;
    lang: string;
    description: string;
    country: string;
  };
};
function ListMovieItem({ movie }: listMovieItemProbs) {
  const context = UseData();
   if (!context) {
     // Handle the case when context is null
     return null;
   }
  const { dispatch } = context;
  function handleDel() {
    dispatch({ type: "deleteMovie", payload: {id:movie.id }});
  }
  return (
    <div className="  text-white flex py-10   sm:px-0    justify-center  mx-auto sm:mx-0 sm:flex-row flex-col    gap-16  ">
      <div className=" rounded-lg shadow-lg  w-96  px-5 sm:px-0   h-auto">
        <img src={movie.poster} alt={`${movie.title}img`} />
      </div>
      <div className=" sm:movies-start gap-3  movies-center justify-center   sm:justify-start flex flex-col ">
        <h1 className=" capitalize text-2xl font-semibold">{movie?.title}</h1>
        <h3>
          Name: <span className="  text-omar"> {movie?.title}</span>
        </h3>
        <h3>
          Time:{" "}
          <span className="  text-omar"> {formatTime(movie?.runtime)}</span>
        </h3>
        <h3>
          Date: <span className="  text-omar"> {movie?.year}</span>
        </h3>
        <h3>
          Language:{" "}
          <span className=" capitalize  text-omar"> {movie?.lang}</span>
        </h3>
        <h3>
          country :{" "}
          <span className=" capitalize  text-omar"> {movie?.country}</span>
        </h3>
        <h3 className=" flex item-center gap-1">
          <AiFillStar color="yellow" /> :{" "}
          <span className=" capitalize  font-semibold  text-omar">
            {" "}
            {movie?.rating} |
          </span>
          <span className=" capitalize  font-semibold  text-omar">
            {" "}
            {movie?.votes}
          </span>
        </h3>
        <div className=" flex space-x-5">
          <a
            className=" inline-flex gap-1 items-center px-4 py-2 md:py-2 md:px-6 w-fit my-2 rounded-full text-white bg-omar"
            href={movie?.trailer}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className=" text-2xl">
              <BsPlay />
            </span>{" "}
            Watch
          </a>
          <button
            onClick={handleDel}
            className=" md:px-4 px-4 inline-flex items-center  gap-1     bg-transparent  font-semibold md:text-lg outline  transition-all outline-red-600 hover:bg-omar   hover:text-white text-omar  rounded-full "
          >
            <span className=" text-2xl">

            <MdDelete/>
            </span>
            from watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListMovieItem
