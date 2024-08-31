import mongoose from "mongoose";

const tagSchema = new Schema({ 
    type: String, 
    lowercase: true,
    trim:true
});

const artpieceSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    index: true, //
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    // min: to be figured out
  },
  productImages: [
    {type: String, //cloudinary url
    required: true,}]
  ,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: {
    tag:[tagSchema]
  },
  //theme
  //category

},{timestamps:true});

export const Artpiece=mongoose.model("Artpiece",artpieceSchema);
