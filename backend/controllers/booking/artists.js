import expressAsyncHandler from 'express-async-handler';
import Artist from '../../models/artist/Artist.js';


export const getArtists = expressAsyncHandler(async(req, res) => {

    const artists = await Artist.find({});

    res.json(artists);

});
