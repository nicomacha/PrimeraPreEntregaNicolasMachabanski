import logo from "../assets/images/logo-rob.png";
import CartWidget from "./CartWidget";
const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <div className="col"></div>
        <div className="col-md text-center">
          <a href="">
            <img src={logo} alt="Logo ROBOTIC" width={120} />
          </a>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                ROBOTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                SALE!
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                NOSOTROS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
