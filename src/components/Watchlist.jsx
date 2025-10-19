import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import { MovieContext } from '../context/MovieContext';
const Watchlist = () => {
  const {watchlist, setWatchlist} = useContext(MovieContext);
  const [search, setsearch] = useState('')
  const [currentgenre, setcurrentgenre] = useState('All');
  const [genrelist, setgenrelist] = useState(['All'])
  const genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  useEffect(() => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      setWatchlist(JSON.parse(watchlist));
    }
  }, []);
  useEffect(() => {
    const genres = watchlist.map(movie => {
      return genreids[movie.genre_ids[0]]
    })
    const uniquegenres = new Set(genres)
    setgenrelist(['All',...uniquegenres])
  },[watchlist])
const  handleascendingratings = () => {
  const updatedwatchlist = watchlist.sort((a,b) => {return b.vote_average - a.vote_average})
  setWatchlist([...updatedwatchlist])
}
const  handledescendingratings = () => {
  const updatedwatchlist = watchlist.sort((a,b) => {return a.vote_average - b.vote_average})
  setWatchlist([...updatedwatchlist])
}
  return (
    <div>
      <div className="flex items-center justify-center mt-3">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={e => setsearch(e.target.value)}
        className="peer border-b-2 border-gray-400 text-gray-900 placeholder-gray focus:border-blue-500 focus:outline-none w-9/10 p-2"
      />
    </div>
    <div className='flex justify-center flex-wrap m-4'>
      {
        genrelist.map(genre => {
          return(
            <div
              className={
                 genre === currentgenre?'px-3 py-1 rounded-lg bg-red-600 text-white text-sm font-medium hover:opacity-60 hover:cursor-pointer transition m-4':
                'px-3 py-1 rounded-lg bg-blue-600 text-white text-sm font-medium hover:opacity-60 hover:cursor-pointer transition m-4'
              }
              onClick={e => setcurrentgenre(genre)}

            >
              {genre}
            </div>
          )
        })
      }
    </div>
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50 ">
            <th className="px-6 py-4 font-medium text-gray-900 flex justify-center">Name</th>
            <th>
              <div className="flex">
                <div>Ratings<i className="fa-solid fa-arrow-up" onClick={handleascendingratings}></i><i className="fa-solid fa-arrow-down" onClick={handledescendingratings}></i></div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchlist.filter((movie) => {
            if(currentgenre === 'All'){
              return true
            }
            else{
              return genreids[movie.genre_ids[0]] === currentgenre
            }
          }).filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
          }).map((movie) => (
            <tr className="hover:bg-gray-50">
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img className="h-[6rem] w-[10rem] object-contain " src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie" />
                <div className="font-medium text-gray-700 text-sm">
                  {movie.title}
                </div>
              </td>
              <td className="pl-6 py-4">{movie.vote_average}</td>
              <td className="pl-6 py-4">{movie.popularity}</td>
              <td className="pl-2 py-4">{genreids[movie.genre_ids[0]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
  
}
export default Watchlist