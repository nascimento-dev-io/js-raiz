import el from '../lib/dom.js';

export default function CardCardapio(menu) {
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
      el('hr'),
    ],
  );
}
