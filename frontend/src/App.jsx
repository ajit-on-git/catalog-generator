import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductForm from "./components/ProductForm";
import ProductResult from "./pages/ProductResult";
import Header from "./components/Header";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ProductForm setResult={setResult} />} />

        <Route path="/result" element={<ProductResult result={result} />} />
      </Routes>
    </>
  );
}

export default App;
