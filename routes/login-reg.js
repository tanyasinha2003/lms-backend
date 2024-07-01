
import userController from '../controllers/userController.js'
import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
const router = express.Router();

// Login route



router.post('/login', userController.login);


// Route to register a new user
router.post('/register', userController.register);

router.get('/userDetails',verifyToken,userController.getUser);

export default router;