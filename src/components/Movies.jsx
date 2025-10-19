import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import axios from 'axios'
import { MovieContext } from '../context/MovieContext'
const Movies = () => {
  const [movies, setMovie] = useState([{
    url: "https://th.bing.com/th/id/OIP.L2OAkdDZ99c9uVVE6whGxgHaEo?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3", title: "movie 1"
  }, {
    url: "https://th.bing.com/th/id/OIP.L2OAkdDZ99c9uVVE6whGxgHaEo?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3", title: "movie 2"
  }, {
    url: "https://th.bing.com/th/id/OIP.L2OAkdDZ99c9uVVE6whGxgHaEo?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3", title: "movie 3"
  }, {
    url: "https://th.bing.com/th/id/OIP.L2OAkdDZ99c9uVVE6whGxgHaEo?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3", title: "movie 4"
  }, {
    url: "https://th.bing.com/th/id/OIP.L2OAkdDZ99c9uVVE6whGxgHaEo?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3", title: "movie 5"
  }])
  const [pgnum, setPgnum] = useState(1)
  const handleleft = () => {
    if(pgnum>1)
      setPgnum(pgnum-1)
  }
  const handleright = () => {
    setPgnum(pgnum+1)
  }
  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3d93e932ab849a6f3f022b944dc8f8a1&page=${pgnum}`).then(response => {
    setMovie(response.data.results);
    // console.log(response.data)
  })
  },[pgnum])
  // axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3d93e932ab849a6f3f022b944dc8f8a1').then(response => {
  //   setMovie(response.data.results);
  // })
  const {watchlist,setWatchlist} = useContext(MovieContext)
  const iswatchlistadded = (movie) => {
    for(let i = 0; i<watchlist.length; i++) {
      if(watchlist[i].id === movie.id){
          return true  
      }
    }
    return false
  }

  // const [Watchlist,setWatchlist] = useState([]);
  // const addtowatchlist = (movie) => {
  //   const updatedwatchlist = [...Watchlist,movie]
  //     setWatchlist(updatedwatchlist)
  //     localStorage.setItem("watchlist", JSON.stringify(updatedwatchlist))
  // }
  
  // const removefromwatchlist = (movie) => {
  //   const updatedwatchlist = Watchlist.filter(watchlistmovie => {
  //     return watchlistmovie.id != movie.id
  //   })
  //   setWatchlist(updatedwatchlist)
  //   localStorage.setItem("watchlist", JSON.stringify(updatedwatchlist))
  // }
  // useEffect(() => {
  //   const watchlist = localStorage.getItem('watchlist')
  //   if(watchlist){
  //     setWatchlist(JSON.parse(watchlist))
  //   }
  // },[])
  return (
    <div>
      <div className='text-2xl font-bold text-center m-5'>
        <h1>Trending Movies</h1>
      </div>
      <div
        className='flex justify-evenly flex-wrap gap-8'
      >
        {
          movies.map(movie => {
            return (
              <MovieCard movie = {movie} ismovieadded = {iswatchlistadded}/>
            )
          })
        }
      </div>
      <Pagination pgleftfn = {handleleft} pgnum = {pgnum} pgrightfn = {handleright}/>
    </div>
  )
}

export default Movies