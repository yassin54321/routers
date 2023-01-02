
import './App.css';
import { useState } from 'react';
import { moviesData } from './data';
import MoviesList from './Components/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBars from './Components/NavBars';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViewMovies from './Components/ViewMovies';
import Home from './Components/Home';

function App() {
  const [list, setList] = useState(moviesData)
  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [category, setCategory] = useState("")
  const handleRating=(x)=>setRating(x)
  const handleText=(y)=>setName(y)
  let handleCategory=(x)=>setCategory(x)
  const handleDelete=(id)=>setList(list.filter(el=>el.id!==id))
  const handleAdd=(newMovieItem)=>setList([...list,newMovieItem])
  const handleEdit=(editeMovie)=>setList(list.map(el=>el.id===editeMovie.id?{...el,...editeMovie}:el))
  return (
    <div className="App">
      <Router>
      <NavBars handleAdd={handleAdd} itemText={Text} rating={rating} category={category} handleCategory={handleCategory}  handleRating={handleRating} handleText={handleText}/>
        <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/MoviesList' element={<MoviesList data={list.filter(el=>el.name.toLowerCase().includes(name.toLowerCase())&&(el.rating>=rating)&&(el.category.toLowerCase().includes(category.valueOf().toLowerCase())))} handleDelete={handleDelete} handleEdit={handleEdit}/>}/>
<Route path='/ViewMovies/:id' element={<ViewMovies list={list}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
