import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../api/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingMovieItems from "./TrendingMovieItems";
import UseSlider from "../customHooks/UseSlider";
import Loader from "./Loader";
import { trendMoviesMain } from "../types/type";

function TrendingMovies() {
  const { data ,isLoading ,error} = useQuery({
    queryFn: getTrendingMovies,
    queryKey: ["trending"],
  });


        if (isLoading)
          return (
            <div className=" flex items-center justify-center">
              <Loader />
            </div>
          );
if(error) return <div className=" flex justify-center items-center my-10">
  <h2 className=" text-omar text-xl font-bold ">Error : {error.message}</h2>
</div>

  return (
    <div className="pt-10 flex flex-col ">
      <div className=" text-center md:text-left   mt-5">
        <h2 className="text-xl font-semibold uppercase text-white">
          <span className="  text-omar">trending</span> Movies
        </h2>
      </div>

      <UseSlider slides={5}>
        {data?.movie_results?.map((movie: trendMoviesMain, index: number) => (
          <div className=" flex gap-5 items-center" key={index}>
            <TrendingMovieItems movie={movie} />
          </div>
        ))}
      </UseSlider>
    </div>
  );
}

export default TrendingMovies;
