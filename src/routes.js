import {
  getAllBooksHandler, getBookByIdHandler, updateBookByIdHandler, uploadNewBookHandler,
} from './handler.js';

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
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookByIdHandler,
  },
];

export default routes;
