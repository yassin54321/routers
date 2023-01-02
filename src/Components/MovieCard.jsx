import React from 'react'
import { Link } from 'react-router-dom'
import EditMovie from './EditMovie'
import StarRating from './StarRating'

const MovieCard = ({ movie, handleDelete, handleEdit }) => {
  return (
    <div className='movie'>
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} />
      <p>{movie.date}</p>
      <p>trailer <br /><iframe width="200" height="200" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>
      <h4> Category:{movie.category}</h4>
      <div id='btn'>
        <Link to={`/ViewMovies/${movie.id}`}><button id='view_bt'>ViewMovies</button></Link>
        <button id='btn-delete' onClick={() => handleDelete(movie.id)}>Delete</button>
        <EditMovie movie={movie} handleEdit={handleEdit} />
      </div>
    </div>
  )
}

export default MovieCard