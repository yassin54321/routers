import React from 'react'
import MovieCards from './MovieCard'

const MoviesList = ({ data ,handleDelete,handleEdit}) => {
  console.log(data)
  return (
    <div className='movies'>
      {
        React.Children.toArray(data.map(el =><MovieCards movie={el} handleDelete={handleDelete} handleEdit={handleEdit} />))
      }
    </div>
  )
}

export default MoviesList