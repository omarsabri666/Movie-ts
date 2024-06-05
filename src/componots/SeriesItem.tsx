import { useNavigate } from "react-router";
import { seriesProbs } from "../types/type";

function SriesItem({ series }: seriesProbs) {
  const navigate = useNavigate();
  function hanldeNavigate() {
    navigate(`/movieDetails/${series.imdbid}`);
  }
  return (
    <div className=" text-white px-10 md:px-0  flex  gap-1 flex-col ">
      <img
        className=" rounded-lg cursor-pointer"
        onClick={hanldeNavigate}
        src={series.image}
        alt={`${series.title}img`}
      />
      <div className=" text-center">
        <h2>{series.title}</h2>
      </div>
    </div>
  );
}

export default SriesItem;
