import expressAsyncHandler from 'express-async-handler';
import Service from '../../models/artist/Service.js';


export const getServices = expressAsyncHandler(async(req, res) => {

    const services = await Service.find({ artist: req.params.artist });

    res.json(services);

});