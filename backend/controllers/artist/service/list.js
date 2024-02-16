import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';
import Service from '../../../models/artist/Service.js';


export const getServices = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    const services = await Service.find({ artist: artist._id });
    
    if (!services) throw new Error('سرویسی پیدا نشد');

    res.json(services);

});