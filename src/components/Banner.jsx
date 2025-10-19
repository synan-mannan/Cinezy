import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Banner = () => {
  const [moviebanner, setmoviebanner] = useState('https://th.bing.com/th/id/OIP.L2OAkdDZ99c9uVVE6whGxgHaEo?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3')
  const [movietitle, setmovietitle] = useState('placeholder movie')
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3d93e932ab849a6f3f022b944dc8f8a1').then(response => {
      setmoviebanner(`https://image.tmdb.org/t/p/original${response.data.results[1].poster_path}`);
      setmovietitle(response.data.results[1].title)
    }).catch(e => {
      console.error(e);
    })
  }, [])
  return (
    <div
        className='h-[20vh] sm:h-[75vh] bg-contain bg-no-repeat bg-center flex items-end'
        style={{
            backgroundImage: `url(${moviebanner})`
        }}
    >   
        <div className='text-white w-full text-center text-2xl'>
            {movietitle}
        </div>
    </div>
  )
}
// https://api.themoviedb.org/3/trending/movie/day?api_key=3d93e932ab849a6f3f022b944dc8f8a1
export default Banner