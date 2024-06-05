import { getUpComingMovies } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import UpComingMoviesItem from "./UpComingMoviesItem";
import UseSlider from "../customHooks/UseSlider";
import Loader from "./Loader";
import { upComingMovieMain } from "../types/type";

function UpComingMovies() {
    const { data: upComing,isLoading,error } = useQuery({
      queryFn: getUpComingMovies,
      queryKey: ["upcoming"],
    });
   
      if (isLoading)
        return (
          <div className=" flex items-center justify-center">
            <Loader />
          </div>
        );
        if (error)
          return (
            <div className=" flex justify-center items-center my-10">
              <h2 className=" text-omar text-xl font-bold ">
                Error : {error.message}
              </h2>
            </div>
          );

    return (
      <div className="pb-10 flex flex-col ">
        <div className=" text-center md:text-left   mt-20">
          <h2 className="text-xl py-5 font-semibold uppercase text-white">
            <span className="  text-omar">Up Coming</span> Movies
          </h2>
        </div>

        <UseSlider slides={5}>
          {upComing?.movie_results?.map(
            (movie: upComingMovieMain, index: number) => (
              <div className=" flex gap-5 items-center" key={index}>
                <UpComingMoviesItem movie={movie} />
              </div>
            )
          )}
        </UseSlider>
      </div>
    );
}

export default UpComingMovies
