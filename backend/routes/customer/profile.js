import express from 'express';
import { getCustomerDetails } from '../../controllers/customer/profile/details.js';
import { register } from '../../controllers/customer/register.js';
import { protectCustomer } from '../../middlewares/authentication.js';
const router = express.Router();

router.route('/details').get(protectCustomer, getCustomerDetails);
router.route('/register').post(register);

export default router;