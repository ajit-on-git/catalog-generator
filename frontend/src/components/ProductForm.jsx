import { useState } from "react";
import axios from "axios";
import "./ProductForm.css";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ setResult }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/products/generate",
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
        <h2>AI Product Catalog Generator</h2>

        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Product Description</label>
          <textarea
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Generating AI Catalog..." : "Generate AI Catalog"}
        </button>
      </form>
    </div>
  );
}
