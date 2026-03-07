import "./ProductResult.css";

export default function ProductResult({ result }) {
  if (!result) return null;

  return (
    <div className="result-container">
      <h2>AI Generated Catalog</h2>

      <div className="result-card">
        <div className="result-section">
          <h3>Product Name</h3>
          <p>{result.name}</p>
        </div>

        <div className="result-section">
          <h3>Description</h3>
          <p>{result.description}</p>
        </div>

        <div className="result-section">
          <h3>Primary Category</h3>
          <span className="tag primary">{result.primaryCategory}</span>
          <h3>Primary Sub-Category</h3>
          <span className="tag primary">{result.primarySubCategory}</span>
        </div>

        <div className="result-section">
          <h3>Categories</h3>
          <div className="tags">
            {result.relatedSubCategories?.map((cat, i) => (
              <span key={i} className="tag">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3>SEO Tags</h3>
          <div className="tags">
            {result.seoTags?.map((tag, i) => (
              <span key={i} className="tag seo">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3>Sustainability Filters</h3>
          <div className="tags">
            {result.sustainabilityFilters?.map((item, i) => (
              <span key={i} className="tag eco">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3>Raw JSON Output</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
