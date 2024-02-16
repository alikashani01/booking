import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema, model } = mongoose;

const schedule = [
    {
        day: { type: String, default: 'شنبه'},
        isClose: { type: Boolean, default: false },
        times: [],
    },
    {
        day: { type: String, default: 'یک‌شنبه'},
        isClose: { type: Boolean, default: false },
        times: [],
    },
    {
        day: { type: String, default: 'دوشنبه'},
        isClose: { type: Boolean, default: false },
        times: [],
    },
    {
        day: { type: String, default: 'سه‌شنبه'},
        isClose: { type: Boolean, default: false },
        times: [],
    },
    {
        day: { type: String, default: 'چهارشنبه'},
        isClose: { type: Boolean, default: false },
        times: [],
    },
    {
        day: { type: String, default: 'پنج‌شنبه'},
        isClose: { type: Boolean, default: false },
        times: [],
    },
    {
        day: { type: String, default: 'جمعه'},
        isClose: { type: Boolean, default: false },
        times: [],
    },
]

const ArtistSchema = new Schema({
    
    firstName: { type: String },
    lastName: { type: String },
    fullName: { type: String }, 
    password: { type: String },
    username: { type: String, required: true },
    
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],

    salon: {
        title: { type: String },
        state: { type: String },
        city: { type: String },
        address: { type: String },
    },

    services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
    
    schedule: [schedule],

    isActive: { type: Boolean, required: true, default: false },

}, { timestamps: true });


ArtistSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
ArtistSchema.pre('save', async function(next) {
    if (!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

const Artist = model('Artist', ArtistSchema);
export default Artist;