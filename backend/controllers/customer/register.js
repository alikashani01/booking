import expressAsyncHandler from 'express-async-handler';
import generateToken from '../../utils/generateToken.js';
import Customer from '../../models/Customer.js';


export const register = expressAsyncHandler(async(req, res) => {

    const customer = await Customer.findOne({username:req.body.username});
    
    if (customer) {
        res.json({
            _id:customer._id,
            token: generateToken(customer._id)
        })
    } else {
        const newCustomer = await Customer.create({
            fullName:"هانیه",
            username: req.body.username,
        })
        res.json({
            _id:newCustomer._id,
            token: generateToken(newCustomer._id)
        })
    }
    
});