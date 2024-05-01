import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-rob.png";
import CartWidget from "./CartWidget";
const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <div className="col"></div>
        <div className="col-md text-center">
          <Link to={"/"}>
            <img src={logo} alt="Logo ROBOTIC" width={120} />
          </Link>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={"/"}>
                INICIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={"/categoria/ROBOT"}>
                ROBOTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={"/categoria/SALE"}>
                SALE!
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to={"/category/NOSOTROS"}
              >
                NOSOTROS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                to={"/category/CONTACTO"}
              >
                CONTACTO
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
