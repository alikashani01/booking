import express from 'express';
import { protectArtist } from '../../middlewares/authentication.js';
import { addService } from '../../controllers/artist/service/add.js';
import { getServices } from '../../controllers/artist/service/list.js';
import { getServiceDetails } from '../../controllers/artist/service/details.js';
import { removeService } from '../../controllers/artist/service/remove.js';
import { removeAllServices } from '../../controllers/artist/service/removeAll.js';
import { editService } from '../../controllers/artist/service/edit.js';
const router = express.Router();

router.route('/list').get(protectArtist, getServices);
router.route('/details/:id').get(protectArtist, getServiceDetails);
router.route('/add').post(protectArtist, addService);
router.route('/edit/:id').patch(protectArtist, editService);
router.route('/remove/:id').delete(protectArtist, removeService);
router.route('/remove-all').delete(protectArtist, removeAllServices);

export default router;