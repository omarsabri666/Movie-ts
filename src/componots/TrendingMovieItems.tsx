import { useQuery } from "@tanstack/react-query";
import { getMovieImg } from "../api/api";
import { useNavigate } from "react-router";
import Loader from "./Loader";
import {  trendMovies } from "../types/type";
import img from "../../public/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";


function TrendingMovieItems({ movie }: trendMovies) {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryFn: () => getMovieImg(movie.imdb_id),
    queryKey: ["movieImg", movie.imdb_id],
  });
  function hanldeNavigate() {
    navigate(`/movieDetails/${movie.imdb_id}`);
  }
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
    <>
      <div className=" flex flex-col text-white  shadow-xl gap-2    justify-center items-center   my-10">
        {data?.Poster && data?.Poster !== "N/A" ? (
          <div className=" w-40">
            <img
              onClick={hanldeNavigate}
              className=" cursor-pointer h-60    aspect-auto    rounded-lg shadow-lg  "
              src={data?.Poster}
              alt={`${movie.title} img`}
            />
          </div>
        ) : (
          <div className=" w-40">
            <img
              onClick={hanldeNavigate}
              className=" cursor-pointer h-60    aspect-auto    rounded-lg shadow-lg  "
              src={img}
              alt={`${movie.title} img`}
            />
          </div>
        )}
        {/* {(!data?.Poster ||
          data?.Poster === "N/A" ||
          data?.Poster === undefined) && (
          <div className=" w-40">
            <img
              onClick={hanldeNavigate}
              className=" cursor-pointer h-60    aspect-auto    rounded-lg shadow-lg  "
              src={img}
              alt={`${movie.title} img`}
            />
          </div>
        )} */}

        <h2 className=" text-xl   font-semibold">{movie.title} </h2>
      </div>
    </>
  );
}

export default TrendingMovieItems
