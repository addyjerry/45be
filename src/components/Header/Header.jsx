import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
const Header = () => {
  const [socials, setSocials] = useState(false);
  const showSocials = () => {
    setSocials(!socials);
  };
  const [icon, setIcon] = useState(false);

  const showIcon = () => {
    setIcon(!icon);
  };
  return (
    <div id="Header">
      <MdMenu id="menu__i" onClick={showIcon} />
      {icon ? (
        <div id="icon__menu">
          <MdMenu id="menu__i" onClick={showIcon} />
          <ul>
            <Link to="/">
              <li onClick={showIcon}>Home</li>
              <div id="mdline"></div>
            </Link>
            <Link to="/Gallery">
              <li onClick={showIcon}>Gallery</li>
              <div id="mdline"></div>
            </Link>
            <li onClick={showIcon}>
              <FaWhatsapp />
              0552869466
            </li>
            <div id="mdline"></div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
              <li onClick={showIcon}>Hire Me</li>
            </a>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <div id="logo__area">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
        <div id="socials">
          <ul>
            <div id="line1"></div>
            <li>
              <a href="https://x.com/JayCodes27?t=k513f8YOjzAOnOifSdw3mA&s=09">
                <BsTwitterX id="t" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCQTMMDXCT1-w3UGNjLRr9VQ">
                {" "}
                <BsYoutube id="y" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jerry-addy-193437249/">
                <BsLinkedin id="l" />
              </a>
            </li>
            <li>
              <a href="https://github.com/addyjerry">
                {" "}
                <BsGithub id="g" />
              </a>
            </li>
            <div id="line2"></div>
          </ul>
        </div>
      </div>
      <div id="line"></div>
      <div id="nav__bar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/Gallery">
            <li>Gallery</li>
          </Link>
          <li onClick={showSocials}>
            Socials
            {socials ? (
              <div id="show__socials">
                <li>
                  <FaWhatsapp />
                  0552869466
                </li>
              </div>
            ) : (
              <></>
            )}
          </li>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
            <li>Hire Me</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
