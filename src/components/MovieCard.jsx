import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const MovieCard = ({movie, ismovieadded}) => {
    const {addtowatchlist, removewatchlist} = useContext(MovieContext)
    return (
        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`
            }}
            className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110
                duration-350 hover:cursor-pointer flex flex-col justify-between items-end'
        >
            <div className='m-4' onClick={() => {
                ismovieadded(movie)? removewatchlist(movie):addtowatchlist(movie)
            }} >{
                    ismovieadded(movie)?<i className="fa-solid fa-heart text-red-600"></i>:<i className="fa-regular fa-heart text-red-600"></i>
                }
            </div>
            <div
                className='text-white w-full text-center text-xl p-2 bg-gray-900 rounded-b-xl'
            >
                {movie.title}
            </div>
        </div>
    )
}

export default MovieCard