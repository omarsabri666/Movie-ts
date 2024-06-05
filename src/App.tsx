

import "react-toastify/dist/ReactToastify.css";



import "./index.css";

import AppLayout from "./pages/AppLayout";


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Movies = lazy(()=> import("./pages/Movies"))
const List = lazy(()=> import("./pages/List"))
const Series = lazy(()=> import("./pages/Series"))
const Search = lazy(() => import("./pages/Search"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Home = lazy(() => import("./pages/Home"));





function App() {
  const router = createBrowserRouter([{
   
    element: <AppLayout/>,
    children:[{
      path : "/",
      element : <Home/>


    },
  {
    path : "movieDetails/:id",
    element: <MovieDetails/>
  },

  {
    path : "Movies",
    element : <Movies/>

  }
  ,
  {
    path: "series",
    element:<Series/>
  },
  {
    path:"list",
    element : <List/>
  },
  {
    path:"search",
    element : <Search/>
  },
]
  }])
 
 
  


  return (
    <div className=" font-abc bg-[#0D0C11]">
     
      <div className=" ">

      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
