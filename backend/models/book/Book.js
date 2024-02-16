import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const BookSchema = new Schema({
    
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },

    code: { type: String, required: true },
    status: { type: String, default: 'فعال', },

    services: [],

    total: {
        time: {
            hour: { type: Number },
            minute: { type: Number },
        },
        price: { type: Number },
    },

    paymentInfo: {
        type: { type: String, default: 'حضوری' },
        result: {},
    },

    date: { type: String }, // 1402/11/30
    time: { type: Number },
    
    dates: {
        book: {
            dayName: {},
            dayNumber: {},
            month: {},
            year: {},
        },
        startedAt: {},
        endedAt: {},
        canceledAt: {},
    },

    elapsedTime: {
        hour: { type: Number },
        minute: { type: Number },
    },

}, { timestamps: true });

const Book = model('Book', BookSchema);
export default Book;