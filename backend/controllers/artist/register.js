import expressAsyncHandler from 'express-async-handler';
import Artist from '../../models/artist/Artist.js';
import generateToken from '../../utils/generateToken.js';


export const register = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findOne({username:req.body.username});
    
    if (artist) {
        res.json({
            _id:artist._id,
            token: generateToken(artist._id)
        })
    } else {
        const newArtist = await Artist.create({
            fullName:"مهتاب محبی",
            username: req.body.username,
        })
        res.json({
            _id:newArtist._id,
            token: generateToken(newArtist._id)
        })
    }
    
});