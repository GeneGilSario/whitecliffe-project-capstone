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
            <li className="rightLinkItems space-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="rightLinkItems space-item">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="rightLinkItems space-item">Plant Care</li>
            <li className="rightLinkItems space-item">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
