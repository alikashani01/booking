import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';
import Book from '../../../models/book/Book.js';

export const getBookDetails = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    const book = await Book.findById(req.params.id)
        .populate({
            path:"customer",
            model:"Customer",
            select: {
                fullName: 1,
                photo: 1,
            }
        })
    if (!book) throw new Error('نوبتی پیدا نشد');

    res.status(200).json({
        _id: book._id,
        artist: book.artist,
        artistInfo: book.artistInfo,
        customer: book.customer,
        customerInfo: book.customerInfo,
        date: book.date,
        time: book.time,
        code: book.code,
        services: book.services,
    });

});