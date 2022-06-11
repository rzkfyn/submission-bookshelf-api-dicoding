import { getAllBooksHandler, uploadNewBookHandler } from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: uploadNewBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
];

export default routes;
