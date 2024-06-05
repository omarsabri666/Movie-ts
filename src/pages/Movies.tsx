import { useQuery } from "@tanstack/react-query";
import { getTopMovieDetails } from "../api/api";
import MovieItem from "../componots/MovieItem";
import Loader from "../componots/Loader";
import { MovieItemMain2 } from "../types/type";

function Movies() {
    const {data,isLoading,error} = useQuery({queryFn:getTopMovieDetails,queryKey:["topM"]})
if(isLoading) return <div className=" flex justify-center items-center"><Loader/></div>;
if (error)
  return (
    <div className=" flex justify-center items-center my-10">
      <h2 className=" text-omar text-xl font-bold ">Error : {error.message}</h2>
    </div>
  );
    return (
      <div className=" gap-8 mt-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-6 ">
        {data?.map((movie: MovieItemMain2) => (
          <MovieItem key={movie.imdbid} movie={movie} />
        ))}
      </div>
    );
}

export default Movies
