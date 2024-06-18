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
