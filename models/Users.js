import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  progress: { type: mongoose.Schema.Types.ObjectId, ref: 'Progress' }
}, { timestamps: true });

export default mongoose.model('User', userSchema);