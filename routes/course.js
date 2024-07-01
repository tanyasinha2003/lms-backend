// routes/course.js
import express from "express";
import Course from "../models/video.js"; // Ensure you have a Course model
import upload from '../middlewares/upload.js';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();

// Update course with file upload
router.put('/:id', upload.single('file'), async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const updatedData = {
      courseName: req.body.courseName,
      description: req.body.description,
      trainerName: req.body.trainerName,
      level: req.body.level,
      tools: req.body.tools,
      content: typeof req.body.content === 'string' ? JSON.parse(req.body.content) : req.body.content, // Parse content if it's a JSON string
    };

    // If a file is uploaded, update the file URL
    if (req.file) {
      // Delete the old image from Cloudinary if it exists
      if (course.imgUrl) {
        const publicId = course.imgUrl.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId, { invalidate: true });
      }

      updatedData.imgUrl = req.file.path; // Cloudinary URL
    }

    // Update the course in the database
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// router.put('/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const updatedCourse = req.body;

//       // Find the course by ID and update it with the new data
//       const course = await Course.findByIdAndUpdate(id, updatedCourse, { new: true });

//       if (!course) {
//         return res.status(404).json({ message: 'Course not found' });
//       }

//       res.json(course);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

// router.put("/:id", async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);

//     const data = {
//       courseName: req.body.courseName,
//       description: req.body.description,
//       trainerName: req.body.trainerName,
//       level: req.body.level,
//       tools: req.body.tools,
//       imgUrl: req.body.imgUrl,
//       content: req.body.content,
//     }

//     // modify image
//     if(req.body.imgUrl != ''){
//       const ImgId = currentCourse.imgUrl.
//     }
//   } catch (error) {}
// });

// POST /api/courses
router.post("/", async (req, res) => {
  try {
    const {
      courseName,
      description,
      trainerName,
      level,
      tools,
      imgUrl,
      content,
    } = req.body;

    const newCourse = new Course({
      courseName,
      description,
      trainerName,
      level,
      tools,
      imgUrl,
      content,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
