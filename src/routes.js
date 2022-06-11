import { getAllBooksHandler, getBookByIdHandler, uploadNewBookHandler } from './handler.js';

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
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
];

export default routes;
