import React from "react";
import { useNavigate } from "react-router-dom";
import Plant1 from "./Plant1.jpg";
import Plant2 from "./Plant2.jpg";
import Plant3 from "./Plant6.jpg";
import Plant4 from "./Plant4.jpg";
import Plant5 from "./Plant5.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/products");
  };

  return (
    <div className="homepage-container homepage-container-page">
      <h1 className="homepage-header">
        <span className="homepage-textcolour-contrast">
          Discover a world of
        </span>{" "}
        <span className="homepage-textcolour">green</span>{" "}
        <span className="homepage-textcolour-contrast">living</span>
      </h1>
      <img src={Plant1} alt="Plant1" className="homepage-image" />
      <img src={Plant2} alt="Plant2" className="homepage-image-2" />
      <img src={Plant3} alt="Plant3" className="homepage-image-3" />
      <img src={Plant4} alt="Plant4" className="homepage-image-4" />
      <img src={Plant5} alt="Plant5" className="homepage-image-5" />
      <h2 className="homepage-text">
        We believe that green living starts from within. Step into a world of
        vibrant foliage and unlock the secrets of creating your own lush indoor
        garden.
      </h2>

      <button onClick={handleDiscoverClick} className="homepage-button">
        Discover our plants
      </button>
    </div>
  );
};

export default Homepage;
