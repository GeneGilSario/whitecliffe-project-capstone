import "./PlantCare.css";
import Plant1 from "./PlantCare1.jpg";
import Plant2 from "./PlantCare2.jpg";
import Plant12 from "./Plant1.jpg";
import Plant22 from "./Plant2.jpg";
import Plant32 from "./Plant6.jpg";

const Header = () => {
  return (
    <main>
      <h1 className="plantcare-header">
        <span className="plantcare-textcolour-contrast">Rooted in</span>{" "}
        <span className="plantcare-textcolour">Greenery:</span>{" "}
        <span className="plantcare-textcolour-contrast">
          A Journey into Plant Wellness
        </span>
      </h1>
      <div className="plantcare-grid-section">
        <section className="plantcare-card">
          <div className="plantcare-margin">
            <img src={Plant1} alt="Plant-Care-1" className="plantcare-image" />
            <div className="plantcare-grid">
              <h1 className="plantcare-header-1">
                Resurrecting Fading Fauna: Unveiling the Art of Plant
                Restoration
              </h1>
              <p className="plantcare-text-1">
                Unlocking Proven Steps to Revitalize Your Green Companions.
                Armed with Knowledge and Tender Loving Care, You Can Revive the
                Weakest of Wonders.
              </p>
              <button className="product-button button-left">Read More</button>
            </div>
          </div>
        </section>
        <section className="plantcare-card">
          <div className="plantcare-margin">
            <img src={Plant2} alt="Plant-Care-1" className="plantcare-image" />
            <div className="plantcare-grid">
              <h1 className="plantcare-header-1">
                Green Oasis: Perfect Plants for Your Cozy Apartment
              </h1>
              <p className="plantcare-text-1">
                Explore a curated collection of plants perfect for cozy
                apartments. Whether you're dealing with limited sunlight or
                tight spaces, these green companions bring nature to your
                doorstep.
              </p>
              <button className="product-button button-left">Read More</button>
            </div>
          </div>
        </section>
      </div>
      <img src={Plant12} alt="Plant1" className="homepage-image" />
      <img src={Plant22} alt="Plant2" className="homepage-image-2" />
      <img src={Plant32} alt="Plant3" className="homepage-image-3" />
    </main>
  );
};

export default Header;
