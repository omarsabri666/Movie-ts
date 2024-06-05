import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/api";
import PopularMoviesItem from "./PopularMoviesItem";
import UseSlider from "../customHooks/UseSlider";
import Loader from "./Loader";
import { PopularMoviesItemMain } from "../types/type";

function PopularMovies() {

  const {data,isLoading,error} = useQuery({queryFn:()=> getPopularMovies("2023"),queryKey:["popular"]})
      if (isLoading)
        return (
          <div className=" flex items-center justify-center">
            <Loader />
          </div>
        );
if (error)
  return (
    <div className=" flex justify-center items-center my-10">
      <h2 className=" text-omar text-xl font-bold ">Error : {error.message}</h2>
    </div>
  );
  return (
    <div className="pb-10 flex flex-col ">
      <div className=" flex items-center text-center md:text-left   mt-5">
        <h2 className="text-xl  mx-auto md:mx-0 py-5  font-semibold uppercase text-white">
          <span className="  text-omar">Popular</span> Movies in{" "}
          <span className=" text-omar">2023</span>
        </h2>
      </div>

      <UseSlider slides={5}>
        {data?.movie_results?.map(
          (movie: PopularMoviesItemMain, index: number) => (
            <div className=" flex gap-5 items-center" key={index}>
              <PopularMoviesItem movie={movie} />
            </div>
          )
        )}
      </UseSlider>
    </div>
  );
}

export default PopularMovies
