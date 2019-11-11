"use strict";
const data = {
  recipe: {
    name: "Risotto de setas (vegano)",
    "shipping-cost": 7,
    currency: "€",
    ingredients: [
      {
        product: "Margarina de maíz",
        brand: "Artua",
        items: 1,
        quantity: "600 gr.",
        price: 2.95
      },
      {
        product: "Arroz de Valencia",
        brand: "De Nuestra Tierra",
        items: 1,
        quantity: "1 kg.",
        price: 2.4
      },
      {
        product: "Caldo de verduras natural",
        brand: "Aneto",
        items: 1,
        quantity: "1 l.",
        price: 3.6
      },
      {
        product: "Seta Shiitake ecológica",
        items: 1,
        quantity: "200 gr.",
        price: 3.55
      },
      {
        product: "Paragoce, vino blanco",
        brand: "Verdejo D.O. Rueda",
        items: 1,
        quantity: "0,57 cl.",
        price: 5.85
      },
      {
        product: "Ajo",
        items: 1,
        quantity: "270 gr.",
        price: 1.49
      },
      {
        product: "Cebolla chalotas",
        items: 1,
        quantity: "200 gr.",
        price: 2.99
      }
    ]
  }
};

// DOM

const title = document.querySelector(".header__title");
const articles = document.querySelectorAll(".main__article--description--title");
const currency = document.getElementsByTagName("span");
const brands = document.querySelectorAll(".main__article--description--brand");
const quantities = document.querySelectorAll(".main__article--description--weight");
const prices = document.querySelectorAll(".main__articule--description--price");
const itemsInput = document.querySelectorAll(".items__input");
const subtotal = document.querySelector(".footer__subtotal--number");
const total = document.querySelector(".footer__total--number");
const shippingCosts = document.querySelector(".footer__shippingcosts--number");
const totalBtn = document.querySelector(".footer__btn--span");
let totalItems = document.querySelector(".footer__items--number");

const getRecipe = () => {
  // fetch(data)
  //   .then(response => response.json())
  //   .then(data => {
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
      ingredients[i].brand ? (brands[i].innerHTML = ingredients[i].brand) : (brands[i].innerHTML = "");
    }

    for (let i = 0; i < quantities.length; i = i + 1) {
      quantities[i].innerHTML = ingredients[i].quantity;
    }
    for (let i = 0; i < prices.length; i = i + 1) {
      prices[i].innerHTML = ingredients[i].price;
    }
    for (let i = 0; i < itemsInput.length; i = i + 1) {
      itemsInput[i].value = ingredients[i].items;
    }
  }
};
// LOADER

getRecipe();

// SUBTOTAL

const sumSubtotal = () => {
  let acumulator = 0;
  for (let i = 0; i < prices.length; i = i + 1) {
    acumulator += parseFloat(prices[i].innerHTML);
  }
  subtotal.innerHTML = acumulator;
};

sumSubtotal();

// TOTAL

const sumTotal = () => {
  total.innerHTML = parseFloat(subtotal.innerHTML) + parseFloat(shippingCosts.innerHTML);
  totalBtn.innerHTML = parseFloat(total.innerHTML);
};

sumTotal();

// SUMAR ITEMS

let inputArray = [];

for (let i = 0; i < itemsInput.length; i = i + 1) {
  inputArray.push(parseInt(itemsInput[i].value));
}

console.log(inputArray);

let ac = 0;
const itemsPrice = () => {
  let result = inputArray.reduce((acc, number) => acc + number, 0);
  totalItems.innerHTML = result;
};

for (const itemInput of itemsInput) {
  itemInput.addEventListener("change", itemsPrice);
}

// MULTIPLICAR NRO. DE ITEMS POR PRECIO
// peta cuando escribes varios números en la misma sesión y en el mismo input.
// optimizar el código.

// const multipleItemsPrice = event => {
//   const currentInput = event.currentTarget;

//   prices[0].innerHTML = parseInt(itemsInput[0].value) * parseFloat(prices[0].innerHTML);
//   prices[1].innerHTML = parseInt(itemsInput[1].value) * parseFloat(prices[1].innerHTML);
//   prices[2].innerHTML = parseInt(itemsInput[2].value) * parseFloat(prices[2].innerHTML);
//   prices[3].innerHTML = parseInt(itemsInput[3].value) * parseFloat(prices[3].innerHTML);
//   prices[4].innerHTML = parseInt(itemsInput[4].value) * parseFloat(prices[4].innerHTML);
//   prices[5].innerHTML = parseInt(itemsInput[5].value) * parseFloat(prices[5].innerHTML);
//   prices[6].innerHTML = parseInt(itemsInput[6].value) * parseFloat(prices[6].innerHTML);
// };

// for (const itemInput of itemsInput) {
//   itemInput.addEventListener("change", multipleItemsPrice);
// }

// SUMAR TODOS LOS PRECIOS
const subtotalCount = () => {
  let parsePrices = [];

  for (let i = 0; i < prices.length; i = i + 1) {
    parsePrices.push(parseFloat(prices[i]));
  }
};

subtotalCount();
