import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className={`header main-layout section-padding container-item`}>
          <h1 className="logo">Køldapia</h1>
        </header>
        <nav>
          <ul className="rightLinks container-item">
            <li className="rightLinkItems space-item">Home</li>
            <li className="rightLinkItems space-item">Products</li>
            <li className="rightLinkItems space-item">Plant Care</li>
            <li className="rightLinkItems space-item">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
