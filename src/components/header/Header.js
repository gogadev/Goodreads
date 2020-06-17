import React from "react";

import img from "../../assets/img.jpg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">Goodreads</h1>
      <img className="img" src={img} alt="" />
    </header>
  );
};

export default Header;
