import { useQuery } from "@tanstack/react-query";
import backgroundImage from "../../public/download 1.webp"
import {  selectSpider } from "../api/api";
import NavV2 from "./NavV2";
function Hero() {
    const containerStyle = {
      backgroundImage: `url("${backgroundImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
     
    };
    const {data:lala} = useQuery({queryFn:selectSpider,queryKey:["s"]})
    return (
      <section
        className="       text-white flex flex-col"
        style={containerStyle}
      >
        <NavV2 />
        <main className=" flex flex-col gap-4  px-24   my-36 ">
          <div className="    bg-omar w-fit px-6  py-1 rounded-full">
            <h3 className=" font-semibold text-white">Top</h3>
          </div>
          <h2 className=" text-4xl font-bold ">Spider-Man: No Way Home</h2>
          <div className=" md:w-96">
            <h5 className=" text-sm  text-gray-400 ">
              Peter Parker is unmasked and no longer able to separate his normal
              life from the high-stakes of being a super-hero. When he asks for
              help from Doctor Strange the stakes become even more dangerous,
              forcing him to discover what it truly means to be Spider-Man.
            </h5>
            <div>
              <p className=" font-semibold flex items-center gap-1">
                2022 |<span className=" text-omar">+12 </span> |
                <span>8.2 ⭐</span>
              </p>
            </div>
            <a
              href={lala?.trailer}
              rel="noreferrer"
              target="_blank"
              className=" text-white px-6 py-2 bg-omar inline-block my-4 rounded-full font-semibold "
            >
              Watch trailer
            </a>
          </div>
        </main>
      </section>
    );
}

export default Hero
