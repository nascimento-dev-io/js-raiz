import http from 'http';
import fs from 'fs';
import ejs from 'ejs';

import data from './assets/data.js';
import el, { Fragment, renderServer } from './assets/lib/dom.js';
import CardCardapio from './assets/components/CardCardapio.js';

const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');

  if (request.url.match(/\.js$/)) {
    const fileStream = fs.createReadStream(`./src/assets${request.url}`);
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
    });

    fileStream.pipe(response);
  } else {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });

    const menus = Array.from(data.menus.values())
      .slice(0, 3)
      .map((menu) => ({
        ...menu,
        restaurant: { name: data.restaurants.get(menu.restaurantId).name },
      }));

    const templateData = {
      App() {
        return renderServer(el(Fragment, menus.map(CardCardapio)));
      },
    };

    ejs.renderFile('./src/templates/index.ejs', templateData, (err, str) => {
      if (err) console.error(err);

      response.write(str);
      response.end();
    });
  }
});

server.listen(3003, (err) => {
  if (err) console.log(err);
  console.log('server running on port 3003');
});
