import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import loginRegRoutes from './routes/login-reg.js';

dotenv.config();

const app = express();
const port = process.env.VITE_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


app.use("/api", loginRegRoutes);

