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

  
  ingredientsCountInput.dispatchEvent(new Event('change'));

});

recipes = [{"id":1, 
  "name":"Carne Asada", 
  "img":"./assets/recipes/recipe-1.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "ingredients":"placeholder"
},
{"id":2,
"name":"Greek Ribs", 
"img":"./assets/recipes/recipe-2.jpeg", 
"content":"Placeholder",
"prepT":"999 min", 
"cookT":"999 min", 
"servings":"999 servings",
"ingredients":"placeholder"
},
{"id":3,
  "name":"Vegetable Soup", 
  "img":"./assets/recipes/recipe-3.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "ingredients": "placeholder"
},
{"id":4,
  "name":"Banana Pancakes", 
  "img":"./assets/recipes/recipe-4.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "ingredients": "placeholder"
},
{"id":5,
  "name":"Omelette with tomatoes, spinach and asparagus", 
  "img":"./assets/recipes/recipe-5.jpeg", 
  "content":"Mix the eggs and cream. Put the butter in a pan and heat over a medium heat. Chop the onion, add and fry until soft. Add the halved tomatoes, spinach and chopped asparagus and fry briefly. Add the egg mixture and reduce the heat again, allowing the eggs to set. Season to taste with salt and pepper.",
  "prepT":"10 min", 
  "cookT":"10 min", 
  "servings":"2 servings",
  "ingredients": "4 egg(s) \n 1 tsp butter \n 60 ml cream \n 30 g spinach \n 1 small onion(s),red \n 100 g cocktail tomatoes \n 3 thick asparagus tips",
    },
{"id":6,
  "name":"Cool fitness couscous", 
  "img":"./assets/recipes/recipe-6.jpeg", 
  "content":"Prepare the couscous with the vegetable stock according to the packet instructions. Add 2 tbsp oil and mix well. Set aside for now. Peel and finely dice the onion. Clean the pepper and cut into small cubes. Peel the cucumber and dice a little coarser. Once the couscous has cooled, mix it with the vegetables and add the remaining oil and vinegar. Season to taste with salt, pepper, the juice of half a lemon, chilli oil and parsley. Mix everything well. Prepare a dressing from the yoghurt, the remaining lemon juice, parsley and salt and serve with the salad.",
  "prepT":"30 min", 
  "cookT":"5 min", 
  "servings":"4 servings",
  "ingredients": "250 g couscous (preferably instant couscous) \n ½ cucumber(s)1 pepper(s) \n 1 lemon(s), the juice from it \n 1 pot of yoghurt \n 1 small onion(s) \n pepper \n chilli oil or chilli powder \n 2 tbsp vinegar4 tbsp oilsome vegetable stock, instant salt \n chopped parsley"
  },
{"id":7,
  "name":"Banana Pancakes", 
  "img":"./assets/recipes/recipe-7.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "ingredients": "placeholder"
  },
{"id":8,
  "name":"Banana Pancakes", 
  "img":"./assets/recipes/recipe-8.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "ingredients": "placeholder"
  },
{"id":9,
  "name":"Banana Pancakes", 
  "img":"./assets/recipes/recipe-9.jpeg", 
  "content":"Placeholder",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"999 servings",
  "ingredients": "placeholder"
   } ]
  

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
