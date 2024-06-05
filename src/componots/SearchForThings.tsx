import {  useQuery } from "@tanstack/react-query";
import { getSearch } from "../api/api";
import { UseData } from "../context/ContextP";
import MovieResult from "./MovieResult";
import Loader from "./Loader";
import { MovieItemMain } from "../types/type";

function SearchForThings() {
const { s = "" } = UseData() ?? {};

    // const {s} = UseData() 
    const {data,isLoading} = useQuery({queryFn:()=> getSearch(s),queryKey:["search",s]})
      if (isLoading)
        return (
          <div className=" col-span-5 flex items-center justify-center">
            <Loader />
          </div>
        );
    return (
      <div className="    grid grid-cols-1 col-span-5 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {data?.Search?.map((movie: MovieItemMain) => (
          <MovieResult key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
}

export default SearchForThings
