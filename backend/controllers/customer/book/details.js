import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';
import Book from '../../../models/book/Book.js';

export const getBookDetails = expressAsyncHandler(async(req, res) => {

    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('آرایشگری پیدا نشد');

    const book = await Book.findById(req.params.id)
        .populate({
            path:"artist",
            model:"Artist",
            select: {
                fullName: 1,
                photo: 1,
            }
        })
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
        artist: book.artist,
        customer: book.customer,
        date: book.date,
        time: book.time,
        code: book.code,
        services: book.services,
    });

});