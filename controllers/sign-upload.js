import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.VITE_CLOUDINARY_API_KEY,
    api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
   secure:true
})

export const generateSignature = async (req, res, next) => {
  const { folder } = req.body;

  if (!folder) {
    res.status(400);
    return next(new Error("folder required"));
  }
  try {
    const timestamp = Math.round((new Date).getTime()/1000);

    const signature = cloudinary.utils.api_sign_request({
        timestamp,
        folder
    },import.meta.env.VITE_CLOUDINARY_API_SECRET);
    res.status(200).json({ timestamp,signature });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};
