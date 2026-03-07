import Product from "../models/Product.js";
import { buildPrompt } from "../prompts/aiPrompt.js";
import { generateAIData } from "../services/geminiService.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description } = req.body;

    const prompt = buildPrompt(name, description);

    const aiData = await generateAIData(prompt);

    const product = new Product({
      name,
      description,

      primaryCategory: aiData.primaryCategory,

      primarySubCategory: aiData.primarySubCategory,

      relatedSubCategories: aiData.relatedSubCategories,

      seoTags: aiData.seoTags,

      sustainabilityFilters: aiData.sustainabilityFilters,
    });

    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
