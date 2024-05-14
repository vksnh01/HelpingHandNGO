import React from "react";
import "./Header.css";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../../IMG/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import data from "./HeaderData";

function Header() {
  const [navbarHandler, setNavbarHandler] = React.useState(false);
  const [checkCls, setCheckCls] = React.useState("");
  const [resNav, setResNav] = React.useState(false);
  const [navData, setNavData] = React.useState([]);

  React.useEffect(() => {
    setNavData(data);
  });
  const ActiveClassHandler = () => {
    setCheckCls(true);
  };
  return (
    <>
      <div className="nav-main-div">
        <div className="logo-div">
          <h2>Helping </h2>
          <img src={logo} alt="" />
          <h2> Hand</h2>
        </div>
        <ul className={!resNav ? "close" : "open"}>
          {navData.map((elem, ind) => {
            const { id, name, path } = elem;
            return (
              <>
                <li key={ind}>
                  {elem.dropDown == null ? (
                    <NavLink
                      className={`nav-a ${checkCls}`}
                      onClick={() => {
                        ActiveClassHandler, setResNav(!resNav);
                      }}
                      to={path}
                    >
                      {name}
                    </NavLink>
                  ) : (
                    ""
                  )}
                </li>
              </>
            );
          })}
        </ul>
        <div
          className="res-div"
          onClick={() => {
            setResNav(!resNav);
          }}
        >
          {navbarHandler ? (
            <IoClose className="nav-icon close" />
          ) : (
            <GiHamburgerMenu className="nav-icon" />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
