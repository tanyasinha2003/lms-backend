
import authController from '../controllers/userController.js'
import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
const router = express.Router();

// Login route



// router.post('/login', authController.login);

router.post('/login', (req, res) => {
    res.send('Login endpoint reached');
});


// Route to register a new user
router.post('/register', authController.register);

router.get('/userDetails',verifyToken,authController.getUser);

export default router;