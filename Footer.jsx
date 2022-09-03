import React from "react";
import Header from "./Header";

const curryear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {curryear}</p>
    </footer>
  );
}

export default Footer;
