import { UseData } from "../context/ContextP";

function SearchInput() {
  const { s = "", setS } = UseData() ?? {};

    return (
      <input value={s}
      onChange={(e)=> setS?.(e.target.value)}
        className=" rounded-full outline-2  outline outline-[#E50914]  py-2 px-6 col-span-5 w-full "
        placeholder="Search"
        type="text"
      />
    );
}

export default SearchInput
