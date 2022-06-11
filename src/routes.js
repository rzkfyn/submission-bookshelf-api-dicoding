import { uploadNewBookHandler } from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: uploadNewBookHandler,
  },
];

export default routes;
