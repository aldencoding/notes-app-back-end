const handler = require('./handler.js');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler:handler.getNoteHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler:handler.addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
  },
];
module.exports = routes;