import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ProductPage from "./components/Product/ProductPage";
import PlanctCare from "./components/Plant-Care/PlantCare";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="page-container">
      <div id="content-wrap">
        <Header className="page-header" />
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage />}
            className="page-content"
          />
          <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/plant-care" element={<PlanctCare />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <div id="footer">
        <Footer className="page-footer" />
      </div>
    </div>
  );
}

export default App;
