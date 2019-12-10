import React from "react";
import { NavLink } from "react-router-dom";
import {
    Link
  } from "react-router-dom"


  
function Header() {
  return (
    <div>
      <ul>
          <li><Link to ="./Pages/Admin">Admin</Link></li>
          <li><Link to ="./Pages/Dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}
export default Header;