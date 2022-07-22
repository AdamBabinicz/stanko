import React, { useState } from "react";
import { GiAbstract006, GiOutbackHat } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";
import img from "../../assets/5.svg";

const data = [
  {
    label: "START",
    to: "/",
  },
  {
    label: "ŻYCIORYS",
    to: "/zyciorys",
  },
  {
    label: "ALBUMY",
    to: "/albumy",
  },
  {
    label: "KARIERA",
    to: "/kariera",
  },
  {
    label: "FOTOTEKA",
    to: "/fototeka",
  },
  {
    label: "KONTAKT",
    to: "/kontakt",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            {/* <GiOutbackHat size={30} /> */}
            <img src={img} alt="..." />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}
          onClick={handleToggleIcon}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
