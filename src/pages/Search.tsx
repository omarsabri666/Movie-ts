import SearchForThings from "../componots/SearchForThings";
import SearchInput from "../componots/SearchInput";

function Search() {
    return (
      <div className=" px-2 md:px-0 grid md:grid-cols-5 grid-cols-1   py-10">
       <SearchInput/>
       <SearchForThings/>


      </div>
    );
}

export default Search
