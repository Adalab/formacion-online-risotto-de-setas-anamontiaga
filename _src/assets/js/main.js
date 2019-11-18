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

const title = document.querySelector(".header__title");
const articles = document.querySelectorAll(".main__article--description--title");
const currency = document.getElementsByTagName("span");
const brands = document.querySelectorAll(".main__article--description--brand");
const quantities = document.querySelectorAll(".main__article--description--weight");
const prices = document.querySelectorAll(".main__articule--description--price");
const itemsInput = document.querySelectorAll(".items__input");
const subtotal = document.querySelector(".footer__subtotal--number");
const $total = document.querySelector(".footer__total--number");
const shippingCosts = document.querySelector(".footer__shippingcosts--number");
const totalBtn = document.querySelector(".footer__btn--span");
let totalItems = document.querySelector(".footer__items--number");

let $selectAll = document.querySelector(".header__select--link");
let $deselectAll = document.querySelector(".header__deselect--link");


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

getRecipe();

function updateSelectorValues(newValue){
  document.querySelectorAll(".my_row input[type=checkbox]").forEach((el)=> el.checked = newValue);
}

function selectAll(){
  updateSelectorValues(true);
}

function deSelectAll(){
  updateSelectorValues(false);
}

function updateValues() {
  let subTotal = 0;
  document.querySelectorAll(".my_row").forEach((row) => {
    const $checked = row.querySelector("input[type=checkbox]");
    const $quantity = row.querySelector(".items__input");
    const $price = row.querySelector(".main__articule--description--price");

    if (parseInt($quantity.value) > 0) {
      if ($checked.checked) {
        let price = parseFloat($price.innerHTML);
        let quantity = parseInt($quantity.value);
        let rowValue = price * quantity;
        subTotal += rowValue;
      }
    }
  })

  const shippingCost = parseFloat(shippingCosts.innerHTML);
  const total = (shippingCost + subTotal).toFixed(2);

  subtotal.innerHTML = subTotal.toFixed(2);

  if(subTotal > 0){
    totalBtn.innerHTML = subTotal.toFixed(2);
    $total.innerHTML = total;
  }else{
    totalBtn.innerHTML = "0";
    $total.innerHTML = "0";
  }
}

document.querySelectorAll(".my_row").forEach((el) => {
  el.addEventListener("change", (ev) => {
    updateValues();
  });
})

$deselectAll.addEventListener("click", (ev) =>{
  ev.preventDefault();
  deSelectAll();
  updateValues();
});

$selectAll.addEventListener("click", (ev) =>{
  ev.preventDefault();
  selectAll();
  updateValues();
});

selectAll();
updateValues();