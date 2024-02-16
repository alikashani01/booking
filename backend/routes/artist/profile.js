import express from 'express';
import { getArtistDetails } from '../../controllers/artist/profile/details.js';
import {protectArtist } from '../../middlewares/authentication.js';
import { register } from '../../controllers/artist/register.js';
const router = express.Router();

router.route('/details').get(protectArtist, getArtistDetails);
router.route('/register').post(register);

export default router;