import expressAsyncHandler from 'express-async-handler';
import Artist from '../../models/artist/Artist.js';
import Customer from '../../models/Customer.js';
import Book from '../../models/book/Book.js';


export const submitBook = expressAsyncHandler(async(req, res) => {
    
    const { artist: bookingArtist, date, services, time } = req.body;
    const customer = await Customer.findById(req.customer._id);

    if (!customer) throw new Error('کاربری پیدا نشد');

    const artist = await Artist.findById(bookingArtist);

    if (!artist) throw new Error('آرایشگری پیدا نشد');
    
    const totalPrice = services.reduce((acc, item) => acc + item.price, 0 )
    
    const totalDuration = {
        hour: 0,
        minute: 0,
    };

    services.forEach(obj => {
        totalDuration.hour += obj.duration.hour;
        totalDuration.minute += obj.duration.minute;
    });

    if (totalDuration.minute >= 60) {
        totalDuration.hour += Math.floor(totalDuration.minute / 60);
        totalDuration.minute %= 60;
    }

    const generateRandomCode = (length) => {
        const characters = '0123456789';
        let code = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        return code;
    };
    
    let uniqueCode = generateRandomCode(5);
    
    let isDuplicateCode = true;
    
    while (isDuplicateCode) {
        const existingBook = await Book.findOne({ code: uniqueCode });
        if (!existingBook) {
            isDuplicateCode = false;
        } else {
            uniqueCode = generateRandomCode(4);
        };
    };

    const book = new Book({
        
        code: uniqueCode,
        
        customer: customer._id,
        customerInfo: {
            fullName: customer.fullName,
            username: customer.username,
        },

        artist: artist._id,
        artistInfo: {
            fullName: artist.fullName,
            username: artist.username,
        },

        services: req.body.services,
        
        total: {
            time: totalDuration,
            price: totalPrice,
        },

        date,
        
        time,

    });

    customer.books.push(book);
    artist.books.push(book);

    await customer.save();
    await artist.save();

    const createdBook = await book.save();

    res.json(createdBook);

});