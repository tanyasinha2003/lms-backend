// import Resource from "../models/video.js";

// export const addResource = async (req, res, next) => {
//   const { imgUrl, videoUrl } = req.body;

//   if (!imgUrl || !videoUrl) {
//     res.status(400);
//     return next(new Error("imgurl and videourl required"));
//   }
//   try {
//     const resource = new Resource({
//       imgUrl,
//       videoUrl,
//     });
//     await resource.save();

//     res.status(201).json({success: true, message: 'Resource URLs saved successfully', resource }); 
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//     next(error);
//   }
// };
// import Resource from '../models/video.js';

// export const addResource = async (req, res, next) => {
//     const { imgUrl, videoUrl } = req.body;

//     try {
//         const resource = new Resource({
//             imgUrl,
//             videoUrl,
//         });

//         await resource.save();

//         res.status(201).json({ success: true, message: 'Resource URLs saved successfully', resource });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Failed to save resource URLs' });
//     }
// };
// controllers/video.js
// import Resource from '../models/video.js';

// export const addResource = async (req, res, next) => {
//   const { imgUrl, videoUrl } = req.body;

//   if (!imgUrl || !videoUrl) {
//     res.status(400).json({ success: false, message: 'imgUrl and videoUrl are required' });
//     return;
//   }

//   try {
//     const newResource = new Resource({
//       imgUrl,
//       videoUrl,
//     });

//     await newResource.save();

//     res.status(201).json({ success: true, message: 'Resource created successfully', data: newResource });
//   } catch (error) {
//     console.error('Error saving resource:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };

// controllers/video.js
import Resource from '../models/video.js';

export const addResource = async (req, res, next) => {
  const { imgUrl, videoUrl } = req.body;

  if (!imgUrl || !videoUrl) {
    return res.status(400).json({ success: false, message: 'imgUrl and videoUrl are required' });
  }

  try {
    const newResource = new Resource({
      imgUrl,
      videoUrl,
    });

    await newResource.save();

    res.status(201).json({ success: true, message: 'Resource created successfully', data: newResource });
  } catch (error) {
    console.error('Error saving resource:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
