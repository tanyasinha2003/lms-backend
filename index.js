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
app.use('/api/videos', videoRoutes);
app.use('/api/sign-upload', signUploadRoutes);
app.use('/api/courses', courseRoutes);
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

app.use("/api", loginRegRoutes);

// Add this to your index.js or server.js file

app.get('/api/test-db-connection', async (req, res) => {
  try {
    const connectionPromise = connectDB(); // Start connecting to the database

    // Set a timeout for the database connection attempt
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Database connection timed out'));
      }, 5000); // Timeout after 10 seconds (adjust as needed)
    });

    // Race between the connection attempt and the timeout
    await Promise.race([connectionPromise, timeoutPromise]);

    res.status(200).json({ message: 'Database connected successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed', error: error.message });
  }
});

// Error handler middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
