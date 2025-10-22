import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
const Banner = () => {
  const [movienum, setmovienum] = useState(1);
  const [moviebanner, setmoviebanner] = useState('https://th.bing.com/th/id/OIP.L2OAkdDZ99c9uVVE6whGxgHaEo?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3')
  const [movietitle, setmovietitle] = useState('placeholder movie')
  useEffect(() => {
  axios
    .get('https://api.themoviedb.org/3/trending/movie/day?api_key=3d93e932ab849a6f3f022b944dc8f8a1')
    .then(response => {
      console.log(movienum)
      const movie = response.data.results[0];
      setmoviebanner(`https://image.tmdb.org/t/p/original${movie.poster_path}`);
      setmovietitle(movie.title);
      setInterval(() => {
        setmovienum(prevNum => {
          const newNum = (prevNum + 1) % response.data.results.length;
          console.log(newNum)
          const movie = response.data.results[newNum];
          setmoviebanner(`https://image.tmdb.org/t/p/original${movie.poster_path}`);
          setmovietitle(movie.title);
          return newNum;
        });
      }, 3000);
    })
    .catch(console.error);
}, []);
  return (
    <div
        className='h-[40vh] sm:h-[75vh] bg-contain bg-no-repeat bg-center flex items-end'
        style={{
            backgroundImage: `url(${moviebanner})`
        }}
    >   
        <div className='text-white w-full text-center text-2xl hidden md:block'>
            {movietitle}
        </div>
    </div>
  )
}
// https://api.themoviedb.org/3/trending/movie/day?api_key=3d93e932ab849a6f3f022b944dc8f8a1
export default Banner