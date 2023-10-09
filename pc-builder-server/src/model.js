import mongoose from "mongoose";

// Define the schema for your product
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['In Stock', 'Out of Stock'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl:{
    type:String,
    required:true
  },
  keyFeatures: {
    brand:{type:String},
    model:{type:String},
    specification:{type:String},
    port:{type:String},
    type:{type:String},
    resolution:{type:String},
    voltage:{type:String},
   
  },
  individualRating: {
    type: Number,
    min: 0,
    max: 5,
  },
  averageRating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviews: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      comment: String,
    },
  ],
});

// Create a model for the product schema
const Product = mongoose.model('Product', productSchema);

export default Product;
