const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

document.addEventListener('DOMContentLoaded', () => {
  const ingredientsCountInput = document.getElementById('ingredients-count');
  const ingredientsList = document.getElementById('ingredients-list');

  ingredientsCountInput.addEventListener('change', (e) => {
    const count = e.target.value;
    ingredientsList.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const ingredientItem = document.createElement('div');
      ingredientItem.className = 'form-row ingredient-item';
      ingredientItem.innerHTML = '<input type="text" class="form-input" placeholder="Add ingredient">';
      ingredientsList.appendChild(ingredientItem);
    }
  });

  // Trigger initial change to set up the default number of ingredient fields
  ingredientsCountInput.dispatchEvent(new Event('change'));

});

recipes = [{"id":1, 
  "name":"Carne Asada", 
  "img":"./assets/recipes/recipe-1.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "incredients": ["Incredient 1: 200l","Incredient 2: 50t"]
},
{"id":2,
"name":"Greek Ribs", 
"img":"./assets/recipes/recipe-2.jpeg", 
"content":"Placeholder",
"prepT":"999 min", 
"cookT":"999 min", 
"servings":"999 servings",
"incredients": ["Incredient 1: 200l","Incredient 2: 50t"]
},
{"id":3,
  "name":"Vegetable Soup", 
  "img":"./assets/recipes/recipe-3.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "incredients": ["Incredient 1: 200l","Incredient 2: 50t"]
},
{"id":4,
  "name":"Banana Pancakes", 
  "img":"./assets/recipes/recipe-4.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "incredients": ["Incredient 1: 200l","Incredient 2: 50t"]
  }]

function recipeClicked(id){
  var recipe = recipes.find(r => r.id === id);
  if (recipe) {
    sessionStorage.setItem('selectedRecipe',JSON.stringify(recipe));
  } else {
    console.error("No Recipe found");
  }
  window.location.href = "single-recipe.html";

  document.getElementById("image").src = recipe.img;
        document.getElementById("title").textContent = recipe.name;
        document.getElementById("description").textContent = recipe.content;
        document.getElementById("prepT").textContent = recipe.prepT;
        document.getElementById("cookT").textContent = recipe.cookT;
        document.getElementById("servings").textContent = recipe.servings;
        for (let index = 0; index < recipe.incredients.length; index++) {
          document.getElementById("incredients").createElement("li").textContent = recipe.incredients[index];
        }
}
