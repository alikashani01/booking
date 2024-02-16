import express from 'express';
import { getBookDetails } from '../../controllers/customer/book/details.js';
import { getBooks } from '../../controllers/customer/book/list.js';
import { protectCustomer } from '../../middlewares/authentication.js';
const router = express.Router();

router.route('/details/:id').get(protectCustomer, getBookDetails);
router.route('/list').get(protectCustomer, getBooks);


export default router;