export type MovieItemProbs = {
  movie: {
    imdbID: number;
    Poster: string;
    Title: string;
  };
};
export type upComingMovieMain = {
  imdb_id: number;
  Poster: string;
  title: string;
};
export type upComingMovieProbs = {
  movie: upComingMovieMain;
};
export type MovieItemMain = {
    imdbID: number;
    Poster: string;
    Title: string;
  
};
export type MovieItemMain2 = {
 
    imdbid: number;
    image: string;
    title: string;
 
};
export type MovieItemProbs2 = {
  movie: MovieItemMain2;
};
export type PopularMoviesItemProbs = {
  movie: {
    imdb_id: number;
    Poster: string;
    title: string;
  };
};
export type PopularMoviesItemMain = {
 
    imdb_id: number;
    Poster: string;
    title: string;
  
};
export type seriesMain = {
    imdbid: number;
    title: string;
    image:string
};
export type seriesProbs = {
  series: seriesMain;
};
export type trendMoviesMain = {
  imdb_id: number;
  title: string;
  image: string;
  
};
export type trendMovies = {
  movie: trendMoviesMain
};
