import mongoose from 'mongoose';

const generateUserId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const UserSchema = new mongoose.Schema({
  user_id: { type: String, default: generateUserId, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date_of_registration: { type: Date, default: Date.now },
  active_hours: { type: Number, default: 0 },
  courses: [{
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    no_of_modules_completed: { type: Number, default: 0 },
    date_of_course_enrollment: { type: Date, default: Date.now },
    total_no_of_modules: { type: Number, default: 0 }
  }],
  region: { type: String, default:'India' },
  userType: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    required: true  
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
