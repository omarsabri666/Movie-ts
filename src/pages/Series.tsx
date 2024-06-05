import { useQuery } from "@tanstack/react-query";
import { getTopSeriesDetails } from "../api/api";
import Loader from "../componots/Loader";
import { seriesMain } from "../types/type";
import SriesItem from "../componots/SeriesItem";

function Series() {
    const { data, isLoading } = useQuery({
      queryFn: getTopSeriesDetails,
      queryKey: ["topS"],
    });
    if (isLoading)
      return (
        <div className=" flex justify-center items-center">
          <Loader />
        </div>
      );
    return (
      <div className=" gap-8 mt-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-6 ">
        {data?.map((series: seriesMain) => (
          <SriesItem key={series.imdbid} series={series} />
        ))}
      </div>
    );
}

export default Series
