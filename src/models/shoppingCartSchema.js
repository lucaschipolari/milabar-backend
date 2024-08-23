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
});

// ShoppingCart.pre('save', function (next) {
//   this.totalPrice = this.price * this.quantity;
//   next();
// });

export default mongoose.model('ShoppingCart', ShoppingCart);
