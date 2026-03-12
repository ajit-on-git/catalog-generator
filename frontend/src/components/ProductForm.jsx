import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductForm.css";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ setResult }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Load saved form data when component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("productName");
    const savedDescription = localStorage.getItem("productDescription");

    if (savedName) setName(savedName);
    if (savedDescription) setDescription(savedDescription);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Save form data to localStorage
      localStorage.setItem("productName", name);
      localStorage.setItem("productDescription", description);

      const res = await axios.post(
        "hhttps://ai-catalog-generator-backend.onrender.com/api/products/generate",
        { name, description },
      );

      setResult(res.data);

      navigate("/result");
    } catch (error) {
      console.error("Error generating product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>✨ AI Product Catalog Generator</h2>
          <p>
            Describe your product, and our AI will generate a professional
            catalog entry instantly.
          </p>
        </div>

        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="e.g., Smart Home Coffee Maker"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              localStorage.setItem("productName", e.target.value);
            }}
            required
          />
        </div>

        <div className="input-group">
          <label>Product Description</label>
          <textarea
            placeholder="Enter key features, target audience, and benefits..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              localStorage.setItem("productDescription", e.target.value);
            }}
            rows="5"
            required
          />
        </div>

        <button className="generate-btn" type="submit" disabled={loading}>
          {loading ? (
            <span className="loading-state">
              <span className="spinner"></span> Generating AI Catalog...
            </span>
          ) : (
            "🚀 Generate AI Catalog"
          )}
        </button>
      </form>
    </div>
  );
}
