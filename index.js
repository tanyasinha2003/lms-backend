import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/error.js';
import videoRoutes from './routes/video.js';
import signUploadRoutes from './routes/sign-upload.js';
import courseRoutes from './routes/course.js';
import Course from './models/video.js';
import loginRegRoutes from './routes/login-reg.js';

dotenv.config();

const app = express();
const port = process.env.VITE_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/videos', videoRoutes);
app.post('/api/sign-upload', signUploadRoutes);
app.post('/api/courses', courseRoutes);
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/", async (req, res) => {
  res.send("hello");
});

// app.post("/api", loginRegRoutes);

app.post("/api", (req, res) => {
  res.send("api thing");
});

// Error handler middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
