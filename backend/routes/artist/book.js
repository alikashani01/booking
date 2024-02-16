import express from 'express';
import { getBookDetails } from '../../controllers/artist/book/details.js';
import { getBooks } from '../../controllers/artist/book/list.js';
import { protectArtist } from '../../middlewares/authentication.js';
const router = express.Router();

router.route('/details/:id').get(protectArtist, getBookDetails);
router.route('/list').get(protectArtist, getBooks);


export default router;