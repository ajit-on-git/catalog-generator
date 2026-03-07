import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,

  description: String,

  primaryCategory: String,

  primarySubCategory: String,

  relatedSubCategories: [String],

  seoTags: [String],

  sustainabilityFilters: [String],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
