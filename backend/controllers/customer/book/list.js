import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';
import Book from '../../../models/book/Book.js';

export const getBooks = expressAsyncHandler(async(req, res) => {

    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('کاربری پیدا نشد');

    const books = await Book.find({ customer: customer._id })
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

    res.json(books || []);
    
});