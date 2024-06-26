//  import mongoose from "mongoose";

// const ProductSchema = mongoose.Schema({
// id: Number, // Change "UserEmail" to "useremail"
// category: String,
// image:String,
// price: Number,
// title: String,
// description: String,
// discount: Number,
// discountedPrice: Number,
// date: Date,
// rating:Number
// });

// const ProductModel = mongoose.model("ProductData", ProductSchema);
// export default ProductModel;


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  category: String,
  image: String,
  price: Number,
  title: String,
  description: String,
  discount: Number,
  discountedPrice: Number,
  date: Date,
  rating: Number,
});

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
