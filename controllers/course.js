// controllers/course.js
// import Course from '../models/course.js';

// export const createCourse = async (req, res) => {
//   const { courseName, description, trainerName, level, tools, imgUrl, content } = req.body;

//   try {
//     const newCourse = new Course({
//       courseName,
//       description,
//       trainerName,
//       level,
//       tools,
//       imgUrl,
//       content,
//     });

//     await newCourse.save();
//     res.status(201).json({ success: true, message: 'Course created successfully', data: newCourse });
//   } catch (error) {
//     console.error('Error creating course:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };


// import Course from '../models/course.js';

// export const createCourse = async (req, res) => {
//   const { courseName, description, trainerName, level, tools, imgUrl, content } = req.body;

//   try {
//     // Basic validation
//     if (!courseName || !description || !trainerName || !level || !tools || !imgUrl || !content) {
//       return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     // Validate content structure
//     if (!Array.isArray(content) || content.length === 0) {
//       return res.status(400).json({ success: false, message: 'Content must be a non-empty array' });
//     }

//     // Create new course
//     const newCourse = new Course({
//       courseName,
//       description,
//       trainerName,
//       level,
//       tools,
//       imgUrl,
//       content,
//     });

//     // Save the course
//     await newCourse.save();

//     res.status(201).json({ 
//       success: true, 
//       message: 'Course created successfully', 
//       data: newCourse 
//     });

//   } catch (error) {
//     console.error('Error creating course:', error);

//     // More specific error handling
//     if (error.name === 'ValidationError') {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Validation error', 
//         errors: error.errors 
//       });
//     }

//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };


import Course from '../models/course.js';

export const createCourse = async (req, res) => {
  const { courseName, description, trainerName, level, tools, imgUrl, content } = req.body;

  try {
    // Basic validation
    if (!courseName || !description || !trainerName || !level || !tools || !imgUrl || !content) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Validate content structure
    if (!Array.isArray(content) || content.length === 0) {
      return res.status(400).json({ success: false, message: 'Content must be a non-empty array' });
    }

    // Validate submodules
    const isValidContent = content.every(section => 
      Array.isArray(section.submodules) && 
      section.submodules.every(submodule => 
        submodule.title && 
        submodule.description
      )
    );

    if (!isValidContent) {
      return res.status(400).json({ success: false, message: 'Invalid content structure' });
    }

    // Create new course
    const newCourse = new Course({
      courseName,
      description,
      trainerName,
      level,
      tools,
      imgUrl,
      content,
    });

    // Save the course
    await newCourse.save();

    res.status(201).json({ 
      success: true, 
      message: 'Course created successfully', 
      data: newCourse 
    });

  } catch (error) {
    console.error('Error creating course:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation error', 
        errors: error.errors 
      });
    }

    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};