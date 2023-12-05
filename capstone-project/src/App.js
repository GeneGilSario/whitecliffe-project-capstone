import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ProductPage from "./components/Product/ProductPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="background-image-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </div>
      <Routes>
        <Route exact path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
