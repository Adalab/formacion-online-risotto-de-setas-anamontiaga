"use strict";

const title = document.querySelector(".header__title");
const articles = document.querySelectorAll(".main__article--description--title");
const currency = document.getElementsByTagName("span");
const brands = document.querySelectorAll(".main__article--description--brand");
const quantities = document.querySelectorAll(".main__article--description--weight");
const prices = document.querySelectorAll(".main__articule--description--price");
const itemsInput = document.querySelectorAll(".items__input");
const subtotal = document.querySelector(".footer__subtotal--number");

const getRecipe = () => {
  fetch("https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json")
    .then(response => response.json())
    .then(data => {
      const recipe = data.recipe;
      title.innerHTML = recipe.name;
      for (const item of currency) {
        item.innerHTML = recipe.currency;
      }
      const ingredients = recipe.ingredients;

      for (let i = 0; i < ingredients.length; i = i + 1) {
        for (let i = 0; i < articles.length; i = i + 1) {
          articles[i].innerHTML = ingredients[i].product;
        }
        for (let i = 0; i < brands.length; i = i + 1) {
          brands[i].innerHTML = ingredients[i].brand;
        }
        for (let i = 0; i < quantities.length; i = i + 1) {
          quantities[i].innerHTML = ingredients[i].quantity;
        }
        for (let i = 0; i < prices.length; i = i + 1) {
          prices[i].innerHTML = ingredients[i].price;
          //   prices[i].innerHTML = ingredients[i].price + recipe.currency;
        }
        for (let i = 0; i < itemsInput.length; i = i + 1) {
          itemsInput[i].value = ingredients[i].items;
        }
      }
    });
};

getRecipe();

//MULTIPLICAR CANTIDADES POR PRECIOS
const itemsPrice = () => {
  for (let i = 0; i < itemsInput.length; i = i + 1) {
    console.log(itemsInput[1].value);
    // console.log(parseFloat(prices[i].innerHTML));
  }
};

for (const itemInput of itemsInput) {
  itemInput.addEventListener("keydown", itemsPrice);
}

// SUMAR TODOS LOS PRECIOS
const subtotalCount = () => {
  let parsePrices = [];

  for (let i = 0; i < prices.length; i = i + 1) {
    parsePrices.push(parseFloat(prices[i]));
  }
  //   parseInt(subtotal.innerHTML) = parseInt(subtotal.innerHTML)  +
};

subtotalCount();
