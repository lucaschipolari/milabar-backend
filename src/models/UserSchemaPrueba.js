import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  city: { type: String, required: false, trim: true },
  state: { type: String, required: false, trim: true },
  country: { type: String, required: false, trim: true },
  latitude: { type: Number, required: false },
  longitude: { type: Number, required: false },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    orderCount: { type: Number, default: 0 },
    avatar: {
      type: String,
      default:
        'https://th.bing.com/th/id/OIP.oSx6vV5h9-RQFuWZr1e7jQHaHa?rs=1&pid=ImgDetMain',
    },
    isEnabled: { type: Boolean, default: true },
    location: locationSchema,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', userSchema);
