import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function NavV2() {
    const [toggle,setToggle] = useState(false)

    return (
      <>
        <div className="  border-b border-white md:flex hidden  items-center py-8 justify-around">
          <Link to="/">
            <h2 className=" text-2xl text-omar font-semibold">FILMBERRY</h2>
          </Link>{" "}
          <ul className=" flex items-center gap-8">
            <li>
              <NavLink className=" hover:text-omar transition-all text-white" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className=" hover:text-omar transition-allhover:text-omar transition-all text-white" to="Movies">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink className=" hover:text-omar transition-allhover:text-omar transition-all text-white" to="series">
                Series
              </NavLink>
            </li>
            <li>
              <NavLink className=" hover:text-omar transition-allhover:text-omar transition-all text-white" to="list">
                My List
              </NavLink>
            </li>
          </ul>
          <div className=" flex items-center gap-4">
            <Link to="search">
              <i className=" cursor-pointer text-white text-xl">
                <AiOutlineSearch />
              </i>
            </Link>
            <i className=" flex items-center  gap-1 cursor-pointer text-white text-xl">
              <MdLanguage /> <span className=" text-sm font-bold">ENG</span>
            </i>
          </div>
        </div>

        <div className="  relative  border-b border-white md:hidden flex gap-3   items-center py-8 justify-around">
          <Link to="/">
            <h2 className=" text-2xl text-omar font-semibold">FILMBERRY</h2>
          </Link>
          <button
            onClick={() => setToggle((s) => !s)}
            className=" text-white text-3xl"
          >
            <AiOutlineMenu />
          </button>
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0, transition: { duration: 0.4 } }}
                exit={{ x: 1000, transition: { duration: 0.3 } }}
                className="absolute  gap-8  justify-center  top-0  bg-white text-black flex-col right-0 w-screen h-screen"
              >
                <div className="  text-3xl text-omar text-right px-6 py-6">
                  <button onClick={() => setToggle(false)} className="">
                    <AiOutlineClose />
                  </button>
                </div>
                <ul className=" flex  py-8  font-semibold text-lg  flex-col  items-center gap-8">
                  <li>
                    <NavLink
                      onClick={() => setToggle(false)}
                      className="hover:text-omar transition-all "
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setToggle(false)}
                      className="hover:text-omar transition-all "
                      to="Movies"
                    >
                      Movies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setToggle(false)}
                      className="hover:text-omar transition-all "
                      to="series"
                    >
                      Series
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setToggle(false)}
                      className=" hover:text-omar transition-all"
                      to="list"
                    >
                      My List
                    </NavLink>
                  </li>
                </ul>
                <div className=" flex justify-center  flex-col-reverse text-3xl  pt-4 items-center gap-4">
                  <Link onClick={() => setToggle(false)} to="search">
                    <i className=" cursor-pointer text-3xl">
                      <AiOutlineSearch />
                    </i>
                  </Link>
                  <i
                    onClick={() => setToggle(false)}
                    className=" flex items-center  gap-1 cursor-pointer text-xl"
                  >
                    <MdLanguage />{" "}
                    <span className=" text-sm font-bold">ENG</span>
                  </i>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
}

export default NavV2
