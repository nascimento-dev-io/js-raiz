import data from './data.js';

function isChildren(childrens) {
  return Array.isArray(childrens) || typeof childrens === 'string';
}

function el(tagName, attrsArr, childrensArr) {
  /**
   * Se o segundo argumento (attrs) for um array, significa que não temos atributos
   * Se o segundo argumento (attrs) for uma string, significa que não temos atributos
   * Os filhos podem ser ou array ou string
   
  */

  const $element = document.createElement(tagName);
  const childrens = isChildren(attrsArr) ? attrsArr : childrensArr;

  const attrs = !isChildren(attrsArr) ? attrsArr : {};

  Object.entries(attrs).forEach(([key, value]) => {
    $element.setAttribute(key, value);
  });

  if (typeof childrens === 'string') {
    const text = document.createTextNode(childrens);
    $element.appendChild(text);
  } else {
    childrens.forEach(($children) => {
      $element.appendChild($children);
    });

    // for (const $children of childrensArr) {
    //   $element.appendChild($children);
    // }
  }

  return $element;
}

function templateCardapio(menu) {
  return el(
    'div',
    { style: 'background: #FEE0B3; color: #730A0D; padding: 8px; margin:8px' },
    [
      el('header', [el('h3', `${menu.title} - ${menu.restaurant.name}`)]),
      el('div', [
        el(
          'ul',
          menu.sections.map((section) => el('li', `${section.title}`)),
        ),
      ]),
    ],
  );
}

const $cardapios = document.querySelector('.cardapios');

const $fragment = document.createDocumentFragment();

Array.from(data.menus.values())
  .slice(3)
  .map((menu) => ({
    ...menu,
    restaurant: { name: data.restaurants.get(menu.restaurantId).name },
  }))
  .forEach((menu) => $fragment.appendChild(templateCardapio(menu)));

// $cardapios.insertAdjacentHTML('beforeend', templateCardapios);
$cardapios.appendChild($fragment);
