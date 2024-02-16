import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';
import Service from '../../../models/artist/Service.js';


export const addService = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    const { skill, title, description, hour, minute, price } = req.body;

    const serviceExists = await Service.findOne({ title, artist: artist._id });

    if (serviceExists) throw new Error('این عنوان قبلا به ثبت رسیده است');

    const service = new Service({
        artist: artist._id,
        skill,
        title,
        description,
        duration: {
            hour,
            minute
        },
        price,
    });

    await service.save();

    res.json('سرویس جدید با موفقیت اضافه شد');

});