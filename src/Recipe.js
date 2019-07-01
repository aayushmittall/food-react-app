import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img src={image} className={style.image} />
      <p>Calories : {calories}</p>
      <ol>
        INGRIDIENTS :
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default Recipe;
