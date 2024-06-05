import Hero from "../componots/Hero";
import PopularMovies from "../componots/PopularMovies";
import TrendingMovies from "../componots/TrendingMovies";
import UpComingMovies from "../componots/UpComingMovies";

function Home() {
    return (
        <div>
            <Hero/>
            <TrendingMovies/>
            <UpComingMovies/>
            <PopularMovies/>
        </div>
    )
}

export default Home
