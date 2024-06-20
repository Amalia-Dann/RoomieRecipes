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

recipes = [
{ "id":1, 
  "name":"Carne Asada", 
  "img":"./assets/recipes/recipe-1.jpg", 
  "content":"Whisk together Mexican ale, orange juice, lime juice, 1/4 cup oil, garlic, 2 tablespoons salt, vinegar, Worcestershire sauce, black pepper, oregano, paprika, cumin, and cloves in a large bowl until spices are evenly incorporated. Trim 4 spring onions or 6 scallions, and cut in half lengthwise. Using the palm of your hand against a flat work surface, lightly smash spring onions until a little moisture is released. Combine smashed spring onions, flap steak, white onion, chiles, cilantro, and ale mixture in a large ziplock plastic bag. Seal bag, and shake to thoroughly mix; gently massage marinade into steak. Chill at least 2 hours or up to 12 hours.\n\nRemove steak from marinade, and pat dry using paper towels; discard marinade. Place steak on a wire rack set over a rimmed baking sheet. Let stand at room temperature 30 minutes. Meanwhile, preheat grill to very high (500°F to 550°F).\n\nPlace steak on lightly oiled grates. Grill, uncovered, until lightly charred in spots and a thermometer inserted in thickest portion of steak registers 125°F for medium-rare, 3 to 5 minutes per side, or to desired degree of doneness. Transfer steak to a cutting board, and let rest 5 minutes.\n\nMeanwhile, trim remaining 6 spring onions or 11 scallions; toss with remaining 1 tablespoon oil and remaining 1/8 teaspoon salt in a medium bowl until well coated. Place spring onions on oiled grates, and grill, uncovered, turning occasionally, until softened and lightly charred, 4 to 6 minutes.\n\nSlice steak against the grain; serve with grilled spring onions, warm tortillas, and salsa.",
  "prepT":"30 min", 
  "cookT":"180 min", 
  "servings":"4 servings",
  "ingredients":"3/4 cup (6 ounces) dark Mexican ale \n 1/2 cup fresh orange juice\n1/4 cup fresh lime juice\n1/4 cup plus 1 tablespoon grapeseed oil, divided\n6 medium garlic cloves, finely chopped (about 2 tablespoons)\n2 tablespoons plus 1/8 teaspoon fine sea salt, divided\n1 tablespoon apple cider vinegar\n2 1/2 teaspoons Worcestershire sauce\n1 teaspoon black pepper\n1/2 teaspoon Mexican oregano\n1/2 teaspoon smoked paprika\n1/4 teaspoon ground cumin\n1/8 teaspoon ground cloves\n10 spring onions or 15 scallions, divided\n2 pounds flap steak, patted dry\n1 small white onion, thinly sliced (about 1 3/4 cups)\n2 serrano chiles, stemmed and halved lengthwise\n1 cup chopped fresh cilantro\nWarm tortillas and salsa, for serving"
  },
{ "id":2,
  "name":"Greek Ribs", 
  "img":"./assets/recipes/recipe-2.jpeg", 
  "content":"Placeholder",
  "prepT":"10 min", 
  "cookT":"65 min", 
  "servings":"999 servings",
  "ingredients":"placeholder"
  },
{ "id":3,
  "name":"Vegetable Soup", 
  "img":"./assets/recipes/recipe-3.jpeg", 
  "content":"Finely dice the onions. Clean the carrots and kohlrabi and cut into strips. Sauté the vegetables in a little butter until translucent and pour in the stock. Simmer for about 5 minutes, then remove about half of the vegetables from the stock. Puree the remaining vegetables in the stock. Melt the cream cheese in the soup over a low heat and add the vegetable strips. Serve the soup sprinkled with the chopped parsley.",
  "prepT":"10 min", 
  "cookT":"10 min", 
  "servings":"4 servings",
  "ingredients": "5 carrot(s) \n 2 kohlrabi \n 2 metre-large onion(s) \n 200 g cream cheese, natural \n ¾ litre vegetable stock \n butter \n Parsley, chopped"
},
{"id":4,
  "name":"Banana Pancakes", 
  "img":"./assets/recipes/recipe-4.jpeg", 
  "content":"Separate the eggs. Mash or puree the bananas. Mix the flour, rolled oats, milk, egg yolk and bananas into a smooth batter. In a separate bowl, beat the egg whites until stiff and add a pinch of salt. Fold the egg whites into the smooth batter to make it nice and fluffy. Heat a large frying pan and brush with olive oil. Place small 'heaps' of batter in the pan. Fry the pancakes on both sides until golden brown. Enjoy while still warm!",
  "prepT":"999 min", 
  "cookT":"999 min", 
  "servings":"3 servings",
  "ingredients": "100 g flour \n 75 g rolled oats, fine \n 250 ml milk \n 2 metre-large banana(s) \n 3 egg(s) \n 1 pinch(es) of salt \n olive oil"
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
  "name":"Lemon potatoes with garlic yoghurt", 
  "img":"./assets/recipes/recipe-7.jpeg", 
  "content":"Cut the potatoes into small cubes. Grate the lemon zest and squeeze the fruit. Mix the potato cubes with the lemon zest and juice, oil and stock and place on a baking tray lined with baking foil. Sprinkle with sea salt and bake in a preheated oven at 180°C (fan oven 160°C) on the middle shelf for approx. 25-30 minutes, turning several times.\\n For the dip, crush the garlic, mix with the yoghurt, season with salt and pepper and serve with the lemon potatoes.",
  "prepT":"30 min", 
  "cookT":"30 min", 
  "servings":"4 servings",
  "ingredients": "8 midsized potato(s) \n 1 lemon(s), untreated \n 2 tbsp olive oil \n 50 ml vegetable stock, made with 3 pinches of instant powder \n 1 tbsp sea salt, coarse \n 2 tbsp parsley, chopped \n 2 clove(s) of garlic \n 300 g low-fat yoghurt \n salt \n pepper"
  },
{"id":8,
  "name":"Courgette pancakes", 
  "img":"./assets/recipes/recipe-8.jpeg", 
  "content":"Coarsely grate the courgettes on a grater, sprinkle with salt and leave to soak for approx. 15 minutes. Then drain the water and add 4-6 tbsp flour, chopped herbs to taste (parsley, dill, etc.) and eggs and season with salt and pepper. Heat the olive oil and fry the pancakes (approx. 2-3 minutes on each side). These courgette pancakes can be eaten hot or cold! Mix the yoghurt with the crushed garlic clove, salt and pepper and serve!",
  "prepT":"20 min", 
  "cookT":"15 min", 
  "servings":"3 servings",
  "ingredients": "500 g courgette \n 2 egg(s) \n 6 tbsp flour \n Herbs, chopped, to taste \n olive oil \n 1 pot of yoghurt \n 1 clove(s) of garlic \n salt and pepper"
  },
{"id":9,
  "name":"Egyptian Koshari", 
  "img":"./assets/recipes/recipe-9.jpeg", 
  "content":"Placeholder",
  "prepT":"20 min", 
  "cookT":"20 min", 
  "servings":"2 servings",
  "ingredients": "1 tin of chickpeas (150g) \n 1 tin of lentils (150g) \n 400g rice \n 150 g vermicelli (soup noodles) \n 150 g croissant pasta \\n Ingredients for the tomato and vinegar sauce \n 1 tin of strained tomatoes (250 g) \n 3 onions \n 4 garlic cloves \n 2 tbsp tomato puree \n 1 lemon (squeezed) \n 50 ml vinegar \n 1 dash of oil \\n Ingredients for seasoning \n 1 pinch of cumin \n 1 pinch of coriander (dried) \n 1 pinch of chilli (dried) \n 1 pinch of cardamom"
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
        document.getElementById("ingredients").textContent = recipe.ingredients;
}
