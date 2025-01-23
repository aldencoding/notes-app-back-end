const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production'?'localhost':'0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  console.log(`Sever berjalan pada ${server.info.uri}`);

  server.route(routes);

  await server.start();
};

init();
