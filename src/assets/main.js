import CardCardapio from './components/CardCardapio.js';
import data from './data.js';

const $cardapios = document.querySelector('.cardapios');

const $fragment = document.createDocumentFragment();

Array.from(data.menus.values())
  .slice(3)
  .map((menu) => ({
    ...menu,
    restaurant: { name: data.restaurants.get(menu.restaurantId).name },
  }))
  .forEach((menu) => console.log(CardCardapio(menu)));

// $cardapios.appendChild($fragment);
