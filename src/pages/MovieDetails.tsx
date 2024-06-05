import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../api/api";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";


import { useParams } from "react-router";
import { formatTime } from "../helper/helper";
import {BsPlay} from "react-icons/bs"
import { AiFillStar } from "react-icons/ai";
import { UseData, movie } from "../context/ContextP";
import Loader from "../componots/Loader";
import { useEffect } from "react";

function MovieDetails() {
  
  const {id} = useParams()
const { dispatch, watchedList } = UseData() ?? {
  dispatch: () => {},
  watchedList: null,
  
};
 const isInWatchedListFilter =
   (watchedList ?? []).filter((movie: movie) => movie.id === id).length > 0;
  
  const {data,isLoading,error} = useQuery({queryFn:()=> getMovieDetails(id??0),queryKey:["movieDetails",id]})
    useEffect(()=>{
      localStorage.setItem("movieapp", JSON.stringify(watchedList));
    },[watchedList])
    if (error)
      return (
        <div className=" flex justify-center items-center my-10">
          <h2 className=" text-omar text-xl font-bold ">
            Error : {error.message}
          </h2>
        </div>
      );
     
      function handleAdd(){
        const newMovie = {
          id:id || "",
          title: data?.title,
          poster: data?.poster,
          runtime: data?.runtime,
          year: data?.year,
          rating: data?.ratings[0].value,
          votes: data?.ratings[0].votes,
          trailer: data?.trailer,
          lang: data?.spoken_language,
          description: data?.description,
          country: data?.country,
        };
        dispatch({type:"addMovie",payload:newMovie})

      }
      function deleteMovie(){
                dispatch({ type: "deleteMovie", payload: { id: id||"" } });


      }
            if (isLoading )
              return (
                <div className=" flex items-center justify-center">
                  <Loader />
                </div>
              );

    return (
      <div className=" font-abc  max-w-6xl text-white h-fit  px-20 mx-auto ">
        <div className=" my-20  w-full  gap-4  md:w-2/3 h-auto grid grid-cols-1 md:grid-cols-3  ">
          <div className=" flex justify-center items-center  w-full">
            <img
              className=" w-full"
              src={data?.poster}
              alt={`${data?.title}img`}
            />
          </div>
          <div className=" px-5 col-span-2 flex flex-col gap-2">
            <h1 className=" capitalize text-2xl font-semibold">
              {data?.title}
            </h1>
            <h3>
              Name: <span className="  text-omar"> {data?.title}</span>
            </h3>
            <h3>
              Time:{" "}
              <span className="  text-omar"> {formatTime(data?.runtime)}</span>
            </h3>
            <h3>
              Date: <span className="  text-omar"> {data?.year}</span>
            </h3>
            <h3>
              Language:{" "}
              <span className=" capitalize  text-omar">
                {" "}
                {data?.spoken_language}
              </span>
            </h3>
            <h3>
              country :{" "}
              <span className=" capitalize  text-omar"> {data?.country}</span>
            </h3>
            <h3 className=" flex items-center gap-1">
              <AiFillStar color="yellow" /> :{" "}
              <span className=" capitalize  font-semibold  text-omar">
                {" "}
                {data?.ratings[0].value} |
              </span>
              <span className=" capitalize  font-semibold  text-omar">
                {" "}
                {data?.ratings[0].votes}
              </span>
            </h3>
            <div className="  flex items-center gap-4">
              <a
                className=" inline-flex gap-1 items-center px-4 py-2 md:py-2 md:px-6 w-fit my-2 rounded-full text-white bg-omar"
                href={data?.trailer}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span className=" text-2xl">
                  <BsPlay />
                </span>{" "}
                Watch
              </a>
              {!isInWatchedListFilter ? (
                <button
                  onClick={handleAdd}
                  className=" md:px-5 px-4 inline-flex items-center  gap-1  md:py-2   bg-transparent  font-semibold md:text-lg outline transition-all outline-red-600 hover:bg-omar shadow-2xl  hover:text-white text-omar  rounded-full"
                >
                  <span className=" text-2xl">
                    <IoMdAddCircleOutline />
                  </span>{" "}
                  to watchList
                </button>
              ) : (
                <button
                  onClick={deleteMovie}
                  className=" md:px-4 px-4 inline-flex items-center  gap-1  md:py-2   bg-transparent  font-semibold md:text-lg outline transition-all outline-red-600 hover:bg-omar shadow-2xl  hover:text-white text-omar  rounded-full"
                >
                  <span className=" text-2xl">
                    <MdDelete />
                  </span>
                  from watchlist
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=" flex flex-col py-5 gap-4 ">
          <h3 className=" text-xl font-semibold">About the movie</h3>
          <p className=" text-sm text-gray-300">{data?.description}</p>
        </div>
      </div>
    );
}

export default MovieDetails
