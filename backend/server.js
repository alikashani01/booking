import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errors.js';
import artistBookRoutes from './routes/artist/book.js';
import artistProfileRoutes from './routes/artist/profile.js';

import artistServiceRoutes from './routes/artist/service.js';
import bookingRoutes from './routes/booking/booking.js';
import customerBookRoutes from './routes/customer/book.js';
import customerProfileRoutes from './routes/customer/profile.js';



dotenv.config();
connectDB();
const app = express();


app.use(cors());
app.use(express.json());



// Artist:
const API_ARTIST = '/api/artist';
const artistRoutes = {
    profile: `${API_ARTIST}/profile`,
    service: `${API_ARTIST}/service`,
    book: `${API_ARTIST}/book`,

};
app.use(artistRoutes.profile, artistProfileRoutes);
app.use(artistRoutes.service, artistServiceRoutes);
app.use(artistRoutes.book, artistBookRoutes);



// Customer:
const API_CUSTOMER = '/api/customer';
app.use(`${API_CUSTOMER}/profile`, customerProfileRoutes);
app.use(`${API_CUSTOMER}/book`, customerBookRoutes);

// Booking:
const API_BOOKING = '/api/booking';
app.use(API_BOOKING, bookingRoutes);
////////////////////////////////////


if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    });
};

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(PORT, console.log(`Server connected: ${PORT}`))