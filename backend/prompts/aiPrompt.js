export const buildPrompt = (name, description) => {
  return `

You are an AI product catalog classification system used in an e-commerce platform.

Analyze the product and generate structured catalog metadata.

Product Information:

Name: ${name}
Description: ${description}

Validation Rules:

If the product name or description is missing, meaningless, spam-like,
or does not describe a real product, return:

{
"valid": false
}

Otherwise continue classification.

Primary category MUST be selected ONLY from this list:

Electronics
Fashion
Home & Kitchen
Beauty & Personal Care
Sports & Fitness
Automotive
Toys & Games
Office Supplies
Health
Grocery

Tasks:

1. Select the most relevant primaryCategory using semantic understanding.

2. Generate ONE specific primarySubCategory.

3. Generate 2–4 relatedSubCategories closely related to the product.

4. Generate 5–10 SEO tags useful for e-commerce search.

5. Determine sustainabilityFilters based on product material, energy usage, durability, or packaging.

Possible sustainability filters:

plastic-free
biodegradable
compostable
recycled
recyclable
reusable
organic
vegan
low-carbon
energy-efficient
solar-powered
rechargeable
minimal-packaging
natural-material

Rules:

• Only include sustainability filters if applicable.
• Do NOT invent filters outside the list.
• If none apply return an empty array [].

Return STRICT JSON only in the following format:

{
"valid": true,
"primaryCategory": "",
"primarySubCategory": "",
"relatedSubCategories": [],
"seoTags": [],
"sustainabilityFilters": []
}

Do NOT include explanations or text outside the JSON.

`;
};
