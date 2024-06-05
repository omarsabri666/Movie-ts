import  axios  from "axios";
export const api = axios.create({
  baseURL: "https://movies-tv-shows-database.p.rapidapi.com",
});
export const detailsApi = axios.create({
  baseURL: "https://mdblist.p.rapidapi.com/",
});
export const topApi = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com/",
});
export const mainApi = axios.create({
  baseURL: "https://imdb188.p.rapidapi.com/api/v1",
});
export const searchApi = axios.create({
  baseURL: `https://www.omdbapi.com`,
});
export async function getHeroMovie() {
  try {
    const movieName = encodeURIComponent("spider-man");

    const res = await api.get(`/?title=${movieName}`, {
      headers: {
        Type: "get-movies-by-title",
       'X-RapidAPI-Key': '9879d69c00mshbf413898c9ae3afp1d16fbjsn497e1ec09f15',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
      },
    });
  

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getSearch(s:string) {
  try {
    if (s.length > 2) {
      const res = await searchApi.get(`/?apikey=8703caf3&s=${s}`);
      return res.data;
    } else {
      // Handle the case when the search length is not greater than 2
      console.log('Search term must be at least 3 characters long');
      return null; // or some other value indicating the invalid search
    }
  } catch (err) {
    console.log(err);
    throw new Error('Failed to perform the search');
  }
}
// export async function getUpComingMovies() {
//   try {

//     const res = await mainApi.get(`getUpcomingMovies?region=US`, {
//       headers: {
//         "X-RapidAPI-Key": "ea06cc59f7msh1bbee423c340b86p16afe0jsndf5e47dfe658",
//         "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
//       },
//     });
  

//     return res.data;
//   } catch (err) {
//     console.log(err); // Use console.error for error logging
// //   }
// }
export async function getTrendingMovies() {
  try {

    const res = await api.get(`/?page=1`, {
      headers: {
      Type: 'get-trending-movies',
       'X-RapidAPI-Key': '9879d69c00mshbf413898c9ae3afp1d16fbjsn497e1ec09f15',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
      },
    });
   

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getBoxMovies() {
  try {

    const res = await api.get(`/?page=5`, {
      headers: {
        Type: "get-boxoffice-movies",
       'X-RapidAPI-Key': '9879d69c00mshbf413898c9ae3afp1d16fbjsn497e1ec09f15',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
      },
    });
   

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getUpComingMovies() {
  try {

    const res = await api.get(`/?page=4`, {
      headers: {
        Type: "get-upcoming-movies",
       'X-RapidAPI-Key': '9879d69c00mshbf413898c9ae3afp1d16fbjsn497e1ec09f15',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
      },
    });
   

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getPopularMovies(year:number|string) {
  try {

    const res = await api.get(`/?year=${year}&page=1`, {
      headers: {
        Type: "get-popular-movies",
       'X-RapidAPI-Key': '9879d69c00mshbf413898c9ae3afp1d16fbjsn497e1ec09f15',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
      },
    });
   

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getMovieImg(id:number|string) {
  try {

    const res = await searchApi.get(`/?apikey=8703caf3&i=${id}`);
   

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getSimilarMovies(id: number | string) {
  try {
    const res = await api.get(`/?movieid=${id}&page=1`, {
      headers: {
        Type: "get-similar-movies",
        "X-RapidAPI-Key": "9879d69c00mshbf413898c9ae3afp1d16fbjsn497e1ec09f15",
        "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
      },
    });

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function selectSpider() {
  try {

    const res = await detailsApi.get(`/?i=tt0073195`, {
      headers: {
        "X-RapidAPI-Key": "ea06cc59f7msh1bbee423c340b86p16afe0jsndf5e47dfe658",
        "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
      },
    });
  

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getMovieDetails(id: number | string) {
  try {
    const res = await detailsApi.get(`/?i=${id}`, {
      headers: {
        "X-RapidAPI-Key": "ea06cc59f7msh1bbee423c340b86p16afe0jsndf5e47dfe658",
        "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
      },
    });

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getTopMovieDetails() {
  try {
    const res = await topApi.get(``, {
      headers: {
        "X-RapidAPI-Key": "ea06cc59f7msh1bbee423c340b86p16afe0jsndf5e47dfe658",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    });
 

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
export async function getTopSeriesDetails() {
  try {
    const res = await topApi.get(`series/`, {
      headers: {
        "X-RapidAPI-Key": "ea06cc59f7msh1bbee423c340b86p16afe0jsndf5e47dfe658",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    });

    return res.data;
  } catch (err) {
    console.log(err); // Use console.error for error logging
  }
}
