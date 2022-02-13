import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title, calories, image, ingredient}) => {
    return(
        <div className={style.recipe}>
            <h1>Name:{title}</h1>
            <div>
             {ingredient.map(ingredient =>(
                 <li>{ingredient.text}</li>
             ))}
            </div>
            <p className={style.calo}>Calories:{calories}</p>
            <img className={style.image} src={image} alt="error" />
        </div>
    )
}

export default Recipe;