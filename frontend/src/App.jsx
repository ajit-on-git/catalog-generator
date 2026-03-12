import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductForm from "./components/ProductForm";
import ProductResult from "./pages/ProductResult";
import Header from "./components/Header";
import "./App.css"; // Don't forget to import the CSS!

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app-layout">
      {/* Decorative background blobs for that AI/SaaS feel */}
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>

      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductForm setResult={setResult} />} />
          <Route path="/result" element={<ProductResult result={result} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
