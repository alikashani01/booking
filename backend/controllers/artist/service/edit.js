import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';
import Service from '../../../models/artist/Service.js';


export const editService = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    const service = await Service.findById(req.params.id);
    
    if (!service) throw new Error('سرویسی پیدا نشد');

    Object.keys(req.body).forEach(key => {
        service[key] = req.body[key];
    });

    const updated = await service.save();

    res.json(updated)
    

    

});