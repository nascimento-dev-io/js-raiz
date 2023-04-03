import http from 'http';
import fs from 'fs';

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
    response.write(`<!DOCTYPE html>
    <html >
    <head>
      <title>Js Raiz</title>
    </head>
    <body>
     <h1>Hello Js Raiz!!</h1>
      
      <script type='module' src="main.js" ></script>
    </body>
    </html>`);
    response.end();
  }
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log('server running on port 9000');
});
