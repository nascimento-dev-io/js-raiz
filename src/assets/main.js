import data from './data.js';

function templateCardapio(menu) {
  return `
  <div class="cardapio">
  <header>
    <h3> ${menu.title} - ${menu.restaurant.name} </h3>
  </header>
  <div class="cardapio-body">
    <ul>
      ${menu.sections.map((section) => `<li> ${section.title}</li>`).join('')}
    </ul>
  </div>
</div>
  `;
}

const templateCardapios = Array.from(data.menus.values())
  .slice(3)
  .map((menu) => ({
    ...menu,
    restaurant: { name: data.restaurants.get(menu.restaurantId).name },
  }))
  .map(templateCardapio)
  .join('');

const $cardapios = document.querySelector('.cardapios');
$cardapios.insertAdjacentHTML('beforeend', templateCardapios);
