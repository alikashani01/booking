import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/artist/Artist.js';
import Book from '../../../models/book/Book.js';

export const getBooks = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('آرایشگری پیدا نشد');

    const books = await Book.find({ artist: artist._id })
        .populate({
            path:"customer",
            model:"Customer",
            select: {
                fullName: 1,
                photo: 1,
            }
        })

    res.json(books);
    
});