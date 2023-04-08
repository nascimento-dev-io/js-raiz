import data from './data.js';

function extractTagName(tagName) {
  // div#card.card.cardapio
  return tagName.match(/^\w+/)[0];
}

function extractClassesAndId(tagName) {
  const regexp = /[\#\.]{1}([\w\-\_]*)/gi;

  return Array.from(tagName.matchAll(regexp)).reduce(
    (acc, current) => {
      if (current[0].startsWith('.')) {
        acc.classes.push(current[1]);
      } else {
        acc.id.push(current[1]);
      }
      return acc;
    },
    {
      classes: [],
      id: [],
    },
  );
}

const isString = (value) => typeof value === 'string';

function isChildren(childrens) {
  return Array.isArray(childrens) || typeof childrens === 'string';
}

function normalizeChildrens(childrens) {
  if (isString(childrens)) {
    return [document.createTextNode(childrens)];
  }

  if (Array.isArray(childrens)) {
    return childrens.map(($children) =>
      isString($children) ? document.createTextNode($children) : $children,
    );
  }
  return childrens;
}

function el(tagName, attrsArr, childrensArr) {
  /**
   * Se o segundo argumento (attrs) for um array, significa que não temos atributos
   * Se o segundo argumento (attrs) for uma string, significa que não temos atributos
   * Os filhos podem ser ou array ou string
   */
  const $element = document.createElement(extractTagName(tagName));
  const childrens = isChildren(attrsArr) ? attrsArr : childrensArr;

  const { id, classes } = extractClassesAndId(tagName);

  if (id.length) {
    $element.id = id.pop();
  }

  if (classes.length) {
    $element.classList.add(...classes);
  }

  const attrs = !isChildren(attrsArr) ? attrsArr : {};

  Object.entries(attrs).forEach(([key, value]) => {
    $element.setAttribute(key, value);
  });

  const $childrens = normalizeChildrens(childrens);

  $childrens.forEach(($children) => {
    $element.appendChild($children);
  });

  return $element;
}

function templateCardapio(menu) {
  return el(
    'div.cardapio',
    { style: 'background: #FEE0B3; color: #730A0D; padding: 8px; margin:8px' },
    [
      el('header', [el('h3', `${menu.title} - ${menu.restaurant.name}`)]),
      el('div.cardapio-body', [
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

$cardapios.appendChild($fragment);
