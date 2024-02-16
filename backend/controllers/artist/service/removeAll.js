import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';
import Service from '../../../models/artist/Service.js';


export const removeAllServices = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    await Service.deleteMany();

    res.json('تمام سرویس‌ها حذف شدند');

});