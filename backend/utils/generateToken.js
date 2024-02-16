import jwt from 'jsonwebtoken';


const generateToken = ((id) => {
    return jwt.sign(
        { id },
        "111111",
        { 'expiresIn': '7d' }
    );
});
export default generateToken;