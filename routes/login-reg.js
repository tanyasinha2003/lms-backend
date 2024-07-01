
import authController from '../controllers/userController.js'
import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
const router = express.Router();

// Login route
router.post('/login', authController.login);

// Route to register a new user
router.post('/register', authController.register);

router.get('/userDetails',verifyToken,authController.getUser);

export default router;