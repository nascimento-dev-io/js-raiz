import data from './data.js';

const $cardapios = document.querySelector('.cardapios');

function templateCardapio(menu) {
  //   return `
  //   <div class="cardapio">
  //   <header>
  //     <h3> ${menu.title} - ${menu.restaurant.name} </h3>
  //   </header>
  //   <div class="cardapio-body">
  //     <ul>
  //       ${menu.sections.map((section) => `<li> ${section.title}</li>`).join('')}
  //     </ul>
  //   </div>
  // </div>
  //   `;

  const $cardapio = document.createElement('div');
  $cardapio.classList.add('cardapio');

  const $header = document.createElement('header');
  const $menuTitle = document.createElement('h3');
  $menuTitle.textContent = `${menu.title} - ${menu.restaurant.name}`;
  $header.appendChild($menuTitle);

  $cardapio.appendChild($header);

  const $cardapioBody = document.createElement('div');
  $cardapioBody.classList.add('cardapio-body');

  const $menuList = document.createElement('ul');

  menu.sections.forEach((section) => {
    const $menuItem = document.createElement('li');
    $menuItem.textContent = section.title;
    $menuList.appendChild($menuItem);
  });

  $cardapioBody.appendChild($menuList);
  $cardapio.appendChild($cardapioBody);

  return $cardapio;
}

const $fragment = document.createDocumentFragment();
Array.from(data.menus.values())
  .slice(3)
  .map((menu) => ({
    ...menu,
    restaurant: { name: data.restaurants.get(menu.restaurantId).name },
  }))
  .forEach((cardapioElement) =>
    $fragment.appendChild(templateCardapio(cardapioElement)),
  );

// $cardapios.insertAdjacentHTML('beforeend', templateCardapios);
$cardapios.appendChild($fragment);
