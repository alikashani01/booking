import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema, model } = mongoose;


const CustomerSchema = new Schema({
    
    fullName: { type: String },
    location: {
        state: { type: String },
        city: { type: String },
    },
    username: { type: String, required: true },
    

    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],

}, { timestamps: true });


CustomerSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
CustomerSchema.pre('save', async function(next) {
    if (!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

const Customer = model('Customer', CustomerSchema);
export default Customer;