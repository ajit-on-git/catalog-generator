import { Link, NavLink } from "react-router-dom";
import "./ProductResult.css";

export default function ProductResult({ result }) {
  // Beautiful Empty State if there's no data
  if (!result) {
    return (
      <div className="empty-state-wrapper">
        <div className="empty-state-card">
          <span className="empty-state-icon">📄</span>
          <h3>No Catalog Data Found</h3>
          <p>
            Please return to the generator form to create your AI-powered
            product catalog.
          </p>
          <NavLink to="/" className="back-link-btn">
            Go to Generator
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="result-container">
      <div className="result-header">
        <h2>✨ AI Generated Catalog</h2>
        <p>Your production-ready product data is compiled below.</p>
      </div>

      <div className="result-card">
        {/* Core Info */}
        <div className="result-grid-top">
          <div className="result-section">
            <h3 className="section-title">Product Name</h3>
            <p className="main-text">{result.name}</p>
          </div>
          <div className="result-section">
            <h3 className="section-title">Description</h3>
            <p className="body-text">{result.description}</p>
          </div>
        </div>

        <hr className="divider" />

        {/* Categories Layout */}
        <div className="result-section">
          <h3 className="section-title">🏷️ Classification</h3>
          <div className="classification-grid">
            <div className="class-group">
              <h4>Primary Category</h4>
              <span className="tag primary">
                {result.primaryCategory || "N/A"}
              </span>
            </div>
            <div className="class-group">
              <h4>Primary Sub-Category</h4>
              <span className="tag primary">
                {result.primarySubCategory || "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Related Categories */}
        <div className="result-section">
          <h3 className="section-title">📂 Related Categories</h3>
          <div className="tags-container">
            {result.relatedSubCategories?.length > 0 ? (
              result.relatedSubCategories.map((cat, i) => (
                <span key={i} className="tag standard">
                  {cat}
                </span>
              ))
            ) : (
              <span className="no-data">None specified</span>
            )}
          </div>
        </div>

        <hr className="divider" />

        {/* SEO Tags */}
        <div className="result-section">
          <h3 className="section-title">🔍 SEO Keywords</h3>
          <div className="tags-container">
            {result.seoTags?.length > 0 ? (
              result.seoTags.map((tag, i) => (
                <span key={i} className="tag seo">
                  #{tag}
                </span>
              ))
            ) : (
              <span className="no-data">No SEO tags generated</span>
            )}
          </div>
        </div>

        {/* Sustainability Filters */}
        <div className="result-section">
          <h3 className="section-title">🌱 Sustainability Filters</h3>
          <div className="tags-container">
            {result.sustainabilityFilters?.length > 0 ? (
              result.sustainabilityFilters.map((item, i) => (
                <span key={i} className="tag eco">
                  {item}
                </span>
              ))
            ) : (
              <span className="no-data">Not applicable</span>
            )}
          </div>
        </div>

        <hr className="divider" />

        {/* Raw JSON Output */}
        <div className="result-section">
          <h3 className="section-title">💻 Raw JSON Payload</h3>
          <div className="code-block-wrapper">
            <pre className="raw-json">{JSON.stringify(result, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
