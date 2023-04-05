import data from './restaurants.js';

// const restaurants = new Map(
//   data.map(({ menus, ...restaurant }) => [
//     restaurant.id,
//     { ...restaurant, menus: menus.map((menu) => menu.id) },
//   ]),
// );

// const menus = new Map(
//   data.flatMap((restaurant) =>
//     restaurant.menus.map((menu) => [
//       menu.id,
//       { ...menu, restaurantId: restaurant.id },
//     ]),
//   ),
// );

/**
 *  map -> [ [ [ '1f00e6c6-6c05-4e45-9c19-c22f05ebfb64',{ menu } ] ]
 * flatMap -> [['1f00e6c6-6c05-4e45-9c19-c22f05ebfb64', { menu }] ]
 * */

// Com reduce
const newData = data.reduce(
  (acc, { menus, ...restaurant }) => {
    acc.restaurants.push([
      restaurant.id,
      {
        ...restaurant,
        menus: menus.map((menu) => menu.id),
      },
    ]);

    acc.menus = [
      ...acc.menus,
      ...menus.map((menu) => [
        menu.id,
        { ...menu, restaurantId: restaurant.id },
      ]),
    ];
    return acc;
  },
  {
    restaurants: [],
    menus: [],
  },
);

const restaurants = new Map(newData.restaurants);
const menus = new Map(newData.menus);

export default {
  restaurants,
  menus,
};
