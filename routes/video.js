import express from 'express';
import { addResource } from '../controllers/video.js';

const router = express.Router();

router.post('/', addResource);

export default router;
