import expressAsyncHandler from 'express-async-handler';
import Service from '../../models/artist/Service.js';
import Customer from '../../models/Customer.js';
import Artist from '../../models/artist/Artist.js';
import Book from '../../models/book/Book.js';


export const getFreeTimes = expressAsyncHandler(async(req, res) => {

    const { day, artist, services, customer } = req.body;
    
    const customerInfo = await Customer.findById(customer);
    if (!customerInfo) throw new Error('کاربری پیدا نشد');
    
    const artistInfo = await Artist.findById(artist);
    if (!artistInfo) throw new Error('آرایشگری پیدا نشد');
    
    // ...

    res.json([9,10,11,12,13,14,15]);
 
});