import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';


export const getArtistDetails = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    res.status(200).json({
        _id: artist._id,
        firstName: artist.firstName,
        lastName: artist.lastName,
        fullName: artist.fullName,
        username: artist.username,
        services: artist.services,
    });

});