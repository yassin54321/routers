import React from 'react'
import StarRating from './StarRating'



const Search = ({category,rating,itemText,handleRating,handleText,handleCategory}) => {
  return (
    <div style={{display:'flex',marginTop:'10px'}}>
        <form className='category'>
        <select title="category" id="category" onChange={(e)=>handleCategory(e.target.value)} value={category} style={{height:'30px',width:'100px',fontSize:'20px',marginRight:"20px",
          color: 'grey',borderRadius:' 10px',
  backgroundColor:' #FF6D58'}}>
    <option value="action">Action</option>
    <option value="romantic">Romantic</option>
    <option value="comedy">Comedy</option>
    <option value="adventure">Adventure</option>
    <option value="horreur">Horreur</option>
    </select>
        <input type="text" style={{backgroundColor:'grey',borderRadius:" 10px"}} value={itemText} onChange={e=>handleText(e.target.value)}/>
            <StarRating rating={rating} handleRating={handleRating}/>
        </form>

    </div>
  )
}

export default Search