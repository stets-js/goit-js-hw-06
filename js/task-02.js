const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const list = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.classList.add("item");
  return ingredient;
});

ingredientsList.append(...list);

console.log(ingredientsList);
