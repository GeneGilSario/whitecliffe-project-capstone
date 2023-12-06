import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container header-container-page">
        <header className={`header main-layout section-padding container-item`}>
          <h1 className="logo">Køldapia</h1>
        </header>
        <nav>
          <ul className="rightLinks container-item">
            <li className="rightLinkItems space-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="rightLinkItems space-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Products
              </NavLink>
            </li>
            <li className="rightLinkItems space-item">
              <NavLink
                to="/plant-care"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Plant Care
              </NavLink>
            </li>
            <li className="rightLinkItems space-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
