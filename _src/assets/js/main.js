"use strict";

const title = document.querySelector(".header__title");
const getRecipe = () => {
  fetch("https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json")
    .then(response => response.json())
    .then(data => {
      const recipe = data.recipe;
      title.innerHTML = recipe.name;
      console.log(recipe.name);
    });
};

getRecipe();
