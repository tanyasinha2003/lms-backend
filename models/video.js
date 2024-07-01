// import mongoose from 'mongoose';

// const resourceSchema = new mongoose.Schema(
//     {
//         imgUrl: {
//             type: String,
//             required: true,
//         },
//         videoUrl: {
//             type: String,
//             required: true,
//         },
//     },
//     {
//         timestamps: true, // Automatically adds createdAt and updatedAt fields
//     }
// );

// const Resource = mongoose.model('Resource', resourceSchema);

// export default Resource;
// models/resource.js
// import mongoose from 'mongoose';

// const resourceSchema = new mongoose.Schema(
//   {
//     imgUrl: {
//       type: String,
//       required: true,
//     },
//     videoUrl: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     collection: 'resources', // Specify collection name
//   }
// );

// const Resource = mongoose.model('Resource', resourceSchema);

// export default Resource;
// models/Course.js
// import mongoose from 'mongoose';

// const contentSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     pdfUrl: String,
//     videoUrl: String,
// });

// const courseSchema = new mongoose.Schema({
//     courseName: { type: String, required: true },
//     description: { type: String, required: true },
//     trainerName: { type: String, required: true },
//     level: { type: String, required: true },
//     tools: { type: String, required: true },
//     imgUrl: { type: String, required: true },
//     content: [contentSchema],
// }, {
//     timestamps: true,
// });

// const Course = mongoose.model('Course', courseSchema);

// export default Course;

// import mongoose from 'mongoose';

// const contentSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   pdfUrl: { type: String },
//   videoUrl: { type: String },
// });

// const courseSchema = new mongoose.Schema({
//   courseName: { type: String, required: true },
//   description: { type: String, required: true },
//   trainerName: { type: String, required: true },
//   level: { type: String, required: true },
//   tools: { type: String, required: true },
//   imgUrl: { type: String, required: true },
//   content: [contentSchema],
// }, {
//   timestamps: true,
// });

// const Course = mongoose.model('Course', courseSchema);

// export default Course;


// import mongoose from 'mongoose';

// const submoduleSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   pdfUrl: { type: String },
//   videoUrl: { type: String },
// });

// const contentSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   pdfUrl: { type: String },
//   videoUrl: { type: String },
//   submodules: [submoduleSchema],
// });

// const courseSchema = new mongoose.Schema({
//   courseName: { type: String, required: true },
//   description: { type: String, required: true },
//   trainerName: { type: String, required: true },
//   level: { type: String, required: true },
//   tools: { type: String, required: true },
//   imgUrl: { type: String, required: true },
//   content: [contentSchema],
// }, {
//   timestamps: true,
// });

// const Course = mongoose.model('Course', courseSchema);

// export default Course;

// import mongoose from 'mongoose';

// const submoduleSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   pdfUrl: { type: String },
//   videoUrl: { type: String },
// });

// const contentSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   pdfUrl: { type: String },
//   videoUrl: { type: String },
//   submodules: [submoduleSchema],
// });

// const courseSchema = new mongoose.Schema({
//   courseName: { type: String, required: true },
//   description: { type: String, required: true },
//   trainerName: { type: String, required: true },
//   level: { type: String, required: true },
//   tools: { type: String, required: true },
//   imgUrl: { type: String, required: true },
//   content: [contentSchema],
// }, {
//   timestamps: true,
// });

// const Course = mongoose.model('Course', courseSchema);

// export default Course;


import mongoose from 'mongoose';

const SubmoduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  docUrl: { type: String }, // Adjust to match Cloudinary's URL for documents
  videoUrl: { type: String }, // Adjust to match Cloudinary's URL for videos
});

const ContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  docUrl: { type: String }, // Adjust to match Cloudinary's URL for documents
  videoUrl: { type: String }, // Adjust to match Cloudinary's URL for videos
  submodules: [SubmoduleSchema],
});

const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  description: { type: String, required: true },
  trainerName: { type: String, required: true },
  level: { type: String, required: true },
  tools: { type: String, required: true },
  imgUrl: { type: String },
  content: [ContentSchema],
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', CourseSchema);

export default Course;
