import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
  },
  author: {
    type: String,
    required: [true, 'author is required'],
  },
  image_url: {
    type: String,
    default: './public/defaultuseravatar.png',
  },
  tags: {
    type: [String],
    default: 'new',
  },
});

export default mongoose.model('Book', bookSchema);
