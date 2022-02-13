import logo from './logo.svg';
import './App.css';
import React, { useEffect , useState } from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = '1cbe756b';
  const APP_KEY = '****';
  
  const  [recipes, setRecipes] = useState([]);
  const [search , setSearch] = useState('');
  const [querry, setQuerry] =  useState('chicken');

  useEffect( () => {
    getRecipes()
  }, [querry]);
  
const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json()
  setRecipes(data.hits)
  console.log(data.hits)
};
const GetSearch = e => {
   e.preventDefault()
   setQuerry(search)
};
 
const searchHandler = e => {
  setSearch(e.target.value)
};
  return (
    <div className="App">
    <form className="Search-form" onSubmit={GetSearch}>
      <input className='search-bar' type="text" value={search} onChange={searchHandler}/>
      <button className='search-button' type="submit"><b>HUNT YOUR FOOD</b></button>
    </form> 
    <div className='recipes'>
    {recipes.map(recipe =>(
 <Recipe key={recipe.recipe.label}
 title={recipe.recipe.label} 
 calories={recipe.recipe.calories} 
  image={recipe.recipe.image}
  ingredient={recipe.recipe.ingredients} />
 ))}</div>
    </div>
  )
}

export default App;
