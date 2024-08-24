import mongoose from 'mongoose';

const ShoppingCart = new mongoose.Schema({
  products: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],

  total: {
    type: Number,
    required: true,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
  },
});

export default mongoose.model('ShoppingCart', ShoppingCart);
