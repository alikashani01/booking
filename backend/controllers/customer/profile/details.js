import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';

export const getCustomerDetails = expressAsyncHandler(async(req, res) => {

    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('آرایشگری پیدا نشد');

    res.status(200).json({
        _id: customer._id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        fullName: customer.fullName,
        username: customer.username,
    });

});