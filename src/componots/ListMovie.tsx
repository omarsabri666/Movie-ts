import { UseData,movie } from "../context/ContextP";
import ListMovieItem from "./ListMovieItem";

function ListMovie() {

  const { watchedList } = UseData() ??{watchedList:null}
 
  
    return (
      <div className=" flex flex-col gap-5 ">
        {watchedList!==null && watchedList.length > 0 && watchedList?.map((movie:movie)=> <ListMovieItem key={movie.id} movie={movie}/> )}
      </div>
    );
}

export default ListMovie
