import express from 'express';
import { getArtists } from '../../controllers/booking/artists.js';
import { getFreeTimes } from '../../controllers/booking/date.js';
import { getServices } from '../../controllers/booking/services.js';
import { submitBook } from '../../controllers/booking/submit.js';
import { protectCustomer } from '../../middlewares/authentication.js';
const router = express.Router();

router.route('/artists').get(getArtists);
router.route('/services/:artist').get(getServices);
router.route('/date').post(getFreeTimes);
router.route('/submit').post(protectCustomer, submitBook);

export default router;