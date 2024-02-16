import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const ServiceSchema = new Schema({
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist '},
    skill: { type: String, },
    title: { type: String, }, 
    description: { type: String, }, 
    price: { type: Number, },
    duration: {
        hour: { type: Number, },
        minute: { type: Number, },
    },
}, { timestamps: true });


const Service = model('Service', ServiceSchema);
export default Service;