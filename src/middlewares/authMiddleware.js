import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository.js';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userRepository.getUserById(decoded.id);

        if (!user) {
            return res.status(401).send('Access denied. User not found.');
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(400).send('Invalid token.');
    }
};
export default authMiddleware;