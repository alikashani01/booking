import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';
import Service from '../../../models/artist/Service.js';


export const getServiceDetails = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    const service = await Service.findById(req.params.id);
    
    if (!service) throw new Error('سرویسی پیدا نشد');

    res.json(service);

});