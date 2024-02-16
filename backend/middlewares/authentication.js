import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import Artist from '../models/artist/Artist.js';
import Customer from '../models/Customer.js';


export const protectArtist = expressAsyncHandler(async(req, res, next) => {
    
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1];
            console.log("TOKEN:",token);
            const decoded = jwt.verify(token, "111111");
            req.artist = await Artist.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized');
        };
    };

    if (!token) {
        res.status(401);
        throw new Error('Authorization Token not found!');
    };
    
});

export const protectCustomer = expressAsyncHandler(async(req, res, next) => {
    
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, "111111");
            req.customer = await Customer.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized');
        };
    };

    if (!token) {
        res.status(401);
        throw new Error('Authorization Token not found!');
    };
    
});

